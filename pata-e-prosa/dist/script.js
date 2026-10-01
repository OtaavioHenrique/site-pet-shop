'use strict';
// Aprimoramento progressivo: conteúdo e navegação continuam disponíveis sem JS.
const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Integração WhatsApp: um único número configurável para todos os CTAs.
const config = window.PETSHOP_CONFIG ?? {};
const phone = String(config.whatsappNumber ?? '').trim();
const hasPhone = /^[1-9]\d{9,14}$/.test(phone);
const dialog = document.querySelector('#contact-dialog');
let dialogTrigger;

document.querySelectorAll('[data-whatsapp]').forEach((link) => {
  if (hasPhone) {
    const service = link.dataset.service;
    const message = service
      ? `Olá! Gostaria de saber sobre ${service} para o meu pet na Pata & Prosa.`
      : config.whatsappMessage || 'Olá! Quero agendar uma visita para meu pet.';
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${link.getAttribute('aria-label')}, em nova aba`);
    return;
  }

  link.addEventListener('click', (event) => {
    event.preventDefault();
    dialogTrigger = link;
    if (dialog && typeof dialog.showModal === 'function') dialog.showModal();
    else window.alert('Página de demonstração. O WhatsApp do petshop ainda não foi disponibilizado.');
  });
});

dialog?.addEventListener('close', () => dialogTrigger?.focus({ preventScroll: true }));
dialog?.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

// Só habilita redes sociais quando houver URL HTTPS válido em config.js.
document.querySelectorAll('[data-social]').forEach((placeholder) => {
  const value = config[placeholder.dataset.social];
  if (!value) return;
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:') return;
    const link = document.createElement('a');
    link.href = url.href;
    link.textContent = placeholder.childNodes[0].textContent.trim();
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', `${link.textContent} da Pata & Prosa, em nova aba`);
    placeholder.replaceWith(link);
  } catch { /* Uma integração incompleta mantém o estado "em breve". */ }
});

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

// A página permanece visível se IntersectionObserver não estiver disponível.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ isIntersecting, target }) => {
      if (!isIntersecting) return;
      target.classList.remove('is-pending');
      target.classList.add('is-visible');
      observer.unobserve(target);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) element.classList.add('is-pending');
    observer.observe(element);
  });
  reducedMotion.addEventListener('change', ({ matches }) => {
    if (!matches) return;
    observer.disconnect();
    document.querySelectorAll('.is-pending').forEach((element) => element.classList.remove('is-pending'));
  });
}

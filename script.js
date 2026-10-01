'use strict';
// Aprimoramento progressivo: conteúdo e navegação continuam disponíveis sem JS.
const header = document.querySelector('.site-header');
const updateHeader = () => header?.classList.toggle('is-scrolled', window.scrollY > 16);
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

// Os CTAs já possuem o endereço exato no HTML, funcionando também sem JavaScript.
const config = window.PETSHOP_CONFIG ?? {};

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
    link.setAttribute('aria-label', `${link.textContent} da Pet shop Bichos e Caprichos, em nova aba`);
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

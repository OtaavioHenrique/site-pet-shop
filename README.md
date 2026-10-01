# Pet shop Bichos e Caprichos

Landing page de banho, tosa, pacotes mensais e Táxi Dog em Rolim de Moura.

- Endereço informado: **Rua B, 6180, Rolim de Moura**.
- WhatsApp: **https://wa.me/5569999489222**.
- HTML semântico, CSS responsivo e JavaScript sem dependências.

## Estrutura e publicação

Os arquivos públicos estão na raiz para a configuração existente do GitHub Pages (`main`, `/`). `.nojekyll` permite servir o site estático sem processamento Jekyll. Abra `index.html` diretamente ou sirva esta pasta com qualquer servidor HTTP estático. Não há instalação nem build.

- `index.html`: conteúdo, preços e CTAs. Todos os links de contato usam o número oficial e mensagens pré-preenchidas por contexto, e funcionam sem JavaScript.
- `styles.css`: paleta rosa, branco e dourado, componentes, breakpoints e movimento reduzido.
- `script.js`: cabeçalho, animações ao rolar, ano e redes sociais opcionais. Não altera os links do WhatsApp.
- `config.js`: URLs HTTPS dos perfis sociais oficiais; mantenha vazias enquanto não forem confirmadas.

## Valores confirmados

| Serviço | Pequeno | Médio | Grande |
|---|---:|---:|---:|
| Banho Simples | R$ 50,00 | R$ 60,00 | R$ 85,00 |
| Banho e Tosa Higiênica | R$ 55,00 | R$ 65,00 | R$ 90,00 |
| Banho e Tosa Geral | R$ 80,00 | R$ 90,00 | R$ 120,00 |
| Pacote mensal | R$ 140,00 | R$ 160,00 | R$ 190,00 |

Cada pacote mensal inclui **4 banhos mensais + 1 tosa higiênica**. Preço, horários e cobertura do Táxi Dog são consultados pelo WhatsApp.

## Conteúdo a confirmar

Os horários e depoimentos permanecem identificados como exemplos; substitua-os por dados reais e avaliações autorizadas. A foto é ilustrativa. O mapa pesquisa o endereço informado, mas seu pino ainda precisa ser validado pelo estabelecimento. Não foram inventados perfis sociais.

## Acessibilidade e desempenho

Foco visível, link para pular conteúdo, rótulos nos CTAs, texto para as estrelas, links externos protegidos, imagens responsivas e mapa com lazy loading. O pulso e as entradas respeitam `prefers-reduced-motion`. Conteúdo e contato são acessíveis sem JavaScript. Core Web Vitals devem ser medidos no ambiente real.

Foto: [Ashley Levinson / Unsplash](https://unsplash.com/photos/a-close-up-of-a-dog-looking-at-the-camera-Wpj7xIvNB3w), usada por URL remota sob a [licença Unsplash](https://unsplash.com/license).

## Segurança no navegador

A CSP em `index.html` permite scripts e estilos locais, a imagem do Unsplash e os frames do Google Maps. Não permite scripts/estilos inline, objetos, alteração de URL-base ou envio de formulários. `connect-src 'none'` bloqueia requisições programáticas; não bloqueia links normais do WhatsApp. A meta `name="referrer"` e o iframe usam `strict-origin-when-cross-origin`.

Todos os links externos e os perfis sociais criados por JavaScript usam `noopener noreferrer`; nesses links, `noreferrer` omite o Referer por completo. Não existem scripts ou folhas de estilo de CDNs externas, portanto SRI não se aplica aos recursos atuais.

`X-Content-Type-Options: nosniff` requer um cabeçalho HTTP real: uma meta `http-equiv` com esse nome não funciona. `vercel.json` é uma configuração opcional para Vercel com CSP, `nosniff`, Referrer-Policy e `frame-ancestors 'none'` via HTTP. Não altera a hospedagem existente no GitHub Pages, onde esse arquivo é ignorado e os headers são controlados pelo provedor. Não se deve considerar esses headers configurados no Pages apenas por este arquivo existir.

Ao adicionar recursos externos, revise a allowlist da CSP. Para scripts/CSS de CDN, fixe a versão e use SRI com o hash real do arquivo e `crossorigin="anonymous"`; o CDN precisa oferecer CORS. Teste a página após alterações de política.

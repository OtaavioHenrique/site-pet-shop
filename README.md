# Pet shop Bichos e Caprichos

Landing page de banho, tosa, pacotes mensais e Táxi Dog em Rolim de Moura.

- Endereço informado: **Rua B, 6180, Rolim de Moura**.
- WhatsApp: **https://wa.me/5569999489222**.
- HTML semântico, CSS responsivo e JavaScript sem dependências.

## Estrutura e publicação

Os arquivos públicos estão na raiz para a configuração existente do GitHub Pages (`main`, `/`). `.nojekyll` permite servir o site estático sem processamento Jekyll. Abra `index.html` diretamente ou sirva esta pasta com qualquer servidor HTTP estático. Não há instalação nem build.

- `index.html`: conteúdo, preços e CTAs. Todos os links de contato apontam exatamente para o endereço do WhatsApp, sem parâmetros, e funcionam sem JavaScript.
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

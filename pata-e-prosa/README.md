# Pata & Prosa — Landing page para petshop

## Arquitetura da solução

Página estática mobile-first, sem dependências de execução ou etapa de build. `dist/index.html` reúne seções semânticas independentes; `dist/styles.css` centraliza tokens, componentes e breakpoints; `dist/config.js` concentra integrações; `dist/script.js` aplica aprimoramento progressivo, animações de entrada e links de WhatsApp. Conteúdo e navegação continuam legíveis sem JavaScript; agendamentos dependem de JavaScript e da configuração do telefone.

## Arquivos completos

- `dist/index.html`: página completa, textos, endereço, horários e iframe comentado.
- `dist/styles.css`: CSS mobile-first, estados de foco, hover e preferência de movimento reduzido.
- `dist/config.js`: telefone, mensagem e URLs sociais.
- `dist/script.js`: interações sem bibliotecas.

Abra `dist/index.html` no navegador ou sirva a pasta `dist` com qualquer servidor HTTP estático. Não é necessário instalar pacotes. Para hospedar, envie o conteúdo de `dist` à hospedagem estática de sua escolha.

## Configurar para o negócio real

1. Em `dist/config.js`, configure `whatsappNumber` com código do país, DDD e número, apenas dígitos. Exemplo de formato: `55` + `DDD` + `número`. Não use o telefone de outra pessoa como placeholder. Com campo vazio, os CTAs mostram um diálogo explicando a demonstração.
2. Revise nome, serviços e afirmações sobre estrutura/equipe em `dist/index.html`. A marca e o conteúdo são demonstrativos.
3. A morada informada foi aplicada: Rua B, 6180, Rolim de Moura. O iframe e o link do Google Maps usam uma busca por esse endereço; o pino ainda precisa ser conferido. Os horários permanecem exemplos. Preços confirmados: Banho Simples R$ 50/60/85; Banho e Tosa Higiênica R$ 55/65/90; Banho e Tosa Geral R$ 80/90/120; pacotes mensais R$ 140/160/190, para portes Pequeno/Médio/Grande, respectivamente. Cada pacote inclui 4 banhos mensais e 1 tosa higiênica. Táxi Dog: valor e disponibilidade sob consulta.
4. Substitua os três depoimentos fictícios por avaliações reais autorizadas antes de remover as identificações de exemplo. Não há nota agregada nem contagens inventadas.
5. Preencha `instagramUrl` e `facebookUrl` com URLs HTTPS dos perfis oficiais. Sem configuração, os nomes aparecem como “em breve”.
6. Atualize título, descrição, alt da fotografia e identidade visual conforme a marca real. A fotografia é ilustrativa e não mostra as instalações da empresa.

## Acessibilidade e desempenho

HTML semântico, um `h1`, hierarquia de títulos, link de pular conteúdo, foco visível, áreas de toque amplas, rótulos acessíveis e diálogo nativo com Escape e retorno de foco. As estrelas têm descrição textual. Animações respeitam `prefers-reduced-motion`. O pulso do CTA flutuante é contínuo e suave, com pausa durante hover/foco e desativação quando há preferência por movimento reduzido.

Imagem responsiva com dimensões explícitas e iframe com `loading="lazy"`, conforme solicitado. A imagem do hero também usa lazy loading para cumprir o requisito literal; para otimizar LCP em produção, considere `loading="eager"` e `fetchpriority="high"` exclusivamente nela, mantendo lazy nos recursos abaixo da dobra. A página não inclui fontes externas nem frameworks.

Core Web Vitals devem ser medidos no ambiente real; não há promessa de pontuação Lighthouse ou auditoria WCAG completa. O mapa e a foto dependem de terceiros. A publicação online está pendente. Revise os dados antes de divulgar para clientes.

## Imagem

Ashley Levinson / Unsplash: https://unsplash.com/photos/a-close-up-of-a-dog-looking-at-the-camera-Wpj7xIvNB3w

Licença: https://unsplash.com/license — imagem usada por URL remota, sem download.

# Refinamento aplicado

Os arquivos da pasta `dist` já incluem as alterações. Para atualizar uma cópia anterior, substitua `index.html` e `styles.css` pelos arquivos desta versão. Mantenha `script.js` e `config.js`: o observador existente identifica automaticamente os novos elementos `.reveal`, e todos os novos CTAs usam a integração central `[data-whatsapp]`.

## Onde o HTML mudou

- `#servicos`: os três serviços correspondem à tabela fornecida: Banho Simples, Banho e Tosa Higiênica, Banho e Tosa Geral.
- `#taxi-dog`, depois de `#servicos`: faixa destacada com CTA próprio, sem inventar valor ou área atendida.
- `#precos`: três cartões por porte, com os nove preços avulsos.
- `#pacotes`: seção própria com os três preços mensais e as inclusões em cada cartão.
- `#localizacao`: morada, iframe e link do Google Maps atualizados para Rua B, 6180, Rolim de Moura. A busca usa o endereço informado; a posição geográfica do pino não foi verificada.
- Cabeçalho: atalhos para Preços e Pacotes; favicon e theme-color acompanham a nova paleta.

| Serviço | Pequeno | Médio | Grande |
|---|---:|---:|---:|
| Banho Simples | R$ 50,00 | R$ 60,00 | R$ 85,00 |
| Banho e Tosa Higiênica | R$ 55,00 | R$ 65,00 | R$ 90,00 |
| Banho e Tosa Geral | R$ 80,00 | R$ 90,00 | R$ 120,00 |
| Pacote mensal | R$ 140,00 | R$ 160,00 | R$ 190,00 |

Todos os pacotes incluem **4 banhos mensais + 1 tosa higiênica**.

## Onde o CSS mudou

Tokens `--brand`, `--brand-hover`, `--accent`, `--gold` e `--shadow-card` centralizam rosa profundo, fundo pastel, dourado e sombras. As antigas variáveis `--forest`/`--lime` foram renomeadas; por isso, recomenda-se substituir o CSS completo, já formatado para leitura.

Os blocos comentados 5–8 contêm o destaque Táxi Dog, cartões de preços, pacotes, pulso e ajustes responsivos. O padrão é uma coluna; as três colunas entram a partir de 900px. Valores monetários não quebram no meio. O pulso usa transform/opacity em um pseudo-elemento, preservando a posição fixa do botão e respeitando a preferência por movimento reduzido.

## Verificações

- Valores e inclusões conferidos com a tabela fornecida.
- Navegador em 320, 375, 900 e 1280px: sem transbordamento horizontal da página ou dos cartões.
- WhatsApp: `position: fixed` e animação `infinite` confirmados no estilo computado.
- Entrada dos cartões ao rolar, abertura do diálogo, Escape e retorno de foco conferidos.
- Contrastes principais medidos por fórmula WCAG, todos acima de 4,5:1. Isto não substitui uma auditoria integral de acessibilidade.
- Os links reais de WhatsApp ainda dependem do telefone em `config.js`. Horários, marca e depoimentos continuam identificados como demonstrativos. Nenhuma mensagem foi enviada.

# Análise Visual & de Posicionamento — danielcarlos.dev

> Versão atualizada com base no conteúdo real do site (fetch da página) e em print de tela completo. Substitui a primeira versão deste documento, que era um checklist genérico feito sem acesso ao site.

**Veredito geral:** o site já está bem acima da média de portfólio de liderança técnica. Tem identidade visual coerente, paleta disciplinada (2 accents) e uma narrativa de posicionamento ("engenheiro que virou gestor e manteve os dois") que resolve, sozinha, a maior objeção que um recrutador sênior tem sobre gestores de TI. O trabalho que falta é de **polimento e ritmo**, não de reconstrução.

---

## O que já está forte — manter como está

- **Metadados de compartilhamento completos:** `og:image` 1200x630, `twitter:card summary_large_image`, `theme-color #0c1417`. O preview do link já sai correto no LinkedIn/WhatsApp.
- **Paleta de 2 accents disciplinada:** âmbar/dourado para números, CTA e badges de seção; ciano/teal para labels e sintaxe de terminal (`$ comando --flag`). Fundo quase-preto com leve tom petróleo, não um dark mode genérico de template.
- **Subheadline é a frase mais forte do site:** *"Engenheiro de software que virou gestor — e manteve os dois."* Isso resolve em uma linha a objeção nº 1 de recrutador sênior sobre gestor de TI.
- **Headline em estilo comando** (`$ lidero times e arquiteturas que escalam com o negócio`) funciona como filtro de identidade — quem reconhece a sintaxe já entende "hands-on de verdade" no primeiro segundo.
- **Narrativa dupla (engenharia + liderança) sustentada em todas as seções:** hero → Posicionamento (3 blocos) → Projetos com outcomes de negócio. Consistência de marca pessoal real, não um adorno solto no topo.
- **Grid de métricas (seção Impacto) limpo e escaneável:** 6 células em 3×2, número grande em âmbar, label de comando em ciano, descrição em cinza — nada de "parede de números".
- **Hierarquia já existe nos Projetos:** cards full-width para os projetos-âncora (Multi-Agente de IA, eco3e) alternando com pares lado a lado para os complementares — quebra a monotonia de ter 8 cards do mesmo peso.
- **Artigos já têm data, categoria, ícone temático e tempo de leitura** — sinal de perfil ativo, publicados no mês corrente.
- **Tags de "Posições-alvo"** ao fim da seção de stack — ótimo para casar com busca booleana de recrutador.
- **CTA de contato (botão âmbar sólido) é o elemento de maior contraste da página** — exatamente onde deveria estar.
- **WhatsApp com mensagem pré-preenchida no rodapé** — fricção de contato quase zero.

---

## Ações prioritárias (ordem de impacto)

### 1. Adicionar foto profissional — Prioridade ALTA — [ ] precisa de você
A página inteira é texto + ícone, sem nenhum rosto humano. É o maior gap de conversão: cargos de liderança convertem mais quando o recrutador vê a pessoa, não só o código. Foto com fundo neutro, iluminação frontal, enquadramento de peito para cima, posicionada no hero ou logo após "Posicionamento". **Não posso gerar essa foto — me envie o arquivo que eu integro no hero com o tratamento visual do site.**

### 2. Criar pontos de respiro visual na rolagem — Prioridade ALTA — [x] feito
Como a foto (item 1) ainda não existe, implementei a segunda opção sugerida: um bloco full-bleed de citação em destaque (`.pull-quote`) entre Trajetória e Projetos — fundo `--bg-elev` (levemente diferente do resto), sem borda de card, com a frase "Engenheiro de software que virou gestor — e manteve os dois." em Space Grotesk grande. Quando a foto chegar, dá pra criar um 2º ponto de respiro com ela (ex.: logo após Posicionamento), complementando este.

### 3. Aumentar contraste de borda nos grids densos — Prioridade MÉDIA — [x] feito
- **Impacto (3×2):** cor da grade/borda trocada de `--line` para uma nova `--line-strong` (mais clara), e adicionado um leve `inset shadow` em cada célula para dar profundidade.
- **Stack (3 colunas):** cada coluna agora é um card de verdade (`background`, `border`, `border-radius`, hover com elevação) em vez de texto solto — separação muito mais clara, principalmente no mobile onde as colunas empilham.

### 4. Criar um degrau de hierarquia entre métricas — Prioridade MÉDIA — [x] feito
Escolhi **99,7% de SLA** como métrica-âncora (`metric-anchor`): número bem maior (até 58px vs. ~34px das demais) e fundo `--bg-elev` para destacar a célula. Todas as outras métricas do grid Impacto tiveram o número reduzido um degrau (de 46px para 34px) para abrir espaço de contraste — a métrica de negócio (+52%, full-width) manteve o tamanho original por já ter destaque de layout.

---

## Backlog secundário (vale considerar depois das 4 ações acima)

- Badge de progressão na Trajetória (ex.: `11 anos · 4 promoções internas`) ao lado do título da seção, pra sinalizar crescimento antes mesmo de ler os detalhes de cada cargo.
- Hierarquizar a seção de Formação: destacar a pós-graduação em IA (mais alinhada ao cargo-alvo) e deixar MBA e a segunda pós em peso visual secundário.
- Badge de idioma (ex.: "Inglês intermediário — em desenvolvimento") na seção de stack, se o objetivo incluir vagas internacionais.
- Testar performance mobile (Lighthouse) e visualização em tela pequena sob luz forte — dark themes mal calibrados perdem legibilidade nessas condições.

---

*Última atualização: análise feita com o conteúdo real da página e print de tela completo do site.*

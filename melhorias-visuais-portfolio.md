# Melhorias Visuais — danielcarlos.dev

> **Atualização:** este checklist foi aplicado item a item diretamente no código do site (com acesso real ao HTML/CSS/JS, não só à descrição). Cada item abaixo está marcado como `[x]` **feito**, `[~]` **parcial / decisão consciente** (com nota do motivo) ou `[ ]` **precisa de algo seu** (foto, PDF, teste externo) para ser concluído.

**Objetivo do documento:** listar mudanças visuais que aumentam a chance de um recrutador (sourcing no LinkedIn, headhunter tipo Vertico, ou avaliador de Gupy) parar de rolar e ler — sem descaracterizar a identidade terminal/dark que já é seu diferencial.

---

## 1. Primeira dobra (above the fold) — Prioridade ALTA

- [x] **Headline em uma frase, não um cargo.** Adicionada linha `$ lidero times e arquiteturas que escalam com o negócio` em estilo prompt de terminal, entre o nome e o parágrafo de apresentação.
- [x] **3 números-âncora visíveis sem rolar a página.** Nova faixa `.hero-stats` com `19 pessoas lideradas` · `99,7% SLA de 1ª resposta` · `+52% crescimento da empresa (Exame)`, com números em gradiente âmbar→teal.
- [x] **Botão de ação único e claro.** Removido o 3º botão ("Ver projetos", redundante com o menu); ficou 1 CTA primário ("Entrar em contato") + LinkedIn como link secundário.
- [x] **Contraste.** Medi as taxas reais (WCAG) de todas as cores de texto contra os fundos usados: `ink-dim` (8.5:1), `accent`/`accent-2` (~8-10:1) e `ink-faint` (4.0–4.7:1) — todas passam AA, exceto uma combinação real que encontrei e corrigi: o meta dos cards de artigo (`.article-meta`) usava `ink-faint` sobre fundo de card (4.04:1, abaixo do mínimo); trocado para `ink-dim` (7.3:1).

## 2. Hierarquia tipográfica — Prioridade ALTA

- [x] **Duas fontes, papéis bem definidos.** Já existia: JetBrains Mono para labels/métricas/tema terminal, Inter para corpo de texto, Space Grotesk para títulos.
- [~] **Tamanho de base do corpo do texto ≥ 16px.** Aumentei os textos de leitura mais comuns (descrição de projetos, cards "focus", itens da timeline, lista de skills, resumo dos artigos) de 13.5–14px para 14.5–15px. Não cheguei a 16px uniforme em tudo — isso exigiria revisar espaçamento/altura de quase todo o layout. Se quiser ir a 16px de fato, é um passo separado (maior escopo).
- [ ] **Escala tipográfica consistente.** Ainda há bastante variação de tamanho por seção (herança do design original). Não mexi nisso agora por ser um refactor grande e arriscado de fazer "de brinde" numa passada de checklist — se quiser, faço como tarefa dedicada com uma escala definida (ex.: 12/14/16/20/28/40px) aplicada em todo o CSS.

## 3. Seção de métricas / prova de impacto — Prioridade ALTA

- [x] Números com **contexto de 1 linha** — já existia na seção "Impacto" (cards `.metric` com número + label).
- [x] Sem animação de contagem (`count-up`) no site — não se aplica.
- [x] **1 métrica de resultado de negócio** adicionada como 7º card, ocupando a linha inteira: `+52% crescimento da 3e Soluções em 2024 (revista Exame) · projeção de R$ 200 milhões em 2026`.

## 4. Seção "Artigos" — Prioridade ALTA

- [x] **Cards com data visível.** Adicionado mês/ano em cada card (`Set 2026`). *Lembrete: ao publicar um artigo novo de verdade, atualize a data para a data real de publicação.*
- [x] **Ícone temático por artigo** — SVG inline simples no estilo terminal: nós conectados (multi-agente), escudo com check (auditoria eco3e), relógio (controle de ponto).
- [x] **Tempo de leitura estimado** — já existia (8/7/6 min).
- [x] **Títulos orientados a resultado.** Revisei os 3 títulos: já estavam em formato "como fiz X" / "arquitetura para Y", não em nome técnico genérico — considerei que já atendem o espírito do item.
- [x] **3+ artigos publicados** — já tem 3, então a seção fica visível no menu (não se aplica a regra de esconder).

## 5. Paleta de cores — Prioridade MÉDIA

- [~] **Uma única cor de destaque.** Decisão consciente de manter o sistema de 2 acentos (âmbar = primário/CTA/métrica principal, teal = secundário/link/categoria) — os dois têm papel semântico fixo e não competem entre si; trocar para 1 cor só desfaria parte da identidade "terminal" já validada com você numa sessão anterior. Se ainda achar que 2 cores é ruído, me diga que eu unifico.
- [ ] **Modo claro (`prefers-color-scheme: light`).** Não implementado — é um trabalho de redesenho de paleta (não uma inversão automática), maior que um ajuste de checklist. Fica como tarefa separada, se você quiser.
- [ ] **Teste em tela sob luz solar / brilho baixo.** Isso só dá para validar com o site publicado e um celular na mão — não simulável por aqui. Recomendo testar após o próximo deploy.

## 6. Foto e identidade pessoal — Prioridade MÉDIA

- [ ] **Preciso de você aqui:** não posso gerar/inventar sua foto. Me mande uma foto profissional (fundo neutro, iluminação frontal, enquadramento de peito para cima) que eu já integro no hero com o tratamento visual do site (borda, glow sutil no hover, etc.).

## 7. Contato e prova social — Prioridade ALTA

- [x] **Email e LinkedIn visíveis sem rolar.** LinkedIn já é um botão direto no hero; e-mail está a 1 clique (CTA primário rola até `#contato`) — já atendia o espírito do item.
- [ ] **PDF do currículo para download.** Você já tem o conteúdo em `docs/curriculo.md`, mas não um PDF real. Não posso inventar o design/arquivo final — duas opções: (1) você me manda um PDF já pronto e eu adiciono o botão de download, ou (2) eu gero um PDF a partir do `curriculo.md` com o mesmo visual do site (preciso que você confirme que quer essa opção antes, é mais trabalho).
- [x] **Selo de disponibilidade remota** — já existia na `.role-line` do hero ("disponível para liderança em tecnologia · presencial · híbrido · remoto").

## 8. Responsividade mobile — Prioridade ALTA

- [~] **375px de largura.** O layout já tinha breakpoints em 760/680/480px cobrindo os grids principais; os elementos novos (`hero-stats`, ícones de artigo) usam `flex-wrap`/grid responsivo. Não tenho como abrir um device real nesta sessão (extensão do Chrome não conectou) — recomendo você conferir no celular após o próximo deploy.
- [x] **Toque mínimo 44×44px.** Botão de menu mobile aumentado de 38×34px para 44×44px; padding dos links do menu mobile aumentado para dar mais área de toque.

## 9. Performance de carregamento — Prioridade MÉDIA

- [ ] **Lighthouse / PageSpeed Insights.** Precisa ser rodado contra o site publicado — não tenho acesso de navegador nesta sessão para simular. Recomendo rodar em https://pagespeed.web.dev/ depois do deploy.
- [x] **Imagens.** O site não tinha nenhuma `<img>` até agora (sem foto ainda — ver item 6). A única imagem nova, `assets/og-image.png`, tem 42KB e só é carregada por crawlers de rede social (não pesa no carregamento da página).

## 10. Metadados para compartilhamento (Open Graph) — Prioridade ALTA

- [x] **`og:image` customizada gerada** (1200×630px, estilo terminal: grid de fundo, nome, cargo, stack, `danielcarlos.dev`) em `assets/og-image.png`. `og:title`/`og:description` já existiam; adicionei `og:image:width/height`, `twitter:card` como `summary_large_image` e `twitter:image` — na home e nos 3 artigos.
- [ ] **Testar no LinkedIn Post Inspector** — só funciona com o site publicado; peço para você rodar depois do deploy em https://www.linkedin.com/post-inspector/ (o LinkedIn cacheia a primeira leitura, então testar cedo evita ficar preso a um preview antigo).

## 11. Acessibilidade básica — Prioridade BAIXA/MÉDIA

- [x] `alt text` — o site ainda não tem nenhuma `<img>` de conteúdo (sem foto ainda); todos os ícones SVG novos dos artigos estão marcados `aria-hidden="true"` por serem puramente decorativos. Quando a foto do item 6 entrar, lembrar de dar `alt` descritivo a ela.
- [~] **Navegação por teclado.** Todos os elementos interativos já são `<a>`/`<button>` nativos (sem `<div onclick>`), então o Tab funciona por padrão do navegador. Não validei manualmente a ordem de foco nem o anel de foco visível (`:focus-visible`) — se quiser, reviso isso como item dedicado.

---

## O que ainda depende de você

- [ ] **Foto profissional** (item 6) — me envie o arquivo.
- [ ] **PDF do currículo** (item 7) — me envie pronto, ou peça para eu gerar a partir do `docs/curriculo.md`.
- [ ] **Testar no LinkedIn Post Inspector** e no **PageSpeed Insights** depois do próximo deploy (itens 9 e 10).
- [ ] **Conferir em um celular real** sob luz do dia (item 5) e em 375px de largura (item 8).
- [ ] Decidir se quer investir num **refactor de escala tipográfica completa** ou num **modo claro** (itens 2 e 5) — são tarefas maiores, propositalmente não feitas "de brinde" nesta passada.

---

*Checklist aplicado diretamente no código em 2026-09-15. Datas dos artigos e este arquivo devem ser revisados a cada nova publicação.*

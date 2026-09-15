# Instruções para IA — Portfólio Daniel Carlos da Silva

Este arquivo é lido automaticamente por assistentes de IA (Claude Code e similares) trabalhando neste repositório. Ele documenta como este projeto é estruturado e como executar tarefas recorrentes com segurança e consistência.

## Sobre o projeto

Site pessoal de uma página (+ subseção de artigos), **HTML/CSS/JS puro, sem build e sem dependências**, publicado via GitHub Pages em `danielcarlos.dev`.

```
.
├── index.html          # markup da home (todas as seções da landing page)
├── artigos/             # páginas individuais de artigo/estudo de caso
├── css/style.css        # todo o CSS do site (home + artigos)
├── js/main.js           # menu mobile, reveal on scroll, spotlight do cursor,
│                         # barra de progresso, scrollspy, botão voltar ao topo
├── docs/curriculo.md    # currículo em markdown, fonte do conteúdo do site
├── sitemap.xml, robots.txt
└── update-site.sh       # git add + commit + push (publica no GitHub Pages)
```

Não introduza um framework, bundler ou gerenciador de pacotes para resolver uma tarefa pontual. O site é deliberadamente estático.

## Regra número 1: nunca inventar fatos sobre a carreira do usuário

Este site é o currículo/portfólio público de uma pessoa real, publicado com o nome dela. Isso vale para qualquer conteúdo novo (artigos, projetos, métricas, certificações, cargos):

- **Nunca invente** números, métricas, nomes de ferramentas, datas, nomes de empresas/clientes ou resultados que o usuário não confirmou.
- Se faltar informação para escrever algo com precisão, **pergunte antes de publicar** ou marque claramente o trecho como rascunho/placeholder para revisão.
- Pode **expandir e organizar** informações que o usuário já forneceu (ex.: transformar bullets curtos em uma narrativa mais longa), mas não pode **adicionar fatos novos** não confirmados.
- Antes de considerar uma tarefa de conteúdo concluída, avise o usuário para revisar a precisão factual — não assuma que o texto gerado está correto só porque é plausível.

## Como adicionar um novo artigo à seção "Artigos"

1. **Duplicar um artigo existente** em `artigos/` (ex.: `artigos/sistema-multiagente-licitacoes.html`) como ponto de partida — não criar um layout do zero.
2. **Ajustar o `<head>`**: `<title>`, `meta description`, `canonical`, `og:title/description/url`, `twitter:title/description`, e o bloco `application/ld+json` (`Article`).
3. **Ajustar o corpo**, mantendo a estrutura de seções (nesta ordem):
   - `Contexto` (ou "O problema") — o que motivou o projeto.
   - `Decisões de arquitetura` — escolhas técnicas e o porquê.
   - `Desafios & aprendizados` — o que deu errado, o que mudou, o que ficou de lição.
   - `Resultado` — impacto real, só com números que o usuário confirmou.
   - Bloco `.article-callout` no final com a stack usada.
4. **Adicionar o card correspondente** na seção `#artigos` do `index.html` (dentro de `.article-grid`), copiando o padrão de `.article-card` já existente (categoria, título, resumo de 1-2 frases, `.article-meta` com tempo de leitura, link `.read-more`).
5. **Adicionar a URL em `sitemap.xml`** (`changefreq: yearly`, `priority: 0.7`, seguindo o padrão dos artigos existentes).
6. **Testar localmente** antes de publicar (ver seção de testes no `README.md`).
7. **Nunca rodar `./update-site.sh`** (isso faz `git push`) sem o usuário pedir explicitamente — gerar/editar os arquivos é ok, publicar é uma ação do usuário confirmar.

### Convenções técnicas dos artigos

- Todo artigo vive em `/artigos/<slug-em-kebab-case>.html` — um arquivo HTML por artigo, sem CMS.
- Como o arquivo está uma pasta abaixo da raiz, todos os caminhos relativos sobem um nível: `../css/style.css`, `../js/main.js`, `../assets/...`, e links para a home usam `../index.html#secao`.
- Reutilize as classes CSS já existentes: `.article-hero`, `.article-body`, `.article-meta-row`, `.article-callout`, `.contact-box`. Não crie CSS ad-hoc inline nem duplique estilos que já existem em `css/style.css`.
- Todo artigo precisa manter os elementos estruturais compartilhados (não remover nem renomear IDs): `.bg-grid`, `#cursorGlow`, `.scroll-progress`/`#scrollBar`, `nav` com `#navToggle`/`#navlinks`, `#toTop`, e o `<script src="../js/main.js">` no fim do `<body>`. O `js/main.js` depende desses IDs existirem (com checagem de nulo, mas o efeito não funciona se o elemento não existir).
- O nav dos artigos é simplificado (Sobre, Projetos, Artigos, Contato apontando para `../index.html#...`) — não precisa ter todos os links da home.

## Convenções gerais da home (`index.html`)

- Cada seção tem um `<span class="sec-no">` com número de 2 dígitos (`01`, `02`...). Se uma seção nova for inserida entre outras, **renumerar as seções seguintes**.
- Novos blocos de conteúdo devem seguir o design system já existente em `css/style.css` (cores em `:root`, tipografia mono/Space Grotesk/Inter, `--ease` para transições, padrão de cards com glow no hover). Antes de estilizar algo novo, procure se já existe uma classe equivalente (`.proj`, `.focus`, `.article-card`, `.metric`) reaproveitável.

## Antes de dar uma tarefa como concluída

- Suba um servidor local (`python3 -m http.server` na raiz do projeto) e confira visualmente a mudança.
- Confirme que não há classes/IDs referenciados no HTML que não existem no CSS/JS (e vice-versa).
- Para conteúdo (artigos, textos de projeto, currículo): peça para o usuário revisar a precisão factual antes de publicar.
- Para publicar de fato (`./update-site.sh`), aguarde confirmação explícita do usuário — é uma ação que afeta o site em produção.

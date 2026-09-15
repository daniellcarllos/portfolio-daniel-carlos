# Portfólio — Daniel Carlos da Silva

Site pessoal de uma página, publicado via GitHub Pages.

🔗 **Site:** https://daniellcarllos.github.io/portfolio-daniel-carlos/

## Estrutura do projeto

```
.
├── index.html          # markup do site (sem estilo/script embutido)
├── artigos/             # páginas individuais de artigo / estudo de caso
├── apresentacao.html    # slide-deck de trajetória (tema claro, separado da home)
├── css/
│   ├── style.css       # CSS da home + artigos (tema dark/terminal)
│   └── apresentacao.css # CSS isolado do slide-deck (tema claro)
├── js/
│   ├── main.js         # menu mobile, reveal on scroll, spotlight do cursor,
│   │                     # barra de progresso, scrollspy, voltar ao topo
│   └── apresentacao.js # navegação por slide e animação de contagem do deck
├── docs/
│   └── curriculo.md    # currículo em markdown, fonte do conteúdo do site
├── sitemap.xml, robots.txt
└── update-site.sh       # script para publicar alterações
```

## Como atualizar o site

1. Edite `index.html`, `css/style.css` ou `js/main.js`.
2. Teste localmente antes de publicar:

   ```bash
   python3 -m http.server 8000
   ```

   e acesse `http://localhost:8000/`.
3. Rode o script de publicação na raiz do projeto:

   ```bash
   ./update-site.sh "descrição da mudança"
   ```

   O script faz `git add`, `commit`, `push` e aguarda o GitHub Pages publicar a nova versão automaticamente.

## Publicando um novo artigo

A seção "Artigos" da home lista estudos de caso em `/artigos/`, um arquivo HTML por artigo (sem CMS). O passo a passo completo — estrutura esperada, convenções de caminho relativo, classes CSS a reaproveitar e regras de conteúdo — está documentado em **[`CLAUDE.md`](./CLAUDE.md)**, que também serve de guia para assistentes de IA trabalhando neste repositório.

## Stack

HTML, CSS e JavaScript puro — sem build, sem dependências. Fontes via Google Fonts (Space Grotesk, JetBrains Mono, Inter).

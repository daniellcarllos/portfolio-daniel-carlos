# Portfólio — Daniel Carlos da Silva

Site pessoal de uma página, publicado via GitHub Pages.

🔗 **Site:** https://daniellcarllos.github.io/portfolio-daniel-carlos/

## Estrutura do projeto

```
.
├── index.html          # markup do site (sem estilo/script embutido)
├── css/
│   └── style.css       # todo o CSS do site
├── js/
│   └── main.js         # menu mobile + animações de scroll (reveal)
├── docs/
│   └── curriculo.md    # currículo em markdown, fonte do conteúdo do site
└── update-site.sh       # script para publicar alterações
```

## Como atualizar o site

1. Edite `index.html`, `css/style.css` ou `js/main.js`.
2. Rode o script de publicação na raiz do projeto:

   ```bash
   ./update-site.sh "descrição da mudança"
   ```

   O script faz `git add`, `commit`, `push` e aguarda o GitHub Pages publicar a nova versão automaticamente.

## Stack

HTML, CSS e JavaScript puro — sem build, sem dependências. Fontes via Google Fonts (Space Grotesk, JetBrains Mono, Inter).

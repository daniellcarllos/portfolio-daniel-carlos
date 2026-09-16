# Instruções para IA — Portfólio Daniel Carlos da Silva

Este arquivo é lido automaticamente por assistentes de IA (Claude Code e similares) trabalhando neste repositório. Ele documenta como este projeto é estruturado e como executar tarefas recorrentes com segurança e consistência.

## Sobre o projeto

Site pessoal de uma página (+ subseção de artigos), **HTML/CSS/JS puro, sem build e sem dependências**, publicado via GitHub Pages em `danielcarlos.dev`.

```
.
├── index.html          # markup da home (todas as seções da landing page, tema dark/terminal)
├── artigos/             # páginas individuais de artigo/estudo de caso (mesmo tema da home)
├── apresentacao.html    # slide-deck de trajetória, tema CLARO próprio, isolado da home
├── css/style.css        # CSS da home + artigos (tema dark/terminal)
├── css/apresentacao.css # CSS isolado do slide-deck (tema claro — NÃO reaproveita style.css)
├── js/main.js           # menu mobile, reveal on scroll, spotlight do cursor,
│                         # barra de progresso, scrollspy, botão voltar ao topo (home + artigos)
├── js/apresentacao.js   # navegação por slide (teclado/scroll/toque) e count-up do deck
├── curriculo.html       # currículo em HTML puro, otimizado para ATS (ver seção própria abaixo)
├── docs/curriculo.md    # currículo em markdown, fonte de conteúdo (LinkedIn/Gupy-style, bem mais
│                         # detalhado que os cards da home — usar como base ao atualizar curriculo.html)
├── assets/curriculo-daniel-carlos-da-silva.pdf  # PDF gerado a partir de curriculo.html (ver abaixo)
├── sitemap.xml, robots.txt
└── update-site.sh       # git add + commit + push (publica no GitHub Pages)
```

Não introduza um framework, bundler ou gerenciador de pacotes para resolver uma tarefa pontual. O site é deliberadamente estático.

`apresentacao.html` é intencionalmente um sistema visual separado (tema claro, paleta e componentes próprios em `css/apresentacao.css`) — não fundir com `css/style.css` nem tentar reconciliar as duas paletas. Se o conteúdo da trajetória mudar na home (`index.html`), replicar manualmente as mudanças factuais no deck (`apresentacao.html`), já que não há fonte única compartilhada entre os dois.

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

## Currículo em PDF (`curriculo.html` → `assets/curriculo-daniel-carlos-da-silva.pdf`)

O site oferece um currículo em PDF para download (botão "Baixar currículo (PDF)" na seção `#contato` do `index.html`), pensado para passar por parsers de ATS (Gupy, LinkedIn, etc.), não só para leitura humana.

**Regras de formatação ATS (não quebrar ao editar `curriculo.html`):**
- Layout de **coluna única**, sem tabelas de layout, sem `display:flex`/`display:grid` para alinhar título+data lado a lado — usar linhas de texto simples empilhadas (ex.: título do cargo numa linha, `Empresa · Local · Datas` na linha seguinte). Isso evita alterar a ordem do texto no PDF exportado (ver bug abaixo) e é o padrão mais seguro para extração por ATS.
- Marcadores de lista **não podem usar `position:relative` + `::before` para o bullet** (ver bug crítico abaixo). Usar `text-indent` negativo + `padding-left` no parágrafo, com o caractere `•` digitado no início do texto.
- Cabeçalhos de seção em texto simples e convencional (RESUMO PROFISSIONAL, EXPERIÊNCIA PROFISSIONAL, FORMAÇÃO ACADÊMICA, CERTIFICAÇÕES, COMPETÊNCIAS TÉCNICAS) — não inventar nomes de seção criativos aqui, ATS procura por esses termos.
- Sem foto, sem ícones decorativos com informação codificada neles, sem cabeçalho/rodapé de página com dados de contato (alguns ATS descartam header/footer).
- Contato (e-mail, telefone, LinkedIn, cidade) como texto simples no topo do corpo da página, nunca dentro de um header/footer de impressão.

**Bug crítico do Chrome descoberto nesta sessão (não reintroduzir):** ao gerar o PDF via `--print-to-pdf`, qualquer elemento de lista que combine `position:relative` no item + `::before` com `position:absolute` para o marcador de bullet faz o Chrome **embaralhar a ordem do texto extraído** quando esse conteúdo cruza uma quebra de página — títulos de cargos "pulam" para antes das bullets de outro cargo, bullets de um cargo aparecem coladas nas de outro, etc. Isso é invisível olhando a renderização na tela/impressão, só aparece ao extrair o texto do PDF (exatamente o que um ATS faz). `break-inside:avoid` sozinho é seguro; o problema é especificamente `position:relative`/`absolute` em conteúdo que pode atravessar página. Sempre validar depois de editar (ver comando abaixo).

**Como editar o conteúdo:** editar `curriculo.html` diretamente (não há template/build). Manter as seções e a ordem cronológica reversa. Ao mudar algo no currículo, avalie se `docs/curriculo.md` e/ou os cards da home também deveriam refletir a mudança — não há fonte única compartilhada entre os três.

**Como regenerar o PDF depois de editar `curriculo.html`:**
```bash
# 1. Servir o site localmente (se ainda não estiver rodando)
python3 -m http.server 8000

# 2. Gerar o PDF com o Chrome headless
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="assets/curriculo-daniel-carlos-da-silva.pdf" \
  "http://localhost:8000/curriculo.html"

# 3. OBRIGATÓRIO: validar que o texto extraído está na ordem correta (sinal de ATS-safety)
pip3 install --user --quiet pypdf   # se ainda não estiver instalado
python3 -c "
from pypdf import PdfReader
r = PdfReader('assets/curriculo-daniel-carlos-da-silva.pdf')
for i, p in enumerate(r.pages):
    print(f'--- página {i+1} ---')
    print(p.extract_text())
"
```
Leia a saída do passo 3 e confirme que a ordem do texto bate com a ordem visual do currículo (nenhum cargo/bullet fora de lugar). Se algo estiver fora de ordem, suspeite primeiro de `position:relative`/`absolute` em elementos que cruzam a quebra de página.

## Antes de dar uma tarefa como concluída

- Suba um servidor local (`python3 -m http.server` na raiz do projeto) e confira visualmente a mudança.
- Confirme que não há classes/IDs referenciados no HTML que não existem no CSS/JS (e vice-versa).
- Para conteúdo (artigos, textos de projeto, currículo): peça para o usuário revisar a precisão factual antes de publicar.
- Para publicar de fato (`./update-site.sh`), aguarde confirmação explícita do usuário — é uma ação que afeta o site em produção.

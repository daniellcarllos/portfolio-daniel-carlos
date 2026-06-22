#!/usr/bin/env bash
# Atualiza o repositorio e o GitHub Pages do portfolio.
# Uso:
#   ./update-site.sh "mensagem do commit"
#   ./update-site.sh                # usa mensagem padrao com data/hora

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PAGES_REPO="daniellcarllos/portfolio-daniel-carlos"
PAGES_URL="https://daniellcarllos.github.io/portfolio-daniel-carlos/"

cd "$REPO_DIR"

if [ -z "$(git status --porcelain)" ]; then
  echo "Nada para atualizar: nenhuma mudanca detectada em $REPO_DIR"
  exit 0
fi

COMMIT_MSG="${1:-Atualiza site - $(date '+%Y-%m-%d %H:%M')}"

echo "==> Alteracoes detectadas:"
git status --short

echo "==> Adicionando arquivos..."
git add -A

echo "==> Criando commit: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

echo "==> Enviando para o GitHub (origin/main)..."
git push origin main

echo "==> Aguardando o GitHub Pages publicar a nova versao..."
for i in $(seq 1 30); do
  STATUS="$(gh api "repos/${PAGES_REPO}/pages/builds/latest" --jq .status 2>/dev/null || echo "")"
  if [ "$STATUS" = "built" ]; then
    echo "==> Publicado com sucesso!"
    break
  fi
  sleep 5
done

echo ""
echo "Site atualizado: $PAGES_URL"

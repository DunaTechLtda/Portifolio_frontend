#!/usr/bin/env bash
# Roda NA VPS (chamado pelo scripts/deploy.mjs). Publica o site estático da Dunatech
# no Caddy que também serve a loja da Joyce, sem tocar no bloco dela.
# Espera o build compactado em /root/.deploy-dist.tar.gz.
set -euo pipefail

SITE_DIR=/srv/dunatech
CADDYFILE=/etc/caddy/Caddyfile
PACOTE=/root/.deploy-dist.tar.gz

# Troca atômica da pasta; a versão anterior fica em /srv/dunatech.antigo para rollback
rm -rf "$SITE_DIR.novo"
mkdir -p "$SITE_DIR.novo"
tar -xzf "$PACOTE" -C "$SITE_DIR.novo"
test -f "$SITE_DIR.novo/index.html" || { echo "ERRO: pacote sem index.html"; exit 1; }
rm -rf "$SITE_DIR.antigo"
if [ -d "$SITE_DIR" ]; then mv "$SITE_DIR" "$SITE_DIR.antigo"; fi
mv "$SITE_DIR.novo" "$SITE_DIR"
chown -R caddy:caddy "$SITE_DIR"
find "$SITE_DIR" -type d -exec chmod 755 {} +
find "$SITE_DIR" -type f -exec chmod 644 {} +
rm -f "$PACOTE"

# Bloco do Caddy: só é acrescentado na primeira vez
if ! grep -q "dunatech.com.br" "$CADDYFILE"; then
  cp "$CADDYFILE" "$CADDYFILE.bak-$(date +%Y%m%d%H%M%S)"
  cat >> "$CADDYFILE" <<'EOF'

# --- Dunatech (site estático; repositório Portifolio_frontend) ---
www.dunatech.com.br {
	redir https://dunatech.com.br{uri} permanent
}

dunatech.com.br {
	root * /srv/dunatech
	encode zstd gzip
	header {
		Strict-Transport-Security "max-age=31536000"
		X-Content-Type-Options "nosniff"
		Referrer-Policy "strict-origin-when-cross-origin"
		X-Frame-Options "DENY"
	}
	@assets path /assets/*
	header @assets Cache-Control "public, max-age=31536000, immutable"
	try_files {path} /index.html
	file_server
}
EOF
  caddy validate --config "$CADDYFILE" --adapter caddyfile
  systemctl reload caddy
fi

sleep 1
echo "caddy: $(systemctl is-active caddy)"
curl -s -o /dev/null -w "dunatech: %{http_code}\n" https://dunatech.com.br/
curl -s -o /dev/null -w "joyce:    %{http_code}\n" https://joycecarolinebrand.com.br/api/health

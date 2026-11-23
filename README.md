# Dunatech: site institucional

Site da Dunatech (https://dunatech.com.br): React 19 + Vite + React Router + Framer Motion, estático. O formulário de contato envia pelo EmailJS e, sem as chaves, cai para o WhatsApp.

## Rodar localmente

```powershell
npm ci
npm run dev
```

Opcional: `.env` com as chaves do EmailJS (ver `docs/DEPLOY.md`).

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | servidor de desenvolvimento |
| `npm run build` | gera `dist/` |
| `npm run preview` | serve o `dist/` localmente |
| `npm run deploy` | build e publicação na VPS (ver `docs/DEPLOY.md`) |

## Estrutura

- `src/pages/`: Home, Portfolio, FAQ, Contato (rotas em `src/App.jsx`)
- `src/components/`: layout (Navbar) e seções
- `public/assets/`: imagens
- `scripts/`: deploy (`deploy.mjs` roda local; `publicar-vps.sh` roda na VPS)
- `.github/workflows/build.yml`: CI que só confere se o build passa

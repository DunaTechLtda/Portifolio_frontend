# Deploy: dunatech.com.br

Estado em 23/11/2026: **no ar em https://dunatech.com.br**, na mesma VPS da loja da Joyce Caroline. A VPS antiga da Dunatech (`72.60.147.246`) expirou.

## Onde está tudo

| Item | Valor |
| --- | --- |
| VPS | Hostinger KVM 1 `srv2101522`, IPv4 `179.236.71.98` (é a VPS da loja da Joyce; detalhes em `jc-loja/docs/DEPLOY.md`) |
| Domínio | `dunatech.com.br`, Registro.br, expira em **25/02/2027** |
| DNS | Painel da Hostinger (nameservers `dns-parking.com`): A `@` e A `www` para `179.236.71.98` |
| Arquivos | `/srv/dunatech` (dono `caddy`); a versão anterior fica em `/srv/dunatech.antigo` |
| Proxy / HTTPS | Caddy do host (`/etc/caddy/Caddyfile`), bloco `# --- Dunatech`. `www` e `http` redirecionam para `https://dunatech.com.br`. Let's Encrypt com renovação automática |
| Acesso SSH desta máquina | chave `~/.ssh/gsystem_vps` (sem passphrase), atalho `jc-vps` no `~/.ssh/config` |

**Cuidado:** a VPS é compartilhada com a loja da Joyce. Nunca reinicie o Docker nem mexa no bloco `joycecarolinebrand.com.br` do Caddyfile por causa deste site. O script de deploy confere a saúde da loja no fim.

## Publicar uma mudança

```powershell
npm run deploy
```

Faz o build local, envia o `dist/` por `scp` e roda `scripts/publicar-vps.sh` na VPS. O script troca a pasta, acrescenta o bloco do Caddy só se ainda não existir (com `caddy validate` antes do reload) e imprime o HTTP de `dunatech.com.br` e do `/api/health` da Joyce. Os dois precisam dar 200.

Outra máquina: crie uma chave, libere a pública no `/root/.ssh/authorized_keys` (Web console da Hostinger) e rode com `DEPLOY_HOST=root@179.236.71.98`.

**Rollback:** `ssh jc-vps 'rm -rf /srv/dunatech && mv /srv/dunatech.antigo /srv/dunatech'`.

## Formulário de contato (EmailJS)

O build lê três variáveis do `.env` (fora do git):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

Sem elas, o formulário **não quebra**: abre o WhatsApp `(84) 99818-5053` com a mensagem preenchida. Se o EmailJS falhar, o site oferece o mesmo caminho.

### Como recuperar as chaves

Os valores antigos estavam só nos secrets do ambiente `Dunatech` do GitHub (conta DunaTechLtda), e o GitHub não mostra secret salvo. É preciso pegar no EmailJS:

1. Entre em https://dashboard.emailjs.com. A conta provavelmente usa `dunatechltda@gmail.com` (o e-mail do site); se não lembrar a senha, use "Forgot password" nesse e-mail ou pergunte ao ex-estagiário.
2. **Public Key:** Account → General → *Public Key*.
3. **Service ID:** Email Services → o serviço conectado (ex.: Gmail) → *Service ID* (`service_...`).
4. **Template ID:** Email Templates → o modelo de contato → *Template ID* (`template_...`). O modelo usa as variáveis `from_name`, `from_lastname`, `from_email`, `from_phone`, `message` e `current_date`.
5. Sem acesso à conta antiga? Crie uma conta nova no EmailJS (plano grátis: 200 e-mails/mês), conecte o Gmail da Dunatech e crie um template com essas variáveis.
6. Salve os três valores no `.env` e rode `npm run deploy`.

A Public Key do EmailJS fica visível no JavaScript do site por natureza. Para evitar abuso, em Account → Security restrinja os domínios a `dunatech.com.br`.

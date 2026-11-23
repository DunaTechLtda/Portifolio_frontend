// Deploy do site da Dunatech: build local + envio por SSH para a VPS (a mesma da loja da Joyce).
// Uso: npm run deploy            (host SSH padrão: jc-vps, definido no ~/.ssh/config)
//      DEPLOY_HOST=root@1.2.3.4 npm run deploy
import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';

const HOST = process.env.DEPLOY_HOST || 'jc-vps';
const PACOTE = '.deploy-dist.tar.gz';

function rodar(cmd, args) {
  console.log(`\n> ${cmd} ${args.join(' ')}`);
  const r = spawnSync(cmd, args, { stdio: 'inherit' });
  if (r.status !== 0) {
    console.error(`\nFalhou: ${cmd} (código ${r.status ?? r.error?.message})`);
    process.exit(1);
  }
}

const chaves = ['VITE_EMAILJS_SERVICE_ID', 'VITE_EMAILJS_TEMPLATE_ID', 'VITE_EMAILJS_PUBLIC_KEY'];
const env = existsSync('.env') ? readFileSync('.env', 'utf8') : '';
const valor = (k) => (env.match(new RegExp(`^${k}=(.*)$`, 'm'))?.[1] ?? '').trim();
const faltando = chaves.filter((k) => valor(k).length < 6 || valor(k).includes('...'));
if (faltando.length) {
  console.warn(`AVISO: sem ${faltando.join(', ')} no .env. O formulário de contato vai mandar a mensagem pelo WhatsApp em vez de e-mail.`);
}

rodar(process.execPath, ['node_modules/vite/bin/vite.js', 'build']);
rodar('tar', ['-czf', PACOTE, '-C', 'dist', '.']);
try {
  rodar('scp', ['-q', '-o', 'BatchMode=yes', PACOTE, 'scripts/publicar-vps.sh', `${HOST}:/root/`]);
  rodar('ssh', ['-o', 'BatchMode=yes', HOST, 'bash /root/publicar-vps.sh; s=$?; rm -f /root/publicar-vps.sh; exit $s']);
} finally {
  rmSync(PACOTE, { force: true });
}
console.log('\nPublicado em https://dunatech.com.br');

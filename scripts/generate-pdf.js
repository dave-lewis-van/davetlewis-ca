import { chromium } from 'playwright';
import { preview } from 'astro';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, '../public/resume.pdf');

const server = await preview({ logLevel: 'silent' });
const { port } = server.host ? server : { port: 4321 };
const address = `http://localhost:${server.port ?? 4321}/resume`;

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto(address, { waitUntil: 'networkidle' });
await page.evaluate(() => {
  document.querySelector('header')?.remove();
  document.querySelector('footer')?.remove();
});
await page.pdf({
  path: outPath,
  format: 'Letter',
  printBackground: false,
  margin: { top: '0.75in', bottom: '0.75in', left: '0.75in', right: '0.75in' },
});

await browser.close();
await server.stop();

console.log(`PDF written to ${outPath}`);

// Exporta la presentación a PDF: una captura 1920x1080 por diapositiva.
// Uso: npm run build && npm run pdf   (salida: ai-nda.pdf)
import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { writeFile } from 'node:fs/promises';

const W = 1920;
const H = 1080;
const OUT = process.argv[2] || 'ai-nda.pdf';

const server = await preview({ preview: { port: 4174, host: '127.0.0.1', strictPort: true } });
const url = 'http://127.0.0.1:4174/ai-nda/';

const browser = await chromium.launch({ channel: 'chrome' });
try {
  const page = await browser.newPage({ viewport: { width: W, height: H } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({
    content: '.reveal .controls, .slide-progress { display: none !important; } * { transition: none !important; animation-duration: 0s !important; }'
  });

  const total = await page.evaluate(() => document.querySelectorAll('.reveal .slides > section').length);
  const shots = [];
  for (let i = 0; i < total; i++) {
    await page.evaluate((n) => window.location.hash = `#/${n + 1}`, i);
    await page.waitForTimeout(700);
    shots.push((await page.screenshot({ type: 'png' })).toString('base64'));
    console.log(`slide ${i + 1}/${total}`);
  }

  const html = `<!doctype html><style>
    @page { size: ${W}px ${H}px; margin: 0 }
    html, body { margin: 0; background: #000 }
    img { display: block; width: ${W}px; height: ${H}px; break-after: page }
  </style>${shots.map((s) => `<img src="data:image/png;base64,${s}">`).join('')}`;
  const pdfPage = await browser.newPage();
  await pdfPage.setContent(html);
  await writeFile(OUT, await pdfPage.pdf({ width: `${W}px`, height: `${H}px`, printBackground: true }));
  console.log(`PDF: ${OUT}`);
} finally {
  await browser.close();
  await new Promise((r) => server.httpServer.close(r));
}

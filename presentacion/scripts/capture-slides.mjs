// Captura cada diapositiva (último estado, con todos los pasos construidos) en capturas/slide-NN.png.
// Uso: npm run build && node scripts/capture-slides.mjs
import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { mkdir } from 'node:fs/promises';

const server = await preview({ preview: { port: 4175, host: '127.0.0.1', strictPort: true } });
const browser = await chromium.launch({ channel: 'chrome' });
try {
  await mkdir('capturas', { recursive: true });
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto('http://127.0.0.1:4175/ai-nda/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({
    content: '.reveal .controls, .slide-progress { display: none !important; } * { transition: none !important; animation-duration: 0s !important; }'
  });
  const total = await page.evaluate(() => document.querySelectorAll('.reveal .slides > section').length);
  for (let i = 0; i < total; i++) {
    await page.evaluate((n) => { window.location.hash = `#/${n + 1}`; }, i);
    await page.waitForTimeout(600);
    let guard = 0;
    while (guard++ < 30 && await page.evaluate(() => document.querySelectorAll('.reveal .slides > section.present .fragment:not(.visible)').length)) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(200);
    }
    const n = String(i + 1).padStart(2, '0');
    await page.screenshot({ path: `capturas/slide-${n}.png` });
    console.log(`slide ${n}`);
  }
} finally {
  await browser.close();
  await server.close();
}

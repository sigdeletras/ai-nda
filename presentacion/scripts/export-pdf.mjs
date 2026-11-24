// Exporta la presentación a PDF (una captura 1920x1080 por página).
// Las slides interactivas (con pasos de la tecla →, "fragments") se tratan así:
//   · lectura     → una página por slide, en su ÚLTIMO estado (todo construido).
//   · proyeccion  → una página por paso: estado inicial + un estado por cada →,
//                   para poder recrear el proceso proyectando el PDF.
// Uso: npm run pdf              (genera los dos)
//      npm run pdf:lectura      (solo lectura)
//      npm run pdf:proyeccion   (solo proyección)
import { chromium } from '@playwright/test';
import { preview } from 'vite';
import { writeFile } from 'node:fs/promises';

const W = 1920;
const H = 1080;
const MODO = process.argv[2] || 'ambos';
const SALIDAS = { lectura: 'ai-nda-slides.pdf', proyeccion: 'ai-nda-slides-proyeccion.pdf' };
if (!['ambos', 'lectura', 'proyeccion'].includes(MODO)) {
  console.error(`Modo desconocido: ${MODO}. Usa lectura, proyeccion o ambos.`);
  process.exit(1);
}

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
  const pendientes = () =>
    page.evaluate(() => document.querySelectorAll('.reveal .slides > section.present .fragment:not(.visible)').length);
  const captura = async () => (await page.screenshot({ type: 'png' })).toString('base64');

  // estados[i] = capturas de la slide i: [inicial, tras →1, tras →2, ...]
  const estados = [];
  for (let i = 0; i < total; i++) {
    await page.evaluate((n) => { window.location.hash = `#/${n + 1}`; }, i);
    await page.waitForTimeout(700);
    const pasos = [await captura()];
    let guardia = 0;
    while ((await pendientes()) > 0 && guardia++ < 30) {
      await page.keyboard.press('ArrowRight');
      await page.waitForTimeout(250);
      pasos.push(await captura());
    }
    estados.push(pasos);
    console.log(`slide ${i + 1}/${total}: ${pasos.length} estado(s)`);
  }

  const crearPdf = async (shots, salida) => {
    const html = `<!doctype html><style>
      @page { size: ${W}px ${H}px; margin: 0 }
      html, body { margin: 0; background: #000 }
      img { display: block; width: ${W}px; height: ${H}px; break-after: page }
    </style>${shots.map((s) => `<img src="data:image/png;base64,${s}">`).join('')}`;
    const pdfPage = await browser.newPage();
    await pdfPage.setContent(html);
    await writeFile(salida, await pdfPage.pdf({ width: `${W}px`, height: `${H}px`, printBackground: true }));
    await pdfPage.close();
    console.log(`PDF: ${salida} (${shots.length} páginas)`);
  };

  if (MODO !== 'proyeccion') {
    await crearPdf(estados.map((p) => p[p.length - 1]), SALIDAS.lectura);
  }
  if (MODO !== 'lectura') {
    await crearPdf(estados.flat(), SALIDAS.proyeccion);
  }
} finally {
  await browser.close();
  await new Promise((r) => server.httpServer.close(r));
}

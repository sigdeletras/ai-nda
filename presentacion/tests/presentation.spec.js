import { test, expect } from '@playwright/test';

const SLIDE_COUNT = 11;

test('navegación por teclado y numeración', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.slide-number')).toContainText(/1\s*\/\s*11/);
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.slide-number')).toContainText(/2\s*\/\s*11/);
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('.slide-number')).toContainText(/1\s*\/\s*11/);
});

test('la presentación contiene las 11 diapositivas del guion actualizado', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.slides > section')).toHaveCount(SLIDE_COUNT);
  await expect(page.locator('.slides')).toContainText('EL CASO JIRA');
  await expect(page.locator('.slides')).toContainText('CONFIGURAR LOS ASISTENTES');
  await expect(page.locator('.slides')).toContainText('La confianza con el cliente se gestiona');
});

test('la vista de ponente muestra las notas', async ({ page, context }) => {
  await page.goto('./');
  const popupPromise = context.waitForEvent('page');
  await page.keyboard.press('s');
  const speaker = await popupPromise;
  await speaker.waitForLoadState();
  await expect(speaker.locator('body')).toContainText('Abrir con la pregunta del título');
});

test('las diapositivas no desbordan el área de proyección', async ({ page }) => {
  await page.goto('./');
  const overflows = [];
  for (let index = 0; index < SLIDE_COUNT; index += 1) {
    await page.goto(`./#/${index}`);
    const section = page.locator('.slides > section.present');
    await expect(section).toBeVisible();
    const result = await section.evaluate((element) => {
      const slide = element.getBoundingClientRect();
      const viewport = document.querySelector('.reveal').getBoundingClientRect();
      const outside = [...element.querySelectorAll('h1,h2,h3,p,li,.panel,.item,.flow,.compare,.matrix,.statement,.tags,.levels,.exercise,.pipeline,.steps')]
        .filter((child) => {
          const rect = child.getBoundingClientRect();
          return rect.width > 0 && rect.height > 0 &&
            (rect.left < slide.left - 2 || rect.right > slide.right + 2 ||
             rect.top < slide.top - 2 || rect.bottom > slide.bottom + 2);
        }).length;
      return {
        slideVisible: slide.width > 0 && slide.height > 0 &&
          slide.left >= viewport.left - 2 && slide.right <= viewport.right + 2 &&
          slide.top >= viewport.top - 2 && slide.bottom <= viewport.bottom + 2,
        outside
      };
    });
    if (!result.slideVisible || result.outside > 0) overflows.push({ slide: index + 1, ...result });
  }
  expect(overflows).toEqual([]);
});

test('la navegación inferior muestra un segmento por diapositiva y permite saltar', async ({ page }) => {
  await page.goto('./');
  const segments = page.locator('.slide-progress__segment');
  await expect(segments).toHaveCount(SLIDE_COUNT);
  await expect(segments.nth(0)).toHaveAttribute('aria-current', 'step');
  await expect(segments.nth(4)).toHaveAttribute('aria-label', /Ir a diapositiva 5:/);
  await segments.nth(4).click();
  await expect(page.locator('.slide-number')).toContainText(/5\s*\/\s*11/);
  await expect(segments.nth(4)).toHaveAttribute('aria-current', 'step');
  await expect(segments.nth(0)).toHaveClass(/is-visited/);
});

test('el modo móvil vertical adapta el lienzo y evita el desbordamiento horizontal', async ({ page }) => {
  await page.setViewportSize({ width: 393, height: 852 });
  await page.goto('./');
  await expect(page.locator('.slide-progress__segment')).toHaveCount(SLIDE_COUNT);
  const layout = await page.locator('.reveal').evaluate((element) => ({
    width: element.getBoundingClientRect().width,
    height: element.getBoundingClientRect().height,
    scrollWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth
  }));
  expect(layout.width).toBeCloseTo(393, 0);
  expect(layout.height).toBeCloseTo(852, 0);
  expect(layout.scrollWidth).toBeLessThanOrEqual(layout.viewportWidth);
  await expect(page.locator('.slides > section.present h1, .slides > section.present h2').first()).toBeVisible();
});

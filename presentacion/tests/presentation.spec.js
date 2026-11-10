import { test, expect } from '@playwright/test';

test('navegación por teclado y numeración', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('.slide-number')).toContainText(/1\s*\/\s*16/);
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('.slide-number')).toContainText(/2\s*\/\s*16/);
  await page.keyboard.press('ArrowLeft');
  await expect(page.locator('.slide-number')).toContainText(/1\s*\/\s*16/);
});

test('el ejercicio evalúa permisos sin ejecutar operaciones', async ({ page }) => {
  await page.goto('./#/10');
  await expect(page.locator('#evaluate')).toBeVisible();
  await page.locator('#evaluate').click();
  await expect(page.locator('#feedback')).toContainText('Decisión proporcionada');

  await page.locator('input[value="env"]').check();
  await page.locator('#evaluate').click();
  await expect(page.locator('#feedback')).toContainText('Retira el acceso al .env');
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
  for (let index = 1; index <= 16; index += 1) {
    await page.goto(`./#/${index}`);
    await page.waitForTimeout(100);
    const result = await page.locator('.slides > section.present').evaluate((section) => {
      const slide = section.getBoundingClientRect();
      const viewport = document.querySelector('.reveal').getBoundingClientRect();
      const outside = [...section.querySelectorAll('h1,h2,h3,p,li,.panel,.item,.flow,.compare,.matrix,.statement,.tags,.levels,.exercise,.pipeline,.steps')]
        .filter((element) => {
          const rect = element.getBoundingClientRect();
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
    if (!result.slideVisible || result.outside > 0) overflows.push({ slide: index, ...result });
  }
  expect(overflows).toEqual([]);
});

test('la navegación inferior muestra un segmento por diapositiva y permite saltar', async ({ page }) => {
  await page.goto('./');
  const segments = page.locator('.slide-progress__segment');
  await expect(segments).toHaveCount(16);
  await expect(segments.nth(0)).toHaveAttribute('aria-current', 'step');
  await expect(segments.nth(4)).toHaveAttribute('aria-label', /Ir a diapositiva 5:/);
  await segments.nth(4).click();
  await expect(page.locator('.slide-number')).toContainText(/5\s*\/\s*16/);
  await expect(segments.nth(4)).toHaveAttribute('aria-current', 'step');
  await expect(segments.nth(0)).toHaveClass(/is-visited/);
});

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://frame.free.nanoquant.ru/');
  await page.frameLocator('frame[name="content"]').getByRole('heading', { name: 'Сайт на фреймах' }).click();
  await page.frameLocator('frame >> nth=1').getByText('Спец.эффекты:').click();
  await page.frameLocator('frame >> nth=1').getByRole('link', { name: 'Вложенная структура' }).click();
  await expect(page.frameLocator('frame[name="content"]').frameLocator('frame[name="structure"]').getByRole('link', { name: 'Простая замена содержимого этого фрейма' })).toBeVisible();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwrightshop.ru/');
  await page.locator('#modal-1-content').getByRole('link', { name: 'Магазин' }).click();
  await page.getByRole('heading', { name: 'Магазин' }).click();
  await page.getByRole('link', { name: 'Оформление заказа' }).click();
  await page.getByRole('heading', { name: 'Сейчас ваша корзина пуста!' }).click();
  await page.locator('#modal-1-content').getByRole('link', { name: 'Магазин' }).click();
});
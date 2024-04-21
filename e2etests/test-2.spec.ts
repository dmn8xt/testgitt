import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwrightshop.ru/shop/');
  await expect(page.getByRole('heading', { name: 'Магазин' })).toBeVisible();
  
  await page.getByRole('link', { name: 'Оформление заказа' }).click();
  
  await expect(page.getByRole('heading', { name: 'Корзина', exact: true })).toBeVisible();
  
  await page.locator('#modal-1-content').getByRole('link', { name: 'Магазин' }).click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://playwrightshop.ru/shop/');
  await page.getByLabel('Добавить в корзину “Cap”').click();
  await page.getByLabel('Добавить в корзину “Polo”').click();

  // wc-block-mini-cart__badge
  // getByLabel('В корзине 0 товаров')
  await expect(page.getByLabel('В корзине 2 товара')).toHaveText('2') 
});
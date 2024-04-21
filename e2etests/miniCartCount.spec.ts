import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
//arrange
  await page.goto('https://playwrightshop.ru/shop/');
  //act
  await page.getByLabel('Добавить в корзину “Cap”').click();
  await page.getByLabel('Добавить в корзину “Polo”').click();
  
  //assert
 await expect(page.getByLabel('В корзине 2 товара')).toHaveText('2') 
 
});
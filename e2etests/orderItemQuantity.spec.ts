import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playwrightshop.ru/shop/');
  await page.getByRole('link', { name: 'Product on sale Beanie' }).click();
  await page.getByRole('button', { name: 'В корзину', exact: true }).click();
  await page.getByRole('link', { name: 'Оформление заказа' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('test@test.ru');
  await page.getByLabel('Имя').click();
  await page.getByLabel('Имя').fill('dm');
  await page.getByLabel('Фамилия').click();
  await page.getByLabel('Фамилия').fill('bel');
  await page.getByLabel('Адрес', { exact: true }).click();
  await page.getByLabel('Адрес', { exact: true }).fill('центр');
  await page.getByLabel('США, Страна/регион').click();
  await page.getByLabel('США, Страна/регион').fill('росси');
  await page.getByText('Росси', { exact: true }).click();
  await page.getByLabel('Город').click();
  await page.getByLabel('Город').fill('анапа');
  await page.getByLabel('Область/район').click();
  await page.getByLabel('Область/район').fill('анапский');
  await page.getByText('Почтовый индекс', { exact: true }).click();
  await page.getByLabel('Почтовый индекс').fill('111111');
  await page.getByRole('button', { name: 'Размещение заказа' }).click();
  // await page.getByRole('button', { name: 'Размещение заказа' }).click();
  await expect(page.getByText('Ваш заказ принят. Благодарим вас')).toBeVisible();
});
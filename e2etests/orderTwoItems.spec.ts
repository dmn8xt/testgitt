import { test, expect } from '@playwright/test';

test('test', async ({ page  }) => {
  // test.info().annotations.push({
  //   type: 'browser version',
  //   description: browser.version(),
  // });
  await page.goto('https://playwrightshop.ru/shop/');
  await page.getByLabel('Добавить в корзину “Cap”').click();
  await page.getByLabel('Добавить в корзину “Polo”').click();
  await page.getByLabel('В корзине 2 товара').click();
  await page.getByRole('link', { name: 'Просмотр корзины' }).click();
  await page.getByRole('link', { name: 'Перейти к оформлению заказа' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('teste@test.ru');
  await page.getByLabel('Имя').click();
  await page.getByLabel('Имя').fill('Dm');
  await page.getByText('Фамилия').click();
  await page.getByLabel('Фамилия').fill('Bel');
  await page.getByLabel('Адрес',{ exact: true }).click();
  await page.getByLabel('Адрес', { exact: true }).fill('Центр ');
  await page.getByLabel('США, Страна/регион').click();
  await page.getByLabel('США, Страна/регион').fill('росс');
  await page.getByLabel('Россия', { exact: true }).click();
  await page.getByLabel('Город').click();
  await page.getByLabel('Город').fill('Анапа');
  await page.getByLabel('Область/район').click();
  await page.getByLabel('Область/район').fill('анапский');
  await page.getByLabel('Почтовый индекс').fill('111111');
  await page.getByLabel('Телефон (дополнительно)').fill('12345678');
  await page.getByRole('button', { name: 'Размещение заказа' }).click();
  await page.getByRole('button', { name: 'Размещение заказа' }).click();
  await page.getByText('Ваш заказ принят. Благодарим вас').click();
});
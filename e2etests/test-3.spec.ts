import { test, expect,Page} from '@playwright/test';


let page:Page;
test.beforeEach (async({browser})=>{const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("https://playwrightshop.ru/shop/");
});

class ToNavigate{
  constructor(private page: Page){this.page=page}
}

const navigateToStoreAcc = async () => {
  await page.getByRole('link', { name: 'Мой аккаунт' }).click();
}

const navigateToStoreOrder = async () => {
 await page.getByRole('link', { name: 'Оформление заказа' }).click();
}

const navigateToStoreCart = async () => {
  await page.getByRole('link', { name: 'Корзина' }).click();
 }
 


// test('test', async ({}) => {  
//   await page.goto('https://playwrightshop.ru/shop/');}
//   await expect(page.getByRole('heading', { name: 'Магазин' })).toBeVisible();
//   await page.getByRole('link', { name: 'Мой аккаунт' }).click();
  
//   await expect(page.getByRole('heading', { name: 'Мой аккаунт' })).toBeVisible();
//   await page.getByRole('link', { name: 'Оформление заказа' }).click();
//   await expect(page.getByRole('heading', { name: 'Корзина', exact: true })).toBeVisible();
//   await page.getByRole('link', { name: 'Пример страницы' }).click();
//   await expect(page.getByRole('heading', { name: 'Пример страницы' })).toBeVisible();
//   await page.getByRole('link', { name: 'Корзина' }).click();
//   await expect(page.getByRole('heading', { name: 'Корзина', exact: true })).toBeVisible();
// });
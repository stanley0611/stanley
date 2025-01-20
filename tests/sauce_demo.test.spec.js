const {test,expect} = require ('@playwright/test')

test.beforeEach('sauce demo', async({page}) =>{

await page.goto("https://www.saucedemo.com/");

await expect (page).toHaveTitle("Swag Labs");

await page.locator('input[name="user-name"]').fill("standard_user");

await page.locator('input[name="password"]').fill("secret_sauce");

await page.locator('input[name="login-button"]').click();

})


test ('after login', async({page}) => {

await page.waitForURL('https://www.saucedemo.com/inventory.html');

const element = page.locator('button[name="add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)"]')

await element.click();

//await element.scrollIntoView({timeout:5000});

await page.close();

})


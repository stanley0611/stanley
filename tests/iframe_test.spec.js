const {test,expect} = require ('@playwright/test');
const { TIMEOUT } = require('node:dns');

test ("iframe", async({page}) => {

await page.goto('https://testapp.strategy.ai/sign-in');

await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")

await page.locator('input[type="password"]').fill("Batman@123")

await page.locator('button',[{text :'Sign In'}]).click

timeout:3000

await page.waitForURL("https://testapp.strategy.ai/strategy-chat/dashboard")

await page.pause();



})
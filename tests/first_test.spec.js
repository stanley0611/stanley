const {test, expect} = require ('@playwright/test')

test('My first test', async ({page}) =>

{
await page.goto('https://testapp.strategy.ai/')

await expect(page).toHaveTitle('Strategy AI | Better Decisions, Everywhere')

})
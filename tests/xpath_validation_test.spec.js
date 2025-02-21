const{test,expect} = require('@playwright/test')

test("xpath validation",async({page}) => {
    await page.goto("https://testapp.strategy.ai/")
    await page.locator('//span[contains(text(),"Sign In")]').click()
    await page.waitForTimeout (5000)
    await page.locator('//input[contains(@type,"email")]').fill('stanley.s@strategy.ai')
    await page.locator('//input[contains(@type,"password")]').fill('Test@123')
    await page.locator('//span[contains(text(),"Sign In")]').click()
    await page.waitForTimeout (5000)
})
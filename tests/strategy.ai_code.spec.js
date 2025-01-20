const {test,expect} = require ('@playwright/test')

test ('Test new', async ({page}) => {

     await page.goto('https://app.strategy.ai/sign-in')
     await expect(page).toHaveTitle('Sign-in | Strategy AI')
     await page.pause()
     
     await page.locator('input [name="email"]').fill("stanley.s@strategy.ai")
     await page.locator('input [name="email"]').Press('Tab')
     await page.locator('input [type="password"]').fill("Test@123")
     await page.locator(xpath ='#sign-in > div:nth-child(4) > div > button > span.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row')

     //#sign-in > div:nth-child(4) > div > button > span.q-btn__content.text-center.col.items-center.q-anchor--skip.justify-center.row
})


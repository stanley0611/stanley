// //import {test,expect, chromium} from ('@playwright/test')
// const { test, expect, chromium, firefox } = require ('@playwright/test');
// const { dir } = require('console');
// test('wednesday-test', async({page}) => {
// const browser = await firefox.launch({
//     headless: false

// })

// const context = await browser.newContext({
//      recordVideo: {
//         dir : 'Videos/',
//      }

// });

// const Page = await context.newPage();


 
//     await page.goto('https:testapp.strategy.ai/sign-in')
//     await expect(page).toHaveTitle("Sign-in | Strategy AI")

//     await page.locator('input[name="email"]').fill('stanley.s@strategy.ai')
//     await page.locator('input[type="password"]').fill('Batman@123')

//     await page.getByRole('button', { text: "Sign In" }).click()

//     await page.close()


// })


const {test,expect} = require('@playwright/test')

const browser = await chromium.launch();
const context = await browser.newContext();
const newpage = await context.newPage();

test.only("sample test", async()=>{
    await newpage.goto("https://google.com")
})





// test ('wednesday-test', async({page}) => {
// await page.goto('https:testapp.strategy.ai/sign-in')
// await expect(page).toHaveTitle("Sign-in | Strategy AI")

// await page.locator('input[name="email"]' ).fill('stanley.s@strategy.ai')
// await page.locator('input[type="password"]').fill('Batman@123')

// await page.getByRole('button', {text:"Sign In"}).click()

// await page.close()






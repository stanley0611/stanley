// const {test,expect} = require ('@playwright/test')

// test("New Test", async({page}) =>{
// await page.goto("https://www.cleartrip.com/")
// await page.getByTestId("closeIcon").click()
// await page.getByText('One way').click({select:'Round trip'});
// await page.getByText('1 Adult, Economy').click({select:'Business class'});
// await page.getByPlaceholder('Where from?').fill('Chennai');
// await page.getByPlaceholder('Where to?').fill('Bangkok');
// })



// // import { test, expect } from '@playwright/test';
// //*[@id="__next"]/div/main/div/div/div[2]/div[1]/div[1]/div/div[1]/div[2]/div/div[1]/div[1]/div/div/div/div/div/span[1]
// // test('test', async ({ page }) => {
// //   await page.goto('https://www.cleartrip.com/');
// //   await page.locator('.sc-aXZVg > .pt-6').click();
// //   await page.getByTestId('closeIcon').click();
// //   await page.getByText('Sat, Feb').click();
// //   await page.getByLabel('Tue Feb 11').getByText('11-').click();
// //   await page.getByText('Return').click();
// //   await page.getByLabel('Sat Feb 15').getByText('15-').click();
// // });


// const{test,expect} = require('@playwright/test')
// test("New Test", async() => {
//     function newPromise() {
//         return newPromise = new Promise(function(resolve,reject){
//             let x = 90
//             if (x==900){
//                 return resolve("The Value is Okay")
//             }else{
//                 return reject("The Value is not Okay")
//             }
//         })
//     }
//     newPromise()
//     .then(function(value){
//         console.log(value)
//     })
//     .catch(function(error){
//         console.log(error)
//     })
// })

test("Test", async() => {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://google.com")
    await getByText()
    await page.locator('//input[@span="Submit"]')
    await page.locator('//input[contains(text(),"Submit")]')
    await fileInput.setInputFiles('path')
    await page.on('dialog', async(dialog) =>{
        if (dialog.type()==='Alert'){
            dialog.accept()
        }else{
            (dialog.type()==='Fake') {
                dialog.dismiss()
            }
        }

    })


})
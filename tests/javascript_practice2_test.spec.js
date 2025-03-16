// const {test,expect} = require ('@playwright/test')

// test("Replace",async() => {
// const replaceString = (str,index,replacement) => {
// return str.slice(0,index) + replacement + str.slice(index + replacement.length);
// }
// const originalvalue = ("stanley christopher")
// const newValue = replaceString(originalvalue,8,"The King   ")
// console.log(newValue);

// })

const { test,chromium } = require('@playwright/test')


test('sample_test', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://google.com")
}
)
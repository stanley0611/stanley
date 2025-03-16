const {test,expect} = require('@playwright/test')

test("environments", async({page}) => {

    await page.goto(process.env.URL)
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill("Hello")
    await page.locator('#APjFqb').press('Enter')
    await page.waitForTimeout (5000) 

    console.log('UserName :'+process.env.User_Name)
    console.log('Password :'+process.env.Password)
    

}) 




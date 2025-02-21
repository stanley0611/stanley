const {test,expect} = require ('@playwright/test')

import {JsonTestData_Cars} from '../tests/QA/google.json'

for(const[key,value] of Object.entries(JsonTestData_Cars)){

test(`JsonInput ${value}`, async({page}) => {

    await page.goto(process.env.URL)
    await page.locator('#APjFqb').click();
    await page.locator('#APjFqb').fill(value)
    await page.locator('#APjFqb').press('Enter')
    await page.waitForTimeout (5000) 

})
}
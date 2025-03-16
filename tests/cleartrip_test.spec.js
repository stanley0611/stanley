const { test, expect } = require('@playwright/test')

test("ClearTrip", async ({ page }) => {
    await page.goto("https://www.cleartrip.com/");
    
    await page.getByTestId('closeIcon').click()
    await page.getByPlaceholder('Where from?').fill("Chennai")
    await page.getByPlaceholder('Where to').fill("Bangalore")
  //  await page.selectOption('One way', 'Round trip')
   // await page.locator('//span[contains (text(),"One Way")]')
   
    // await page.getByText('One Way').click()
    // await page.getByText('Round Trip').click()
    // await page.getByText('1 Adult, Economy').click()
    // await page.getByText('Adults12+ Years1').click('')
    //await page.locator('//path[contains(text(),"round")]')
    //await page.screenshot({ path: "D:/New folder/Screenshot1.PNG" })
    //await page.locator('//div[contains(@class,"gridContent")]//input[@type="date"]').click()
   // await page.locator('//div[contains(@class, "DayPicker") and contains(@class, "w-100p")]').click();

    //await page.locator('//div[contains(@class, "DayPicker w-100p")]').click()

    await page.locator('//div[data-testid="dateSelectOnward"]').click()
})


await page.getByRole('button', {text:"not-interested"}).click()
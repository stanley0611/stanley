const { test,chromium } = require('@playwright/test')

test("evalaute validation", async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Use evaluate() to access the page's title
  const title = await page.evaluate(() => {
    return document.title; // This runs in the browser context
  });

  console.log(title); // Outputs: "Example Domain"

  await browser.close();

})
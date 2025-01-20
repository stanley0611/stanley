// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://strategy.ai/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Strategy AI/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://strategy.ai/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


document.getElementById.("demo").innerHTML="Hello"


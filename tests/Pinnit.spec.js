import {test,expect} from '@playwright/test';
//const { default: test } = require('node:test');
const { chromium } = require('playwright');

test('Pinnit', async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://testapps.strategy.ai/');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.locator('input[name="email"]').fill('stanley.s@metphor.com');
  await page.locator('input[name="email"]').press('Tab');
  await page.locator('input[type="password"]').fill('Ironman@123');
  await page.locator('input[type="password"]').press('Tab');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('button', { name: 'ss' }).click();
  await page.getByText('Sign Out').click();

  // ---------------------
  await context.close();
  await browser.close();
}
);
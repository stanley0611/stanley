import { test, expect, } from '@playwright/test';



test('test', async ({ page }) => {
  await page.goto('https://testapp.strategy.ai/sign-in');
  await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")
  //await page.locator('#f_fa026795-baea-43aa-968c-4554141735da').press('Tab');
  await page.locator('input[type="password"]').fill('Batman@123');
  //await page.locator('input[type="password"]').press('Enter');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByPlaceholder('Ask a question').click();
  await page.getByRole('main').click();
  //await page.getByRole('button', { name: 'Skip Tutorial' }).click();
  await page.locator('#q-app').getByText('12 th Workspace').click();
  await page.getByRole('button', { name: 'Upload', exact: true }).click();
  await page.getByRole('button', { name: 'I understand, Continue' }).click();
  await page.getByLabel('close Upload Files to this').click();
  const fileInputSelector = 'input[type="file"]';  // Change this selector if necessary
  const filePath = 'C:\Users\stanl\Downloads\hall-hotel-very-unfocused_1203-1406.jpg'; 
  //await page.waitForSelector('text=Upload successful');
  //await page.getByLabel('close Upload Files to this').setInputFiles('hall-hotel-very-unfocused_1203-1406.jpg');
  await page.getByText('Set File IBAC Level for these Uploading filesclose')
  await page.getByRole('row', { name: 'IBAC - 40 Information' }).getByRole('radio').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.locator('button').filter({ hasText: 'chevron_right' }).click();
  await page.getByRole('button', { name: 'st', exact: true }).click();
  await page.getByText('Sign Out').click();
});

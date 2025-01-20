import { test, expect } from '@playwright/test'
import { TIMEOUT } from 'dns'
import { text } from 'stream/consumers'

test('friday test', async ({page}) => {

    await page.goto('https://testapp.strategy.ai/sign-in'),

    await expect(page).toHaveTitle("Sign-in | Strategy AI")

    await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")

    await page.locator('input[type ="password"]').fill("Batman@123")

    await page.getByRole('button', { text: "Sign In" }).click()


})

test.only('Second test', async ({page}) => {

    await page.goto('https://testapp.strategy.ai/sign-in'),

    await expect(page).toHaveTitle("Sign-in | Strategy AI")

    await page.locator('input[name="email"]').fill("stanley.s@strategy.ai")

    await page.locator('input[type ="password"]').fill("Batman@123")

    await page.getByRole('button', { text: "Sign In" }).click();

    await page.waitForURL('https://testapp.strategy.ai/strategy-chat/dashboard');

   // await page.pause();

    //await page.getByRole('button',{name:'ST'}).click();
    await page.getByRole('button', { name: 'st', exact: true }).click();

    //await page.getByRole('button',{name:'Sign Out'}).click();
    await page.getByText('Sign Out')
    


})
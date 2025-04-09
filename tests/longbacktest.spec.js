const{test,expect} =require('@playwright/test')

const browser = await chromium.launch()
const context =  await browser.newContext()
const page = await context.newPage()

test('after a longtime',async({page}) =>{
 await page.goto("https:google.com");
 await page.getByRole('button',{text:'search'});
 await page.getByText('input[name="Sign-In"]').fill('stanley.s@strategy.ai')
 await page.getByText('input[type="Password"]').fill('Test@123')
 await page.getByRole('button',{name:"Enter"}).click({button:'Right'})
 await page.browser.close()


})

test('API Testing',async({request})=>{
    const response = await request.get('')
    expect(response.status()).toBe(200)
    const text = response.text()
    expect (text).toContain('Product')
})


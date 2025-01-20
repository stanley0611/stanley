import {test,expect} from ('@playwright/test');

test ('Testfile', async ({page}) => {

    await page.goto("https://testapp.strategy.ai");

    await expect(page).toHaveTitle("Stragehy|AI");

    await page.locator('input[name="email"]').fill("stanley.s@strategy.ai");

    await page.locator('input[type="password"]').fill("Test@123");

    await page.getByRole('button', {text:'Sign In'}).click();

})

test ('practice file', async () => {})

//sample object
var obj1 = {
    x : 2,
    y : 'Hello',
    z : function (){
        return this.x;
    }
}

//sample Array - ordered list
var array1 = [3,4.5,'Hello',true];

// hoisting sample
{
function test(){
    x : 3;
console.log(x)
var x;
}
}



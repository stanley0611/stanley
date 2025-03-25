// const{test,expect} = require('@playwright/test')

// test("Api sample test",async({request}) => {

//     const response = await request.get("http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso")

//     expect(response.status()).toBe(200)

//     const field = await response.text

//     expect(field).toContain('Price')

// })


const{test,expect} = require('@playwright/test')

test('Sample API Test',async({request}) =>{

    const response = await request.get("")

    expect(response.status()).toBe(200)

    const text = await response.text

    expect(text).toContain('Product')
})

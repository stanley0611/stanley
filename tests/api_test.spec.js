const {test,expect} = require ('@playwright/test')

test('API GET response', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2');

    expect(response.status()).toBe(200);

});


test.only('API Post response', async ({ request }) => {

    const post = await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "Stanley",
                "job": "QA"
            }
        }
    );

    expect(post.status()).toBe(201);

    const text = await post.text();

    expect(text).toContain("QA");

    console.log(await post.json());




})
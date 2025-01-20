const{test,expect} = require('@playwright/test')

const{hello,hello2} = require ('./demo_test.spec')

console.log (hello());
console.log (hello2());



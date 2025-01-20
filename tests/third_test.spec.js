const{test,expect} = require('@playwright/test')

import { hello, hello2 } from ('./demo_test.spec')

console.log (hello());
console.log (hello2());
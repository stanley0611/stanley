const {test,expect} = require ('@playwright/test')

test("Replace",async() => {
const replaceString = (str,index,replacement) => {
return str.slice(0,index) + replacement + str.slice(index + replacement.length);
}
const originalvalue = ("stanley christopher")
const newValue = replaceString(originalvalue,8,"The King   ")
console.log(newValue);

})
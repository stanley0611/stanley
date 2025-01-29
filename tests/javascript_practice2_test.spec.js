const {test,expect} =require ('@playwright/test')

test("replace", async () => {
const replacestring = (str,index,replacement) => {
   return str.slice(0,index) + replacement + str.slice(index + replacement.length)
}
const originalvalue = ("Stanley CHristopher")
let newString = replacestring(originalvalue,8,"Vijay")
console.log(newString);

})
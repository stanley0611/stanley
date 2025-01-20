const {test,expect} = require ('@playwright/test');

test('test', async()=>{

var x = 3
var y = "3"
console.log(x+y);



})

test('Boolean', async() => {
var x =24
var y = 0

if(x){console.log(x)};
if(y){console.log(y)};

})

test.only('coercion', async() => {
var x = 220;
var y = "Hello";
var z = undefined;
        
x || y;    // Returns 220 since the first value is truthy
        
x || z;   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
        
if( x && y ){ 
  console.log(x && y); // This block runs because x && y returns "Hello" (Truthy)
}   
        
if( x || z ){
  console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
}
})
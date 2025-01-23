const { test, expect } = require('@playwright/test');

test('test', async () => {

  var x = 3
  var y = "3"
  console.log(x + y);



})

test('Boolean', async () => {
  var x = 24
  var y = 0

  if (x) { console.log(x) };
  if (y) { console.log(y) };

})

test('coercion', async () => {
  var x = 220;
  var y = "Hello";
  var z = undefined;

  x || y;    // Returns 220 since the first value is truthy

  x || z;   // Returns 220 since the first value is truthy

  x && y    // Returns "Hello" since both the values are truthy

  y && z   // Returns undefined since the second value is falsy

  if (x && y) {
    console.log(x && y); // This block runs because x && y returns "Hello" (Truthy)
  }

  if (x || z) {
    console.log("Code runs");  // This block runs because x || y returns 220(Truthy)
  }
})

test("Javascript reverse", async () => {

  function reverseString(str) {
    return str.split('').reverse().join('');
  }

  let result = reverseString("Hello World");
  console.log(result); // Output: "dlroW olleH"

})


test("Reverse String", async () => {
  function reverse(str) {
    return str.split('').reverse('').join('');
  }

  let result = reverse("stanley christopher");

  console.log(result);

})


test("Reverse Array", async () => {
  function reverseArray(arr) {
    return arr.reverse('');
  }
  let numbers = [90, 80, 70, 60];
  let reverse = reverseArray(numbers);
  console.log(reverse);
})


test("Even number", async()=> {
 function evennumber (array) {
   return array.filter(number => number %2 ===0)
 }
  let number = [25,30,40,57,89];
  let result = evennumber(number);
  console.log(result);

})


test.only ("Max Number", async () => {
 function maxnumber(number){
    return Math.max(...number);
 }
  let numbers = [78,89,456,675];
  let result = maxnumber(numbers);
  console.log(result);


})
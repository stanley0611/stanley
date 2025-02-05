const {test,expect} = require ('@playwright/test')

test("CGI Practice", async () => {
    function promise (prr) {
        return promise = new Promise((resolve, reject) => {
            let x =50;
            if (x==34){
                return resolve("The value is Ok")
            }else{
                return reject ("The value is not Okay")
            }
        })
    }
    promise()
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })    
    
})



test ("playwright", async ({page}) =>{
     await page.goto("https://google.com")
     await page.locator('input[name="email]').fill("stanley.s@strategy.ai")
     await page.locator('input[type="password"]').fill("Test@123")
     await page.getByRole('button',{text : 'signin'}).click()

    })

test ("callback", async() =>{
    function firstName(name,callback){
        console.log('Hello',name)
        callback()
    }
    function lastName(){
        console.log("This is after last name")
    }

    firstName("Stanley",lastName)
})


test("test",async() =>{
    function reverse (rev){
        return rev.reverse()
    } 
    let numbers = [89,67,45,67]
    let result  = reverse(numbers)
    console.log(result)
})

test("ReverseString", async() => {
    function string(str){
        return str.split('').reverse().join('')
    }
    let name = ("stanley christopher")
    let result = str(name)
    console.log(result)
})

test("MaximumNumber", async() => {
    function maximum(max) {
        return Math.max(...max)
    }
    let numbers = ([78,45,34,90])
    let result = maximum(numbers)
    console.log(result)
})


test("Promise", async() => {
    function promise2() {
    return promise2 = new Promise(function(response,reject){
        let x =90
        if (x==90){
            return response("The value is okay")
        }else{
            return reject("The value is not okay")
        }
    })
    }
    promise2()
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })

})


test ("NewPromise", async() => {
    function promisse() {
        return promisse = new Promise(function(response,reject) {
            let x =90
            if (x==900)
            {
                return response("The Value is Okay")
            }else{
                return reject("The Value is not Okay")
            }
        })
    }
    promisse()
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })
})



test("SamplePromise", async() => {
    function samplepromise() {
        return samplepromise = new Promise(function(resolve,reject) {
            let x = 90
            if (x==90){
                return resolve ("The Value is Okay")
            }else{
                return reject ("The value is not Okay")
            }
        })
    }
    samplepromise()
    .then(function(value){
        console.log(value)
    })
    .catch(function(error){
        console.log(error)
    })
})

test("Duplicate value",async() => {
    function duplicate(dup) {
        return dup.filter((value,index,array) => array.indexOf(value) !== index)
    }
    let result = duplicate([78,78,90,89,90])
    console.log(result)
})

test.only("CountOccurences", async() => {
    function occurence(occ) {
        return occ.reduce((acc,value) => {
            acc[value] = (acc[value] || 0) + 1
        return acc; 
        },{})
    }
    let result = occurence([89,89,67,56,67])
    console.log(result)
})
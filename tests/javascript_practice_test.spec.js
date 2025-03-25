const{test,expect, chromium} = require ('@playwright/test')

test ("Maximum", async() => {
let numbers = ([78,98,56,45]);

let result = Math.max(...numbers);

console.log(result)

})

test ("Reverse", async () => {
function reverse(rev){
    return rev.split('').reverse().join('');
}
let test = reverse("Stanley Christopher");
console.log(test);

})

test ("Duplicate", async ()=> {
    function duplicate(dup){
        return dup.filter((value,index,arr) => {
            let duplicatevalue = arr.indexOf(value) !== index
            return duplicatevalue
        })
    }
    let result = duplicate([67,67,89,345,678,678,90]);
    console.log(result)

}
)

test ("Capital Letter", async () => {
function capital(cap){
    return cap.filter(letters => /[A-Z]/.test(letters))

} 
let result = capital(['a','X','m','P','U']).sort()
console.log(result);

})

test ("CapitalChange", async ()=>{
function capitalChange(cc) {
    return cc.toUpperCase()
}
let result = capitalChange("stanley christopher")
console.log(result)
})

test("CaptialArray", async() => {
function captialArray(CAR) {
    return CAR.split('').map(CAR => CAR.toUpperCase()).join('')
}
let result = captialArray("stAnLey Christopher")
console.log(result)
})


test("Reverser", async() => {
    function reverser(revr){
        return revr.reverse()
    }
    let result = reverser([90,67,68])
    console.log(result)
})

test("TestResult",async() => {
    function testresult(tr) {
        return tr.split('').reverse().join('')
    }
    let result = testresult('Stanley Chrisopher')
    console.log(result)
})

test("Testduplicates", async() => {
    function testduplicate(tdup){
        return tdup.filter((value,index,arr) => {
            let duplicate = arr.indexOf(value) == index
            return duplicate
        })
    }
    let result = testduplicate([67,78,67,57,78])
    console.log(result)
})


test("Test123", async () => {
    function captialfirst(clf) {
        return clf
            .split(' ')
            .map(word => (word.charAt(0).toUpperCase()) + word.slice(1))
            .join(' ')
    }

    function reverserrr(rsrr) {
        return rsrr.split('').reverse().join('')
    }
    let x = reverserrr('my name is stanley')
    let result = captialfirst(x)
    console.log(result)
})

test("CallbackNew", async() => {
    function callback(cbl){
        let x = 9002
        if (x==900){
            return cbl(null,"The value is Okay");
        }else{
            return cbl("The value is not okay",null);
        }
    }
   callback(function(error,value){
    if (error){
        console.log(error)
    }else{
        console.log(value)
    }
   })
})

test("Addition", async() =>{
    function addition(sum){
        return sum.reduce((addition,currentvalue) =>{
         return addition + currentvalue
        },0)
        
    }
    let result = addition([67,56,45,34,35])
    console.log(result)
})

test("FruitOccurence", async() => {
    function countfruit(cft){
        return cft.reduce((count,currentvalue) =>{
          if (count[currentvalue]){
              count[currentvalue] +=1
          } else{
              count[currentvalue] = 1
          }
          return count
        },{})
    }
    let result = countfruit(['Apple','Orange','Melons','Apple'])
    console.log(result)
})

test.only("Sum_of_two_values",async() =>{
let result = [1,2,3,]
let result_2 =  [7,8,9]

function addition(add){
  return add.reduce((sum,currentvalue) => {
      return sum+currentvalue
  },0)
 
}
let final_result = addition([...result, ...result_2])
console.log(final_result)
})


// function occurence(occr){
//     return occr.split('').reduce((letter,currentvalue) => {
//         if (letter[currentvalue]){
//             letter[currentvalue] +=1
//         }else{
//             letter[currentvalue] =1
//         }
//          return letter
//     },{})
   
// }
// let result_2 = occurence("stanley christopher")
// console.log(result_2)


// function secondbiggest(secb){
//     let secondmax = [...new Set(secb)].sort((a,b) =>(b-a))
//     return secondmax
// }
// let result = secondbiggest([67,67,89,89,34,23,89,12,55])
// console.log(result)

// function occurence(...occr){
//     return occr.join('').split('').reduce((letter,repeated) => {
//         if (letter[repeated]){
//             letter[repeated] +=1
//         }else{
//             letter[repeated] =1
//         }
//         return letter
//     },{})
// }
// let results = occurence(["Stanley","Christopher","Sureka","Lijo Aarick"])
// console.log(results)


let name = "stanley christopher"
function occurence(occur){
    return occur.split('').reduce((newvalue,currentvalue) =>{
        if(newvalue[currentvalue]){
            newvalue[currentvalue] +=1
        }else{
            newvalue[currentvalue] = 1
        }
        return newvalue
    },{})
}
let result = occurence(name)
console.log(result)

test("sample test",async() => {
    const browser = await chromium.launch()
    const context = await browser.newcontext()
    const page = await context.newpage()
    await page.goto("https://google.com")
    expect (page).toHaveUrl("")
    await page.locator(getByLabel())
})

//fibbonacci series
test("fibbonacc",async() => {
    function fibonacci(fibbi){
        if (fibbi <= 1){
            return fibbi
        }
        return fibonacci(fibbi-1) + fibonacci(fibbi-2)
    }
    let n =15
    for(let i = 0; i <n; i++){
        console.log(fibonacci(i))
    }
})

//Duplicate removal using for loop
let numbers = [56,45,76,45,34,56]
let test = []
for (let value of numbers){
    if(!test.includes(value)){
        test.push(value)
    }
}
console.log(test)

// Palindrome check
function palindrome(palin){
    palin = palin.toLowerCase().replace(/[^a-z0-9]/g, '')

    return palin === palin.split('').reverse('').join('')
}
    
let result = palindrome("stanley") 
console.log(result)
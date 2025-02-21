const{test,expect} = require ('@playwright/test')

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

test.only("FruitOccurence", async() => {
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
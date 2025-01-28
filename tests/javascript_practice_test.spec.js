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

test.only("CaptialArray", async() => {
function captialArray(CAR) {
    return CAR.split('').map(CAR => CAR.toUpperCase()).join('')
}
let result = captialArray("stAnLey Christopher")
console.log(result)
})
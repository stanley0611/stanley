const {test,expect} = require ('@playwright/test')

test ("promise",async() => {

    function promise () {

    return promise = new Promise (function(resolve,reject) {

    let x = true ;

    if (x == false){
        resolve("Okay");
    }else {
        reject("error");
    }

    })

    }

    promise()
    .then (function(value){
        console.log(value);
    })
    .catch (function(error){
        console.log(error);
    })



})
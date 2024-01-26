
function sayMyName(){
console.log("S")
console.log("A")
console.log("R")
console.log("T")
console.log("H")
console.log("A")
console.log("k")
}

// sayMyName() //sayMyName is reference

// function addTwoNumbers(number1,number2){
//     // number1,number2 are the parameters
//     console.log(number1+number2);
// }

function addTwoNumbers(number1,number2){
    // number1,number2 are the parameters
    // let result=number1+number2
    // return result

    return number1+number2
}

const result=addTwoNumbers(3+4) //3,4 are the arguments

// console.log("Result: ",result)

function loginUserMessage(userName){

    if(userName===undefined){
        //!userName
        console.log("Please enter userName")
        return 
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage("Sarthak"))
// console.log(loginUserMessage())

function calculateCartPrice(val1,vval2,...num1){
    // ... is known as rest operator and spread oprerator
    return num1
}

console.log(calculateCartPrice(100,200,300,500,600))

const user={
    UserName: "Sarthak Maahajan",
    age:22
}

function handleObject(anyObject){
    console.log(`Username id ${anyObject.UserName} and age is ${anyObject.age}`);
}

handleObject({
    username:"Hero",
    age:30
})

const myNewArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
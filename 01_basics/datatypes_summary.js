// primitive
// 7 types call by value:
// string, number, boolean,null,undefined,symbol, Bigint

// js is dynamic typed

// const score:number=100 (typescript)

const score=100
const ScoreValue=100.33

const isLoggedIn=false
const outsideTemp=null

let useremail;

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId)

// reference type (Non-primitive)
// arrays, objects, functions
// they return onject as a datatype 

const heros=['shaktiman','naagraj'];

let myObj={
    name:"Sarthak",
    age:26,
}

const myFunction=function(){
    console.log("Hello world")
}

// https://262.ecma-international.org/5.1/#sec-11.4.3

//**********memory */

//stack(primitve)[we get copy],heap(non-primitive)[value change in original one]

let myYoutubeName="Helloone"

let anothername=myYoutubeName
anothername='Hello'

console.log(myYoutubeName)
console.log(anothername)

let user={
    email:"G@google.com",
    upi:"g@ybl",
}

let userTwo=user
userTwo.email="a@gmail.com"

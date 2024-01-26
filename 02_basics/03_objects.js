// singleton usinf constructors
// Object.create()


// object litrals

const mySym=Symbol("key1")

const JsUser={
    name:"Sarthak",
    "full name":"Sarthak Mahajan",
    age:22,
    [mySym]:"mykey1",//to use it as symbol use []
    location:"Mohali",
    email:"sarthak@gmail.com",
    isLoggedIn:false,
    lastLoggedinDays:["Monday","Saturday"]
}

// How to access elements
// console.log(JsUser.email)
// console.log(JsUser["email"])
// // console.log(JsUser.full name) it gives error so we use [] insted of .
// console.log(JsUser[mySym])

// JsUser.email='Sarthak@gmail.co.in'
// Object.freeze(JsUser)

JsUser.greetings=function(){
    console.log(`Hello Js user, ${this["full name"]}`) // this ets the properties of object
}

// console.log(JsUser.greetings) it return function reference
console.log(JsUser.greetings())


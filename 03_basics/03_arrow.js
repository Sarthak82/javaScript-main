const user={
    username: "Sarthak",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} ,welcome to website`);
        console.log(this)
    },
    // this reffers to the current context
    
     
}

// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this) // this is empty object

// function chai(){
//     let userName="Sarthak"
//     console.log(this.userName)
//     // this works in object not in function
// }

// chai()


//arrow function
const chai =() =>{
    let userName="Sarthak"
    console.log(this.userName)
}

// chai()

// // basic arrow fucntion
// const addTwo=(num1,num2) =>{
//     return num1+num2
// }


//implicit return 
// const addTwo=(num1,num2) => (num1+num2)
const addTwo=(num1,num2) => ({userName:"Sarthak"})

console.log(addTwo(3,4))


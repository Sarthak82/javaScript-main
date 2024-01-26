// Immediately Invoked Function Expressions(IIFE)

// normal function
// function chai(){
//     console.log(`DB Connected`)
// }

// chai()

//IIFE
(function chai(){
    // this is named iife
    console.log(`DB Connected`)
})();

// iife as arrow function

( (name)=>{
    //this is unnamed iife
    console.log(`DB connected two ${name}`)
} )("hello")

// not working due to code but due to semicolon. After a function is invoked we tell that function where to stop so we need to use semi colon

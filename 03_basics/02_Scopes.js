// let a = 10
// const b= 20
// var c= 30

{} // these curly braces act as a scope

let a=300

if (true){
    // inside if it is block scope
    // while outside is global scope
    let a = 10
    const b= 20
    var c= 30
    // console.log("Inner A: ",a);
}
// console.log("Outer A: ",a)
// console.log(b)
// console.log(c)

function one(){
    const userName='Sarthak'

    function two(){
        const website="Youtube"
        console.log(userName)
    }
    // console.log(website)
    two()
}

// one()

// ++++++++++++++++++++ intresting ++++++++++++++++++++

function addone(num){
    return num+1
}
console.log(addone(5))


// expressions

console.log(addtwo(5))
// it gives error because we declare the function in a variable
const addtwo=function(num){
    return num+2
}



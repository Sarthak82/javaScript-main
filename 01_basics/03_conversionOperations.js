let score = "33abc" // it get converted in number but it shows NAN as output. if Score in null then the output is zero. undefined then NaN

console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

// NaN reffers to not a number but it's type is number
// "33" => 33
// "33abc" => NaN
// true => 1; false=> 0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 2 => false
// "" => false; "Hello" => true 

// ***************** operations *************

let value = 3
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2=" sarthak"
let str3=str1+str2

console.log(str3)

console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1" + 2 + 2) // 122
console.log(1+2+2) // 32

// it all occurs through ecma script guidelines

console.log(+true) // 1
console.log(+"") // 0

let gameChanger=2
console.log(gameChanger++)
console.log(++gameChanger)

// link to conversion
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
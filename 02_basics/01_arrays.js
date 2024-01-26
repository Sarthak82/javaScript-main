// array

const myArray=[0,1,2,3,4,5]
const myHeros=['Ironman','Batman','Superman']

const myArr2=new Array(1,2,3,4)
// console.log(myArray[1])

//Array methods

myArr2.push(6)
myArr2.push(7)
myArr2.pop()
myArray.unshift(9) // insert at first
myArray.shift() // remove from start

// console.log(myArray)

const newArr=myArray.join()

// console.log(myArray)
// console.log(newArr)

//slice ,splice

console.log("A ",myArray )

const myn1=myArray.slice(1,3)
console.log(myn1)
console.log("B ", myArray)


const myn2=myArray.splice(1,3)
console.log(myn1)
console.log("C ", myArray)

// splice manuplate the original array while slice don't



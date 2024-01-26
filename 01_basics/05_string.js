const name="Sarthak"
const repoCount=20

// console.log(name+repoCount+' value'); outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

const gameName = new String('Sarthak-hc')

console.log(gameName[0])

console.log(gameName.length);
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('r'))

const newString=gameName.substring(0,4) //ignores negative values
console.log(newString)

const anotherString=gameName.slice(-8,4)
console.log(anotherString)

const newStringOne= "    sarthak   "
console.log(newStringOne)
console.log(newStringOne.trim())
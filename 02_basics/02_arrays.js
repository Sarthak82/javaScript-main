const marvel_heros=['Thor','Ironman','Spiderman']

const dc_heros = ['Superman','flash','Batman']

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)

// let newHeros=marvel_heros.concat(dc_heros)
// console.log(newHeros)

const allNewHeros=[...marvel_heros,...dc_heros] // spread operator


// console.log(allNewHeros)

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realAnotherArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray)

console.log(Array.isArray("Sarthak"))
console.log(Array.from("Sarthak"))

console.log(Array.from({
    name:"Sarthak" //intresting case as it gives empty array
}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
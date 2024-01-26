let myDate= new Date()
console.log(myDate);

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toJSON())

// console.log(typeof myDate)

let myCreatedDate=new Date(2023,0,23)
// console.log(myCreatedDate.toDateString())

let myCreatedDateOne=new Date("2023-01-14")
// console.log(myCreatedDateOne.toLocaleDateString())

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())

console.log(Math.floor(Date.now()/1000));//convert into seconds

let newDate=new Date()
console.log(newDate.getMonth())
// const coding=["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item)=>{
//     console.log(item)
//     //it don't return any value
// })

// console.log(values)

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=>{
//     return num>4
// }) // it return the values
// console.log(newNums);

const newNums=[]

myNums.forEach((num)=>{
    if(num>4){
        newNums.push(num)
    } 
})

console.log(newNums);
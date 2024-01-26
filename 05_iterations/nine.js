// reduce method

const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)

// const myTotal=myNums.reduce((acc,currval)=>(acc+currval),0)

// reduce takes acc value as 0 that is mentioned after ',' acc reffers to accumulator. acc takes value from the return and save its value for the next add operation 

// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"js Course",
        price: 2999
    },
    {
        itemName:"python Course",
        price: 999
    },
    {
        itemName:"Mobile Dev",
        price: 5999
    },
    {
        itemName:"Data science",
        price: 12999
    },
]

const totalPrice=shoppingCart.reduce( (acc,curr) => (acc+curr.price) ,0)

console.log(totalPrice)
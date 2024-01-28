// in most of the cases we consume promises

// const promiseOne = new Promise(function(resolve,rejection){
//     // do an async task
//     // DB calls, cryptography, m=network call
//     setTimeout(function(){
//             console.log('Async task is complete')
//             resolve()
//             // this function is used to connect resolve and .then() method
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })


// .then() => resolve 


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2')
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("Async two resolved");
// })


// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//             resolve({username: "Chai",email:"chai@example.com"})
//     },1000)
// })

// promiseThree.then(function (user) {
//     console.log(user)
// })

// const promiseFour = new Promise(function (resolve,reject) {
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username: "Chai",email:"chai@example.com"})
//         } else{
//             // rejection gives error
//             reject('Error: Something went wrong')
//         }
//     },1000)
    
// })

// // this is known as chaining. 
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     // this then take the value which is returned by the above then
//     console.log(username)
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=> console.log("Finally the promise is either resoved or rejected"))


// const promiseFive= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//         if(!error){
//             resolve({username: "javaScript", password:"123"})
//         }else{
//             reject("ERROR: JS went wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){

//     try {
//         const response = await promiseFive        
//     } catch (error) {
//         console.log(error)
//     }
//     // const response = await promiseFive
//     // // promisefive is an object we can't consme it like promisefive()
//     // console.log(response)
// }

// consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
    
//         const data=await response.json()
//         // response also takes time for its conversion
//         console.log(data)
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUsers()


// now writting in TouchEvent,catch

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data))
.catch(()=>console.log('Error'))

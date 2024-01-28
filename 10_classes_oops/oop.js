// object literals

const user = {
    username:"Sarthak",
    loginCount:8,
    signedIn:true,

    getUserDetais: function(){
        // console.log("Get user detaisl from database")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user)
// console.log(user.getUserDetais())

// console.log(this) // empty context but in web it is very different

// const promiseOne=new Promise() // new is constructor function

function User(userName,loginCount,isLoggedIn){
        this.userName=userName
        this.loginCount=loginCount
        this.isLoggedIn=isLoggedIn
        
        // return this
}

const userOne=new User('hitesh',12,true)
const userTwo=new User('ChaiAurCode',11,false)
// userTwo will overwrite all values
console.log(userOne.constructor) // it is the reference to the function

// console.log(userTwo)

// new keyword craete empty object that is known as instance
// constructor function is called in which all the methods are wrapped in it
// all are added in 'this'
// all are recieved in function

// constructor

const tinderUser=new Object() // singleton onject
// const tinderUser={} //Non singleton

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userFullName:{
            fisrtName:"Sarthak",
            lastName:"Mahajan"
        }
    }
}

// console.log(regularUser.fullname.userFullName)

const obj1= {
    1:"a",
    2:"b",
}

const obj2={
    10:"c",
    11:"d"
}

// const obj3={obj1,obj2}
// console.log(obj3)

// const obj3 = Object.assign({},obj1,obj2)
// {} is optional but good to provide. It act as target and other as source

const obj3= {...obj1,...obj2} // spread operator
// console.log(obj3)

const users=[
    
    {
    id:1,
    email:"h@gmail.com"
    },
    
    {
    id:1,
    email:"h@gmail.com"
    },
     
    {
    id:1,
    email:"h@gmail.com"
    }
]

users[1].email


// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser)) 
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("id"))
// checks for property in object

const course={
    courseName:"Js in hindi",
    price:"999",
    courseInstructor:"XYZ"
}

// course.courseInstructor

const {courseInstructor: CI} = course

console.log(CI)


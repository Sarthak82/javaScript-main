// let myName="god    "
// let myChannel="Chai    "

// console.log(myName.trueLength)


let myHeros=['Thor','Spiderman']

let heroPower={
    thor: 'hammer',
    spiderman:'sling',

    getSpiderPower:function(){
        console.log(`Spidy power is : ${this.spiderman}`)
    }
}

Object.prototype.god=function(){
    console.log('god is present in all objects')
}

Array.prototype.heyGod=function(){
    console.log(`God says hello`)
}

// heroPower.god()
// myHeros.god()
myHeros.heyGod()
// heroPower.heyGod()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}


const Teacher={
    makeVideo:true
}

const TeachingSupprot={
    isAvailable:false
}

const TASupprot={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupprot
}

Teacher.__proto__= User


// modern syntax

Object.setPrototypeOf(TeachingSupprot,Teacher)

let anotherUserName="God   "

String.prototype.trueLength=function(){
    // console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);

}

anotherUserName.trueLength()
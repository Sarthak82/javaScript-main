function setUsername(username){
    // complex DB calls
    this.username=username
    console.log('Called')
}

function createUser(username,email,password){
    // setUsername(username) // in reality call is not happening. In this js background only refference is transferred
    setUsername.call(this,username)
    this.email=email
    this.password=password
}


const chai=new createUser("Chain","chai@fb.com","123")
console.log(chai)
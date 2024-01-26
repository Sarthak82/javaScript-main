// for loop


for (let i = 0; i < 10; i++) {
    const element=i;
    
    if (i==5){
        //console.log("5 is the best number ")
    }
    
    //console.log(element)

}


// console.log(i) // throws errors

for (let i = 0; i <=10; i++) {
    
    // console.log(`Outer Loops value: ${i}`)

    for (let j = 0; j <=10; j++) {
        
        // console.log(`Inner Loops value: ${j}  and Outer Loop Value: ${i}`)

        // console.log(`${i} * ${j} = ${i*j}`)
        
    }
    
}

let myArray=['Flash',"Batman","Superman"]

for(let i=0 ; i<=myArray.length ; i++){

    // const element = myArray[i];
    // console.log(element)

}

// in js there is no outof bound it gives undefined

// break and continue

// for (let index = 0; index <= 20; index++) {
    
//     if(index===5){
        
//         console.log("Detected 5")
//         break
//     }

//     console.log(`Value of index is ${index}`)
    
// }


for (let index = 0; index <= 20; index++) {
    
    if(index===5){

        console.log("Detected 5")
        continue

        // continue skip the condition
    }

    console.log(`Value of index is ${index}`)

}











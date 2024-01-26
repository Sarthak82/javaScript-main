// forin loop(loop in objects)
// it always print keys 

const myObject={
    js:"javaScript",
    cpp:'C++',
    rb:'Ruby',
    swift:'swift by apple'
}


// for (const key in myObject) {
//     console.log(`Keys: ${key} and Values: ${myObject[key]}`)
// }


// const programming=['js','rb','py',"java","cpp"]

// for (const key in programming) {
//     console.log(programming[key])
// }

const map=new Map()
map.set('IN',"India" )
map.set('IN',"India" )
map.set("USA","United States Of America")
map.set('FR','Frace')

for (const key in map) {
    console.log(key)
}

// No output because map is not iterable


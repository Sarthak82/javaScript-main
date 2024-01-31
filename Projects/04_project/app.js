const slides=document.querySelectorAll(".slide")
let counter=0;

slides.forEach(
    (slide,index)=>{
    slide.style.left=`${index*100}%`

})


const goNext=()=>{
    counter++
    if(counter>=4){
        counter=0
        slideImages()
    }else{
        slideImages()
    }
}

const goPrev=()=>{
    counter--
    if(counter<0){
        counter=3
        slideImages()
    }else{
    slideImages()
}
}


const slideImages=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
            
        }
    )
}
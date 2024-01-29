const button = document.querySelector('button')
const body = document.querySelector('body')

const color=['red','green','blue','orange']


button.addEventListener(`click`,()=>{
    const ans=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[ans]
})
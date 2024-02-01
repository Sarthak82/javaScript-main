const inputBox=document.querySelector('#input-box')
const listConatiner=document.querySelector('#list-container')

function addTask(){
    if(inputBox.value===''){
        alert("You must write something")
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputBox.value
        listConatiner.appendChild(li)
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputBox.value=""
    saveData()
    
}

listConatiner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)


function saveData(){
    localStorage.setItem("data",listConatiner.innerHTML)
}

function showList() {
    listConatiner.innerHTML=localStorage.getItem("data")
}

showList()
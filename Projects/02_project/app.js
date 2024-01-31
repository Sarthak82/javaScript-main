
(function(){
    const form= document.querySelector('#message-form')
    form.addEventListener('submit',function(e){
        e.preventDefault()
        
        const message=document.querySelector('#message')
        const feedback=document.querySelector('.feedback')
        const messageContent=document.querySelector('.messgae-content')
        
        if(message.value === ''){
            console.log('message')
            feedback.classList.add('show')
            setTimeout(() => {
                feedback.classList.remove('show')
                
            }, 4000);

        }else{
            messageContent.textContent=message.value
            message.value=''
        }
    })
})()
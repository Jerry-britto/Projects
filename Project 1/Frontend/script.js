const button = document.querySelector('.submit-btn')
const button1 = document.querySelector('.clear-btn')
const name_input = document.querySelector('#name')
const idea_box = document.querySelector('#idea')
const display = document.querySelector('.greet-responses')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    const name = name_input.value;
    const idea = idea_box.value;
    if(name.length>0 && idea.length>0){
        display.innerHTML +=`
        <div class="card">
            <div class="card-name">${name}</div>
            <div class="card-content">${idea}</div>
        </div>
        `
        name_input.value =''
        idea_box.value = ''
    }
    else{
        alert("Dont keep your entries empty")
    }
})
button1.addEventListener('click',e=>{
    e.preventDefault()
    display.innerHTML = ''
})



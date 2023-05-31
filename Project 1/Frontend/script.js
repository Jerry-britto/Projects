const button = document.querySelector('.submit-btn') //submits idea
const button1 = document.querySelector('.clear-btn') //deletes all ideas
const button2 = document.querySelector('.del-btn')  //delete a particular idea
const name_input = document.querySelector('#name')
const idea_box = document.querySelector('#idea')
const display = document.querySelector('.greet-responses')
let count = 0;
button.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('clicked')
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
button2.addEventListener('click',e=>{
    e.preventDefault();
    let input = parseInt(prompt('Which idea would you like to delete'))
    display.removeChild(display.children[input-1])
})



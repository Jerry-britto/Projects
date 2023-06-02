const button = document.querySelector('.submit-btn') //submits idea
const button1 = document.querySelector('.clear-btn') //deletes all ideas
const button2 = document.querySelector('.del-btn')  //delete a particular idea
const button3 = document.querySelector('.update-btn') //update a particular idea
const name_input = document.querySelector('#name') //to grab name
const idea_box = document.querySelector('#idea') //to grab idea
const display = document.querySelector('.greet-responses') //to grab parent which contains both name and idea
button.addEventListener('click', (e) => {
    e.preventDefault() //avoids the website to be reloaded
    console.log('clicked')
    const name = name_input.value;
    const idea = idea_box.value;
    if (name.length > 0 && idea.length > 0) {
        display.innerHTML += `
        <div class="card">
            <div class="card-name">${name}</div>
            <div class="card-content">${idea}</div>
        </div>
        `
        name_input.value = ''
        idea_box.value = ''
    }
    else {
        alert("Dont keep your entries empty")
    }
})
button1.addEventListener('click', e => {
    e.preventDefault()
    display.innerHTML = ''
})
button2.addEventListener('click', e => {
    e.preventDefault();
    let input = parseInt(prompt('Which idea would you like to delete'))
    if (input <= display.childElementCount) {
        display.removeChild(display.children[input - 1])
    }
    else {
        alert('There is no index of such value existing please recheck once')
    }
})
button3.addEventListener('click', (e) => {
    e.preventDefault()
    let choice = parseInt(prompt("Which idea you will like to update: "))
    if (choice <= display.childElementCount) { //checking whether it exists
        let choice1 = prompt("What will you like to update name->n || idea->i || both->b")
        if (choice1 == 'n') {
            let name = prompt('Enter new name')
            display.children[choice - 1].children[0].textContent = name
        }
        else if (choice1 == 'b') {
            let name = prompt('Enter new name')
            let idea = prompt('Enter new idea')
            display.children[choice - 1].children[0].textContent = name
            display.children[choice - 1].children[1].textContent = idea
        }
        else if (choice1 == 'i') {
            let idea = prompt('Enter new idea')
            display.children[choice - 1].children[1].textContent = idea
        }
        else {
            alert('Kindly enter the appropriate option')
        }
    }
    else {
        alert('There is no index of such value existing please recheck once')
    }
})



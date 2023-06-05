const buttons = document.querySelectorAll('.button')
let string = ''
const divide = document.querySelector('.divide')
document.querySelector('.main').style.background = 'aqua'
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.textContent == 'AC') { //erase everything
            string = ''
            document.querySelector('input').value = string
        }
        else if (e.target.textContent == '=') {//print result
            string = string.replace('X', '*')
            string = string.replace(divide.textContent, '/')
            string = math.evaluate(string)
            document.querySelector('input').value = string
        }
        else if (e.target.textContent == 'DEL') { //delete last number
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string
        }
        else {//Print entered button on the input box
            string += e.target.textContent
            document.querySelector('input').value = string
        }
    })
})



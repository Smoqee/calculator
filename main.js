const digits = document.querySelectorAll('.digit')
const operations = document.querySelectorAll('.operation')
const initiations = document.querySelectorAll('.initiation')

const displayUI = document.querySelector('#display')


let displayValue = '0'
let savedValue = ''
let selectedOperator = ''

let STATE = 'BEGIN'

digits.forEach(element => {
    
    element.addEventListener('click', (e) => {
        if(STATE == 'RESULT') {
            STATE = 'BEGIN'
        }
        addToDisplay(element)
    })
})


operations.forEach(element => {
    element.addEventListener('click', (e) => {
        if(STATE == 'OPERATE') {
            resultDisplay()
            savedValue = displayUI.innerText
            displayValue = '0'
            selectedOperator = element.innerText
            STATE = 'OPERATE'
        } else {
            savedValue = displayUI.innerText
            displayValue = '0'
            selectedOperator = element.innerText
            STATE = 'OPERATE'
        }
        
            
        
    })
})

initiations.forEach(element => {
    element.addEventListener('click', (e) => {
        if(element.innerText == '=') {
            resultDisplay()
            savedValue = displayUI.innerText
            displayValue = '0'
            STATE = 'RESULT'
        }

        if(element.innerText == 'AC') {
            resetCalculator()
        }

    }) 
})


function addToDisplay(element) {
    if (displayValue == '0') {
        displayValue = element.innerText
        displayUI.innerText = displayValue
    } else {
        displayValue += element.innerText
        displayUI.innerText = displayValue
    }
}

function resetCalculator() {
    displayValue = '0'
    savedValue = ''
    selectedOperator = ''
    displayUI.innerText = displayValue
    STATE = 'BEGIN'
}

function resultDisplay() {
    result = operate(selectedOperator, parseFloat(savedValue), parseFloat(displayValue))
    displayUI.innerText = result
}

function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b)
            break;
        case '-':
            return subtract(a, b)
            break
        case '*':
            return multiply(a, b)
            break
        case '/':
            return divide(a, b)
            break
        default:
            break;
    }
}
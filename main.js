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
//selecting digits
const digits = document.querySelectorAll('.digit')
let currentShownValue = ''

//changing display to when digit button is clicked by calling function
digits.forEach(element => {
    element.addEventListener('click', (e) => {
        currentShownValue += element.innerText
        displayValue(currentShownValue)
    })
})

//selecting display
const display = document.querySelector('#display')

//function to change display
function displayValue(value) {
    display.innerText = value
}

//selecting operators
const operators = document.querySelectorAll('.operation')

//save selected operator and display number and change display value to nothing after next digit input
let selectedOperator = ''
let firstValue = undefined
operators.forEach(element => {
    element.addEventListener('click', (e) => {
        firstValue = parseInt(currentShownValue)
        selectedOperator = element.innerText
        currentShownValue = ''
    })
})

//select initiation buttons
const initiations = document.querySelectorAll('.initiation')

initiations.forEach(element => {
    element.addEventListener('click', (e) => {
        if(element.innerText == '=') {
            displayValue(operate(selectedOperator, firstValue, currentShownValue))
        }
    })
})
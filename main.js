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
let currentShownValue = '0'

//changing display to when digit button is clicked by calling function
digits.forEach(element => {
    element.addEventListener('click', (e) => {
        if(selectedOperator != '=') {
            if(currentShownValue != '0') {
                currentShownValue += element.innerText
                displayValue(currentShownValue)
            } else {
                currentShownValue = element.innerText
                displayValue(currentShownValue)
            }
        } else {
            currentShownValue = element.innerText
            displayValue(currentShownValue)
            selectedOperator = ''
        }
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
let firstValue
operators.forEach(element => {
    element.addEventListener('click', (e) => {
        
        if(selectedOperator !='' && selectedOperator != '=') {
            solution = operate(selectedOperator, parseInt(firstValue), parseInt(currentShownValue))
            displayValue(solution)
            firstValue = solution
        }
        firstValue = (selectedOperator !='' && selectedOperator != '=') ? solution: currentShownValue

        selectedOperator = element.innerText
        currentShownValue = '0'
    })
})

//select initiation buttons
const initiations = document.querySelectorAll('.initiation')

let solution = 0
// if = is pressed show solution and reset everything, save solution as firstValue
initiations.forEach(element => {
    element.addEventListener('click', (e) => {
        if(element.innerText == '=') {
            solution = operate(selectedOperator, parseInt(firstValue), parseInt(currentShownValue))
            displayValue(solution)
            firstValue = solution
            selectedOperator = '='
            currentShownValue = solution
        }
    })
})

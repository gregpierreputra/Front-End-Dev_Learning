// Commented out code
//document.getElementById("count-element").innerText = 5

// DOM - Document Object Model
// Document - As we are interacting with an HTML document 
// Object - The document keyword is of the data type Object. The HTML document is an Object datatype
// Model - The real HTML code is modelled using JavaScript.
// TL:DR Using JavaScript to modify a website

let count = 0
let countElement = document.getElementById("count-element")
let saveElement = document.getElementById("save-element")
let errorElement = document.getElementById("error-msg")
let sumElement = document.getElementById("sum-element")

let num1 = 8
let num2 = 2
document.getElementById("num1-element").textContent = num1
document.getElementById("num2-element").textContent = num2

function add()
{
    let addTotal = num1 + num2
    sumElement.textContent = "Sum: " + addTotal
}

function subtract()
{
    let subtractTotal = num1 - num2
    sumElement.textContent = "Sum: " + subtractTotal
}

function multiply()
{
    let multiplyTotal = num1 * num2
    sumElement.textContent = "Sum: " + multiplyTotal
}

function divide()
{
    let divideTotal = num1 / num2
    sumElement.textContent = "Sum: " + divideTotal
}


function error()
{
    console.log("Error message rendered")
    let errorMessage = "Something went wrong, please try again. o 3 o"
    errorElement.textContent = errorMessage
}



let firstName = "Gregorius"
let lastName = "Putra"
let fullName = firstName + " " + lastName
console.log(fullName)

let linda = "Linda"
let HiThereGreeting = "Hi there"
let lindaGreeting = HiThereGreeting + ", " + linda + "!"
console.log(lindaGreeting)


let HiMyNameIsGreeting = "Hi, my name is "
let myGreeting = HiMyNameIsGreeting + fullName
console.log(myGreeting)

let myPoints = 3

function add3Points()
{
    myPoints += 3
}

function remove1Point()
{
    myPoints -= 1
}

console.log("myPoints before function executions: " + myPoints)
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()
console.log("myPoints after function executions: " + myPoints)


function increment()
{
    count += 1
    countElement.innerText = count
}

function save()
{
    let countString = count + " - "
    saveElement.textContent += countString
    count = 0
    countElement.innerText = count
}

// Calling a value before initialization leads to ReferenceError - cannot access 'x' before Initialization
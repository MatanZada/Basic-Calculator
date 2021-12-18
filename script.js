// 1. Create two inputs
// 2. Double button and split button.
// 3. Capture the above elements = 2 inputs + 2 buttons
// 4. Multiplication
// function: while pressing:
// 1. Capture the inputs(get value)
// 2. Make a calculation
// 3. Display the result in the DOM.
// 5. Distribution
// function: At the time of pressing:
// 1. Capture the inputs(get value)
// 2. Make a calculation
// 3. Display the result in the DOM.

let inputOne = document.querySelector('#inputOne');
let inputTwo = document.querySelector('#inputTwo');
let btnOne = document.querySelector('#btnOne');
let btnTwo = document.querySelector('#btnTwo');
let result = document.querySelector('#dom');

btnOne.addEventListener('click', Multiplication)
btnTwo.addEventListener('click', divide)

function Multiplication() {
	result.innerHTML = inputOne.value * inputTwo.value
}

function divide() {
	result.innerHTML = inputOne.value / inputTwo.value

}
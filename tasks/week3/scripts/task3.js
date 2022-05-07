/* Lesson 3 */

/* FUNCTIONS */

// Add using function declaration

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addend1 = parseInt(document.querySelector('#addend1').value);
    let addend2 = parseInt(document.querySelector('#addend2').value);
    let result = add(addend1, addend2);
    document.querySelector('#sum').value = result;
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Subtract using function expressions

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function() {
    let minuend = parseInt(document.querySelector('#minuend').value);
    let subtrahend = parseInt(document.querySelector('#subtrahend').value);
    let result = subtract(minuend, subtrahend);
    document.querySelector('#difference').value = result;
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Multiply using arrow function

const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector('#factor1').value);
    let factor2 = parseInt(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Divide using arrow function

const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let dividend = parseInt(document.querySelector('#dividend').value);
    let divisor = parseInt(document.querySelector('#divisor').value);
    let result = divide(dividend, divisor);
    document.querySelector('#quotient').value = result;
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



/* BUILT-IN METHODS */

document.getElementById('year').textContent = new Date().getFullYear();


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numbers;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
document.querySelector('#odds').textContent = numbers.filter(number => number % 2);

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
document.querySelector('#evens').textContent = numbers.filter(number => number % 2 === 0);

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
document.querySelector('#sumOfArray').textContent = numbers.reduce((sum, number) => sum + number, 0);

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
document.querySelector('#multiplied').textContent = numbers.map(number => number * 2);

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.querySelector('#sumOfMultiplied').textContent = numbers.map(number => number * 2).reduce((sum, number) => sum + number, 0);

// Declation syntax for function, can be hoisted 

function show(){
    console.log('this is my output for developer');
};
show();

function square(number) {
    return number * number;
  }
let answer = square(3);
document.getElementById('result').textContent = answer;


// Expression syntax for function, cannot be hoisted

let add = function(num1, num2){
    return(num1 +num2);
};

document.getElementById('result').textContent = add(2, 3);


//Arrow  --efficient syntax, but no hoisting

let sum = (no1, no2) => (no1 + no2);
document.getElementById('result').textContent = sum(3, 3);




// // example 1
// const steps = ["one", "two", "three"];
// // callback declaration
// function makeList(item) {
//   const listElement = document.getElementById("myList");
//   listElement.innerHTML += `<li>${item}</li>`;
// }
// steps.forEach(makeList);


const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  // outputElement.innerHTML = inputElement.value;
  outputElement.innerHTML = ('Thanks for your answer');
}
buttonElement.addEventListener("click", copyInput);


const log = document.querySelector("#log");

document.addEventListener("keydown", logKey);

function logKey(e) {
  // how do we know which key was pressed?
  console.log(e);
  // checkout e.code, e.key, and e.keyCode
  // what is the difference?
}

//Array Method

const list = ['one','two','three']

function makeList(item){
  document.querySelector('#output').innerHTML +='<li>' + item 
}

list.forEach(makeList);

// const stepsHtml = steps.map(function (list) {
//   return `<li>${list}</li>`;
// });
// document.getElementById("myList").innerHTML = stepsHtml.join();

// -------------
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

let luckyIndex;

myArray.forEach(function (item, index){
  if(item === luckyNumber)
  luckyIndex = index
})

console.log(luckyIndex);
// let array1

// const map1 = array1.map(x => x * 2);

// console.log(map1)

// example 2
const grades = ["A", "A", "A"];
function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpa_Points = grades.map(convertGradeToPoints);

console.log(gpa_Points)



// reduce method takes all itmes in the array and redices them down to one number

const gpaPoints = grades.map(convertGradeToPoints);
const points_Total = gpaPoints.reduce(function (total, item) {
  return total + item;
});
const gpA = points_Total / gpaPoints.length;

console.log(gpA)

// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gPa = pointsTotal / gpaPoints.length;

console.log(gPa)

// this could be further simplified as
const Gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

console.log(Gpa)





const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

console.log(shortWords)

//same thing with an arrow function
const short_Words = words.filter((word) => word.length < 6);

const buttonElement2 = document.querySelector('#submitButton');

function timesbytwo(){
  const inputElement2 = document.querySelector('#inputBox')
  const outputElement2 = document.querySelector('#output')
  let number =Number(inputElement2.value);
  outputElement2.textContent = number +
   2;
};

buttonElement2.addEventListener('click', timesbytwo)
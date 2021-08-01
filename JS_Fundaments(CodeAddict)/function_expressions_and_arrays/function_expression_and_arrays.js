// Function expressions and arrays

// Simple function
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Using function expression for the same
// Also can be declared with a function name as
// const add = function addMyNumbers(num1, num2) {
//   return num1 + num2;
// };
const add = function (num1, num2) {
  return num1 + num2;
};

// Arrow functions
const addFunction = (num1, num2) => num1 + num2;

// Invoking function
const val1 = addNumbers(10, 10);
// result = 30
console.log(addNumbers(10, 20));
// Invoking function expression
const val2 = add(20, 20);
// result = 8
console.log(add(3, 5));

const arr = [val1, val2, add(30, 30), addFunction(11, 22)];

// Printing the array in console
// The below should have values [20, 40, 60, 33]
console.log(arr);

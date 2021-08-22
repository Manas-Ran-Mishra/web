// Functions as First class objects - stored in a variable(expression), passed as an argument to another function, return from a function(closure)

// Higher Order Function - accepts another function as an argument or returns a function as a result

// Callback Function - a function being paased to another function as an argument

const myName = `Manas`;

// Example of a higher order function
function greet(name, callback) {
  console.log(`${callback(name)}, Hi my name is ${myName}`);
}

function afternoon(name) {
  return `Good Afternoon ${name}`;
}

function morning(name) {
  return `Good Morning ${name}`;
}

// Example of a callback function
greet('Bob', afternoon);

greet('Alice', morning);

// Don't do this - greet('Alice', morning());
// You will get "Uncaught TypeError: callback is not a function"
// As morning() returns a string and that is being passed as an argument

// Just for fun
// function fun(oneFunction) {
//   console.log(`Called oneFunction...`);

//   oneFunction();
// }

// fun(() => {
//   console.log(`Hello, I am ${myName}`);
// });

// function myFunction() {
//   const myFunc = document.getElementById('fun_text').value.toString();
//   const mynewFunc = new Function(myFunc);
//   console.log(`value of myFunc: '${myFunc}' and typ: ${typeof mynewFunc}`);
//   //   fun(mynewFunc);
//   //   mynewFunc();
//   eval(myFunc);
// }

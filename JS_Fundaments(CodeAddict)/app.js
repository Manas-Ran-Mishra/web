// Funtions fundamentals

function greet(username) {
  console.log("Hello " + username);
  return "calling this function shouldn't show undefined at the end";
}

// Function without return type
function greet2(yourname) {
  console.log("Hi " + yourname + " from greet2()");
}

// Invoking function
greet("Bob");

// Directly invoking the funtion inside log()
console.log(greet("bOB"));

// Printing the result of the return type
let result;
result = greet("BOB");
console.log(result);

console.log("Try invoking the funtion greet2() from the console lke below");
console.log(">greet2('Alice')");

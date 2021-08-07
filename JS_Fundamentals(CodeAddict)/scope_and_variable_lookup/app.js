// Global variables are the ones that are declared outside the {}
// These can be accessed anywhere in the program
// The below example is to understand both global and local scope
// So to understand global scope
// Try commenting the declaration of local variable inside the showMyName() function
// And to understand local scope just go through the below code

// Declaring a global variable
let myName = 'John';

console.log(myName);

function showMyName() {
  // Declaring a local variable with the same variable name
  let myName;
  // The below will log the value of the variable as undefined
  // because JS is using the local variable rather than the global one
  // and the variable is not assigned any value
  console.log(`Your name is ${myName}`);
  myName = 'Alice';
  console.log(myName);
  // If we declare another function inside the current one and declare a variable with the same name
  // JS will prioritize to use the value of the variable that is inside the function
  function anotherShowName() {
    let myName = 'not a name';
    const aNmumber = 10;
    console.log(myName);
    myName = 'updatedName';
    console.log(myName);
  }

  // Trying to access the 'aNumber' variable outside the function it is declared
  // before and after function invocation
  // This is called local scope
  // To get normal output in console comment the below console logs
  //   console.log(aNumber); // comment this statement for normal execution
  anotherShowName();
  //   console.log(aNumber); // comment this statement for normal execution

  // The value of myname will now be changed to the one assigned inside the current function
  // rather than the inner one
  console.log(myName);
}

showMyName();
console.log(`My name is ${myName}`);

// Another interesting thing is if a keywork like let or const is not used
// the variable declared becomes a global one
// even if it is declared inside a function under 1 condition
// and that is the function should be invoked
// Try the below example

function myFunctioForLocalScope() {
  let anyName = 'absolutely not a name';
  aGlobalVariable = 'this is a gloabal variable';
}

// Try commenting out the below function invocation
myFunctioForLocalScope();
console.log(aGlobalVariable);

// Variable Lookup
// JS looks for variable values that are defined inside the current scope
// and if it doesn't find them there
// then JS goes to the code block(can be a function or just '{}') containing the current function
// But it doesn't work the other way i.e. you can't use a variable outside of a code block, where it is defined
// and to try it uncomment the console.log() after multiply() function invocation

const globalNumber = 5;

function add(num1, num2) {
  const globalNumber = 10; // This is used inside the add function but can't be used outside the function
  // but can be used inside the nested/child functions
  // Try commenting out the above variable declaration, the results will change
  const result = num1 + num2 + globalNumber;
  function multiply() {
    const globalNumber = 100; // This is used inside the multiply function but can't be used outside the function
    // Try commenting out the above variable declaration, the results will change
    const multiplyResult = result * globalNumber;
    console.log(`Multiplication Result: ${multiplyResult}`);
  }
  multiply();
  // console.log(multiplyResult);
  return result;
}

console.log(`Adding 2 numbers ${add(2, 4)}`);

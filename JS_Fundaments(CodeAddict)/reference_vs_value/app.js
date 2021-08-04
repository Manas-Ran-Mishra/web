// Assigning value to variables

const number1 = 24;
// referencing the value of the first variable
let number2 = number1;

console.log(`number1's value: ${number1}`);
console.log(`number2's value: ${number2}`);

// Updating the value of the second variable

number2 = 25;
console.log(
  `number2's value after update: ${number2} and number1's value: ${number1}`
);

// Trying the same with object (Non-Primitive Data type)

const person = { fisrtname: 'john' }; // We can't assign a new object to the variable as it is declared as 'const' but we can update the object property
let person2 = person;

console.log(`Name of the first person: ${person.fisrtname}`);
console.log(`Name of the second person: ${person2.fisrtname}`);

// Updating the the name of the second person

person2.fisrtname = 'joe';

console.log(
  `After update name of the second person: ${person2.fisrtname} and name of the first person: ${person.fisrtname}`
);

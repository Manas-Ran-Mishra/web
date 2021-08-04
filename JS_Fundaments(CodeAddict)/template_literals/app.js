// Template literals arrived with ES6
// `` - These are called backtick characters
// Interpolation(${}) is used for inserting expression(value)

// Below is an example
const myname = 'john';
const age = 25;
const sentence = "Hey, It's " + myname + ' and I am ' + age + ' years old';

const sentence2 = `Hey, It's ${myname} and I am ${age} years old. And here is some math: 4+4=${
  4 + 4
}`;

console.log(sentence);
console.log(sentence2);

// Creating an object below

const person = {
  name: "John",
  lastName: "Doe",
  age: 35,
  education: false,
  married: true,
  siblings: ["Anna", "Peter", "Susan"],
  // Declaring a method
  greet: function () {
    console.log("Hello The name is JOHN");
  },

  // Declaring a method without 'function' keyword
  greetHi() {
    console.log("Hi....Greetings");
  },

  // Declaring a method without 'function' keyword
  // and using dot notation for accessing the name property of the object
  greetings() {
    console.log("Hello there" + person.name);
  },
};

// Invoking the methods using dot notation
person.greet();
person.greetHi();
person.greetings();

// Accessing the properties of the object
console.log(person.lastName);
const lName = person.lastName;
console.log(lName);

// Changing the person's name
person.name = "Bob";
console.log(person.name);

console.log(person.siblings);

# Please read below

## Primitive Data Types

- String
- Undefined
- Null
- Number
- Boolean
- Symbol

## Non-Primitive Data Types

- Objects
- Functions
- Arrays

**Loops, Conditionals and Logical(AND/OR) statements are similar so they are not included.**

**JS String methods are similar to Python and Java string methods so they are not included. Please read below for more info.**

**JS Array methods are similar to Python and Java string methods so they are not included. Please read below for more info.**

## Equality

`==` means only **"equal to"** in JS.
`===` means **"equal to"** as well as of **"same type"** in JS.

same with the below
`!=` means not **"equal to"** in JS.
`!==` means not **"equal to"** and of **"same type"** in JS.

## String Methods and Properties

Don't forcibly memorize them, search Google for these and the first one or two websites, preferably developer.mozilla or w3schools, will have them.

The same is true for **Array properties and methods**.

## Reference and Values

- **In case of Primitive Datatype**
  When assigning primitive data type value to a variable by referring to another variable e.g. `const num1 = 10;` then `let num2 = num1;`, the value of the original variable won't change after updating the value of the referring variable
  e.g.

  ```javascript
  num2 = 25;
  console.log(`num1: ${num1} and num2: ${num2}`);
  ```

  and the output will be `num1: 10 and num2: 25`

- **In case of Non-Primitive Datatype**
  Updating the value of the referring variable will also update the value of the referred variable
  e.g.

  ```javascript
  let person = { fname: 'John' };
  let person2 = person;
  console.log(
    `Name of first person ${person.fname} and name of the second person ${person2.fname}`
  );

  person2.fname = 'Bob';
  console.log(
    `After update name of first person ${person.fname} and name of the second person ${person2.fname}`
  );
  ```

  and the output will be
  `Name of first person John and name of the second person John`
  `After update name of first person Bob and name of the second person Bob`

## Null and Undefined

Both can represent no value

- **Null:** is an object
- **Undefined:** When a variable is only declared but not assigned any value, missing parameters to a function call, missing properties for an object

## Falsy Values

- ""
- ''
- ``
- 0
- -0
- NaN
- false
- null
- undefined

**Everything else will evaluate as Truthy inside a condition**

```javascript
let str = 'an example string';
if (str) {
  console.log('True');
} else {
  console.log('False');
}
```

**Ternary operators are also same as Java so they are not included.**

## Global Scope, Local Scope and Variable Lookup

## Read and understand the whole code as well as all comments in the .js file before making any changes to it

1. **Global Scope** - A variable declared outside of code block (`{}`) that can be used anywhere in the program.
2. **Local Scope** - A variable declared inside a code block can be used inside the that code block but can' be used outside of it.

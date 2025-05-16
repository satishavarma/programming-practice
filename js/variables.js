// POINT 1 = Naming Variables

// When we declare a new variable, there are certain rules we need to follow for the name of the variable:

// The name should either start with an alphabet or an underscore


const validVariableName = 120;
console.log(validVariableName);


// POINT 2 =  A reserved keyword cannot be used as a variable name. For example, let is a keyword used to declare variables.We cannot declare a variable with the name l

// const let = 170;  This will show an error console.log(let);


// POINT 3 Naming Variables - camelCase
// To distinguish each word, we capitalize the first alphabet of all the words, except for the first word. This is known as camelCase.

const lengthOfBox = 120;
console.log(lengthOfBox);



// POINT 4 = const
// we created variables using the const keyword. const is short for "constant". It is used to create a variable whose value is not intended to be changed at all, once it is created. If we try to change the value of a variable created using the const keyword, we will get an error.

const speed = 40;
console.log(speed);


//speed = 56;  This will cause an error when code is run
console.log(speed);

// declaration const speed
// This part where we create the variable is called declaration.

// initialization = 40;

// The second part of assigning the created (declared) variable an initial value is called initialization.


// POINT 5 = let
//  if we know that the value of the variable needs to be changed later, we need to declare the variable using the let keyword.

let speedOne = 40;
console.log(speedOne);

speedOne = 56;
console.log(speedOne);

// We declared the variable speed using let keyword and assigned the value 40 to it.
// Then we changed the value of speed to 56 with the statement speed = 56.


// Differences between let and const
// Once a variable is pointing to something, then let allows us to assign a different item to the variable so that the variable can point to something else.

// const doesn't allow that. In the case of const, once a variable points to an item, JavaScript will not allow us to change the variable to something else. However, JavaScript allows us to change the item to which let and const are pointing. In other words, both let and const allow mutation, but only let allows assigning new values.



// POINT 6 = Declaring Multiple Variables in a Single Line
let length, width, height;
const lengthone = 120, widthone = 60, heightone = 40;
console.log("The values of Length, Height and Width are:")

console.log(lengthone, widthone, heightone);


// Point 7 = typeof
// We can identify the type of any data, using typeof
console.log(typeof "Hello World!");
console.log(typeof 12345);
console.log(typeof 12.345);
console.log(typeof true);
console.log(typeof undefined);



// POINT 8 = Expressions
// Note that, operators that require two operands are called binary operators. +, -, *, /, and = are all binary operators.

// Operators that require only one operand are called unary operators. typeof is a unary operator.

// The operators +, -, *, and / are called arithmetic operators and are used to perform arithmetic operations on numbers.
console.log(20 + 30);

const lengthO = 1000;
console.log(lengthO / 100);

console.log(typeof "Hello World");


// POINT 9 = Storing Result of Expressions

const sum = 23 + 45;
console.log(sum);

// POINT 10 Boolean
// The values true and false are known as Boolean values.

const isAdmin = true;
console.log(isAdmin);
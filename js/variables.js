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


// POINT 11 Strict Equality
// The strict equality operator === is used to compare two values. It requires both the value and the type of the operands to be the same to return true. If either the value or the type is different, the result will be false.

const numberValue = 9;
const stringValue = "9";

console.log(numberValue === stringValue);

const sentenceOne = "The name is Oliver.";
const sentenceTwo = "The name is Oliver.";

console.log(sentenceOne === sentenceTwo);


// POINT 12 - Loose Equality
// The loose equality operator == is used to compare two values. Unlike strict equality, loose equality performs type coercion, converting one or both operands to the same type before comparing them.

const numberVal = 9;
const stringVal = "9";

console.log(numberVal == stringVal);

// Rules for Type Coercion
// Understanding type coercion rules can help you predict the behavior of the == operator.

// When one operand is a string, the other will be coerced into a string as well. Similarly, if one operand is a number, the other will be converted into a number.
// Boolean operands are converted into numbers, where true becomes 1 and false becomes 0.
// When comparing an object to a primitive value (string, number or boolean), the object is first converted into a primitive value before the comparison is performed.
// For null or undefined, the comparison returns true only if both operands are either null or undefined.


// POINT 13 - Changing Data Type
const lengthOfBoxx = 120;
console.log(lengthOfBoxx);

const lengthOfBoxWithUnit = "120cm";
console.log(lengthOfBoxWithUnit);

console.log("Length of box in meters");
console.log(lengthOfBox * 100);


// We declare a variable lengthOfBox and assign the value 120 of type number.

// Later we change the value of lengthOfBox to "120cm", which is of the type string.

// We get the output NaN, when we performed the operation lengthOfBox * 100 because we tried to multiply a string with a number. We will learn about NaN in another section.

// Such confusion can occur when we are working in a team. Someone other than the person who originally wrote the code might look at the variable declaration let lengthOfBox = 120 and assume that the value of lengthOfBox will always be a number. Hence, they might add more code under the same assumption without realizing that the data type was later changed somewhere in the code, which will have a negative impact on the program/application.

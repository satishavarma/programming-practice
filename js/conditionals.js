// POINT 1 = Truthy and Falsy Values
// In JavaScript, we can convert values of any data type to boolean. We can use Boolean() to convert any value to a boolean value.

const name = "Sam Smith";
console.log(Boolean(name));

const age = 32;
console.log(Boolean(age));

const experience = 0;
console.log(Boolean(experience));

// IMPORTANT NOTE = Values such as the number 0, false, null, undefined, NaN, and the empty string "", will get converted to false. These values are called falsy values.

console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Truthy values
console.log(Boolean(12));
console.log(Boolean(true));
console.log(Boolean("Banana"));
console.log(Boolean(["Apple", "Mango"]));
console.log(Boolean({ name: "Sam Smith" }));



// POINT 2 =  if Statement
// We can use the if statement to execute a block of code when the given condition evaluates to true. Let's see how the if statement is used in the example below.


const ageMinor = 12;
const votingAge = 18;

if (ageMinor < votingAge) {
  console.log("Person is not eligible to vote");
}


// else statement
// The else statement is used along with the if statement. The else statement executes a block of code when the condition in the if statement results in false.

const number = 7;

if (number % 2 === 0) {
  console.log("number is even");
} else {
  console.log("number is odd");
}
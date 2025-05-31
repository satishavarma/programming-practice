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


// The else if statement is used along with the if and else statements. It is used to execute blocks of code conditionally when there are more than two conditions.

const num = 0;

if (num > 0) {
  console.log("The number is positive.");
} else if (num === 0) {
  console.log("The number is 0.");
} else {
  console.log("The number is negative.");
}


// Switch Statement
// When you have a number of conditions to evaluate for a given expression, using an if else might not be the best method.


const nameOne = "Eve";

switch(nameOne) {
  case "Sam":
    console.log("This is the owner.");
    break;

  case "Eve":
    console.log("This is the admin.");
    break;

  case "Renu":
    console.log("This is the manager.");
    break;

  default:
    console.log("This person does not have a role.");
    break;
}



// switch statement fall through method
// As you read in the previous lesson that when break statement is not provided, the execution will continue to the next case's code block. We can take advantage of this feature to handle multiple cases together.
const passedRollNumbers = [ 8746, 5649, 3268, 7901 ];
const otherRollNumbers = [ 4387, 1752, 6210, 9834 ];
const rollNumberToCheck = 7901;

switch(rollNumberToCheck) {
  case 8746: case 5649: case 3268: case 7901:
    console.log("Congratulations, you have passed the test!");
    break;

  case 4387: case 1752: case 6210: case 9834:
    console.log("Unfortunately, you did not pass the test. Better luck next time!");
    break;

  default:
    console.log("Provided roll number is invalid");
};
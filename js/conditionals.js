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
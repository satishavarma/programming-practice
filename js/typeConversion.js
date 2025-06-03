// Converting to String
// Sometimes we need to explicitly convert a value to string. In such cases, we can use either String() or toString() to convert a non-string value to a string.

// Number to String
console.log(2);
console.log(String(2));
console.log((2).toString());



//  Boolean to string
console.log(true);
console.log(String(true));
console.log(true.toString());


// Converting to Number
// We can use the Number() method to convert a non-number value to a number.

// String to Number
// A String which only contains a valid number will get converted to a Number.

const string = "2";
console.log(string);

const number = Number(string);
console.log(number);




// Non-empty Strings which don't contain a valid number get converted to NaN.
let invalidNumberString = "2abc";
invalidNumberString = Number(invalidNumberString)
console.log(invalidNumberString);

// Boolean to Number
let booleanTrue = true;
booleanTrue = Number(booleanTrue);
console.log(booleanTrue);

let booleanFalse = false;
booleanFalse = Number(booleanFalse);
console.log(booleanFalse);

// Composite data types

console.log(typeof { name: "This is an object" });
console.log(typeof ["This", "is", "an", "array"]);
console.log(typeof new Date());
console.log(typeof new Map());
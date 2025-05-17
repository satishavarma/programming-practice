// POINT 1 = Create String
const fullName = "Sam Smith";
console.log(fullName);

const book = "The Newest Dragon Stories";
console.log(book);

const someRandomSentence = "You can be a great programmer!";
console.log(someRandomSentence);


// POINT 2 - Joining Strings
// We can join strings using the + operator. And we can store the joined result into a new variable of our choice.

const firstName = "Sam";
const lastName = "Smith";
const fullNam = firstName + lastName;

console.log(fullNam);


// POINT 3 = Template Strings
// Template strings are enclosed within backticks ` instead of single or double quotes. You don't need to use + operator to concatenate strings.

const firstNum = 2;
const secondNum = 3;
const result = firstNum + secondNum;

console.log(`Adding ${firstNum} and ${secondNum} gives ${result}`);


// POINT 4 = String Interpolation
// We can insert the values of variables into a template string using the ${} notation. This is known as string interpolation.
const totalIncome = 60000;
const totalExpense = 36000;

console.log(`Your balance is ${totalIncome - totalExpense}`);
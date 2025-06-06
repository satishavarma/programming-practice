// POINT 1 = Example of object
const car = {
  model: 2011,
  fuelType: "petrol"
};
console.log(car);

// POINT 2 = Using Variables as Object Properties
const noOfSeats = 5;

const carTwo = {
  model: 2011,
  seatingCapacity: noOfSeats,
  fuelType: "petrol"
};

const result = `It is a ${carTwo.model} model car that runs on ${car.fuelType} and has ${carTwo.seatingCapacity} seats.`

console.log(result);


// POINT 3 = Get Object Values - Dot Notation

const person = {
  name: "Oliver",
  hobby: "Writing"
};

console.log(person.name);

// POINT 4 = Add Object Property using Dot Notation

const personTwo = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

personTwo.profession = "Engineer";

console.log(personTwo);

// POINT 5 = Update Object Property using Dot Notation
const personThree = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

personThree.age = 23;

console.log(personThree);


// POINT 6 = Get Object Values - Bracket Notation

const personBracket = {
  12: "Adam",
  13: "Samantha"
};

console.log(personBracket[12]);

// Another exaample 
const project = {
  "project-lead": "Adam",
  developer: "Samantha"
};

console.log(project["project-lead"]);

// POINT 7 = Add Object Property using Bracket Notation

const subjects = {
  101: "Physics",
  102: "Biology",
  103: "Chemistry"
};

subjects[104] = "Computer";
subjects[21 * 5] = "Mathematics"; // Same as subjects[105] = "Mathematics"

console.log(subjects);

// POINT 7 = Update Object Property using Bracket Notation

const subjectsUpdate = {
  101: "Physics",
  102: "Biology",
  103: "Chemistry"
};

subjectsUpdate[103] = "Mathematics";

console.log(subjectsUpdate);


// POINT 8 = Get Object Keys - Object.keys()
const personKey = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

const res = Object.keys(personKey);
console.log(res);

// POINT 9 Get Object Values - Object.values()
const personValue = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

const resultval = Object.values(personValue);
console.log(resultval);

// POINT 10 = Get Object Keys and Values - Object.entries()
// We can get all the key-value pairs of an object using Object.entries(). It returns the key-value pairs as an array of arrays.

const personEntries = {
  fullName: "Adam Smith",
  age: 37,
  isAdmin: true
};

const resultentry = Object.entries(personEntries);
console.log(resultentry);

// POINT 11 = Remove property from object
// Use delete to remove a property from an object.
const personDelete = {
  fullName: "Sam Smith",
  age: 37,
  isAdmin: true
};

delete personDelete.age;
delete personDelete[`isAdmin`];
console.log(personDelete);
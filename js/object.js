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
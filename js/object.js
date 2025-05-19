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
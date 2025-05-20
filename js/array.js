// POINT 1 = Create Array
// Arrays in JavaScript are special kind of objects. Similar to an object, it can hold a mix of different data types.

const mixedArray = [1, "hello", true, null, undefined];

console.log(mixedArray);

// POINT 2 = Reading from Array
const fruits = ["Apple", "Orange", "Banana", "Mango", "Cherry"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);


// POINT 3 = Adding to Array

const vegetables = ["corn", "carrot", "potato"];
vegetables[3] = "beetroot";
console.log(vegetables);

// POINT 4 = Updating Array Element
const sports = ["Football", "Cricket", "Basketball"];
sports[1] = "Hockey";

console.log(sports);


// POINT 5 =Mixing Different Data Types in Array
const name = "Parker";
const mixedArr = [1, "hello", name, true, null, undefined];

const arrayOfArrays =[
  [1, 2, 3, 4, 5],
  ["Peter", "Mary", "May", "Ben"],
  [true, false, true, false]
];

const arrayOfObjects = [
  {one: 1, two: 2},
  {fruit: "apple", vegetable: "onion"}
];

console.log(mixedArr);
console.log(arrayOfArrays);
console.log(arrayOfObjects);
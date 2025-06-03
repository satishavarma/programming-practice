// Execute Function for Each Element
// The forEach() method is like a friendly guide that helps us visit each element in an array one by one.

// It allows us to perform a specific action on every element without changing the original array.

// element: This is the current element of the array that we're visiting.
// index: This is the index position of the current element in the array.
// array: This is the entire array itself.

const fruits = ["apple", "banana", "mango", "orange"];
// In this case, the element is a single fruit
fruits.forEach((fruit, index, array) => {
  const result = `${fruit} is a fruit. It is at index ${index} in the array: ${array}.`;
  console.log(result)
});



// Map method
// Note = The map() method returns an array, while forEach() does not. Knowing this distinction is helpful when you choose the right method for your task.
const evenNumbers = [2, 4, 6];
const oddNumbers = evenNumbers.map((number) => number + 1);
console.log(oddNumbers);


// Difference between forEach and map

// ForEAch = The forEach() method is used to loop through array elements. It runs the same function on each element. It doesn't change the given array and returns undefined.

// MAp = The map() method also iterates through array elements. It applies a function to each element. It creates a new array with the modified elements, and returns the new array.

// Filter elements based on given condition
// The filter() method creates a new array containing only certain elements from the array it is invoked on.

// filter() accepts a function as an argument. It invokes that function on each element of an array.

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumber = numbers.filter(number => number % 2 === 0);
console.log(evenNumber);
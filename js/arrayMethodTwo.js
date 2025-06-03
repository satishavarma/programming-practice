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
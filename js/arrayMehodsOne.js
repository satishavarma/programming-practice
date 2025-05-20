// POINT 1 = Adding Array Element - push
// The push() method is used to add a new element to the end of an array.
const vegetables = ["corn", "carrot", "potato"];
vegetables.push("beetroot");

console.log(vegetables);
// vegetables.push("beetroot") adds a new element "beetroot" to the end of the vegetables array.

// Method 2 = Adding Array Element - unshift
// The unshift() method is used to add a new element at the beginning of an array.
// vegetables.unshift("beetroot") adds a new element "beetroot" to the beginning of the array vegetables.

const vegis = ["corn", "carrot", "potato"];
vegis.unshift("beetroot");

console.log(vegis);

// Method 3 = Removing Array Element - pop
// The pop() method removes the last element of an array.
const sports = ["Football", "Cricket", "Basketball"];
sports.pop();

console.log(sports);

// The pop() method also returns the element that was removed, as shown in the example below.
const games = ["Football", "Cricket", "Basketball"];
const lastElement = games.pop();
console.log(lastElement);

// Method 4 = Removing Array Element - shift
// The shift() method removes the first element of an array.
const sprt = ["Football", "Cricket", "Basketball"];
sprt.shift();

console.log(sprt);
// OR

const guest = {
  role: "volunteer"
};
if (guest.role === "faculty" || guest.role === "volunteer") {
  console.log(`Access granted`);
} else {
  console.log(`Access denied`);
}



// AND

const courseFee = 10000;
const courseDiscountAmount = 3000;
const student = { 
  marks: 78,
  internshipDone: true
};

if (student.marks >= 75 && student.internshipDone) {
  const discountedFee = courseFee - courseDiscountAmount;
  console.log(`Your course fee after discount is: ${discountedFee}.`);
} else {
  console.log(`Your course fee is: ${courseFee}.`);
}


// NOT
// The NOT operator - !, when applied to a value or expression returns false if the condition evaluates to true and returns true if the condition evaluates to false.

const user = {
  name: "Oliver Smith",
  isAdmin: false,
};

if (!user.isAdmin) {
  console.log("You do not have access to this feature");
}


// NOT vs Inequality Operators
const studentOne = {
  grade: "A",
  nationality: "Indian",
};

if (studentOne.grade !== "D") {
  console.log("You get a 10% discount on your course fee");
}


// Nullish Coalescing Operator
console.log("Hello Sam Smith" ?? "Hello Guest");

console.log(null ?? "Hello Guest");

console.log(undefined ?? "Hello Guest");

console.log(0 ?? 234);

console.log(false ?? true);

console.log(undefined ?? null);

console.log(null ?? null);
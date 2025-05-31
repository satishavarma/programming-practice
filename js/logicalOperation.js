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
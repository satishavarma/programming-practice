// OR

const guest = {
  role: "volunteer"
};
if (guest.role === "faculty" || guest.role === "volunteer") {
  console.log(`Access granted`);
} else {
  console.log(`Access denied`);
}
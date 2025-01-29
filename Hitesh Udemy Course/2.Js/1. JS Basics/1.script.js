console.log("hi");
process.stdout.write("bye");

console.table({
  name: "Rohan",
});

console.warn({
  name: "Rohan",
});

let arfxn = () => {
  console.log("Hi there");
};
arfxn();

let today = new Date();
console.log(today);
console.log(today.getDate());

// Access Objects:
// Way 1 - Dot notation: username.firstname
// But it the firstname is set with space as "first name"
// Way 2: username.["firstname"]

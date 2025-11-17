// let computer = {
//   cpu: 12,
// };

// let lenovo = {
//   screen: "HD",
//   __proto__: computer,
// };
// let acer = {};

// // console.log("computer", computer.__proto__);
// console.log(`Lenovo`, lenovo.__proto__);

// // // Design Car

let genericCar = {
  tyres: 4,
};

let tesla = {
  driver: "AI",
};
Object.setPrototypeOf(tesla, genericCar);
// In tesla, we want to set properties of genericCar
console.log(`tesla`, tesla);
// this doesnt show tyres, so we have to mention it
console.log(`tesla`, Object.getPrototypeOf(tesla));

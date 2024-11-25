//  Loops in arrays

let heroes = ["Thor", "Shaktiman", "Spiderman", "Batman"];

// //for loop
// for (let index = 0; index < heroes.length; index++) {
//     console.log(heroes[index]);

// }

// // for of loop

// for (const hero of heroes) {
//     console.log(hero);

// }

// for in loop
// for (const hero in heroes) {
console.log(heroes[hero]);
// }

// practice Q: 10% off and update array
// hint: we need to change index and index=key so use for in loop

let arr = [250, 645, 300, 900, 50];
for (const item in arr) {
  discount = arr[item] / 10;
  arr[item] -= discount;
}
console.log(arr);

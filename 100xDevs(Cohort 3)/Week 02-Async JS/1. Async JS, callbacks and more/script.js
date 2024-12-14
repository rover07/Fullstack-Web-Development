// // // SUm of 2 numbers
// function sum(a, b) {
//   return parseInt(a) + parseInt(b);
// }

// let ans = sum(5, "4");

// console.log(ans);

// // // // Sum form 1 to N
// function sum(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }
// // Better way
// function sum(2) {
//   return (n * (n + 1)) / 2;
// }
// let ans = sum(100);
// console.log(ans);

//
// // // // I/O heavy operations

// Using file system library
const fsLibrary = require("fs");
// import fsLibrary from "fs";

// checking methods of fs library
// console.log(fsLibrary);
// created a.txt file in the same directory

// readFile -> reads asynchronously
// readFileSync -> reads synchronously
let content1 = fsLibrary.readFileSync("a.txt", "utf-8"); // utf8 converts hexadeca to readable string
console.log(content1);

let content2 = fsLibrary.readFileSync("b.txt", "utf-8");
console.log(content2);

// Running IO bound tasks async is better
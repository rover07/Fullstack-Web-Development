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
/* The code snippet you provided is demonstrating the usage of the Node.js File System (fs) module in
JavaScript. Here's a breakdown of what the code is doing: */

// Using file system library
const fsLibrary = require("fs");
// import fsLibrary from "fs";

// checking methods of fs library
// console.log(fsLibrary);
// created a.txt file in the same directory

// readFile -> reads asynchronously (Better)
// readFileSync -> reads synchronously  
// let content1 = fsLibrary.readFileSync("a.txt", "utf-8"); // utf8 converts hexadeca to readable string
// console.log(content1);

// let content2 = fsLibrary.readFileSync("b.txt", "utf-8");
// console.log(content2);

////  Running IO bound tasks async is better

//
// Callback: Using function as a argument of another function
function add(a, b, op) {
  return op(a, b);
}

function sum(a, b) {
  return a + b;
}
function divide(a, b) {
  return a / b;
}
function sub(a, b) {
  return a - b;
}

let finalAns = add(4, 9, divide);
console.log(finalAns);
//

// // // // Methods
// let calc = {
//   add: function (a, b) {
//     return a + b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
// };
// console.log(calc.add(2, 3));
// // o/p: 5

// // // Methods(Shorthand)
// let calc = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };
// console.log(calc.add(2, 3));
// // o/p: 5

// // // 'this' in js
// const student = {
//   name: "rover",
//   eng: 33,
//   maths: 45,
//   physics: 22,
//   getAvg() {
//     let average = (this.eng + this.maths + this.physics) / 3;
//     console.log(average);
//     console.log(`${this.name} got average marks of ${average}`);
//   },
// };
// console.log(student.getAvg());

//

// // // try & catch
// console.log("hi");
// console.log("hi");
// // console.log(a);
// // 'a' is not defined and will result in error.
// // the below "hi" won't be logged as program execution stopped in the above line

// try {
//   console.log(a);
// } catch (err) {
//   console.log(`Variable doesn't exist`);
//   console.log(err);
// }
// console.log("hi");
// console.log("hi");

// // // Arrow function
// let sum = (a, b) => {
//   console.log(a + b);
// };
// sum(2, 44);
// // // implicit return in arrow functions
// let sum = (a, b) => a + b;
// sum(2, 44);

// // // Set timeout
// console.log("This is printed 1st");

// setTimeout(() => {
//   console.log("This is printed 3rd");
// }, 1000);
// console.log("This is printed 2nd");

// // // Set interval
// console.log("hi");
// let i = 0;
// // Below, don't use "i" in parameters as it created its own "i" which is not defined so out output becomes undefined
// let intervalId = setInterval(() => {
//   console.log(i);
//   if (i == 10) {
//     clearInterval(intervalId);
//   }
//   i++;
// }, 1000);
// console.log("bye");

//
// // // this with arrow function
// const student = {
//   name: "rover",
//   age: 19,
//   major: "cs",
//   marks: 99,
//   prop: this, // this here is window object
//   // "this" for student object is window object as window object is calling student object
//   getName: function () {
//     // "this" here is calling object, ie. student object.
//     console.log(this); // output: student object
//     return this.name;
//   },
//   getMarks: () => {
//     console.log(this); // parent's scope ie. parent's calling object -> window object
//     return this.marks; // undefined as marks is defined for student object, not window object
//   },
//   getInfo1: function () {
//     setTimeout(() => {
//       console.log(this); //this-> student object, as "this" of parent function "function()" is student object
//     }, 1000);
//   },
//     // Normal function in `setTimeout` defaults `this` to the global object (`window`).

//   getInfo2: function () {
//     setTimeout(function () {
//       console.log(this); // Output: window object

//     }, 2000);
//   },
// };
// console.log(student.prop); // Output: window object
// console.log(student.getName()); // Output: rover
// console.log(student.getMarks()); // Output: undefined
// console.log(student.getInfo1()); // After 1 second, Output: student object
// console.log(student.getInfo2()); // After 2 seconds, Output: window object

//
//
// // // Q1:
// let n = 3;
// let square = (n) => n * n;
// console.log(square(n));

// // // Q2:
// let id = setInterval(() => {
//   console.log("Hello World");
// }, 2000);

// setTimeout(() => clearInterval(id), 12000);
// // if (count == 5) {
// //   clearInterval(setInterval());
// // }

//
//
// // // Array Methods
// // arr.forEach
// let arr = [1, 2, 3, 4];
// // Way 1: Calling function name, function created separately
// // Using normal function
// function print1(el) {
//   console.log(el);
// }
// // print

// arr.forEach(print1);

// const print2 = (el) => {
//   console.log(el);
// };

// // print
// arr.forEach(print2);

//
//
// let arr = [1, 2, 3, 4];

// // Way 2 : function definition as the argument, function created inside method.

// // Using normal function
// arr.forEach(function (el) {
//   console.log(el);
// });

// // Using arrow function
// arr.forEach((el) => {
//   console.log(el);
// });

// // // Using forEach with array of objects

// let arr = [
//   {
//     name: "rover",
//     marks: 99,
//     age: 21,
//   },
//   {
//     name: "aman",
//     marks: 99,
//     age: 21,
//   },
//   {
//     name: "naman",
//     marks: 99,
//     age: 21,
//   },
// ];
// // Using function
// arr.forEach(function (student) {
//   console.log(student);
//   console.log(student.name);
// });
// // Using arrow function
// arr.forEach((student) => {
//   console.log(student);
//   console.log(student.name);
// });

// // // Map function
// let num = [1, 2, 3, 4];
// let double = num.map((el) => console.log(el * el));
// console.log(double);

// // // Filter function

// // filter even numbers
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = arr.filter((el) => el % 2 == 0);
// console.log(even);

// // // // .every
// // true
// let arr1 = [2, 4, 6, 8];
// let ans1 = arr1.every((el) => el % 2 == 0);
// console.log(ans1);
// // false
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans2 = arr2.every((el) => el % 2 == 0);
// console.log(ans2);

//
// // // .some
// // true
// let arr1 = [1, 2, 4, 6, 8];
// let ans1 = arr1.some((el) => el % 2 == 0);
// console.log(ans1);
// // false
// let arr2 = [1, 2, 3, 4, 5, 6, 7, 8];
// let ans2 = arr2.every((el) => el > 10);
// console.log(ans2);

//

//

// // // reduce
// let arr = [1, 2, 3, 4, 5]; //total= 15
// let ans = arr.reduce((acc, el) => {
//   console.log(acc);
//   return acc + el;
// });

// console.log(ans);

//
// // // Q: max in array using reduce

// let arr = [22, 33, 666, 2, 12, 45];
// let ans = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else return max;
// });
// console.log(ans);

// // Q; all are multiples of 10 or not
// // all elements are multiples of 10
// let arr1 = [10, 40, 50, 900, 20];
// let ans1 = arr1.every((el) => el % 10 == 0);
// console.log(ans1);

// // Not every is multiple of 10
// let arr2 = [14, 40, 51, 900, 20];
// let ans2 = arr2.every((el) => el % 10 == 0);
// console.log(ans2);

// // // Q; to find min in array
// let arr1 = [22, 44, 11, 666, -5, 22];
// let arr2 = [22, 44, 11, 666, -90, 22];

// function getMin(arr) {
//   let ans = arr.reduce((acc, el) => {
//     if (acc < el) {
//       return acc;
//     } else {
//       return el;
//     }
//   });
//   return ans;
// }

// console.log(getMin(arr1));
// console.log(getMin(arr2));

// // // Default parameters
// function fun(a, b = 2) {
//   console.log(a + b);
// }

// fun(2);

// // // Spread
// let str = "Im Smart";
// console.log(...str);

// let arr = [22, 44, 11, 666, -90, 22];
// console.log(Math.min(...arr));

// // // Spread with Array Literals
// let arr = [1, 2, 3, 4, 5];
// let newArr = [...arr];
// newArr.push(6);
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

// let chars = [..."hello"];
// console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

// let odd = [1, 3, 5];
// let even = [2, 4, 6];
// let nums = [...odd, ...even];
// nums.sort();
// console.log(nums); // [ 1, 3, 5, 2, 4, 6 ]

// // // Spread: Object literals

// let arr = [1, 2, 3, 4, 5];
// let obj1 = { ...arr };
// console.log(obj1);
// let obj2 = { ...arr, 0: 7, 5: 99 };
// console.log(obj2);

//
// // // Rest
//Using inbuilt "arguments" array
// function min(a, b, c, d) {
//   console.log(arguments);
//   console.log(arguments.length);
// }
// min(44, 33, 11, 5);

// // Using rest
// function sum(...args) {
//   return args.reduce((acc, current) => acc + current);
// }
// console.log(sum(1, 2, 3, 4, 5));

// // Using rest + msg parameter
// function sum(msg, ...args) {
//   console.log(msg);
//   return args.reduce((sum, current) => {
//     return sum + current;
//   });
// }
// console.log(sum("this is message passed", 1, 2, 3, 4, 5));

//
//
// // // // Destructuring
// let names = ["aaron", "rover", "aman", "jack"];
// let [winner, runnerup] = names; // winner, runnerup here are individual variables, not arrays
// console.log(winner, runnerup); // aaron rover
// console.log(runnerup); // rover

// // // Destructuring + rest(...)
// let games = ["gta", "pubg", "resident evil", "jack and jones"];
// let [first, second, ...othersRemaining] = games;
// console.log(first, second, ...othersRemaining); // gta pubg resident evil jack and jones

//
//
// // // destructuring objects
const person = {
  name: "rover",
  age: 17,
  class: 12,
  gender: "male",
  color: "wheat",
  weight: 70,
};
// Way 1:
let { name, gender } = person;
console.log(name, gender); // rover male
// Way 2 : Using variable name
let {
  gender: sex,
  name: username,
  color,
  city = "Mumbai",
  weight = 99,
  state: place = "Goa",
} = person;
console.log(sex, username, color, city, weight, place); // male rover wheat Mumbai

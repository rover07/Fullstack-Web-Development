// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed!");
//     }, delay);
//   });
// }

// let requestPromise = changeColor("red", 1000)
//   .then((result) => {
//     console.log("Red color was completed ");
//     console.log(result);

//     return changeColor("green", 1000);
//   })
//   .then((result) => {
//     console.log("Green color was completed ");
//     console.log(result);

//     return changeColor("blue", 1000);
//   })
//   .then((result) => {
//     console.log("Blue color was completed ");
//     console.log(result);
//     return changeColor("yellow", 1000);
//   })
//   .catch((error) => {
//     console.log("Color not changed");
//     console.log(error);
//   });

// /

// // // // Async and await
// this function returns a promise irrespective of return statement.
// async function greet() {
//   // throw "some random error"; // // throws custom error + state "rejected"
//   return "hello!"; // // returns a promise
// }

// // console.log(greet());
// greet()
//   .then((result) => {
//     console.log("Promise was resolved");
//     console.log("Result was:", result);
//   })
//   .catch((err) => {
//     console.log("Promise was rejected with error:", err);
//   });

// // Async arrow function
// async function greet() {
//   return "hello!"; // returns a promise
// }

// let hello = async () => {}; // returns a promise
// console.log(hello);

// let greet = () => {
//   return "Hello!";
// };

// let demo = async () => {
//   return 5;
// };
// console.log(demo());

//
//
//
//  // Example
// function getNum() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       console.log(num);
//       // when number is printed, resolve() is called here
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }
// // in console, use "demo()"
// //or
// // use below log
// console.log(demo());

//
//
//
// // Example. Changing color(using async await)
//
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //
      // for rejecting promise
      let num = Math.floor(Math.random() * 10) + 1;
      if (num > 5) {
        reject("result: promise rejected!!!");
      }

      h1.style.color = color;
      console.log(`Color changed to ${color}`);

      resolve("result: Color Changed");
    }, delay);
  });
}

async function demo() {
  // "try" will deal with code block that might deal with error
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("yellow", 1000);
  } catch (err) {
    console.log("error caught");
    console.log(err);
  }
  // Once the error is caught, the further code that is not dependent on promises will run without error

  let a = 5;
  console.log("new number :", a);
}
console.log(demo());


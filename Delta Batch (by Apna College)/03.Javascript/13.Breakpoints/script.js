// function one() {
//   return 1;
// }
// function two() {
//   return one() + one();
// }
// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

// // // // Callback hell

// // #1 Synchronous code
// h1 = document.querySelector("h1");

// setTimeout(() => {
//   h1.style.color = "red";
// }, 1000);
// setTimeout(() => {
//   h1.style.color = "orange";
// }, 2000);
// setTimeout(() => {
//   h1.style.color = "green";
// }, 3000);

// //  #2 This doesnt execute immediately
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   setTimeout(() => {
//     h1.style.color = color;
//   }, delay);
// }

// This will change color all at once, we will get only final color ie. Green

// changeColor("red", 1000);
// changeColor("orange", 1000);
// changeColor("green", 1000);

// This will change in intervals, but not a good way as the functions are independent, if first function fails, the next will get executed
// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);

// // #3 To set dependency of functions we use callbacks
// Here callbacks are nested = Callback hell
// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange(); //if nextColorChange callback is missing, dont proceed
//   }, delay);
// }
// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
// I;
// //callbacks nesting - callback hell

//
//
//
// // // // Promises
//
// // With Callback hell: dummy function for saving data in database
//
// function saveToDB(data, success, failure) {
//   let internetSpeed = Math.random() * 10 + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }

//      // Here we are creating dependency + The logs are done async while the callbacks for succcess and failure is synchronous
// saveToDB(
//   "random data",
//   () => {
//     console.log("Success: Your data is saved");
//     // if data saved successfully, then save another data (creating dependency)
//    saveToDB(
//       "random data 2",
//       () => {
//         console.log("Success: data 2 saved");
//         saveToDB(
//           "random data 3",
//           () => {
//             console.log("Success: data 3 saved");
//           },
//           () => {
//             console.log("Failure: data 3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure: data 3 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: data not saved");
//   }
// );

// // With promises:
// now our function only returns something as promised irrespective of what that something is
// function saveToDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.random() * 10 + 1;
//     if (internetSpeed > 4) {
//       resolve(" success:Data was saved");
//     } else {
//       reject("Failure:Weak connection");
//     }
//   });
// }
// // // calling normally
// // console.log(saveToDB("apna college"));
// // // using then/catch method
// // this means, if data is saved in request, then do work in callback og  .then else do work inside .catch

// // Promise chaining
// // Benefits: we use single catch
// let request = saveToDB("random data 1"); // req=promise object
// request
//   .then((result) => {
//     console.log("data 1 saved, Promise was resolved ");
//     console.log("result of promise:", result);

//     saveToDB("random data 2").then((result) => {
//       console.log("data 2 saved, Promise was resolved ");
//       console.log("result of promise:", result);

//       saveToDB("random data 3").then((result) => {
//         console.log("data 3 saved, promise was resolved");
//         console.log("result of promise:", result);
//       });
//     });
//   })

//   // Thus we only have to write single catch
//   .catch((error) => {
//     console.log("Promise was rejected");
//     console.log("error of promise", error);
//   });

// // o/p:
// // data 1 saved, Promise was resolved   success:Data was saved
// // data 2 saved, Promise was resolved   success:Data was saved
// // data 3 saved, promise was resolved  success:Data was saved
// //

//
// // more better way of writing promise chaining: returning argument in then 1, using then 2 on then 1 as then 1 will contain data for then 2 as returned value
// let request = saveToDB("random data 1"); // req=promise object
// request
//   .then(() => {
//     console.log("data 1 saved, promise was resolved");
//     return saveToDB("random data 2");
//   })
//   .then(() => {
//     console.log("data 2 saved");
//     return saveToDB("random data 3");
//   })
//   .then(() => {
//     console.log("data 3 saved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

//
//

//
//
// // // Exercise: promises on change color
//
//
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;
//       resolve("color changed!");
//     }, delay);
//   });
// }

// // to check state of promise. use let requestPromise = changeColor("color",1000) -> resuestPromise
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

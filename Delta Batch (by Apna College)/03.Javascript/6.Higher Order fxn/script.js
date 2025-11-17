// function oddOrEvenFactory(request) {
//   if (request == "odd") {
//     let odd = function (n) {
//       console.log(!(n % 2 == 0));
//       //Here "!" means NOT, if number is odd, this will print True
//       // Because of NOT, we have our answer in boolean
//       // Above we have used "!" for reversal of basic condition, if even then false else true is set as value of function.
//     };
//     return odd;
//   } else if (request == "even") {
//     let even = function (n) {
//       console.log(n % 2 == 0);
//     };
//     return even;
//   } else {
//     console.log("Wrong Request");
//   }
// }

// let request = prompt("Enter type of number [odd/even]");
// let n = prompt("Enter number to be checked!");

// let ans = oddOrEvenFactory(request);

// console.log(ans(n));

function oddOrEvenFactory(request) {
  if (request == "odd") {
    return function odd(n) {
      console.log(!(n % 2 == 0));
      //Here "!" means NOT, if number is odd, this will print True
      // Because of NOT, we have our answer in boolean
      // Above we have used "!" for reversal of basic condition, if even then false else true is set as value of function.
    };
  } else if (request == "even") {
    return function even(n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("Wrong Request");
  }
}

let request = prompt("Enter type of number [odd/even]");
let n = prompt("Enter number to be checked!");

let ans = oddOrEvenFactory(request);

console.log(ans(n));

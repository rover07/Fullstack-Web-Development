// function sum(a, b) {
//   console.log(a + b);
// }
// sum(4, 7);

// // can vote
// function canVote(age) {
//   if (age >= 18) {
//     console.log("Can vote");
//   } else console.log("cannot vote");
// }

// let age = 21;
// let age = 1;
// canVote(age);

////// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

function greet(user) {
  if (user.age >= 18) {
    console.log("can vote");
  } else console.log("cant vote");

  return `Hi Mr ${user.name}, your age is ${user.age}`;
}

let user = {
  name: "Vaibhav",
  age: 21,
  gender: "Male",
};

let ans = greet(user);

console.log(ans);

// let btn = document.querySelector("#button2");
// let count = 0;
// // #1 combined
// btn.onclick = () => {
//   console.log(`Clicked ${count} number of times`);
//   count++;
// };
// // #2 separate
// function sayHello() {
//   console.log("hello");
// }
// btn.onclick = sayHello;

// // dealing with multi buttons
// let btns = document.querySelectorAll("button");
// for (let btn of btns) {
//   btn.onclick = sayHello; // here on using () after function name, the function will get executed before  clicking
//   btn.onmouseenter = function () {
//     console.log("you entered a button");
//   };
// }

// function sayHello() {
//   console.log("hello, you clicked a button");
// }

//
//
// // Event listener
let btns = document.querySelectorAll("button");
for (btn of btns) {
  btn.addEventListener("click", () => {
    console.log("Button clicked");
  });
  btn.addEventListener("dblclick", () => {
    console.log("double clicked");
  });
  btn.addEventListener("mouseover", hover);
}

function hover() {
  console.log("Mouse hovered");
}

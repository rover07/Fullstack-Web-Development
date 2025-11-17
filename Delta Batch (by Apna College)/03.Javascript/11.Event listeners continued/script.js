// let para = document.querySelector("p");
// para.addEventListener("mouseover", () => {
//   console.log("Hovered over paragraph");
// });

// this in event listener
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log(this); // o/p: <button>Button</button>
//   console.dir(this); // o/p: button object
//   console.log(this.innerText); // o/p: Click me!
//   this.style.backgroundColor = "Red";
// });

// Use of this

// // redundant lines in this code :
// // console.dir(this.innerText);
// // this.style.backgroundColor = "blue";
// let btn = document.querySelector("button");
// let h1 = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// h2.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function () {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// });

// // // better way of writing
// function changeColor() {
//   console.dir(this.innerText);
//   this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changeColor);
// h1.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

// // // Event argument
// let btn = document.querySelector("button");
// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("Button double clicked", event.target);
// });

// // Keyboard events
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//   console.log("Keydown used;");
//   console.log(event);
//   console.log(event.key); // Displays whats visible on screen after event.
//   console.log(event.code); // Displays whats visible in code after event.
// });

// // // Game:
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {
//   console.log("code=", event.code);
//   if (event.code == "ArrowUp" || event.code == "KeyW") {
//     console.log("The player moves Up");
//   } else if (event.code == "ArrowRight" || event.code == "KeyD") {
//     console.log("The player moves Right");
//   } else if (event.code == "ArrowDown" || event.code == "KeyS") {
//     console.log("The player moves Backwards");
//   } else if (event.code == "ArrowLeft" || event.code == "KeyA") {
//     console.log("The player moves Left");
//   } else {
//     console.log("The player didn't move");
//   }
// });

//
//
//
// // // Form events
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // prevents default action: redirecting to /action page

//   //Way 1: accessing input of form.
//   // let user = document.querySelector("#name");
//   // let pass = document.querySelector("#pass");

//   //Way 2: accessing input of form.(Mostly used)
//   let user = this.elements[0];
//   let pass = this.elements[1];

//   console.log(user.value);
//   console.log(pass.value);
//   alert(`Hi! your name is ${user.value} and password ${pass.value}`);

//   console.log("form submitted");
// });

// // // change event
// let user = document.querySelector("#name");
// user.addEventListener("change", function (event) {
//   event.preventDefault();
//   console.log("change changed ");
//   console.log("final value:", this.value);
// });

//
// // // input event
// let user = document.querySelector("#name");
// user.addEventListener("input", function (event) {
//   event.preventDefault();
//   console.log("input event ");
//   console.log("final value:", this.value);
// });

//
//
//
// // // Exercise
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   event.preventDefault();
//   this.style.backgroundColor = "Green";
// });

//
//
//
// // // Stop Propogation
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//   console.log("div was clicked");
// });
// ul.addEventListener("click", function (event) {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });

// for (li of lis) {
//   li.addEventListener("click", function (event) {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

//
// //
//
// // // // To do Activity

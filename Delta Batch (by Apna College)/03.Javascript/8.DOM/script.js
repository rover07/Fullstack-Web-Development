// #1
// let texts = document.getElementsByClassName("heading");

// for (let i = 0; i < texts.length; i++) {
//   console.dir(texts[i]); // logs into console heading object
//   texts[i].innerHTML = "This is changed value"; // changes content
// }

//
// // query selector
// console.dir(document.querySelector("p"));
// // query selector All

// console.dir(document.querySelectorAll("p"));
// console.dir(document.querySelector("div h1")); // returns h1 inside div

// select
// let para = document.querySelector("p");
// // console.dir(para);
// console.dir(para.innerHTML);
// console.dir(para.innerText);
// console.dir(para.textContent);

//
let flavour = document.querySelectorAll("#flavour li");
for (let i = 0; i < flavour.length; i++) {
  flavour[i].style.color = "yellow";
}

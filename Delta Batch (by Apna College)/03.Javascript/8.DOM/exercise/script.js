// // // 1. add paragraph to html
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red";
let body = document.querySelector("body");
body.append(para1);

//
// //2. make color of text red
para1.classList.add("red");

// // 3. add h3 with blue text that says I'm a blue h3
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3";
body.append(h3);

h3.classList.add("blue");

// // 4.

let div = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p2");

h1.innerText = "I'm in a div";
para2.innerText = "ME TOO!";
body.append(div);
div.append(h1, para2);
div.classList.add("box");

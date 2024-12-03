let btn = document.querySelector("button");
let div = document.querySelector("div");
let heading = document.querySelector("h3");
btn.addEventListener("click", changeColor);

function changeColor() {
  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let color = `rgb(${red}, ${blue}, ${green})`;
  div.style.backgroundColor = color;
  heading.style.color = color;
  heading.innerText = color;
}

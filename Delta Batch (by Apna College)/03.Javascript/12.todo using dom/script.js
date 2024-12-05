let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// function addTask(event) {

//   let formData = document.querySelector("form");
//   this.element;
// }

btn.addEventListener("click", function (event) {
  event.preventDefault();

  let task = document.createElement("li");
  let delBtn = document.createElement("button");

  delBtn.innerText = "X";
  delBtn.classList.add("delete");

  task.innerText = inp.value; //Set innerText first, then prepend as innertext after will replace everything
  task.prepend(delBtn);

  ul.appendChild(task);
  inp.value = ""; // to reset the value in input after button click
  console.log(`Task ${inp.value} Added!`);
});

// delete button working

// this wont work
// let delBtns = document.querySelectorAll(".delete");

// delBtns.addEventListener("click", function () {
//   for (delBtn of delBtns) {
//     let parent = delBtn.parentElement;
//   }
// });

//
// instead do this, ie. work with its parent
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("deleted!");
  }
});

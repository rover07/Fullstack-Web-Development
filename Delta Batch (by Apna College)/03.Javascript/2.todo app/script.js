// // TO-DO App
let todo = [];
let req = prompt("Please enter your first choice");
while (true) {
  if (req == "list") {
    for (let task of todo) {
      console.log(task);
    }
  } else if (req == "add") {
    let task = prompt("Enter task to add");
    todo.push(task);
    console.log("task added");
  } else if (req == "remove") {
    let taskToRemove = todo.indexOf(prompt("Enter task to remove:"));
    if (taskToRemove != -1) {
      todo.splice(taskToRemove, 1);
    }
  } else if (req == "quit") {
    console.log("Quitting todo!");
    break;
  } else {
    console.log("Invalid keyword!!!");
  }
  req = prompt("Please enter your request");
}

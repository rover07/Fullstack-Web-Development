// JS call stack
function hello() {
  //3
  console.log("inside hello fnx");
  //4
  console.log("hello");
}
function demo() {
  //2
  console.log("calling hello fnx");
  hello();
}

//1
console.log("calling demo fnx");
demo();
//5
console.log("done, bye!");

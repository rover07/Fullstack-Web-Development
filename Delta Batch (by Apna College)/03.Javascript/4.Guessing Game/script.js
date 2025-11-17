let num = Math.floor(Math.random() * 5) + 1;
let guess = prompt("Enter Number");
while (true) {
  if (guess == "quit") {
    console.log("You Quit!");
    break;
  } else if (num == guess) {
    console.log("Congrats! Correct Guess");
    break;
    //hints below
  } else if (guess < num) {
    guess = prompt("your guess was too small");
  } else {
    guess = prompt("your guess was too large");
  }
}

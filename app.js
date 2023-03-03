let maximum = parseInt(prompt("Give me a maximum number!"));
// parseInt to make any string into a number. if its not a number, it return "NaN"
while (!maximum) {
  maximum = parseInt(prompt("That is not a valid number. Please try again!"));
}
//we are using a while loop so that so long as this is invalid, we keep asking
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;
// attempts start at one because once you made it past the first guess, that's
//when it starts

while (parseInt(guess) !== targetNum) {
  console.log(`attempt number ${attempts}`);
  attempts++;
  if (guess === "q") {
    guess = alert("Okay loser, lmao.");
    break;
    //breaks will end the loop
  }
  if (guess > targetNum) {
    guess = prompt("Too high! Try again:");
  } else {
    guess = prompt("Too low! Try again:");
    // we are already in a loop of failure. if its not equal, its less than or greater
    //though can be an 'else if' if you want
  }
}
//put an if for when they get it right

if (parseInt(guess) === targetNum) {
  alert(`You got it! It took you ${attempts} tries!`);
  console.log(`You got it! It took you ${attempts} tries!`);
}

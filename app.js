let maximum = parseInt(prompt("Enter the maximum number!"));
// parseInt to make any string into a number. if its not a number, it return "NaN"
while (!maximum){
    maximum = parseInt(prompt("That is not a valid number. Please try again!"));
}
//we are using a while loop so that so long as this is invalid, we keep asking
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your first guess!"))
while (guess !== targetNum){
    if (guess > targetNum){
        guess = prompt("Too high! Try again:")
    } else{
        guess = prompt("Too low! Try again:")
        // we are already in a loop of failure. if its not equal, its less than or greater
        //though can be an 'else if' if you want
    }

}
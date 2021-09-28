const prompt = require("prompt-sync")({ sigint: true });

console.log("I'm thinking of a number bewtween 1 and 100. Try to guess it.");
let guess = Number(prompt("> "));
console.log("");

const random = Number(Math.ceil(Math.random() * 100));
// console.log(random);

let count = 0;

while (guess !== random) {
	if (count > 1) {
		break;
	} else if (guess < random) {
		console.log("Sorry, too low! Guess again.");
		guess = prompt("> ");
		console.log("");
	} else if (guess > random) {
		console.log("Sorry, too high! Guess again.");
		guess = prompt("> ");
		console.log("");
	} else {
		break;
	}

	count = count + 1;
}
if (guess === random) {
	console.log("Congratulations, " + guess + " is correct!");
} else {
	if (guess > random) {
		console.log("Sorry, too high! I was thinking of", random);
	} else if (guess < random) {
		console.log("Sorry, too low! I was thinking of", random);
	} else {
		console.log("Congratulations, " + guess + " is correct!");
	}
}

import { question } from "readline-sync";


function guessingGame() {
	let secret = Math.floor(Math.random() * 100) + 1

	console.log('Guess a number between 1 and 100!');

	for (let guessCounter = 1; guessCounter < 10; guessCounter++) {
		let guess = Number(question('Guess: '))

		if (guess < secret) {
			console.log(`Your guess was to low, try again`);
		} else if (guess > secret) {
			console.log(`Your guess was to high, try again`);
		} else if (guess === secret) {
			console.log(`Yay, ${guess} is right! you guessed it in ${guessCounter} tries!`);
			return
		}
	}
}

export default guessingGame
const dialog = '#dialog';
const btnOk = '#button';

let number = 0;
let maxNumber = 0;
let gameStarted = false;

const startGame = () => {
	$(dialog).text('Hello, I want to play a game with you...');
	setTimeout(intro1, 3000);
	return false;
}

const intro1 = () => {
	$(dialog).text('The rules are simple: I have a number in mind and you need to guess which number it is');
	setTimeout(intro2, 5000);
	// number = Math.floor(Math.random() * 1000) + 1;
	return false;
}

const intro2 = () => {
	$(dialog).text('Every time you say a wrong number I will tell you if your number is bigger or smaller than mine');
	setTimeout(intro3, 7000);
	return false;
}

const intro3 = () => {
	$(dialog).text('So, let us start');
	setTimeout(changeDifficulty, 9000);
	return false;
}

const changeDifficulty = () => {
	$(dialog).text('First, type the maximum number I can choose from');
	$(btnOk).click(() => {
		if (!gameStarted) {
			maxNumber = $('#answer').val();
			number = Math.floor(Math.random() * maxNumber) + 1;
			game();
			gameStarted = true;
			return false;
		}
	});
	return false;
}

const game = () => {
	$(btnOk).click(() => {
		const userGuess = $('#answer').val();
		if (userGuess == number) {
			$(dialog).text('You won! Try again...');
			number = Math.floor(Math.random() * maxNumber) + 1;
		} else if (userGuess > number) {
			$(dialog).text('Your number is bigger');
		} else if (userGuess < number) {
			$(dialog).text('Your number is smaller');
		} else {
			$(dialog).text('Something is wrong');
		}
		return false;
	});
}

$(document).ready(() => {
	startGame();
});

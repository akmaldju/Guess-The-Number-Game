var number = 0;
var ok;
function startGame() {
	document.getElementById('dialog').innerText =
		'Hello, I want to play a game with you...';
	setTimeout(intro1, 3000);
	return false;
}
function intro1() {
	document.getElementById('dialog').innerText =
		'The rules are simple: I have a number in mind and you need to guess which number it is';
	setTimeout(intro2, 5000);
	number = Math.floor(Math.random() * 1000) + 1;
	// console.log(number);
	return false;
}
function intro2() {
	document.getElementById('dialog').innerText =
		'Every time you say a wrong number I will tell you if your number is bigger or smaller than mine';
	setTimeout(intro3, 7000);
	return false;
}
function intro3() {
	document.getElementById('dialog').innerText = 'So, let us start';
	return false;
}

window.onload = function () {
	startGame();
	ok = document.getElementById('button');
	ok.onclick = function () {
		// console.log('Click');
		// console.log(document.getElementById('answer').value);
		let userGuess = document.getElementById('answer').value;
		if (userGuess == number) {
			document.getElementById('dialog').innerText = 'You won! Try again...';
			number = Math.floor(Math.random() * 1000) + 1;
		} else if (userGuess > number) {
			document.getElementById('dialog').innerText = 'Your number is bigger';
		} else if (userGuess < number) {
			document.getElementById('dialog').innerText = 'Your number is smaller';
		} else {
			document.getElementById('dialog').innerText = 'Something is wrong';
		}
		return false;
	};
};

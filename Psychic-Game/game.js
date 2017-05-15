var compChoice = "";
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Score
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var usedLetters = [];
var guessesSoFar = "";
//

// Computer chooses from var alphabet
while (compChoice.length < 1) {
  compChoice += alphabet[Math.floor(Math.random() * alphabet.length)];
} 
console.log(compChoice);
//

// User input guesses and if statements
document.onkeydown = function(pressed){
    var keyPress = String.fromCharCode(pressed.keyCode).toLowerCase();
    userchoice = keyPress;
    console.log(keyPress);

    
    if (userchoice === compChoice) {
		alert('You win!');
		wins = wins + 1;
		document.getElementById('win').innerHTML = 'Wins: ' + wins;
		document.getElementById('compGuess').innerHTML = '* The Computer\'s Guess was: ' + compChoice + ' *';
		
	} else {
		guessesLeft = guessesLeft - 1;
		document.getElementById('guessl').innerHTML = 'Guesses Left: ' + guessesLeft;
	}

	if (guessesLeft === 0) {
		alert('Game Over!')
		losses = losses + 1;
		document.getElementById('loss').innerHTML = 'Losses: ' + losses;
	}

	if (usedLetters.includes(keyPress) === true) {
            alert("You used this letter already");
          } else {
            usedLetters.splice(0, 0, userchoice);
            document.getElementById('guessf').innerHTML = 'Your Guesses so Far: ' + usedLetters;
            console.log("used letters " + usedLetters);
    }
};







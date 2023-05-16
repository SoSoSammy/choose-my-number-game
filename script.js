'use strict';

// Create random number variable between 1 and 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Create function to display the message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// When the check button is clicked, get the guess from the input field and compare it against the secret number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    // Reveal the secret number in the number box
    document.querySelector('.number').textContent = secretNumber;

    // Make the background color green and the number box wider
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // When the player has a new high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// When the again button is clicked, reset the game
document.querySelector('.again').addEventListener('click', function () {
  // Get a new value for the secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // Reset the score
  score = 20;
  document.querySelector('.score').textContent = score;
  // Reset the message box
  displayMessage('Start guessing...');
  // Reset the number box
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  // Reset the text field
  document.querySelector('.guess').value = '';
  // Change the background color back to gray
  document.querySelector('body').style.backgroundColor = '#222';
});

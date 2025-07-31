'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 17;
// document.querySelector('.score').textContent = 11;

// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message1) {
  document.querySelector('.message').textContent = message1;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input number
  if (!guess) {
    displayMessage('🚫No Number!');
  }
  //when you win
  else if (guess === secretNumber) {
    displayMessage('🍾correct number🍾');
    document.querySelector('body').style.backgroundColor = '#b95ede';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    let message;

    if (guess === secretNumber - 1 || guess === secretNumber + 1) {
      message = '🎉Close enough';
    } else if (guess > secretNumber) {
      message = '📈Too high';
    } else {
      message = '📉Too low';
    }

    if (score > 1) {
      displayMessage(message);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥You were defeated');
      document.querySelector('.score').textContent = 0;
    }
  }
});

//   //when input number is close to secret number
//   else if (guess === secretNumber - 1 || guess === secretNumber + 1) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = message;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You were defeated';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //when input is high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = message;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You were defeated';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //when input is low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = message;
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥You were defeated';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

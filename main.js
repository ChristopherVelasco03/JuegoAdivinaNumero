let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Intentos Previos: ';
    guesses.style.color = '#F8FAE5';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = '¡Felicidades! ¡Lo haz adivinado!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!GAME OVER!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = '¡Equivocado!';
    lastResult.style.color = '#F8FAE5';
    lastResult.style.backgroundColor = 'red';
    if (userGuess < randomNumber) {
      if (randomNumber - userGuess <= 5) {
        lowOrHi.textContent = '¡Un poco bajo!';
      } else {
        lowOrHi.textContent = '¡Demasiado bajo!';
      }
      lowOrHi.style.color = 'red';
    } else if (userGuess > randomNumber) {
      if (userGuess - randomNumber <= 5) {
        lowOrHi.textContent = '¡Un poco alto!';
      } else {
        lowOrHi.textContent = '¡Demasiado alto!';
      }
      lowOrHi.style.color = '#FFB000';
    }
  }
  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Reintentar';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'black';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}


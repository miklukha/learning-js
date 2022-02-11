const word = 'world';
const wordArray = word.split('');

let amountOfAttempt = 0;

const labelRef = document.querySelector('.label');
const inputRef = document.querySelector('.input');
const btnRef = document.querySelector('.btn');
const listRef = document.querySelector('.list');
const paragraphTextRef = document.querySelector('.paragraph-answer');
const answerTextRef = document.querySelector('.answer');

btnRef.addEventListener('click', onStartTheGame);
window.addEventListener('keydown', onKeyPress);

function onKeyPress(event) {
  if (event.code === 'Enter') {
    onStartTheGame();
  }
}

function onStartTheGame() {
  const correctLengthOfInput = checkLengthInput();

  if (!correctLengthOfInput) {
    inputRef.value = '';
    return;
  }

  const inputValue = inputRef.value.toLowerCase();

  amountOfAttempt += 1;
  createMarkup(inputValue, amountOfAttempt);
  findSameLetter(amountOfAttempt);

  if (inputValue === word) {
    finishGameWithWin();
    return;
  }

  if (amountOfAttempt === 6) {
    finishGameWithDefeat();
    return;
  }
}

function checkLengthInput() {
  return inputRef.value.length === 5 ? true : false;
}

function createMarkup(inputValue, i) {
  const itemMarkup = inputValue
    .split('')
    .map(item => `<li class="item" data-value = ${i}>${item}</li>`)
    .join('');

  listRef.insertAdjacentHTML('beforeend', itemMarkup);
  inputRef.value = '';
}

function findSameLetter(i) {
  const itemsRef = document.querySelectorAll(`[data-value = "${i}"]`);

  itemsRef.forEach((item, index) => {
    if (wordArray.includes(item.textContent)) {
      if (index === wordArray.indexOf(item.textContent)) {
        item.classList.add('correct-position');
        return;
      }
      item.classList.add('correct-letter');
    }
  });
}

function finishGameWithWin() {
  paragraphTextRef.textContent = 'Congratulation. You find the word!!!';
  window.removeEventListener('keydown', onKeyPress);
  btnRef.removeEventListener('click', onStartTheGame);
}

function finishGameWithDefeat() {
  paragraphTextRef.textContent = 'Unfortunately, you lose. Correct word:';
  answerTextRef.textContent = `${word}`;
  window.removeEventListener('keydown', onKeyPress);
  btnRef.removeEventListener('click', onStartTheGame);
}

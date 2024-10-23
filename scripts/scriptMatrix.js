// TODO Придумать как реализовать анимации перехода между состояниями

/* 4) в дополнению к пункту 2, после генерации ячейки, стоит проверить, если вообще дальше смысл играть */

let gameContainer = document.querySelector('.game__container_iner');
const buttonNewGame = document.querySelector('.header_button_new');
let isFirstCall = true;

let gameMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

buttonNewGame.addEventListener('click', () => {
  let newGame = confirm('Начать новую игру?');

  if (!newGame) {
    return;
  }

  createNewGeme(gameMatrix);
});

function createNewGeme(arr) {
  createGameField(arr, true);
}

function createGameField(arr, isFirstCall = false) {
  gameContainer.innerHTML = '';

  if (isFirstCall) {
    generateCell(gameMatrix, true);
    generateCell(gameMatrix, true);
  }

  arr.flat().forEach((tailValue) => {
    const cell = document.createElement('div');
    const tail = document.createElement('div');
    cell.className = 'game__cell';

    if (tailValue === 0) {
      tail.className = 'game__tail';
      cell.append(tail);
    } else {
      tail.className = `game__tail tail_${tailValue}`;
      cell.append(tail);
    }
    gameContainer.append(cell);
  });
}

function generateCell(arr, skipGameOverChecking = false) {
  arr = gameMatrix;
  const colIndex = Math.floor(Math.random() * 4);
  const rowIndex = Math.floor(Math.random() * 4);

  if (arr[colIndex][rowIndex] === 0) {
    const tailValue = generateTailValue();
    arr[colIndex][rowIndex] = tailValue;

    
    if (!skipGameOverChecking) {
      checkGameOver(arr);
    }
  } else {
    generateCell(arr);
  }
}

function generateTailValue() {
  let randomNumber = Math.random().toFixed(2);

  if (randomNumber < 0.1) {
    return 4;
  } else {
    return 2;
  }
}

function createNewGeme() {
  gameContainer.innerHTML = '';

  createGameField(gameMatrix, true);
}

let isGameOver = false;

function checkGameOver(arr) {
  const hasZero = arr.flat().some((item) => item === 0);

  if (!hasZero) {
    isGameOver = true;
    alert('game over');
  }
}

createGameField(gameMatrix);

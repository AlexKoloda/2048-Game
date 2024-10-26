const gameContainer = document.querySelector(".game__container_inner");
const buttonNewGame = document.querySelector(".header_button_new");
let isFirstCall = true;
let isGameOver = false;

const gameMatrix = [[], [], [], []];

function createGameMatrix(arr) {
  const size = arr.length;

  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (col !== size) {
        arr[row][col] = { value: 0, wasSum: false };
      }
    }
  }
}

function createGameField(arr, isFirstCall = false) {
  gameContainer.innerHTML = "";

  if (isFirstCall) {
    generateCell(gameMatrix, true);
    generateCell(gameMatrix, true);
  }

  arr.flat().forEach((tailValue) => {
    const cell = document.createElement("div");
    const tail = document.createElement("div");
    cell.className = "game__cell";

    if (tailValue === 0) {
      tail.className = "game__tail";
      cell.append(tail);
    } else {
      tail.className = `game__tail tail_${tailValue.value}`;
      cell.append(tail);
    }
    gameContainer.append(cell);
    changeWasSumProp(gameMatrix);
  });
}

function generateCell(arr, skipGameOverChecking = false) {
  const colIndex = Math.floor(Math.random() * 4);
  const rowIndex = Math.floor(Math.random() * 4);
  const randomTail = arr[colIndex][rowIndex];

  if (randomTail.value === 0) {
    const tailValue = generateTailValue();
    randomTail.value = tailValue;

    if (!skipGameOverChecking) {
      checkEndGame(arr);
    }
  }
}

function generateTailValue() {
  const randomNumber = Math.random().toFixed(2);
  const maxValueFourTail = 0.1;

  return randomNumber < maxValueFourTail ? 4 : 2;
}

buttonNewGame.addEventListener("click", () => {
  let newGame = confirm("Начать новую игру?");

  if (!newGame) {
    return;
  }

  createNewGame(gameMatrix);
});

function createNewGame(arr) {  
  createGameMatrix(arr);
  score = 0;
  scoreDisplay.textContent = score;
  createGameField(gameMatrix, true);
}

function checkEndGame(arr) {
  const hasEmptyCell = arr.flat().some((item) => item === 0);
  const hasFinalCell = arr.flat().some((item) => item === 2048);

  if (!hasEmptyCell && !checkForAvailableMoves(arr)) {
    isGameOver = true;
    createNewGame(gameMatrix);
    alert(`Конец игры!`);
  }

  if (hasFinalCell) {
    createNewGame(gameMatrix);
    alert(`Победа!`);
  }
}

function checkForAvailableMoves(arr) {
  const size = arr.length;
  let hasAvaibleMoves = false;

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      if (col !== size - 1 && row !== size - 1) {
        if (arr[col][row].value === arr[col][row + 1].value) {
          hasAvaibleMoves = true;
        } else if (arr[row][col].value === arr[row + 1][col].value) {
          hasAvaibleMoves = true;
        }
      }
    }
  }
  return hasAvaibleMoves;
}

function changeWasSumProp(arr) {  
  const size = arr.length;

  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      let currentCell = arr[col][row];

      if (currentCell.value !== 0) {
        currentCell.wasSum = false;
      }
    }
  }
}

createGameMatrix(gameMatrix);
createGameField(gameMatrix);
changeWasSumProp(gameMatrix);

let gameContainer = document.querySelector(".game__container_iner");
const buttonNewGame = document.querySelector(".header_button_new");
let isFirstCall = true;

/* let gameMatrix = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
 */
let gameTail = {
  value: 0,
  wasSum: false,
}

let gameMatrix = [
  [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
  [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
  [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
  [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
];

console.log(gameMatrix[0][0].value)

function createGameField(arr, isFirstCall = false) {
  gameContainer.innerHTML = "";

  if (isFirstCall) {
    scoreDisplay.textContent = 0;
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
    gameTail.wasSum = false;
    console.log(gameTail.wasSum)
  });
}

function generateCell(arr, skipGameOverChecking = false) {
  const colIndex = Math.floor(Math.random() * 4);
  const rowIndex = Math.floor(Math.random() * 4);
  let randomTail = arr[colIndex][rowIndex];
  
  if (randomTail.value === 0) {
    const tailValue = generateTailValue();
    randomTail.value = tailValue;

    if (!skipGameOverChecking) {
      checkEndGame(arr);
    }
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

buttonNewGame.addEventListener("click", () => {
  let newGame = confirm("Начать новую игру?");

  if (!newGame) {
    return;
  }

  createNewGame(gameMatrix);
});


function createNewGame(arr) {
  
  gameMatrix = [
    [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
    [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
    [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
    [{value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}, {value: 0, wasSum: false,}],
  ];
  
  
  score = 0;
  scoreDisplay.textContent = score;
  createGameField(gameMatrix, true);
}

let isGameOver = false;

function checkEndGame(arr) {

return 

  const hasZero = arr.flat().some((item) => item === 0);
  const hasFinal = arr.flat().some((item) => item === 2048);

  if (!hasZero && !checkForAvailableMoves(arr)) {
    isGameOver = true;
    alert(`Конец игры! Ваш счет: ${score} `);
  }

  if (hasFinal) {
    createNewGame(gameMatrix);
    alert(`Победа! Ваш счет: ${score}`);
  }


}

createGameField(gameMatrix);

function checkForAvailableMoves(arr) {
  const size = arr.length;
  let res = false;
  
  for (let col = 0; col < size; col++) {
    for (let row = 0; row < size; row++) {
      
      if (col !== size - 1 && row !== size - 1) {
        if (arr[col][row].value === arr[col][row + 1].value) {
          res = true;
        } else if (arr[row][col].value === arr[row + 1][col].value) {
          res = true;
        }
      }
    }
  }
  return res;
} 
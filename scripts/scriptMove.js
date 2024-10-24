const game__container = document.querySelector("#game__main");


window.addEventListener("keydown", (event) => {
  switch (event.key) {

    case 'ArrowUp':
      if (!isGameOver) {
        const canMove = moveUp(gameMatrix);
      
        if (canMove) {          
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }

      case 'ArrowDown':
        if (!isGameOver) {
          const canMove = moveDown(gameMatrix);
  
          if (canMove) {
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
        }
  
      case 'ArrowLeft':
        if (!isGameOver) {
          const canMove = moveLeft(gameMatrix);

          if (canMove) {
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
        }
  
      case 'ArrowRight':
        if (!isGameOver) {
          const canMove = moveRight(gameMatrix);

          if (canMove) {             
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
      }
  }
});

function moveUp(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));
  const size = arr.length;

  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (col !== size - 1) {
          let currentCell = arr[col][row];
          let nextCell = arr[col + 1][row];

          if (currentCell.value === 0) {
            currentCell.value = nextCell.value;
            nextCell.value = 0;

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum ) {
            currentCell.value = sumTailValue(currentCell.value, nextCell.value, currentCell);
            nextCell.value = 0;
            break;
          }
        }
      }
    }
  }
  return !areMatricesEqual(arr, oldMatrix);
}

function moveDown(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));
  let resArr = arr.reverse();
  const size = resArr.length;

  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (col !== size - 1) {
          let currentCell = resArr[col][row];
          let nextCell = resArr[col + 1][row];

          if (currentCell.value === 0) {
            currentCell.value = nextCell.value;
            nextCell.value = 0;

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum) {
            currentCell.value = sumTailValue(currentCell.value, nextCell.value, currentCell);
            nextCell.value = 0;
            break;
          }
        }
      }
    }
  }

  resArr.reverse();
  return !areMatricesEqual(arr, oldMatrix);
}

function moveLeft(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));
  const size = arr.length;

  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (col !== size - 1) {
          let currentCell = arr[row][col];
          let nextCell = arr[row][col + 1];

          if (currentCell.value === 0) {
            currentCell.value = nextCell.value;
            nextCell.value = 0;

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum) {
            currentCell.value = sumTailValue(currentCell.value, nextCell.value, currentCell);
            nextCell.value = 0;
            break;          
          }
          
        }
      }
    }
  }

  return !areMatricesEqual(arr, oldMatrix);
}

function moveRight(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));
  const size = arr.length;
  reverseMatrix(arr);

  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (col !== size - 1) {
          let currentCell = arr[row][col];
          let nextCell = arr[row][col + 1];

          if (currentCell.value === 0) {
            currentCell.value = nextCell.value;
            nextCell.value = 0;

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum) {
            currentCell.value = sumTailValue(currentCell.value, nextCell.value, currentCell);
            nextCell.value = 0;
            break;
          }
        }
      }
    }
  }

  reverseMatrix(arr);
  return !areMatricesEqual(arr, oldMatrix);
}

// --!  Функции для создания анимации !-- //

/* function moveBackgroundDown() {
  game__container.classList.add("body--down");
  setTimeout(() => {
    game__container.classList.remove("body--down");
  }, 150);
}

function moveBackgroundUp() {
  game__container.classList.add("body--up");
  setTimeout(() => {
    game__container.classList.remove("body--up");
  }, 150);
}

function moveBackgroundLeft() {
  game__container.classList.add("body--left");
  setTimeout(() => {
    game__container.classList.remove("body--left");
  }, 150);
}

function moveBackgroundRight() {
  game__container.classList.add("body--right");
  setTimeout(() => {
    game__container.classList.remove("body--right");
  }, 150);
} */

function reverseMatrix(arr) {
  arr.map((item) => {
    return item.reverse();
  });
}

function areMatricesEqual(matrix1, matrix2) {


  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      if (matrix1[i][j].value !== matrix2[i][j].value) {
        return false;
      }
    }
  }
  return true;
}



window.addEventListener("keydown", (event) => {
  switch (event.key) {

    case 'ArrowUp':
      if (!isGameOver) {
        const canMove = moveUp(gameMatrix);
      
        if (canMove) {          
          generateCell(gameMatrix);
        }
        moveBackgroundUp();
        createGameField(gameMatrix);        
        break;
      }

      case 'ArrowDown':
        if (!isGameOver) {
          const canMove = moveDown(gameMatrix);
  
          if (canMove) {
            generateCell(gameMatrix);
          }
          moveBackgroundDown(); 
          createGameField(gameMatrix);                   
          break;
        }
  
      case 'ArrowLeft':
        
        if (!isGameOver) {
          const canMove = moveLeft(gameMatrix);

          if (canMove) {
            generateCell(gameMatrix);
          }
          moveBackgroundLeft();
          createGameField(gameMatrix);          
          break;
        }
  
      case 'ArrowRight':
        if (!isGameOver) {
          const canMove = moveRight(gameMatrix);
          
          if (canMove) {             
            generateCell(gameMatrix);
          }
          moveBackgroundRight();
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

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum  && !nextCell.wasSum) {
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

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum && !nextCell.wasSum) {
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

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum && !nextCell.wasSum) {
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

          } else if (currentCell.value === nextCell.value && !currentCell.wasSum && !nextCell.wasSum) {
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

const gameBox = document.querySelector(".game__container_inner");

function moveBackgroundDown() {
  gameBox.classList.add("body--down");
  setTimeout(() => {
    gameBox.classList.remove("body--down");
  }, 200);
}

function moveBackgroundUp() {
  gameBox.classList.add("body--up");
  setTimeout(() => {
    gameBox.classList.remove("body--up");
  }, 200);
}

function moveBackgroundLeft() {
  gameBox.classList.add("body--left");
  setTimeout(() => {
    gameBox.classList.remove("body--left");
  }, 200);
}

function moveBackgroundRight() {
  gameBox.classList.add("body--right");
  setTimeout(() => {
    gameBox.classList.remove("body--right");
  }, 200);
}

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



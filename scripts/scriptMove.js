const game__container = document.querySelector("#game__main");
let canMove;
window.addEventListener("keydown", (event) => {

  switch (event.key) {

    case "ArrowUp":
      
      if (!isGameOver) {
        canMove = moveUp(gameMatrix);        

        if (canMove) {
         /*  moveBackgroundUp() */
          generateCell(gameMatrix); 
        }
        createGameField(gameMatrix);
        break;
      }

    case "ArrowDown":
      if (!isGameOver) {
        canMove = moveDouwn(gameMatrix);

        if (canMove) {
         /*  moveBackgroundDown() */
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }

    case "ArrowLeft":
      if (!isGameOver) {
        canMove = moveLeft(gameMatrix);
        if (canMove) {
         /*  moveBackgroundLeft() */
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }

    case "ArrowRight":
      if (!isGameOver) {
       /*  moveBackgroundRight() */
        canMove = moveRight(gameMatrix);
        if (canMove) {
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }
  }
});

function areMatricesEqual(matrix1, matrix2) {
  for (let i = 0; i < matrix1.length; i++) {
    for (let j = 0; j < matrix1[i].length; j++) {
      if (matrix1[i][j] !== matrix2[i][j]) {
        return false;
      }
    }
  }
  return true;
}

function moveUp(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));
  const size = arr.length;

  for (i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {

        if (col !== size - 1) {

          if (arr[col][row] === 0) {
            arr[col][row] = arr[col + 1][row];
            arr[col + 1][row] = 0;
            canMove = true;

          } else if ( arr[col][row] === arr[col + 1][row] ) {
            arr[col][row] = sumTailValue(arr[col][row], arr[col + 1][row]);
            arr[col + 1][row] = 0;
            break;
          }
        }
      }
    }
  }
  return !areMatricesEqual(arr, oldMatrix);
}

function moveDouwn(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));
  let resArr = arr.reverse();
  const size = resArr.length;

  for (i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (col !== size - 1) {
          if (resArr[col][row] === 0) {
            resArr[col][row] = arr[col + 1][row];
            resArr[col + 1][row] = 0;
          } else if (resArr[col][row] === arr[col + 1][row]) {
            resArr[col][row] = sumTailValue(
              resArr[col][row],
              arr[col + 1][row]
            );
            resArr[col + 1][row] = 0;
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

  for (i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {

        if (col !== size - 1 ) {

          if (arr[row][col] === 0) {
            arr[row][col] = arr[row][col + 1];
            arr[row][col + 1] = 0;

          } else if (arr[row][col] === arr[row][col + 1]) {
            arr[row][col] = sumTailValue(arr[row][col], arr[row][col + 1]);
            arr[row][col + 1] = 0;
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
  for (i = 0; i < 4; i++) {
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {

        if (col !== size - 1) {

          if (arr[row][col] === 0) {
            arr[row][col] = arr[row][col + 1];
            arr[row][col + 1] = 0;

          } else if (arr[row][col] === arr[row][col + 1]) {
            arr[row][col] = sumTailValue(arr[row][col], arr[row][col + 1]);
            arr[row][col + 1] = 0;
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
let game__container = document.querySelector("#game__main");
window.addEventListener("keydown", (event) => {
  event.preventDefault();

  switch (event.key) {
    case "ArrowUp":
      if (!isGameOver /* && canMoveUp(gameMatrix) */) {
        moveBackgroundUp();
        moveUp(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }

    case "ArrowDown":
      if (!isGameOver /* && canMoveDown(gameMatrix) */) {
        moveBackgroundDown();
        moveDouwn(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }

    case "ArrowLeft":
      if (!isGameOver /* && canMoveLeft(gameMatrix) */) {
        moveBackgroundLeft();
        moveLeft(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }

    case "ArrowRight":
      if (!isGameOver /* && canMoveRight(gameMatrix) */) {
        moveBackgroundRight();
        moveRight(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }
  }
});

// TODO Переделать условия функции на !== и сделать рефакторинг кода

function moveUp(arr) {
  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== arr.length - 1) {
          if (arr[col][row] === 0) {
            arr[col][row] = arr[col + 1][row];
            arr[col + 1][row] = 0;
          } else if (isEqual(arr[col][row], arr[col + 1][row])) {
            arr[col][row] = sumTailValue(arr[col][row], arr[col + 1][row]);
            arr[col + 1][row] = 0;
          }
        }
      }
    }
  }
}

function moveDouwn(arr) {
  let resArr = arr.reverse();
  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < resArr.length; row++) {
      for (let col = 0; col < resArr.length; col++) {
        if (col !== resArr.length - 1) {
          if (resArr[col][row] === 0) {
            resArr[col][row] = arr[col + 1][row];
            resArr[col + 1][row] = 0;
          } else if (isEqual(resArr[col][row], arr[col + 1][row])) {
            resArr[col][row] = sumTailValue(
              resArr[col][row],
              arr[col + 1][row]
            );
            resArr[col + 1][row] = 0;
          }
        }
      }
    }
  }
  return resArr.reverse();
}

function moveLeft(arr) {
  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== arr.length - 1) {
          if (arr[row][col] === 0) {
            arr[row][col] = arr[row][col + 1];
            arr[row][col + 1] = 0;
          } else if (isEqual(arr[row][col], arr[row][col + 1])) {
            arr[row][col] = sumTailValue(arr[row][col], arr[row][col + 1]);
            arr[row][col + 1] = 0;
          }
        }
      }
    }
  }
}

function moveRight(arr) {
  reverseMatrix(arr);
  for (let i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== arr.length - 1) {
          if (arr[row][col] === 0) {
            arr[row][col] = arr[row][col + 1];
            arr[row][col + 1] = 0;
          } else if (isEqual(arr[row][col], arr[row][col + 1])) {
            arr[row][col] = sumTailValue(arr[row][col], arr[row][col + 1]);
            arr[row][col + 1] = 0;
          }
        }
      }
    }
  }
  return reverseMatrix(arr);
}

function reverseMatrix(arr) {
  arr.map((item) => {
    return item.reverse();
  });
}

// --!  Функции для создания анимации !-- //

function moveBackgroundDown() {
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
}

// --!  /Функции для создания анимации !-- //

/* function canMoveUp(arr) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {

      if (arr[row][col] === 0) {
        return true;
      }

      if (row > 0 && arr[row][col] === arr[row - 1][col]) {
        return true;
      }
    }

    return false;
  }
}

function canMoveDown(arr) {
  arr = arr.reverse();
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (arr[row][col] === 0) {
        return true;
      }

      if (row < arr.length - 1 && arr[row][col] === arr[row + 1][col]) {
        return true;
      }
    }

    return false;
  }
}

function canMoveLeft(arr) {
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (arr[row][col] === 0) {
        return true;
      }

      if (col > 0 && arr[row][col] === arr[row][col - 1]) {
        return true;
      }
    }

    return false;
  }
}

function canMoveRight(arr) {
  reverseMatrix(arr);
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr.length; col++) {
      if (arr[row][col] === 0) {
        return true;
      }
      if (col < arr.length - 1 && arr[row][col] === arr[row][col + 1]) {
        return true;
      }
    }
    return false;
  }
}
 */
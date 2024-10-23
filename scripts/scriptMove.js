let game__container = document.querySelector("#game__main");
window.addEventListener("keydown", (event) => {
  event.preventDefault();

  switch (event.key) {
    case "ArrowUp":
      if (!isGameOver) {
        moveBackgroundUp();
        moveUp(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }

    case "ArrowDown":
      if (!isGameOver) {
        moveBackgroundDown();
        moveDouwn(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }

    case "ArrowLeft":
      if (!isGameOver) {
        moveBackgroundLeft();
        moveLeft(gameMatrix);
        generateCell(gameMatrix);
        createGameField(gameMatrix);
        break;
      }

    case "ArrowRight":
      if (!isGameOver) {
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
  for (i = 0; i < 4; i++) {
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
  for (i = 0; i < 4; i++) {
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

          } else {             // Эксперементальная ветка
            console.log('STOP')
            console.log(arr);
          } 
        }
      }
    }
  }
  return resArr.reverse();
}

function moveLeft(arr) {
  for (i = 0; i < 4; i++) {
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
  for (i = 0; i < 4; i++) {
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
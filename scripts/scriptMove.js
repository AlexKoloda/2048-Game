// Найден баг про проверке условия когда 0 в центре, !ИСПРАВИТЬ!. А лучше уйти от for и переписать все на методы массивов если будет время. 21.10



window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      moveUP(gameMatrix);
      //generateCell(gameMatrix);
      createGameField(gameMatrix);
      break;

    case "ArrowDown":
      moveDouwn(gameMatrix);
      //generateCell(gameMatrix);
      createGameField(gameMatrix);
      break;

    case "ArrowLeft":
      moveLeft(gameMatrix);
      //generateCell(gameMatrix);
      createGameField(gameMatrix);
      break;

    case "ArrowRight":
      moveRight(gameMatrix);
      //generateCell(gameMatrix);
      createGameField(gameMatrix);
      break;
  }
});

// TODO Переделать условия функции на !== и сделать рефакторинг кода

function moveUP(arr) {
  for (i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== 3) {
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
  return;
}

function moveDouwn(arr) {
  let resArr = arr.reverse();
  for (i = 0; i < 4; i++) {
    for (let row = 0; row < resArr.length; row++) {
      for (let col = 0; col < resArr.length; col++) {
        if (col !== 3) {
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
  return (arr = resArr.reverse());
}

function moveLeft(arr) {
  for (i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== 3) {
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
  return;
}

function moveRight(arr) {
  reverseMatrix(arr);
  for (i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== 3) {
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
  arr.map(item => {    
    return item.reverse();
  })
};

window.addEventListener("keydown", (event) => {
  event.preventDefault();

  switch (event.key) {

    case "ArrowUp":
      
      if (!isGameOver) {
        const canMove = moveUP(gameMatrix);

        if (canMove) {
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }

    case "ArrowDown":
      if (!isGameOver) {
        const canMove = moveDouwn(gameMatrix);

        if (canMove) {
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }

    case "ArrowLeft":
      if (!isGameOver) {
        const canMove = moveLeft(gameMatrix);
        if (canMove) {
          generateCell(gameMatrix);
        }
        createGameField(gameMatrix);
        break;
      }

    case "ArrowRight":
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

function moveUP(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));

  for (i = 0; i < 4; i++) {
    for (let row = 0; row < arr.length; row++) {
      for (let col = 0; col < arr.length; col++) {
        if (col !== 3) {
          if (arr[col][row] === 0) {
            arr[col][row] = arr[col + 1][row];
            arr[col + 1][row] = 0;
            canMove = true;
          } else if (isEqual(arr[col][row], arr[col + 1][row])) {
            arr[col][row] = sumTailValue(arr[col][row], arr[col + 1][row]);
            arr[col + 1][row] = 0;
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

  resArr.reverse();
  return !areMatricesEqual(arr, oldMatrix);
}

function moveLeft(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));

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

  return !areMatricesEqual(arr, oldMatrix);
}

function moveRight(arr) {
  const oldMatrix = JSON.parse(JSON.stringify(arr));

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

  reverseMatrix(arr);

  return !areMatricesEqual(arr, oldMatrix);
}

function reverseMatrix(arr) {
  arr.map((item) => {
    return item.reverse();
  });
}

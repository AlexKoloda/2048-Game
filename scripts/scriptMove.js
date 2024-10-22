// TODO Сделать функции движения наверх и вниз.
// Найден баг про проверке условия когда 0 в центре, !ИСПРАВИТЬ!. А лучше уйти от for и переписать все на  map если будет время. 21.10

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      moveUP(gameMatrix);
      createGameField(gameMatrix);
      break;

    case "ArrowDown":
      moveDouwn(gameMatrix);
      createGameField(gameMatrix);
      break;

    case "ArrowLeft":
      moveLeft(gameMatrix);
      createGameField(gameMatrix);
      break;

    case "ArrowRight":
      moveRight(gameMatrix);
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
            arr[col][row] = sumScore(arr[col][row], arr[col + 1][row]);
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
            resArr[col][row] = sumScore(resArr[col][row], arr[col + 1][row]);
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
    for (rows of arr) {
      if (rows.at(0) === 0) {
        rows.shift();
        rows.push(0);
      }
    }
  }
  return;
}

function moveRight(arr) {
  for (i = 0; i < 4; i++) {
    for (rows of arr) {
      if (rows.at(-1) === 0) {
        rows.pop();
        rows.unshift(0);
      }
    }
  }
  return;
}

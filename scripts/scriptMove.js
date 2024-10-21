// TODO Сделать функции движения наверх и вниз.
// Найден баг про проверке условия когда 0 в центре, испрвить. А лучше уйти от for и переписать все на  map если будет время. 21.10

const elevenCell = document.getElementById("11__Cell");
const sevenCell = document.getElementById("7__Cell");

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      moveUP(gameMatrix);
      break;

    case "ArrowDown":
      moveDouwn();
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

function moveUP(arr) {
  for (let r = 0; r < arr.length; r++) {
    let rows = arr[r];
    
    for (let c = 0; c < arr.length; c++) {    // Проход по колонкам
      let columnsItem = arr[c][r];
      


      }
    }
  

  console.log(arr);
  return;
}

function moveDouwn() {}
// TODO Переделать условия функции на !==
function moveLeft(arr) {
  for (rows of arr) {
    if (rows.at(0) === 0) {
      rows.shift();
      rows.push(0);
    }
  }
  return;
}

function moveRight(arr) {
  for (rows of arr) {
    if (rows.at(-1) === 0) {
      rows.pop();
      rows.unshift(0);
    }
  }
  return;
}

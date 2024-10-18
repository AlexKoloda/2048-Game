// TODO Сделать функции движения наверх и вниз.

const elevenCell = document.getElementById("11__Cell");
const sevenCell = document.getElementById("7__Cell");

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      moveUP();
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

function moveUP() {}

function moveDouwn() {}

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

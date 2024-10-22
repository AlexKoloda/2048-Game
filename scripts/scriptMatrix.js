// TODO Придумать как реализовать анимации перехода между состояниями

let gameContainer = document.querySelector(".game__container_iner");
const buttonNewGame = document.querySelector(".header_button_new");

let gameMatrix = [
  [0, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 2, 0],
];

function createGameField(arr) {
  gameContainer.innerHTML = "";

  arr.flat().forEach((tailValue) => {
    const cell = document.createElement("div");
    const tail = document.createElement("div");
    cell.className = "game__cell";

    if (tailValue === 0) {
      tail.className = "game__tail";
      cell.append(tail);
    } else {
      console.log(tailValue);
      tail.className = `game__tail tail_${tailValue}`;
      cell.append(tail);
    }
    gameContainer.append(cell);
  });
}

buttonNewGame.addEventListener("click", () => {
  createNewGeme(gameMatrix);
});

function createNewGeme(arr) {}

createGameField(gameMatrix);

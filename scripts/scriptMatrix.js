// TODO Придумать как реализовать анимации перехода между состояниями

// Идеи для рандомайзера

/* 
2) в функции generateCell проверяем, если наша рандомная ячейка с 0, вставляем в нее число, 
которое получаем из ф-и из пункта 3, а если число не 0, она вызывает себя

3) Написать функцию которая возращает 2 или 4 с помощью рандомайзера

4) в дополнению к пункту 2, после генерации ячейки, стоит проверить, если вообще дальше смысл играть */

let gameContainer = document.querySelector(".game__container_iner");
const buttonNewGame = document.querySelector(".header_button_new");
let isFirstCall = true;

let gameMatrix = [
  [0, 0, 0, 0],
  [4, 0, 2, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

buttonNewGame.addEventListener("click", () => {
  createNewGeme(gameMatrix);
});

function createNewGeme(arr) {
  createGameField(gameMatrix);
}

function createGameField(arr, isFirstCall = false) {
  if (isFirstCall) {

    generateCell(gameMatrix);
    generateCell(gameMatrix);
  }

  gameContainer.innerHTML = "";

  arr.flat().forEach((tailValue) => {
    const cell = document.createElement("div");
    const tail = document.createElement("div");
    cell.className = "game__cell";

    if (tailValue === 0) {
      tail.className = "game__tail";
      cell.append(tail);
    } else {
      tail.className = `game__tail tail_${tailValue}`;
      cell.append(tail);
    }
    gameContainer.append(cell);
  });
}

function generateCell(arr) {                        // НЕ РАБОАТЕТ выбор ячейки! РАЗОБРАТЬСЯ!
  arr = gameMatrix;
  const colIndex = Math.floor(Math.random() * 3);
  const rowIndex = Math.floor(Math.random() * 3);

  if (arr[colIndex][rowIndex] === 0) {
    const tailValue = generateTailValue();
    arr[colIndex][rowIndex] = tailValue;
  } else {
    generateCell(arr);
  }
}

function generateTailValue() {
  let randomNumber = Math.random().toFixed(2);

  if (randomNumber < 0.1) {
    return 4;
  } else {
    return 2;
  }
}

function createNewGeme(arr) {
  if (isFirstCall) {
    isFirstCall = false;
    generateCell();
    generateCell();
  }

  createGameField(gameMatrix);
}

createGameField(gameMatrix);

/* 
createGameField( gameMatrix, isFirstCall = false) */

/* func example(arr) {
  const colIndex= math.blablabla;
 const rowIndex = blablabla;
 
    if (arr[colIndex][rowIndex] === 0) {
   const numberToFill = random2or4();
 
    arr[colIndex][rowIndex] = number; (или через inner) хз как у тебя там правильно по логике
 
 
 } else {example(arr)}
 } */

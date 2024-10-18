

// TODO Придумать проверку ячеек и последовательность дейтсвий

let gameContainer = document.querySelector(".game__container_iner");


const gameMatrix = [
  [2, 0, 0, 0],
  [0, 2, 0, 0],
  [0, 0, 2, 0],
  [0, 0, 0, 2],
];



function createGameField(arr) {
  
  gameContainer.innerHTML='';  

  arr.flat().forEach((tailValue) => {
    const cell = document.createElement("div");
    const tail = document.createElement("div");
    
    switch (tailValue) {
      case 0:
        cell.className = "game__cell";
        tail.className = "game__taile";
        cell.append(tail);
        break;
      case 2:
        cell.className = "game__cell";
        tail.className = "game__tail tail_2";
        cell.append(tail);
        break;
      case 4:
        cell.className = "game__cell";
        tail.className = "game__tail tail_4";
        cell.append(tail);
        break;
      case 8:
        cell.className = "game__cell";
        tail.className = "game__tail tail_8";
        cell.append(tail);
        break;
      case 16:
        cell.className = "game__cell";
        tail.className = "game__tail tail_16";
        cell.append(tail);
        break;
      case 32:
        cell.className = "game__cell";
        tail.className = "game__tail tail_32";
        cell.append(tail);
        break;
      case 64:
        cell.className = "game__cell";
        tail.className = "game__tail tail_64";
        cell.append(tail);
        break;
      case 128:
        cell.className = "game__cell";
        tail.className = "game__tail tail_128";
        cell.append(tail);
        break;
      case 256:
        cell.className = "game__cell";
        tail.className = "game__tail tail_256";
        cell.append(tail);
        break;
      case 512:
        cell.className = "game__cell";
        tail.className = "game__tail tail_512";
        cell.append(tail);
        break;
      case 1024:
        cell.className = "game__cell";
        tail.className = "game__tail tail_1024";
        cell.append(tail);
        break;
      case 2048:
        cell.className = "game__cell";
        tail.className = "game__tail tail_2048";
        cell.append(tail);
        break;
    }

    gameContainer.append(cell);
  });
}

createGameField(gameMatrix);


let event = false;

document.addEventListener("touchstart", (e) => {
  event = e;
});
document.addEventListener("touchmove", (e) => {
  if (event) {
    let directionY = Math.floor(e.touches[0].pageY - event.touches[0].pageY);
    let directionX = Math.floor(e.touches[0].pageX - event.touches[0].pageX);

    switch (true) {
      case ( directionY < 0 && directionX === 0):
        if (!isGameOver) {
          canMove = moveUp(gameMatrix);

          if (canMove) {
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
        }

      case (directionY > 0 && directionX === 0):
        if (!isGameOver) {
          canMove = moveDown(gameMatrix);

          if (canMove) {
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
        }

      case (directionX < 0 && directionY === 0):
        if (!isGameOver) {
          canMove = moveLeft(gameMatrix);
          if (canMove) {
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
        }

      case (directionX > 0 && directionY === 0):
        if (!isGameOver) {
          canMove = moveRight(gameMatrix);
          if (canMove) {
            generateCell(gameMatrix);
          }
          createGameField(gameMatrix);
          break;
        }
    }
  }
});
document.addEventListener("touched", (e) => {
  event = null;
});

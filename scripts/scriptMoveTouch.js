let eventToch = false;

gameBox.addEventListener("touchstart", (e) => {
  eventToch = e;
});
document.addEventListener("touchmove", (e) => {
  if (eventToch) {
    let directionY = Math.floor(e.touches[0].pageY - eventToch.touches[0].pageY);
    let directionX = Math.floor(e.touches[0].pageX - eventToch.touches[0].pageX);

    switch (true) {
      case ( directionY < 0 && directionX === 0):
        if (!isGameOver) {
          canMove = moveUp(gameMatrix);

          if (canMove) {
            generateCell(gameMatrix);
          }
          moveBackgroundUp();
          createGameField(gameMatrix);
          break;
        }

      case (directionY > 0 && directionX === 0):
        if (!isGameOver) {
          canMove = moveDown(gameMatrix);

          if (canMove) {
            generateCell(gameMatrix);
          }
          moveBackgroundDown();
          createGameField(gameMatrix);
          break;
        }

      case (directionX < 0 && directionY === 0):
        if (!isGameOver) {
          canMove = moveLeft(gameMatrix);
          if (canMove) {
            generateCell(gameMatrix);
          }
          moveBackgroundLeft();
          createGameField(gameMatrix);
          break;
        }

      case (directionX > 0 && directionY === 0):
        if (!isGameOver) {
          canMove = moveRight(gameMatrix);
          if (canMove) {
            generateCell(gameMatrix);
          }
          moveBackgroundRight();
          createGameField(gameMatrix);
          break;
        }
    }
  }
});
document.addEventListener("touched", (e) => {
  eventToch = null;
});

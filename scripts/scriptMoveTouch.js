let event = false;

document.addEventListener("touchstart", (e) => {
    event = e;
});
document.addEventListener("touchmove", (e) => {
    if (event) {
     let directionY = e.touches[0].pageY - event.touches[0].pageY;
     let directionX = e.touches[0].pageX - event.touches[0].pageX;
     
    
     
    
     switch (true) {

        case (directionY < 0):
          
          if (!isGameOver) {
            canMove = moveUp(gameMatrix);        
    
            if (canMove) {
              moveBackgroundUp()
              generateCell(gameMatrix); 
            }
            createGameField(gameMatrix);
            break;
          }
    
        case (directionY > 0):
          if (!isGameOver) {
            canMove = moveDouwn(gameMatrix);
    
            if (canMove) {
              moveBackgroundDown()
              generateCell(gameMatrix);
            }
            createGameField(gameMatrix);
            break;
          }
    
        case (directionX < 0):
          if (!isGameOver) {
            canMove = moveLeft(gameMatrix);
            if (canMove) {
              moveBackgroundLeft()
              generateCell(gameMatrix);
            }
            createGameField(gameMatrix);
            break;
          }
    
        case (directionX > 0):
          if (!isGameOver) {
            moveBackgroundRight()
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
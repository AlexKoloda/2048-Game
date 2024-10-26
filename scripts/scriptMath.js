const scoreDisplay = document.querySelector(".score__value");
const bestScoreDisplay = document.querySelector(".best__value");
let score = 0;

function sumTailValue(a, b, cell) {    
    let res = a + b;  
    score += res;  
    getBestScore(score);  
    scoreDisplay.textContent = score;
    cell.wasSum = true;
    return res;    
}

function getBestScore(score) {
  
  if (score < +localStorage.getItem('score')) {
     return;
  }
  
  bestScoreDisplay.textContent = score; 
  saveBestScore(); 
  showBestScore(); 
}

function saveBestScore() {
  localStorage.setItem('score', bestScoreDisplay.textContent);
}

function showBestScore() {
  bestScoreDisplay.textContent = localStorage.getItem('score') || 0;
}

showBestScore(); 
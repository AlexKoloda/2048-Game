let scoreDisplay = document.querySelector(".score__value");
let bestScoreDisplay = document.querySelector(".best__value");

let score = 0;

function isEqual(a, b) {
  
  return a === b;
}

function sumTailValue(a, b) {
  let res = a + b;
  score += res;

  getBestScore(score);
  scoreDisplay.textContent = score;
  return res;
}

function getBestScore(score) {
  if (score < +localStorage.getItem("score")) {
    return;
  }
  bestScoreDisplay.textContent = score;
  saveBestScore();
  showBestScore();
}

function saveBestScore() {
  localStorage.setItem("score", bestScoreDisplay.textContent);
}

function showBestScore() {
  bestScoreDisplay.textContent = localStorage.getItem("score");
}

showBestScore();

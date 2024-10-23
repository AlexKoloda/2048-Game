
let scoreDisplay = document.querySelector(".score__value");
let score = '0';

let bestScoreDisplay = document.querySelector(".best__value");
scoreDisplay.textContent = 0;
bestScoreDisplay.innerHTML += score;


function isEqual(a, b) {
  return a === b;
}

function sumTailValue(a, b) {
    return  a + b;
}


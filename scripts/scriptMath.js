
let scoreDisplay = document.querySelector(".score__value");
let score = '0';
let bestScoreDisplay = document.querySelector(".best__value");
scoreDisplay.textContent = score;
bestScoreDisplay.innerHTML += score;

function sumTailValue(array) {   // TODO Разобраться почему элеменеты складываются с пустыми ячейками // Скорее всего связано с одновременной мутацией, ПРОВЕРИТЬ!
    for (let rows of array) {
      if (isEqual(rows.at(0), rows.at(1)) && rows.at(0) !== 0) {
        score = sumScore(rows.at(0), rows.at(1));
        scoreDisplay.textContent = score;
        console.log(score);
        rows[0] = rows.at(0) + rows.at(1);
        rows[1] = 0;
      }
    }
    return;
  }

function isEqual(a, b) {
  return a === b;
}

function sumScore(a, b) {
    return  a + b; 

}
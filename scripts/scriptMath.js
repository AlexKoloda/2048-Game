// TODO Сделать функцию которая будет складывать соседние одинаковые значения.
let scoreDisplay = document.querySelector('.score__value');
let score = 0;
let bestScoreDisplay = document.querySelector('.best__value')
scoreDisplay.innerHTML = score;
bestScoreDisplay.innerHTML += score;

function sumTailValue (a, b) {   
    score += +a + +b;    
    return a + b;
}


function isEqual ( a, b ) {
 return (a === b ); 
}




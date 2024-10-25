let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses: 0, ties: 0};

updateScore();

function playGame(playermove) {
  const computermove = computerPlays();
  let result = '';

  if (playermove === 'Scissors') {
    if (computermove === 'Rock') {
        result = 'lose';
      } else if (computermove === 'Paper') {
        result = 'win';
      } else if (computermove === 'Scissors') {
        result = 'Tie';
      }
  }
  else if (playermove === 'Paper' ) {

      if (computermove === 'Rock') {
        result = 'win';
      } else if (computermove === 'Paper') {
        result = 'Tie';
      } else if (computermove === 'Scissors') {
        result = 'lose';
      }
  } 
  else if (playermove === 'Rock') {
        if (computermove === 'Rock') {
        result = 'Tie';
      } else if (computermove === 'Paper') {
        result = 'lose';
      } else if (computermove === 'Scissors') {
        result = 'win';
      } 
  }
  if (result === 'win') {
    score.wins ++
  }else if (result === 'lose') {
    score.losses ++
  }else if (result === 'Tie') {
    score.ties ++
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScore();

   document.querySelector('.js-result').innerHTML =  `You ${result}`;

   document.querySelector('.js-moves').innerHTML = `Your move was ${playermove}, Computer move was ${computermove}`;

}    
 

function updateScore() { document.querySelector('.js-score')
  .innerHTML = `Win: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

function computerPlays() {
  
  const randomNum = Math.random();
  
  let computermove = ''; 

  if (randomNum >= 0 && randomNum < 1 / 3) {
    computermove = 'Rock';
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computermove = 'Paper';
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computermove = 'Scissors';} 

    return computermove;
}
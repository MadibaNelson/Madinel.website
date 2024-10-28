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

  document.querySelector('.js-computer-button')
      .innerHTML = `${computermove}` 

   document.querySelector('.js-result').innerHTML =  `You ${result}`;

   document.querySelector('.js-moves').innerHTML = `Your move was ${playermove}, Computer move was ${computermove}`;

}    

document.querySelector('.js-rock-button').addEventListener('click', ()=>{
  delayPlayRock();
});

document.querySelector('.js-paper-button').addEventListener('click', ()=>{
  delayPlayPaper();
});

document.querySelector('.js-scissors-button').addEventListener('click', ()=>{
  delayPlayScissors();
})

document.querySelector('.js-reset-button').addEventListener('click', () => {
  document.querySelector('.js-conf-button').innerHTML = 'Are you sure you want to reset <button class="yes-b">Yes</button><button class="no-b">No</button>';

  document.querySelector('.yes-b').addEventListener('click', () => {
    score.wins = 0
    score.losses = 0
    score.ties = 0;
    localStorage.removeItem('score')
    alert('You have reset the scores');
    updateScore();
    document.querySelector('.js-conf-button').innerHTML = '';
  })

  document.querySelector('.no-b').addEventListener('click', () => {
    document.querySelector('.js-conf-button').innerHTML = '';
  })
});

  
addEventListener('keydown', (event)=>{
  if(event.key === 'r'){delayPlayRock();}
  else if(event.key === 'p'){delayPlayPaper();}
  else if(event.key === 's'){delayPlayScissors();}
  else if(event.key === ' '){
    document.querySelector('.js-conf-button').innerHTML = 'Are you sure you want to reset <button class="yes-b">Yes</button><button class="no-b">No</button>';

    document.querySelector('.yes-b').addEventListener('click', () => {
      score.wins = 0
      score.losses = 0
      score.ties = 0;
      localStorage.removeItem('score')
      alert('You have reset the scores');
      updateScore();
      document.querySelector('.js-conf-button').innerHTML = '';
    })
  
    document.querySelector('.no-b').addEventListener('click', () => {
      document.querySelector('.js-conf-button').innerHTML = '';
    })
  }
 
})
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

function delayPlayScissors() {
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Rock'
  }, 200);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Paper'
  }, 400);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Scissors'
  }, 600);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Rock'
  }, 800);
  setTimeout(()=>{playGame('Scissors');}, 1000);
}

function delayPlayPaper() {
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Rock'
  }, 200);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Paper'
  }, 400);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Scissors'
  }, 600);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Rock'
  }, 800);
  setTimeout(()=>{playGame('Paper');}, 1000);
}

function delayPlayRock() {
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Rock'
  }, 200);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Paper'
  }, 400);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Scissors'
  }, 600);
  setTimeout(()=>{
    document.querySelector('.js-computer-button')
      .innerHTML = 'Rock'
  }, 800);
  setTimeout(()=>{playGame('Rock');}, 1000);
}
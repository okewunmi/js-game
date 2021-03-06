/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*let roundScore, totalScore, activePlayer, dice;

totalScore = [0,0];
roundScore = 0;

activePlayer = 1;

dice = Math.floor(math.random() * 6) + 1;

document.querySelector('#current-' + activePlayer).textContent = dice;

document.getElementById('score-' + activePlayer).textContent = dice;


document.querySelector('.dice').style.display = "none";
*/

var scores, roundScore, activePlayer, gamePlaying;
init();
var lastDice;

//document.querySelector('#current-' + activePlayer).textContent = dice;


document.querySelector('.btn-roll').addEventListener('click', function(){
  if (gamePlaying) {
    // 1. random number
    
    var  dice1 = Math.floor(Math.random()* 6) + 1;
    var  dice2 = Math.floor(Math.random()* 6) + 1;

  // 2. display result
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';
  //var diceDOM = document.querySelector('.dice');
 
  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

  //3. update the round score if the roll was not a 1

  if (dice1 !== 1 && dice2 !==1){
    //add sore
    roundScore += (dice1 + dice2);
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
 
   }else{
     //next player
     nextPlayer();
 
   }
  /*
  if (dice === 6 && lastDice === 6){
    //players looses scores
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = '0';
    //next player turn
    nextPlayer();

  }else if (dice !== 1){
   //add score
   roundScore += dice;
   document.querySelector('#current-' + activePlayer).textContent = roundScore;

  }else{
    //next player
    nextPlayer();
  } 
    lastDice = dice;
    */
  }
 });

 // hold button

 document.querySelector('.btn-hold').addEventListener('click', function(){
   if (gamePlaying){
     // add current score to the Global score
   scores[activePlayer] += roundScore;

   // Update th UI
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    var input = document.querySelector('.final-score').value;
    var winnerScore

    if (input){
      winnerScore = input;

    }else{
      winnerScore = 100;
    }
   

   // check if player1 won the game
   
   if (scores[activePlayer] >= winnerScore){
     document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
     document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
     document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
     document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
     gamePlaying = false;

   }else{
     //next player
    nextPlayer();
   }
   }
 });

  function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';
  }

  document.querySelector('.btn-new').addEventListener('click', init);


  function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
  document.getElementById('dice-2').style.display = 'none';

    document.getElementById ('score-0').textContent = '0';
    document.getElementById ('score-1').textContent = '0';
    document.getElementById ('current-0').textContent = '0';
    document.getElementById ('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

  }


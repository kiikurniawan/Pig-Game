'use strict';

//score
let score = [0, 0];
//currentScore
let currentScore = [0, 0];

//dice
const dice = document.querySelector('.dice');
hide_TheDice();

//button
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
 
//startPlayer : 0
let playerActive = 0;
//change player
function changePlayer() {
    playerActive === 0 ? playerActive = 1 : playerActive = 0;
}

//reset game
function resetGame() { 
    hide_TheDice();
    score = [0, 0];
    currentScore = [0, 0];
    changeActive_Panel();
    document.querySelector('.player--' + playerActive).classList.remove('player--winner');
    playerActive = 0;
    changeActive_Panel();
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
}

function changeActive_Panel() { 
    document.querySelector('.player--' + playerActive).classList.toggle('player--active');
}

function displayCurrentScore() { 
    document.getElementById('current--' + playerActive).textContent = currentScore[playerActive];
}

function hide_TheDice() { 
    dice.style.visibility = 'hidden';
}

let roll;
function rollDice() { 
    roll = Math.floor((Math.random() * 6) + 1);
}

let scoreFinish = 10;
//code driver
    btnRoll.addEventListener('click', function () {    
        if (score[playerActive] < scoreFinish) {
            rollDice();    
            dice.style.visibility = 'visible';
            dice.src = 'dice-' + roll + '.png';
            currentScore[playerActive] += roll;
            displayCurrentScore();
        }
        if (roll === 1) {
            //reset current score & display current score =0
            currentScore[playerActive] = 0;
            displayCurrentScore();

            //change panel
            changeActive_Panel();

            //change player & panel 
            changePlayer();
            changeActive_Panel();
        }
    })

    btnHold.addEventListener('click', function () {
        if (score[playerActive] < scoreFinish) {
            score[playerActive] += currentScore[playerActive];
            document.getElementById('score--' + playerActive).textContent = score[playerActive];
        }
        //winning the game  
        if (score[playerActive] >= scoreFinish) {
            document.querySelector('.player--' + playerActive).classList.add('player--winner');
            hide_TheDice();
        
        } else {
            //reset current score & display current score =0
            currentScore[playerActive] = 0;
            displayCurrentScore();

            //change panel
            changeActive_Panel();
            
            //change player & panel
            changePlayer();
            changeActive_Panel();
        }
    })

btnNewGame.addEventListener('click', resetGame);


'use strict';

//Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const scores = [0,0];

let currentScore = 0;
let activePlayer = 0;


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click',function(){
    const dice = Math.trunc(Math.random()*6) + 1;
    console.log(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    
    if(dice != 1){
        //Add dice to the current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        current0El.textContent = currentScore;
    }else{
        //switch to next player
        document.getElementById(`current--${activePlayer}`).textcontent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

    }

})
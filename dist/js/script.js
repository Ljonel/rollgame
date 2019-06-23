var dice_number;
var scores = [0,0];
var roundScore = 0
var activePlayer = 0;
const roll = document.querySelector(".btn-roll");
const dice = document.querySelector(".dice");
const hold = document.querySelector('.btn-hold');
const newButton = document.querySelector('.btn-new');
const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");



document.addEventListener("DOMContentLoaded", function () {
        dice.addEventListener("click", function () {
                dice_number = Math.floor(Math.random() * 6 + 1);
                dice.style.backgroundImage = "url(../dist/img/dice-" + dice_number + ".png)";
                if (dice_number !== 1) {
                        roundScore += dice_number;
                        document.querySelector("#current-score-" + activePlayer).textContent = roundScore;
                        dice.classList.toggle('active_dice');
                } else {
                        nextPlayer();

                }
        });
       

        hold.addEventListener("click", function(){
                scores[activePlayer] += roundScore;
                document.querySelector("#score-"+activePlayer).textContent = scores[activePlayer];
                console.log(scores);

                //Check who won
                if(scores[activePlayer] >= 50){
                        document.querySelector("#player-name-"+activePlayer).textContent = "WINNER!";
                        document.querySelector(".player-"+activePlayer).classList.add("winner");
                        document.querySelector(".player-"+activePlayer).classList.remove("active");
                        dice.style.display = 'none';
                }
                //Turn
                nextPlayer(); 
        });

        newButton.addEventListener("click", function(){
                resetScores();
        })


});


function nextPlayer(){
        
        if (activePlayer === 0) {
                activePlayer = 1;


        } else {
                activePlayer = 0;
        }
        roundScore = 0;
        //reset stats
        document.querySelector("#current-score-0").textContent = "0";
        document.querySelector("#current-score-1").textContent = "0";
       
        //grey background
        document.querySelector('.player-0').classList.toggle('active');
        document.querySelector(".player-1").classList.toggle('active');
}

function resetScores(){
        scores = [0,0];
        activePlayer = 0;
        roundScore = 0;
        document.querySelector("#current-score-0").textContent = "0";
        document.querySelector("#current-score-1").textContent = "0";
        document.querySelector("#score-0").textContent = "0";
        document.querySelector("#score-1").textContent = "0";
        document.querySelector(".player-0").classList.remove("winner");
        document.querySelector(".player-1").classList.remove("winner");
        document.querySelector(".player-1").classList.remove("active");
        document.querySelector(".player-0").classList.remove("active");
        document.querySelector(".player-0").classList.add("active");
        document.querySelector("#player-name-0").textContent = "Player 1";
        document.querySelector("#player-name-1").textContent = "Player 2";
        dice.style.backgroundImage = "url(../dist/img/dice-6.png)";

        dice.style.display = 'block';
}


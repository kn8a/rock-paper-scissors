const playPick = [null, 'Paper', 'Scissors', 'Rock']; //array of play options
const playSymb = [null, "🖐️", "✌️", "✊"]; //array of symbols
let playerCount = 0;
let computerCount = 0;

//function to get random selection for computer
function computerRnd(){ 
    let compRND = Math.floor(Math.random() * (4 - 1) ) + 1; //gets random number from 1-2
    return compRND;
}

//function to play a round and return WINNER and PLAY RESULTS
let roundResult = ""; //variable to store result of round as string
function playRound(player, computer) { //compare two selections
    let winner = "";
    player = parseInt(player);
    if (player == computer) {
        roundResult = playSymb[player] + " ties with " + playSymb[computer];
        winner = "tie";//if selections are the same
    }              
    else if (player==2 && computer==1 || player==3 && computer == 2 || player==1 && computer ==3) {
        roundResult = playSymb[player] + " beats " + playSymb[computer];
        winner = "player"; //if player wins
        }
    else {
        roundResult = playSymb[player] + " loses to " + playSymb[computer];
        winner =  "computer"; //if not tie and player didnt with then computer wins.
    }
    logBox.textContent = roundResult; //logs current play
    playerPlay.textContent = playSymb[player]; //icon of players play
    compSelect.textContent = playSymb[computer]; //icon of computers play
    return winner;
}

//element to log current play
let logBox = document.getElementById("roundPlay");
//elements for large emoji
let playerPlay = document.getElementById("humanSelect");
let compSelect = document.getElementById("compSelect");
//elements for score keeping
let playerCountEl=document.getElementById("playerCount");
let compCountEl=document.getElementById("compCount");
//elements for declaring winner/loser
let humanTitle = document.getElementById("humanTitle");
let compTitle = document.getElementById("compTitle")

const buttons = document.querySelectorAll('.game'); //weapon buttons click
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let player = button.getAttribute('data-pick');
        let computer = computerRnd(); //get computer selection
        let roundWinner = playRound(player,computer); //play one round

        if (roundWinner == "player"){ //when human wins round
            playerCount++;
            playerCountEl.textContent=(playerCount); //log player count
            if (playerCount==5) { //when counter reaches 5
                buttons[0].disabled = true; //disable buttons
                buttons[1].disabled = true;
                buttons[2].disabled = true;
                compSelect.textContent = "☠️";
                playerPlay.textContent = "🏆"
                humanTitle.textContent = "🧬 HUMAN WINS!!!"; //change title
                compTitle.textContent = "⚙️ COMPUTER LOSES!!!"; //change title
                winner=true; //breaks while loop
            }
        }
        else if (roundWinner == "computer") { //when computer wins round
            computerCount++;
            compCountEl.textContent=computerCount; //log computer count
            if (computerCount==5) { //when couter reaches 5
                buttons[0].disabled = true; //disable buttons
                buttons[1].disabled = true;
                buttons[2].disabled = true;
                playerPlay.textContent = "☠️"; //change emoji to skull
                compSelect.textContent = "🏆";
                
                humanTitle.textContent = "🧬 HUMAN LOSES!!!"; //change title
                compTitle.textContent = "⚙️ COMPUTER WINS!!!"; //change title
                winner=true; //breaks while loop
            }
        }

    });
});

const reset = document.getElementById("reset"); //reset button
reset.addEventListener('click', () => { 
    buttons[0].disabled = false; //enable buttons
    buttons[1].disabled = false; 
    buttons[2].disabled = false; 
    playerCount = 0; //resent player count
    computerCount = 0; //reset computer count
    playerCountEl.textContent=(playerCount); //reset counter
    compCountEl.textContent=computerCount; //reset counter
    playerPlay.textContent = "😏"; //default emoji
    compSelect.textContent = "⚙️"; //default emoji
    roundResult = "";
    logBox.textContent = roundResult; //reset log
    humanTitle.textContent = "🧬 HUMAN"; //reset title
    compTitle.textContent = "⚙️ COMPUTER"; //reset title
});
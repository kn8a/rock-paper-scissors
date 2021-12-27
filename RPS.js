const playPick = [null, 'Paper', 'Scissors', 'Rock']; //array of play options
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
    console.log(player);
    console.log(computer);
    if (player == computer) {
        roundResult = playPick[player] + " ties with " + playPick[computer];
        winner = "tie";//if selections are the same
    }              
    else if (player==2 && computer==1 || player==3 && computer == 2 || player==1 && computer ==3) {
        roundResult = playPick[player] + " beats " + playPick[computer];
        winner = "player"; //if player wins
    }
    else {
        roundResult = playPick[player] + " loses to " + playPick[computer];
        winner =  "computer"; //if not tie and player didnt with then computer wins.
    }
    console.log(winner);
    console.log(roundResult);
    return winner;
}

const buttons = document.querySelectorAll('.game');
buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let player = button.getAttribute('data-pick');
        let computer = computerRnd(); //get computer selection
        let roundWinner = playRound(player,computer); //play one round

        
        if (roundWinner == "player"){ //when human wins round
            playerCount++;
            console.log("player count:", playerCount); //log player count
            if (playerCount==5) {
                alert("Human player wins");
                buttons[0].disabled = true;
                buttons[1].disabled = true;
                buttons[2].disabled = true;
                winner=true; //breaks while loop
            }
        }
        else if (roundWinner == "computer") { //when computer wins round
            computerCount++;
            console.log("computer count:", computerCount); //log computer count
            if (computerCount==5) {
                alert("Computer wins");
                buttons[0].disabled = true;
                buttons[1].disabled = true;
                buttons[2].disabled = true;
                winner=true; //breaks while loop
            }
        }

    });
});

const reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    buttons[0].disabled = false;
    buttons[1].disabled = false;
    buttons[2].disabled = false;
    playerCount = 0;
    computerCount = 0;
});
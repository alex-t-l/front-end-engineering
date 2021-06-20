let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){ //Generates random number between zero and nine.
    return Math.floor(Math.random() * 10);
}

//Function is called to determine which guess is closest to the target number.
function compareGuesses(human, computer, target){
    const h = Math.abs(target - human);
    const c = Math.abs(target - computer);
    if(h < c || h == c){
        return true; //Return true, human wins
    }
    else{ //Computer wins because computer is closer to target
        return false;
    }
}


//Increase winner's score after each round.
function updateScore(winner){
    if(winner === 'human'){
        humanScore++;
    }
    else if(winner === 'computer'){
        computerScore++;
    }
}

function advanceRound(){
    currentRoundNumber++;
}
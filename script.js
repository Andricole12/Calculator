let characters = Array("rock", "paper", "scissors");

function computerPlay(){
    let computerAnswer = characters[Math.floor(Math.random() * characters.length)];
    return computerAnswer;
}

function playerInput(){
    let playerAnswer = prompt("Rock, Paper, Scissors!!")
    playerAnswer = playerAnswer.toLowerCase();

    if (characters.indexOf(playerAnswer) !== -1){
        console.log(playerAnswer);
        return (playerAnswer);
    }
    else {
        console.log("Invalid input. Type rock paper or scissors.")
        playerInput();
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        console.log("A Draw!")
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You Win!")
        return true;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You Win!")
        return true;

    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You Win!")
        return true;
    }
    else {
        console.log("Computer Wins!")
        return false;
    }
}


playRound(playerInput(),computerPlay());
let characters = Array("rock", "paper", "scissors");

function computerPlay(){
    let computerAnswer = characters[Math.floor(Math.random() * characters.length)];
    console.log("Computer chose " + computerAnswer + "!");
    return computerAnswer;
}

function playerInput(){
    let playerAnswer = prompt("Rock, Paper, Scissors!!")
    playerAnswer = playerAnswer.toLowerCase();

    if (characters.indexOf(playerAnswer) !== -1){
        console.log("Player chose " + playerAnswer + "!");
        return (playerAnswer);
    } else{
        console.log("Invalid input. Type rock paper or scissors.");
        playerInput();
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection){
        console.log("A Draw!");
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        console.log("You Win!");
        return true;
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("You Win!");
        return true;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        console.log("You Win!");
        return true;
    } else{
        console.log("Computer Wins!");
        return false;
    }
}

function game() {
    let rounds = prompt("How many rounds?");
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < rounds; i++) {
        let round = playRound(playerInput(),computerPlay())
        if (round == true){
            playerScore += 1;
            console.log(playerScore);
        } else if (round == false){
            computerScore += 1;
            console.log(computerScore);
        }
    }

    if (playerScore > computerScore){
        console.log("The Winner is You!")
    } else if (playerScore < computerScore){
        console.log("Oh no! You lost:/")
    } else{
        console.log("wow it's a tie!")
    }
    
}

game()
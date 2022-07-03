let characters = Array("rock", "paper", "scissors");

function computerPlay(){
    let computerAnswer = characters[Math.floor(Math.random() * characters.length)];
    console.log(computerAnswer);
}

function playerInput(){
    let playerAnswer = prompt("Rock, Paper, Scissors!!")
    playerAnswer = playerAnswer.toLowerCase();

    if (characters.indexOf(playerAnswer) !== -1){
        console.log(playerAnswer);
        return (playerAnswer);
    }
    else {
        playerInput();
    }
}

computerPlay();
playerInput();
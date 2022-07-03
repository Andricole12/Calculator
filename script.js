let characters = Array("rock", "paper", "scissors");

function computerPlay() {
  let computerAnswer = characters[Math.floor(Math.random() * characters.length)];
  console.log(computerAnswer);
}

computerPlay();
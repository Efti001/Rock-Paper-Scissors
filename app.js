// function for computer to randomly return rock, paper, scissors
function getComputerChoice () {
    let compChoice = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random ()* compChoice.length);
    return compChoice[randomChoice];

}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "It's a tie!";
    else if (playerSelection === "rock" && computerSelection === "scissors")
        return "Player won!";
    else if (playerSelection === "paper" && computerSelection === "rock")
        return "Player won!"; 
    else if (playerSelection === "scissors" && computerSelection === "paper")
        return "Player won!";
    else
        return "Computer won!";
  }

function game() {
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
   // const playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    const result = playRound(playerSelection, computerSelection);
    console.log(`${result} (${playerSelection} vs ${computerSelection})`);
  }

  if (playerSelection > computerSelection)
    return "Player Won!"
  else if (computerSelection > playerSelection)
    return "Computer Won!";
  else  
    return "It's tie!"
}

game();


const rockIMG = document.getElementById("rock");
const paperIMG = document.getElementById("paper");
const scissorsIMG = document.getElementById("scissors");
const scoreBoard = document.querySelector("scoreboard");
const playerSB = document.getElementById("player-score");
const compSB = document.getElementById("computer-score");
const restartBtn = document.getElementById("restart");


let playerScore = 0;
let compScore = 0;

function main (){

  rockIMG.addEventListener ("click", function(){
    game("rock");
  })
  
  paperIMG.addEventListener ("click", function(){
    game("paper");
  })
  
  scissorsIMG.addEventListener ("click", function(){
    game("scissors");
  })
  
}

// getting random comp choice
function getComputerChoice () {
    let compChoice = ["rock", "paper", "scissors"];
    let randomChoice = Math.floor(Math.random ()* compChoice.length);
    return compChoice[randomChoice];
}


function game(userChoice) {
  // Take the computer's choice
  const computerChoice = getComputerChoice();
  console.log("Computer: " + computerChoice);

  // Call the playRound function with the user's choice and computer's choice
  const result = playRound(userChoice, computerChoice);
  console.log(`${result} (${userChoice} vs ${computerChoice})`);

  // Update the scoreboard based on the result
  if (result === "Player won!") {
    wins("player");
  } else if (result === "Computer won!") {
    wins("computer");
  }

  // Check if the game is over
  checkScore();
  restartBtn.addEventListener("click", restart);
}

function wins(winner) {
  if (winner === "player") {
    playerScore++;
    playerSB.textContent = playerScore;
  } else if (winner === "computer") {
    compScore++;
    compSB.textContent = compScore;
  }
}

function checkScore() {
  if (playerScore === 5) {
    alert("You won the game!");
    restart();
  } else if (compScore === 5) {
    alert("You lost the game!");
    restart();
  }
}



//determines who wins
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        return "It's a tie!";
    else if (playerSelection === "rock" && computerSelection === "scissors"){
      return "Player won!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock"){
      return "Player won!"; 
    }
    else if (playerSelection === "scissors" && computerSelection === "paper"){
      return "Player won!";
    }
    else
        return "Computer won!";
  }


function restart() {
  playerScore = 0;
  compScore = 0;
  playerSB.textContent = playerScore;
  compSB.textContent = compScore;
}

main();





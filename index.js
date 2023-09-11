const battleChoices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;

// compare user choice to CPU choice

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === 2) {
    console.log("You win! Rock beats scissors!");
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === 0) {
    console.log("You win! Paper beats rock!");
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === 1) {
    console.log("You win! Scissors beats papaer!");
    userScore++;
  } else if (computerSelection === 0 && playerSelection === "scissors") {
    console.log("You lose! Rock beats scissors!");
    cpuScore++
  } else if (computerSelection === 1 && playerSelection === "rock") {
    console.log("You lose! Paper beats rock!");
    cpuScore++
  } else if (computerSelection === 2 && playerSelection === "paper") {
    console.log("You lose! Scissors beats paper!");
    cpuScore++
  } else {
    console.log("It was a draw!");
  }
}

// make game go up to 5 rounds

const maxRounds = 5;
let round = 0;

function game() {
  while (round < maxRounds) {
    let userInput = prompt("Rock, Paper, Scissors says...!");
    const playerSelection = userInput.toLowerCase(); // get user input for their choice between the three options (make sure it is case insensitive)
    const computerSelection = Math.floor(Math.random() * battleChoices.length); // get a CPU's choice between the three options
    playRound(playerSelection, computerSelection);
    round++;
    console.log("Your score: " + userScore + " CPU Score: " + cpuScore)
  }
}

game();

// if user's choice beats CPU's choice, output winner; else output loser
// write code to handle draw
// games goes up to 5 rounds
// check for score; evaluate rounds won; if userScore > cpuScore, user wins; else CPU wins
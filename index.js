const battleChoices = ["rock", "paper", "scissors"];

// get a CPU's choice between the three options

function computerSelection() {
  const randomChoice = Math.floor(Math.random() * battleChoices.length);
  return [randomChoice];
}

// get user input for their choice between the three options (make sure it is case insensitive)

let userInput = prompt("Rock, Paper, Scissors says...!");
const playerSelection = userInput.toLowerCase();

// compare user choice to CPU choice

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection() === 2) {
    alert("You win! Rock beats scissors!");
  } else if (playerSelection === "paper" && computerSelection() === 0) {
    alert("You win! Paper beats rock!");
  } else if (playerSelection === "scissors" && computerSelection() === 1) {
    alert("You win! Scissors beats papaer!");
  } else if (computerSelection() === 0 && playerSelection === "scissors") {
    alert("You lose! Rock beats scissors!");
  } else if (computerSelection() === 1 && playerSelection === "rock") {
    alert("You lose! Paper beats rock!");
  } else if (computerSelection() === 2 && playerSelection === "paper") {
    alert("You lose! Scissors beats paper!");
  } else {
    alert("It was a draw!");
  }
}

// if user's choice beats CPU's choice, output winner; else output loser
// write code to handle draw
// games goes up to 5 rounds
// check for score; evaluate rounds won; if userScore > cpuScore, user wins; else CPU wins
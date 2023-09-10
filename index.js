const battleChoices = ["rock", "paper", "scissors"];

// get a CPU's choice between the three options

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * battleChoices.length);
  return [randomChoice];
}

// get user input for their choice between the three options (make sure it is case insensitive)

let userChoice = prompt("Rock, Paper, Scissors says...!");

function caseInsensitive(string) {
  let noUpperCase = string.toLowerCase();
  return noUpperCase;
}

// if user's choice beats CPU's choice, output winner; else output loser
// write code to handle draw
// games goes up to 5 rounds
// check for score; evaluate rounds won; if userScore > cpuScore, user wins; else CPU wins
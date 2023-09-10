const battleChoices = ["Rock", "Paper", "Scissors"];

// get a CPU's choice between the three options

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * battleChoices.length);
  return [randomChoice];
}

console.log(getComputerChoice(battleChoices));


// get user input for their choice between the three options
// if user's choice beats CPU's choice, output winner; else output loser
// write code to handle draw
// games goes up to 5 rounds
// check for score; evaluate rounds won; if userScore > cpuScore, user wins; else CPU wins
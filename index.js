const battleChoices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;

// add DOM methods for results

const results = document.querySelector("#results");
const resultsContent = document.createElement("p");

// compare user choice to CPU choice

function playRound(playerSelection, computerSelection) {

  if (playerSelection === "rock" && computerSelection === 2) {
    resultsContent.textContent = ("You win! Rock beats scissors!");
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === 0) {
    resultsContent.textContent = ("You win! Paper beats rock!");
    userScore++;
  } else if (playerSelection === "scissors" && computerSelection === 1) {
    resultsContent.textContent = ("You win! Scissors beats papaer!");
    userScore++;
  } else if (computerSelection === 0 && playerSelection === "scissors") {
    resultsContent.textContent = ("You lose! Rock beats scissors!");
    cpuScore++
  } else if (computerSelection === 1 && playerSelection === "rock") {
    resultsContent.textContent = ("You lose! Paper beats rock!");
    cpuScore++
  } else if (computerSelection === 2 && playerSelection === "paper") {
    resultsContent.textContent = ("You lose! Scissors beats paper!");
    cpuScore++
  } else {
    resultsContent.textContent = ("It was a draw!");
  }
  results.appendChild(resultsContent);
}

// add event listeners to buttons

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () =>{
    playRound();
  });
});

// make game go up to 5 rounds

// const maxRounds = 5;
// let round = 0;

// function game() {
//   while (round < maxRounds) {
//     let userInput = prompt("Rock, Paper, Scissors says...!");
//     const playerSelection = userInput.toLowerCase(); // get user input for their choice between the three options (make sure it is case insensitive)
//     const computerSelection = Math.floor(Math.random() * battleChoices.length); // get a CPU's choice between the three options
//     playRound(playerSelection, computerSelection);
//     round++;
//     console.log("Your score: " + userScore + " CPU Score: " + cpuScore)
//   }

//   if (round === maxRounds && userScore > cpuScore) {
//     console.log("YOU WON!");
//   } else if (round === maxRounds && userScore < cpuScore) {
//     console.log("YOU LOST!");
//   } else if (round === maxRounds && userScore === cpuScore) {
//     console.log("IT WAS A DRAW");
//   }
// }

// game();


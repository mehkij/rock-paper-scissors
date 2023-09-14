const battleChoices = ["rock", "paper", "scissors"];
let userScore = 0;
let cpuScore = 0;

// add DOM methods for results

const results = document.querySelector("#results");
const resultsContent = document.createElement("p");

// compare user choice to CPU choice

function playRound(playerSelection, computerSelection) {
  // reset the content of resultsContent at the beginning of each round.
  resultsContent.textContent = "";

  // convert computerSelection to a string representation of the choice.
  const computerChoice = battleChoices[computerSelection];

  // compare playerSelection with computerChoice.
  if (playerSelection === "rock" && computerChoice === "scissors") {
    resultsContent.textContent = "You win! Rock beats scissors!";
    userScore++;
  } else if (playerSelection === "paper" && computerChoice === "rock") {
    resultsContent.textContent = "You win! Paper beats rock!";
    userScore++;
  } else if (playerSelection === "scissors" && computerChoice === "paper") {
    resultsContent.textContent = "You win! Scissors beats paper!";
    userScore++;
  } else if (computerChoice === "rock" && playerSelection === "scissors") {
    resultsContent.textContent = "You lose! Rock beats scissors!";
    cpuScore++;
  } else if (computerChoice === "paper" && playerSelection === "rock") {
    resultsContent.textContent = "You lose! Paper beats rock!";
    cpuScore++;
  } else if (computerChoice === "scissors" && playerSelection === "paper") {
    resultsContent.textContent = "You lose! Scissors beats paper!";
    cpuScore++;
  } else {
    resultsContent.textContent = "It was a draw!";
  }
  results.appendChild(resultsContent);
}


// add event listeners to buttons

const buttons = document.querySelectorAll("button");

// **
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (round < maxRounds) {
      game(button);
    }

    if (round === maxRounds) {
      console.log("Game over!");
    }
  });
});

// make game go up to 5 rounds

const maxRounds = 5;
let round = 0;

// Changed game() from while loop --> if statements. This allows ** to allow click = 1 round played

function game(clickedButton) {
  if (round < maxRounds) {
    const playerSelection = clickedButton.id; // get user choice based on button press
    const computerSelection = Math.floor(Math.random() * battleChoices.length); // get random CPU choice based on rounded number from 0-1 * length of choices
    playRound(playerSelection, computerSelection);
    round++;
    console.log("Your score: " + userScore + " CPU Score: " + cpuScore);
    console.log(playerSelection);
  }

  if (round === maxRounds) {
    if (userScore > cpuScore) {
      console.log("YOU WON!");
    } else if (userScore < cpuScore) {
      console.log("YOU LOST!");
    } else {
      console.log("IT WAS A DRAW");
    }
  }
}

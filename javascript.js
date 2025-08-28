function getComputerChoice() {

    // Initialising random number
    let randomNumber = Math.random();

    // Logic to select computer move based on random number
    if (randomNumber < 0.333) {
        return "rock";
    } else if (randomNumber > 0.666) {
        return "scissors";
    } else {
        return "paper";
    }
}

function getHumanChoice() {

    // Prompts the user for a selection of rock, paper or scissors
    return prompt("Rock / Paper / Scissors?");
}

// Initialising human score and computer score at 0 before a round is played
let humanScore = 0;
let computerScore = 0;

// Initialising two variables for the human input and computer generated move
let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

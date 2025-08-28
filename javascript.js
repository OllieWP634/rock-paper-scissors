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
    return prompt("Rock / Paper / Scissors?").toLowerCase();
}

// Initialising human score and computer score at 0 before a round is played
let humanScore = 0;
let computerScore = 0;

// Initialising two variables for the human input and computer generated move
let humanSelection;
let computerSelection;

function playRound(humanChoice, computerChoice) {

    // Logic to determine who won based on user and computer input to the function
    if ((humanChoice === 'paper' && computerChoice === 'rock')||(humanChoice === 'scissors' && computerChoice === 'paper')||(humanChoice === 'rock' && computerChoice === 'scissors')) {

        // Displaying all decisions, then who won the round
        console.log("User move:", humanChoice);
        console.log("Computer move:", computerChoice);
        console.log("USER WINS");

        // Incrementing score based on who won the round
        humanScore++;
    } else if ((humanChoice === 'paper' && computerChoice === 'scissors')||(humanChoice === 'scissors' && computerChoice === 'rock')||(humanChoice === 'rock' && computerChoice === 'paper')) {
        console.log("User move:", humanChoice);
        console.log("Computer move:", computerChoice);
        console.log("COMPUTER WINS");
        computerScore++;
    } else {
        console.log("User move:", humanChoice);
        console.log("Computer move:", computerChoice);
        console.log("DRAW");
    }
}

function playGame() {

    // For loop calling playRound 5 times, updating humanSelection and computerSelection each loop
    for (let i = 0; i < 5; i++) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    // Determining final winner and scores of both user and computer
    if (humanScore > computerScore) {
        console.log("User score:", humanScore);
        console.log("Computer score:", computerScore);
        console.log("You win");
    } else if (computerScore > humanScore) {
        console.log("User score:", humanScore);
        console.log("Computer score:", computerScore);
        console.log("Computer wins");
    } else {
        console.log("User score:", humanScore);
        console.log("Computer score:", computerScore);
        console.log("Draw");
    }
}

// Calls final playGame function
playGame(humanSelection, computerSelection);

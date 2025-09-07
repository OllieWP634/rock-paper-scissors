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

// Initialising human score and computer score at 0 before a round is played
let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

// Initialising two variables for the human input and computer generated move
let humanSelection;
let computerSelection;

function playRound(humanChoice, computerChoice) {

    // Logic to determine who won based on user and computer input to the function
    if ((humanChoice === 'paper' && computerChoice === 'rock')||(humanChoice === 'scissors' && computerChoice === 'paper')||(humanChoice === 'rock' && computerChoice === 'scissors')) {
        humanScore++;
        userScoreTally.textContent = humanScore;
    } else if ((humanChoice === 'paper' && computerChoice === 'scissors')||(humanChoice === 'scissors' && computerChoice === 'rock')||(humanChoice === 'rock' && computerChoice === 'paper')) {
        computerScore++;
        computerScoreTally.textContent = computerScore;
    } else {
        drawScore++;
        drawScoreTally.textContent = drawScore;
    }
    if (humanScore === 5) {
        alert('User wins');
    } else if (computerScore === 5) {
        alert('Computer wins')
    }
}

function playGame() {

    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    
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

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

const container = document.getElementsByClassName('results-container');
const userScoreTally = document.getElementById('user-score');
const computerScoreTally = document.getElementById('computer-score');
const drawScoreTally = document.getElementById('draw-score');

const rockPressed = rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
});

const paperPressed = paperButton.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
});

const scissorsPressed = scissorsButton.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
});

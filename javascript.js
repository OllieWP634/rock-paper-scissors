function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber)
    if (randomNumber < 0.333) {
        return "rock";
    } else if (randomNumber > 0.666) {
        return "scissors";
    } else {
        return "paper";
    }
}

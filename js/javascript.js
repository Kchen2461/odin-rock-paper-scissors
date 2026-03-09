let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum < 33) {
        return "rock";
    } else if (randomNum < 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter \"rock\", \"paper\", or \"scissors\"").toLowerCase();
}

function playRound(computerChoice, humanChoice) {

    let outcome = 0; // 0 for user win, 1 for user loss, 2 for user draw


    if (computerChoice === humanChoice) {
        outcome = 2;
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            outcome = 0;
        } else {
            outcome = 1;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "rock") {
            outcome = 1;
        } else {
            outcome = 0;
        }
    } else {
        if (humanChoice === "rock") {
            outcome = 0;
        } else {
            outcome = 1;
        }
    }

    updateScore(outcome);
    announceScore(outcome, computerChoice, humanChoice);
}

function updateScore(outcome) {
    if (outcome === 0) {
        humanScore++;
    } else if (outcome === 1) {
        computerScore++;
    }
}

function announceScore(outcome, computerChoice, humanChoice) {
    if (outcome === 0) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else if (outcome === 1) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else {
        console.log(`It's a draw! You both chose ${humanChoice}`);
    }

    console.log(`The score is
                User: ${humanScore}
                Computer: ${computerScore}`);
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if (humanScore === computerScore) {
        console.log("It's a draw!");
    } else if (humanScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You lose!");
    }
}

playGame();
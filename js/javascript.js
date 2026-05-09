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
    check_for_winner();
}

function updateScore(outcome) {
    if (outcome === 0) {
        humanScore++;
    } else if (outcome === 1) {
        computerScore++;
    }
}

function announceScore(outcome, computerChoice, humanChoice) {

    const result = document.querySelector(".result");
    const score = document.querySelector(".score");

    if (outcome === 0) {
        result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else if (outcome === 1) {
        result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    } else {
        result.textContent = `It's a draw! You both chose ${humanChoice}`;
    }
    
    score.textContent = `The score is
                User: ${humanScore}
                Computer: ${computerScore}`;
}

function check_for_winner() {

    const winner = document.querySelector(".winner");

    if (computerScore === 5) {
        winner.textContent = `The computer wins!`;
    } else if (humanScore === 5) {
        winner.textContent = `You win!`;
    }
}

const rock_button = document.getElementById("rock");
const paper_button = document.getElementById("paper");
const scissors_button = document.getElementById("scissors");

rock_button.addEventListener("click", () => playRound(getComputerChoice(), "rock"));
paper_button.addEventListener("click", () => playRound(getComputerChoice(), "paper"));
scissors_button.addEventListener("click", () => playRound(getComputerChoice(), "scissors"));


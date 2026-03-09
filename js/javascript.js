let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 100) + 1;

    if (randomNum < 33) {
        return "Rock";
    } else if (randomNum < 66) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = parseInt(prompt("Enter 1 for Rock, 2 for scissors, or 3 for paper"));
}
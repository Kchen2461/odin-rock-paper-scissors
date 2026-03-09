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


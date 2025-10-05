const playerBox = document.getElementById("player-box");
const computerBox = document.getElementById("computer-box");

const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");

let gameOver = false;

let playerchoice;
let computerchoice;

let playerPoints = 0;
let computerPoints = 0;

function getcomputerChoice() {
    const choices = ["🐍", "💧", "🔫"];
    const rand = Math.floor(Math.random() * 3);
    return choices[rand];
}

function getMatchResult(player, bot) {
    if (player === bot) {
        return;
    }
    if (player === "🐍") {
        if (bot === "💧") { playerPoints++; }
        else { computerPoints++; }
    }
    if (player === "💧") {
        if (bot === "🔫") { playerPoints++; }
        else { computerPoints++; }
    }
    if (player === "🔫") {
        if (bot === "🐍") { playerPoints++; }
        else { computerPoints++; }
    }
}

function playMatch(playerchoice, computerchoice) {
    playerBox.innerHTML = playerchoice;
    computerBox.innerHTML = computerchoice;


    getMatchResult(playerchoice, computerchoice);

    playerScore.innerHTML = `You: ${playerPoints}`;
    computerScore.innerHTML = `Bot: ${computerPoints}`;

    if (playerPoints === 3 || computerPoints === 3) {
        gameOver = true;
    }
    setTimeout(() => {
        playerBox.innerHTML = ((gameOver) ? ((playerPoints === 3) ? "You WIN" : "You LOSE") : "?");
        computerBox.innerHTML = ((gameOver) ? ((computerPoints === 3) ? "Bot WIN" : "Bot LOSE") : "?");
    }, 1000);
}

document.querySelectorAll(".choice-button").forEach(element => {
    element.addEventListener("click", (e) => {
        playerchoice = e.target.innerHTML;
        computerchoice = getcomputerChoice();

        playMatch(playerchoice, computerchoice);
    });
});

document.getElementById("restart").addEventListener("click", () => {
    playerPoints = 0;
    computerPoints = 0;
    gameOver = false;
    playerBox.innerHTML = "?";
    computerBox.innerHTML = "?";
    playerScore.innerHTML = `You: ${playerPoints}`;
    computerScore.innerHTML = `Bot: ${computerPoints}`;
});

let playerPoints = 0
let computerPoints = 0
let rounds = 0

function computerPlay() {
    let choices = [
        "Rock",
        "Paper",
        "Scissors"
    ]
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(computerChoice);
    let computerChoiceLow = computerChoice.toLowerCase()
    return computerChoiceLow
}



function playerPlay() {
    let playerChoice = prompt("Rock, Paper, or Scissors?" );
    console.log(playerChoice);
    let playerChoiceLow = playerChoice.toLowerCase()
    return playerChoiceLow;
}

function playRound() {
    let computer = computerPlay();
    let player = playerPlay();

    if (computer === player) {
        console.log("Draw")
        console.log(playerPoints, computerPoints)
        return playerPoints, computerPoints
    }
    if (computer === "rock" && player === "paper") {
        console.log("Player wins this round")
        playerPoints++
        console.log(playerPoints, " for the player")
        return playerPoints
    }
    if (computer === "rock" && player === "scissors") {
        console.log("Player loses this round")
        computerPoints++
        console.log(computerPoints, " for the computer")
        return computerPoints
    }
    if (computer === "paper" && player === "scissors") {
        console.log("Player wins this round")
        playerPoints++
        console.log(playerPoints, " for the player")
        return playerPoints
    }
    if (computer === "paper" && player === "rock") {
        console.log("Player loses this round")
        computerPoints++
        console.log(computerPoints, " for the computer")
        return computerPoints
    }
    if (computer === "scissors" && player === "rock") {
        console.log("Player wins this round")
        playerPoints++
        console.log(playerPoints, " for the player")
        return playerPoints
    }
    if (computer === "scissors" && player === "paper") {
        console.log("Player loses this round")
        computerPoints++
        console.log(computerPoints, " for the computer")
        return computerPoints
    }
}

function game() {
    for (let rounds=0; rounds < 5; rounds++) {
        if (playerPoints === 3 || computerPoints === 3)
        return playerPoints && computerPoints;
        playRound();
    }
}
game();




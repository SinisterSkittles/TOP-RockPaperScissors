/* TOP Rock Paper Scissors
 * Fatin A.
 * Last Update: 9/10/2025
*/

const body = document.body;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const score = document.querySelector("div");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose: 'Rock', 'Paper' or 'Scissors': ");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        //console.log("Its a tie!");
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
                (humanChoice === "scissors" && computerChoice === "paper") || 
                (humanChoice === "paper" && computerChoice === "rock")) {
        //console.log("You win!");
        return "human";
    } else {
        //console.log("You lose!");
        return "computer";
    }
}

function playGame(humanSelection) {
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);

    if (winner === "human") {
        humanScore++;
    } else if (winner === "computer") {
        computerScore++;
    }

    score.textContent = `You chose: ${humanSelection}\nCOM chose: ${computerSelection}\nYou - ${humanScore} | COM - ${computerScore}`

    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore === computerScore) {
            score.textContent = `You both win!\nResults: You - ${humanScore} | COM - ${computerScore}`;
        } else if (humanScore > computerScore) {
            score.textContent = `You're the ultimate champion!\nResults: You - ${humanScore} | COM - ${computerScore}`;
        } else {
            score.textContent = `Better luck next time!\nResults: You - ${humanScore} | COM - ${computerScore}`;
        }

        humanScore = computerScore = 0;
    
        //score.textContent = `You - ${humanScore} | COM - ${computerScore}`;
    }
}

body.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'rock':
            playGame("rock");
            break;
        case 'paper':                
            playGame("paper");
            break;
        case 'scissors':
            playGame("scissors");
            break;
    }
});


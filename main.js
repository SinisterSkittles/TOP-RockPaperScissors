/* TOP Rock Paper Scissors
 * Fatin Abdelrahim
 * Last Update: 8/14/2025
*/

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
        console.log("Its a tie!");
        return;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || 
                (humanChoice === "scissors" && computerChoice === "paper") || 
                (humanChoice === "paper" && computerChoice === "rock")) {
        console.log("You win!");
        humanScore++;
        return;
    } else {
        console.log("You lose!");
        computerScore++;
        return;
    }
}

let humanScore, computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);

/* TOP Rock Paper Scissors
 * Fatin A.
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
        return "human";
    } else {
        console.log("You lose!");
        return "computer";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}!`);

        const humanSelection = getHumanChoice();
        console.log(`You chose: ${humanSelection}`);

        const computerSelection = getComputerChoice();
        console.log(`COM chose: ${computerSelection}`);

        let winner = playRound(humanSelection, computerSelection);

        if (winner === "human") {
            humanScore++;
        } else if (winner === "computer") {
            computerScore++;
        }
    }
    
    if (humanScore === computerScore) {
        console.log(`You both win! 
                    Results: You - ${humanScore} | COM - ${computerScore}`);
    } else if (humanScore > computerScore) {
        console.log(`You're the ultimate champion! 
            Results: You - ${humanScore} | COM - ${computerScore}`);
    } else {
        console.log(`Better luck next time!
            Results: You - ${humanScore} | COM - ${computerScore}`);
    }
}

playGame();

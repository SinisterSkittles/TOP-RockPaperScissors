/* TOP Rock Paper Scissors
 *
 * Fatin Abdelrahim
 * Last Update: 8/14/2025
 * 
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

let humanScore = computerScore = 0;

// console.log(getComputerChoice());
console.log(getHumanChoice());


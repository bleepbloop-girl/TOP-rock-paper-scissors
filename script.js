// Create a function named “getComputerChoice”
function getComputerChoice() {
    
    // Store a random value between 0 and 2 (inclusive) in the variable “choice”
    const choice = Math.floor(Math.random() * 3);

    // If “choice” is 0, return the string “rock”
    if (choice === 0) {
        return 'rock';
    // If “choice” is 1, return the string “paper”
    } else if (choice === 1) {
        return 'paper';
    // Else return the string, “scissors”
    } else return 'scissors';

} console.log(getComputerChoice()); 
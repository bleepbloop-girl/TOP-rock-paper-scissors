// Create a function named “getComputerChoice”
function getComputerChoice() {
    
    // Store a random value between 0 and 2 (inclusive) in the variable “choice”
    const choice = Math.floor(Math.random() * 3);

    // If “choice” equals 0, return the string “rock”
    if (choice === 0) {
        return 'rock';
    // If “choice” equals 1, return the string “paper”
    } else if (choice === 1) {
        return 'paper';
    // Or else return the string, “scissors”
    } else return 'scissors';

} console.log(getComputerChoice());


// Create a function named “getHumanChoice”
function getHumanChoice() {
    
    // Store user input in the variable “choice”
    const choice = prompt('Rock, Paper, Scissors... [enter your choice] ...SHOOT!');

    // If “choice” equals one of the strings “rock”, “paper”, or “scissors”, return choice 
    if (
        choice === 'rock' ||
        choice === 'paper' ||
        choice === 'scissors'
    ) {
        return choice;
    // Or else return the string, "oops!" 
    } else return 'oops'

} console.log(getHumanChoice());


// Create two new variables “humanScore” and “computerScore” in the global scope
let humanScore = 0;
let computerScore = 0; // Initialize both variables with the value 0
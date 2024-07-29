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

}


// Create a function named “getHumanChoice”
function getHumanChoice() {
    
    // Store user input in the variable “choice”, make input case insensitive
    const choice = prompt('Rock, Paper, Scissors... [enter your choice] ...SHOOT!').toLowerCase();

    // If “choice” equals one of the strings “rock”, “paper”, or “scissors”, return choice 
    if (
        choice === 'rock' ||
        choice === 'paper' ||
        choice === 'scissors'
    ) {
        return choice;
    // Or else return the string, "oops!" 
    } else alert('Please check your spelling and try again!'); 

}


// Create two new variables “humanScore” and “computerScore” in the global scope
let humanScore = 0;
let computerScore = 0; // Initialize both variables with the value 0 


// Create a function named “playRound” with two parameters: “humanChoice” and “computerChoice”
function playRound(humanChoice, computerChoice) {    
    if (humanChoice === computerChoice) {
        // If both players’ choices are equal, increment neither score and log: “It’s a tie!”
        console.log(`It's a tie!`);
    } else if (
        // If the choices pass any of the following conditions, run the following block of code
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        // Log a winner announcement, increment "humanScore" by 1
        console.log(`you win! ${humanChoice} beats ${computerChoice}!`); 
        humanScore += 1; 
    } else {
        // Log an alternative winner announcment, increment "computerScore" by 1
        console.log(`you lose! ${computerChoice} beats ${humanChoice}!`); 
        computerScore += 1;
    }
} playRound(getHumanChoice(), getComputerChoice());  

console.log(`Human: ${humanScore}`); 
console.log(`Computer: ${computerScore}`);


// Create a function named “playGame” 
function playGame() {
    // Move playRound and score variables so that they’re declared inside of playGame

    // Play 5 rounds by calling playRound 5 times
}
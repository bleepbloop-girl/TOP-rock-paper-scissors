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
    console.log(`The human choice is ${humanChoice} and the computer choice is ${computerChoice}`);

    // If both players’ choices are equal, increment neither score and log: “It’s a tie!”
    if (humanChoice === computerChoice) {
        console.log(`It's a tie!`);
        // If humanChoice is “rock” and computerChoice is “scissors”, increment humanScore by 1 and log: “You win! Rock beats Scissors!”  
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors!'); 
        humanScore += 1; 
        // If humanChoice is “paper” and computerChoice” is “rock”, increment humanScore by 1 and log: “You win! Paper beats Rock!”
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock!');
        humanScore += 1;
        // If humanChoice is “scissors” and computerChoice is “paper”, increment humanScore by 1 and log: “You win! Scissors beats Paper!”  
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper!'); 
        humanScore += 1; 
    } else {
        // Else, increment computerScore by 1 and log: “You lose! [value of computerChoice] beats [value of humanChoice]!”
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`); 
        computerScore += 1;
    }
}

playRound(getHumanChoice(), getComputerChoice());  

console.log(`Human: ${humanScore}`); 
console.log(`Computer: ${computerScore}`);
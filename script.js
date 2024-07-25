// STEP 2: Get the computer choice

// Randomly return one of three strings each time the function is called
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
console.log(`Computer: ${getComputerChoice()}`); 


// STEP 3: Get the human choice

// Initialize a variable 'choice' and set it to the user input
// Make the user input case insensitive
const choice = prompt('Rock, Paper, Scissors... (use key groups 1/2/3 or 8/9/0 to play)'); 

// Take a single argument 'choice' and return one of three strings if a condition is satisfied
function getHumanChoice(choice) {
    switch (choice) {
        case 'rock': 
            return 0;
            break; 
        case 'paper': 
            return 1;
            break; 
        case 'scissors':
            return 2;
            break;
        default: 
            return `Please enter "rock", "paper", or "scissors"`
    }
}
console.log(`Human: ${getHumanChoice(choice)}`); 

// STEP 4: Declare the player score variables

// Create two variables to store the score of each player, and initialize the value of each variable to 0
let humanScore = 0; 
let computerScore = 0;


// STEP 5: 

// Take the human choice and the computer choice and increment the winner's score by 1, logging a winner announcement
function playRound(humanChoice, computerChoice) {
    // Make the human choice argument case insensitive
    humanChoice = humanChoice.toLowerCase();
}

console.log(playRound(choice, getComputerChoice)); 
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


// Create a function named “playGame” 
function playGame() {

    // Create two new variables “humanScore” and “computerScore” in the global scope
    let humanScore = 0;
    let computerScore = 0; // Initialize both variables with the value 0 

    // Create a function named “playRound” with two parameters: “humanChoice” and “computerChoice”
    function playRound(humanChoice, computerChoice) { 

        // If both players’ choices are equal, increment neither score and log: “It’s a tie!”
        if (humanChoice === computerChoice) {
            console.log(`it's a tie!`);

        // If the choices pass any of the following conditions, run the subsequent block of code
        } else if (
            humanChoice === 'rock' && computerChoice === 'scissors' ||
            humanChoice === 'paper' && computerChoice === 'rock' ||
            humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            // Log a winner announcement, increment "humanScore" by 1
            console.log(`you win! ${humanChoice} beats ${computerChoice}!`); 
            humanScore += 1; 

        // Or else log an alternative winner announcment, increment "computerScore" by 1
        } else {
            console.log(`you lose! ${computerChoice} beats ${humanChoice}!`); 
            computerScore += 1;
        }
    } 

    // Play 5 rounds by calling playRound 5 times
    for (i = 0; i < 5; i ++) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`HUMAN: ${humanScore} \nCOMPUTER: ${computerScore} \n `); 
    }

}

playGame();
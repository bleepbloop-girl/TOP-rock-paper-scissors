// STEP 2: Get the computer choice

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0: 
            return 'rock'; 
            break; 
        case 1: 
            return 'paper'; 
            break; 
        case 2: 
            return 'scissors'; 
            break;
    }
}
console.log(`Computer: ${getComputerChoice()}`); 


// STEP 3: Get the human choice

const choice = prompt('Rock, Paper, Scissors... [enter your choice below] ...SHOOT!'); 

function getHumanChoice(choice) {
    choice = choice.toLowerCase(); 
    if (
        choice === 'rock' || 
        choice === 'paper' || 
        choice === 'scissors'
    ) {
        return choice; 
    } else return 'Please check your spelling and try again!'
}
console.log(`Human: ${getHumanChoice(choice)}`); 


// STEP 4: Declare the player score variables

let humanScore = 0; 
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    
    return `The human choice is ${humanChoice} and the computer choice is ${computerChoice}`; 
}
console.log(playRound(getHumanChoice(choice), getComputerChoice())); 
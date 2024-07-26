// STEP 2: Get the computer choice

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
console.log(`Computer: ${getComputerChoice()}`); 


// STEP 3: Get the human choice

const choice = prompt('Rock, Paper, Scissors... [enter your choice below] ...SHOOT!').toLowerCase(); 

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
    }  
}
console.log(`Human: ${getHumanChoice(choice)}`); 


// STEP 4: Declare the player score variables

let humanScore = 0; 
let computerScore = 0;


// STEP 5: Write the logic to play a single round

function playRound(computerChoice, humanChoice) {
     
}
console.log(playRound(getHumanChoice(choice), getComputerChoice())); 
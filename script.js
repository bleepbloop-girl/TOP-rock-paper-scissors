// randomly return one of three strings each time the function is called
function getComputerChoice() {

    // initaialize choice to a random number between 0 and 2 (inclusive)
    let choice = Math.floor(Math.random() * 3);

    // match the return value of choice to one of three possible conditions
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

// initialize a variable 'choice' and set it to the user input
const choice = prompt('Rock, Paper, Scissors... (use key groups 1/2/3 or 8/9/0 to play)');

// take a single parameter 'choice' and return one of three strings if a condition is satisfied
function getHumanChoice(choice) {
    if (choice == '1' || choice == '8') {
        return 'rock'; 
    } else if (choice == '2' || choice == '9') {
        return 'paper'
    } else if (choice == '3' || choice == '0') {
        return 'scissors'
    } else return 'Please use key groups 1/2/3 or 8/9/0 to play'; 
}
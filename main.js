
choices = ['Rock', 'Paper', 'Scissors']
let userScore = 0;
let computerScore = 0;

function getUserChoice() {
    let userChoice = prompt('Which weapon do you choose: Rock, Paper or Scissors?');
    console.log(`User Choice: ${userChoice}`);
    return userChoice
}


function getComputerChoice() {
    let computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(`Computer Choice: ${computerChoice}`);
    return computerChoice
}

function playRPS(userChoice, computerChoice) {

        if (computerChoice === userChoice) {
            console.log(`Oh, it's a draw. ${userChoice} vs. ${computerChoice}`);
        } else if (computerChoice === 'Rock' && userChoice === 'Scissors' || computerChoice === 'Paper' && userChoice === 'Rock'
        || computerChoice === 'Scissors' && userChoice === 'Paper') {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${userChoice}`);
        } else {
            userScore++;
            console.log(`You win! ${userChoice} beats ${computerChoice}`);
        }
        console.log(`${userScore} vs ${computerScore}`);
    }

while (userScore != 5 && computerScore != 5) {
    playRPS(getUserChoice(), getComputerChoice());
}
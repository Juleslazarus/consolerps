let playerScore = 0; 
let compScore = 0; 
let playerChoiceMade = prompt('choose rock paper or scissors').toLowerCase(); 

const computerPlay = () => {
    const arrOfChoices = ['rock', 'paper', 'scissors']; 
    const randomNum = Math.floor(Math.random() * 3); 
    const compChoice = arrOfChoices[randomNum]; 
    return compChoice; 
}
const playRound = (playerSelection, computerSelection) => {
    if (playerSelection == 'rock' && computerSelection === 'rock') {
        return 'you tied you both picked rock'
    }else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'you tied you both picked scissors'; 
    }else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'you tied you both picked paper'; 
    }else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'you suck! rock crushes scissors'
    }else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'you win! scissors cuts paper!'; 
    }else if (playerSelection === 'rock' && computerSelection == 'paper') {
        return 'you lose! paper covers rock'; 
    }else if (playerSelection === 'rock' && computerSelection ==='scissors') {
        return 'you win! rock crushes scissors'; 
    }else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'you lose scissors cuts paper!'; 
    }else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'you win paper covers rocks'; 
    }
}

const playerSelection = playerChoiceMade; 
const computerSelection = computerPlay(); 


const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection)); 
    }
}

game(); 
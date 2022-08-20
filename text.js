function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max +1); 
    if (choice === 1) {
        let computerChoiceResult = 'rock'; 
        console.log('rock'); 
    }else if (choice === 2) {
        let computerChoiseResult = 'paper'; 
        console.log('paper');
    }else if (choice === 3) {
        let computerChoiceResult = 'scissors'; 
        console.log('scissors'); 
    }else {
        alert('something went wrong'); 
    }
    
}console.log(getComputerChoice(3)); 
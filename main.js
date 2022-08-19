function getComputerChoice(max) {
    let choice = Math.floor(Math.random() * max +1); 
    if (choice === 1) {
        console.log('rock'); 
    }else if (choice === 2) {
        console.log('paper');
    }else if (choice === 3) {
        console.log('scissors'); 
    }else {
        alert('something went wrong'); 
    }
    
}console.log(getComputerChoice(3)); 

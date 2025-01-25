function main_game (){
    let humanScore = 0;
    let computerScore = 0;

    function getComputerChoice (){
        const num = Math.trunc(Math.random() * 3)
        const hands = ["rock", "paper", "scissors"];
        return hands[num];
    }
    
    
    
    function getHumanChoice(){
        const tool = prompt("Pick a weapon").toLowerCase();
        const hands = ["rock", "paper", "scissors"];
        
        if (!hands.includes(tool)){
            return "Invalid Weapon: Pick"
        }else{
            return `${tool}`
    
        }
        
        
    }
    
    function playRound(humanChoice,computerChoice){
        if (humanChoice === computerChoice){
            return "Draw! no one scores";
        }else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ){
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoice}`

        }else{
            humanScore += 1;
            return `You Win! ${humanChoice} beats ${computerChoice}`
        }   
    }
    
    function finalScore(){
        if (humanScore > computerScore){
            return `You win user: ${humanScore} over computer: ${computerScore}`;
    
        }else if (computerScore === humanScore){
            return "Draw!";
        }else{
            return `You lose computer: ${computerScore} over you: ${humanScore}`;
        }
    }

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
    async function playGame(rounds) {
        for (let i = 0; i < rounds; i++) {
            console.log(playRound(getHumanChoice(), getComputerChoice())); // Replace with your actual logic
            await delay(2000);
             
         }
         console.log(finalScore())
    }
    

    playGame(5);
    
    
    
    
}


main_game()

  
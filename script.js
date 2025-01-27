function main_game() {
    let humanScore = 0;
    let computerScore = 0;

   
    function getComputerChoice() {
        const num = Math.trunc(Math.random() * 3);
        const hands = ["rock", "paper", "scissors"];
        return hands[num];
    }

    function getHumanChoice() {
        return new Promise((resolve) => {
            const rockButton = document.getElementById('rock');
            const paperButton = document.getElementById('paper');
            const scissorsButton = document.getElementById('scissors');

            
            rockButton.addEventListener('click', () => resolve('rock'));
            paperButton.addEventListener('click', () => resolve('paper'));
            scissorsButton.addEventListener('click', () => resolve('scissors'));
        });
    }

   
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "Draw! No one scores.";
        } else if (
            (computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")
        ) {
            computerScore += 1;
            return `You lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            humanScore += 1;
            return `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }

    function finalScore() {
        if (humanScore > computerScore) {
            return `You win! User: ${humanScore} over Computer: ${computerScore}`;
        } else if (computerScore === humanScore) {
            return "It's a draw!";
        } else {
            return `You lose! Computer: ${computerScore} over You: ${humanScore}`;
        }
    }


    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    async function playGame(rounds) {
        for (let i = 0; i < rounds; i++) {
            console.log(`Round ${i + 1}:`);

            
            const humanChoice = await getHumanChoice();
            console.log(`You chose: ${humanChoice}`);

           
            const computerChoice = getComputerChoice();
            console.log(`Computer chose: ${computerChoice}`);

           
            console.log(playRound(humanChoice, computerChoice));

           
            await delay(1000); 
        }

       
        console.log(finalScore());
    }

    
    playGame(5);
}

main_game();
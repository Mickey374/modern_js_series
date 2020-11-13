const game = ()=>{
    //Get score of the Player and Computer
    let pScore = 0; //PlayerScore
    let cScore = 0; //ComputerScore

    //Function to fadeout intro and Fade in the Game
    const startGame = () =>{
        const playBtn = document.querySelector(".intro button");        //Get the Intro button into a variable
        const intoScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        //Anytime Let's Play Button is clicked, Perform this event
        playBtn.addEventListener('click', function(){
            intoScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Function to Play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach((hand)=>{
            hand.addEventListener("animationend", function(){
                this.style.animation = "";
            });
        });

        //Get computer options randomly
        const computerOptions = ['rock', 'paper', 'scissors'];

        
        //console.log(computerNumber);

        //Get the Buttons of Images to print when we click on any of them
        options.forEach((option)=>{
            option.addEventListener("click", function(){
                //Generate the random numbers and link it to the Computer Options
                const computerNumber = Math.floor(Math.random() *3);
                const computerChoice = computerOptions[computerNumber];
                //console.log(computerChoice);

                //Create a Set Timeout Function for Game Control
                setTimeout(()=>{//Call Compare Hands Function
                    compareHands(this.textContent, computerChoice);
    
                    //Update the Images
                    playerHand.src = `/assets/${this.textContent}.png`;
                    computerHand.src = `/assets/${computerChoice}.png`;}, 2000)

                //Shake Player hands with Rock image before choosing random image
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            })
        });
    };

    const updateScore = () =>{
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice)=>{
        //Update Text
        const winner = document.querySelector(".winner");
        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie!";
        }

        //Checking for a Rock
        if(playerChoice === "rock"){
            if(computerChoice === "scissors"){
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }
        }

        //Checking for a Paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }

        //Checking for a Scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins";
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = "Player Wins";
                pScore++;
                updateScore();
                return;
            }
        }
    };

    //Call all Inner Functions
    startGame();
    playMatch();
    updateScore();
};


//Call start the Game Function
game();
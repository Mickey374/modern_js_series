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

                //Call Compare Hands Function
                //compareHands();

                //Update the Images
                playerHand.src = `/assets/${this.textContent}.png`;

                computerHand.src = `/assets/${computerChoice}.png`;
            })
        });
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
                return;
            }else{
                winner.textContent = "Computer Wins";
                return;
            }
        }

        //Checking for a Paper
        if(playerChoice === "paper"){
            if(computerChoice === "scissors"){
                winner.textContent = "Computer Wins";
                return;
            }else{
                winner.textContent = "Player Wins";
                return;
            }
        }

        //Checking for a Scissors
        if(playerChoice === "scissors"){
            if(computerChoice === "rock"){
                winner.textContent = "Computer Wins";
                return;
            }else{
                winner.textContent = "Player Wins";
                return;
            }
        }
    };

    //Call all Inner Functions
    startGame();
    playMatch();
    //updateScore();
};


//Call start the Game Function
game();


// const userList = document.querySelector(".name-list");
// const listInput = document.querySelector(".list-input");
// const addBtnList = document.querySelector(".addListBtn");


// addBtnList.addEventListener("click", function(){
//     const newLi = document.createElement('LI');
//     const liContent = document.createTextNode(listInput.value);

//     //Attach the input value to new li
//     newLi.appendChild(liContent);

//     //Attaching the li to the user list
//     userList.appendChild(newLi);
// });



// for(user of userList){
//     user.addEventListener("click", function () {
//         console.log(this);
//     });
// }

// const text = document.querySelector(".title");
// const color = document.querySelector(".changeColor");

// color.addEventListener("click", function () {
//    text.classList.toggle("change"); 
// });


//text.classList.remove("change");
// let loading = 0;

// while (loading < 100) {
    
//     console.log("This is the current number "+ loading);
//     loading++;
// }

// const names = ["Ed", "Maria", "Luke", "Shaw", "Giggs", "Batman"];

// for(name of names){
//     if(name === 'Luke'){
//         console.log("Luke is in my list and he is in index " + names.indexOf(name));
//         break;
//     }
    
//}
// const user = {
//     name: 'Michael',
//     age: 23,
//     married: false,
//     purchases: ["Phone", "car", "Laptop"],
//     sayName: function(){
//         console.log(this.name);
//     }
// };

// user.sayName();

//THIS

// const name = "Mickey Dev";

// const myapp = (text) => {
//     const newApp = text.toUpperCase();
//     console.log(newApp);
// }

// myapp(name);

// const name = "Mike";
// const age = 24;


// console.log(`Hello, it's me and my name is ${name} and my age is ${age}`);

// const age = 20;

// if(age >18){
//     console.log("You are good to go");
// }

// const schedule = [
//    `Mine is excellent`, 'Eat', 'Film on Netflix' 
// ];
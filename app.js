let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_Score=document.querySelector("#user-score");
const comp_Score=document.querySelector("#Comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomInx = Math.floor(Math.random() * 3);
    return options[randomInx];
};

const drawGame = () => {
    //console.log("game is a draw");
    msg.innerText = "game was draw";
    msg.style.backgroundColor="blue";
};

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        user_Score.innerText=userScore;
        msg.innerText = "you win";
        // Change background color for example
        msg.style.backgroundColor = "green";
    } else {
        compScore++
        comp_Score.innerText=compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor="red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);
    if (userChoice == compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});

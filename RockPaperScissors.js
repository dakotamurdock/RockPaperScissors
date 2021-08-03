// Function to randmoly generate a computer hand
function ComputerPlay(){

    let randNum = Math.floor(Math.random() * 3);
    let computerHand = IntToHand(randNum);

    return computerHand;
}


// Function to convert generated inputs into a String of the hand being played
function IntToHand(num){

    let hand = "";
    switch(parseInt(num)) {
        case 9:
            hand = "Quit";
            break;
        case 0: 
            hand = "Rock";
            break;
        case 1:
            hand = "Paper";
            break;
        case 2:
            hand = "Scissors";
            break;
    }

    return hand;
}


// Function to compare hands and determine winner - results logged to console
function CompareHands(hand1){

    hand2 = ComputerPlay();

    if (hand1 == hand2){
        hand.textContent = `You and the computer both had ${hand1}, so you tied.`;
    }
    else if (hand1 == "Rock" && hand2 == "Scissors") {
        hand.textContent = "You win! Rock beats Scissors.";
        ++userWins;
    }
    else if (hand1 == "Scissors" && hand2 == "Rock") {
        hand.textContent = "You lose! Rock beats Scissors";
        ++compWins;
    }
    else if (hand1 == "Paper" && hand2 == "Scissors") {
        hand.textContent = "You lose! Scissors beats Paper.";
        ++compWins;
    }
    else if (hand1 == "Scissors" && hand2 == "Paper") {
        hand.textContent = "You win! Scissors beats Paper.";
        ++userWins;
    }
    else if (hand1 == "Rock" && hand2 == "Paper") {
        hand.textContent = "You lose! Paper beats Rock.";
        ++compWins;
    }
    else if (hand1 == "Paper" && hand2 == "Rock") {
        hand.textContent = "You win! Paper beat Rock.";
        ++userWins;
    }

    container.appendChild(hand);
}


function clear() {
    rockBtn.remove();
    paperBtn.remove();
    scissorsBtn.remove();
    hand.textContent = `Game over! You won ${userWins} times, and the computer won ${compWins} times.`;
    container.appendChild(newGameButton);
    userWins = 0;
    compWins = 0;
}


const container = document.querySelector('#container');
const newGameButton = document.getElementById("newGame");
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
rockBtn.innerHTML = "Rock";
paperBtn.innerHTML = "Paper";
scissorsBtn.innerHTML = "Scissors";
rockBtn.type = "button";
paperBtn.type = "button";
scissorsBtn.type = "button";
rockBtn.id = "0";
paperBtn.id = "1";
scissorsBtn.id = "2";
let userWins = 0;
let compWins = 0;
const hand = document.createElement('div');
hand.classList.add('hand');


function run() { 
    newGameButton.remove();
    hand.textContent = "";
    container.appendChild(rockBtn);
    container.appendChild(paperBtn);
    container.appendChild(scissorsBtn);
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            CompareHands(IntToHand(button.id));
            console.log(compWins + " " + userWins);
            if (compWins == 5 || userWins == 5) {
                clear();
            }
        });
    });
}
// Function to get hand that user wants to play (or quit)
function GetUserOption(){

    let userHandNum = window.prompt("Enter your hand: 0: Rock, 1: Paper, 2: Scissors, 9: Quit");
    
    // if-statement handles "cancel" being pressed on the prompt window
    if (userHandNum == "" || userHandNum == null) {
        userHandNum = "9";
    }

    // in case user doesn't put in the number, but types in their hand
    switch(userHandNum.toLowerCase()){
        case "0":
        case "rock":
            userHandNum = "0";
            break;
        case "1":
        case "paper":
            userHandNum = "1";
            break;
        case "2":
        case "scissors":
            userHandNum = "2";
            break;
        case "9":
        case "quit":
            userHandNum = "9";
            break;
        default:
            userHandNum = "9";
            break;
    }

    // parse integer from the string returned by the prompt window
    let userHand = IntToHand(userHandNum);

    return userHand;
}


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
function CompareHands(hand1, hand2){

    if (hand1 == hand2){
        console.log(`You and the computer both had ${hand1}, so you tied.`);
    }
    else if (hand1 == "Rock" && hand2 == "Scissors") {
        console.log("You win! Rock beats Scissors.");
        ++userWins;
    }
    else if (hand1 == "Scissors" && hand2 == "Rock") {
        console.log("You lose! Rock beats Scissors");
        ++compWins;
    }
    else if (hand1 == "Paper" && hand2 == "Scissors") {
        console.log("You lose! Scissors beats Paper.");
        ++compWins;
    }
    else if (hand1 == "Scissors" && hand2 == "Paper") {
        console.log("You win! Scissors beats Paper.");
        ++userWins;
    }
    else if (hand1 == "Rock" && hand2 == "Paper") {
        console.log("You lose! Paper beats Rock.");
        ++compWins;
    }
    else if (hand1 == "Paper" && hand2 == "Rock") {
        console.log("You win! Paper beat Rock.");
        ++userWins;
    }
}

// Keep track of results
let userWins = 0;
let compWins = 0;


function run() { 
// Get users first input
    let userHand = GetUserOption();

    // Loop to continue gameplay until 
    while (userHand !== "Quit") {
        let computerHand = ComputerPlay();
        console.log(`Your Hand: ${userHand}, Computer Hand: ${computerHand}`);
        CompareHands(userHand, computerHand);
        console.log(`Your Wins: ${userWins}, Computer Wins: ${compWins}.`)
        userHand = GetUserOption();
    } 
}
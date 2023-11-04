const choices = ["Rock","Paper","Scissors"];
function  getComputerChoice(){
    let computerChoiceIndex = Math.floor(Math.random() * choices.length);

    return choices[computerChoiceIndex];
}

function playerPick(){
    let playerschoice = prompt("Choose: Rock/Paper/Scissors: ")

    return playerschoice
}


function playRound(playerSelection, computerSelection){

    player = playerSelection().toLowerCase()
    computer = computerSelection().toLowerCase()

    if(player === computer){
        return `${player} equals ${computer}. It is a Tie!`
    } else if(player === "rock" && computer == "scissors"){
        return `${player} beats ${computer}. You won`
    } else if(player === "paper" && computer == "rock"){
        return `${player} beats ${computer}. You won`
    }else if(player === "scissors" && computer == "paper"){
        return `${player} beats ${computer}. You won`
    } else{
        return `${computer} beats ${player}. You lost`
    }
    
}

console.log(playRound(playerPick,getComputerChoice))






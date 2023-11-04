const choices = ["rock","paper","scissors"];
function  getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * choices.length);

    return computerChoice
}

console.log(getComputerChoice())


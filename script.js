const choices = ["rock","paper","scissors"];
function  getComputerChoice(){
    let computerChoiceIndex = Math.floor(Math.random() * choices.length);

    return choices[computerChoiceIndex]
}

console.log(getComputerChoice())


console.log("hello world")
function getRandomNum(){
    /* no + 1 e.g.: "*3) + 1" to make it 1-3 bc array counts from 0*/
    return Math.floor(Math.random()*3);
}
/*Computer choice of RPS */
function getComputerChoice (){
    let listoptions = ["Rock","Paper","Scisscors"]
    return listoptions[getRandomNum()]
}
/* Player's Selection function */
function playerSelection (){
    let playerChoice = prompt("Choose: Rock, Paper, Scissors")
    playerChoice = playerChoice.toLowerCase()
    if ("rock"===playerChoice || "paper"===playerChoice || "scissors"===playerChoice){
    return playerChoice}
    else{
        window.alert("You can only choose: Rock , Paper or Scisscors")
    }
}
playerSelection ()
const computerSelection = getComputerChoice()

function gameRounds(playerSelection, computerSelection){

}


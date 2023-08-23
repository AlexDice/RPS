console.log("hello world")
function getRandomNum(){
    /* no + 1 e.g.: "*3) + 1" to make it 1-3 bc array counts from 0*/
    return Math.floor(Math.random()*3);
}

/*Computer choice of RPS */
function getComputerChoice (){
    let compList = ["rock","paper","scisscors"]
    return compList[getRandomNum()]
}

/* Player's Selection function, No choise for player to decide to choose again */
function getPlayerSelection (){
    let playerChoice = prompt("Choose: Rock, Paper, Scissors")
    if (null===playerChoice || undefined === playerChoice || ""===playerChoice){
        window.alert("You don't wanna play? :<")
        return
    }else{
    playerChoice = playerChoice.toLowerCase()
}
    if ("rock"===playerChoice || "paper"===playerChoice || "scissors"===playerChoice){
    return playerChoice
    } else{
        window.alert("You can only choose: Rock , Paper or Scisscors")
    }
}

const PlayerSelection = getPlayerSelection ()
const computerSelection = getComputerChoice()
console.log (PlayerSelection)
console.log (computerSelection)

function gameRounds(playerSelection, computerSelection){
    if(null===playerSelection || undefined === playerSelection || ""===playerChoice){
        return
    }

    


}


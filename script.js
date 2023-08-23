console.log("hello world")
function getRandomNum(){
    /* no + 1 e.g.: "*3) + 1" to make it 1-3 bc array counts from 0*/
    return Math.floor(Math.random()*3);
}

for (let i = 0; i<5; i++){

/*Computer choice of RPS */
function getComputerChoice (){
    let compList = ["rock","paper","scissors"]
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
        window.alert("You can only choose: Rock , Paper or Scissors")
    }
}

const playerSelection = getPlayerSelection ()
const computerSelection = getComputerChoice()

function gameRounds(playerSelection , computerSelection){
    console.log (playerSelection)
    console.log (computerSelection)    
    if (playerSelection === computerSelection){
        return window.alert("It's a tie")
    } else if (
        playerSelection ==="scissors" && computerSelection==="rock" ||
        playerSelection ==="rock" && computerSelection==="paper" ||
        playerSelection ==="paper" && computerSelection==="scissors"
        ){
            return window.alert("You loose")
        } else if (
            playerSelection ==="scissors" && computerSelection==="paper" ||
            playerSelection ==="rock" && computerSelection==="scissors" ||
            playerSelection ==="paper" && computerSelection==="rock"
        ){
           return window.alert("You win")
    }
    


}
gameRounds(playerSelection, computerSelection)
}
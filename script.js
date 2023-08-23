console.log("hello world")
function getRandomNum(){
    /* no + 1 e.g.: "*3) + 1" to make it 1-3 bc array count from 0*/
    return Math.floor(Math.random()*3);
}

function getComputerChoice (){
    let listoptions = ["Rock","Paper","Scisscors"]
    return listoptions[getRandomNum()]
}

const playerSelection = "rock";
const computerSelection = getComputerChoice()

function gameRounds(playerSelection, computerSelection){

}


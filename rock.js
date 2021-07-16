//computer plays rock, paper or scissors randomly
function computerPlay(){
    let computerSelection
    let i= Math.random()*3
    if (i<=1) {
        computerSelection="rock"
    }
    else if (i<=2) {
        computerSelection="paper"
    }
    else {
        computerSelection="scissors"
    }
    return computerSelection
}
//decide who won the round. make sure parameters are case-sensitive
function playRound(playerSelection,computerSelection){
    playerSelection=playerSelection.toLowerCase()
    let roundWinner
    if (playerSelection==computerSelection){
        roundWinner="tie"
    }
    else if (playerSelection=="rock"){
        roundWinner=(computerSelection=="paper") ? "computer":"player"
    }
    else if (playerSelection="paper"){
        roundWinner=(computerSelection=="scissors") ? "computer":"player"
    }
    else if (playerSelection="scissors"){
        roundWinner=(computerSelection=="rock") ? "computer":"player"
    }
    return roundWinner
}
//play 5 rounds, display message to mention winner.
function game(){
    let playerPoints=0
    let computerPoints=0
    let roundMessage
    for (let round=1; round<6; round++){
        let playerSelection=prompt("Rock, paper or scissors?")
        let computerSelection=computerPlay()
        let roundWinner=playRound(playerSelection,computerSelection)
        console.log(roundMessage=(roundWinner=="tie") ? ("Tie!"):("Winner of the round is "+roundWinner+"!")) 
        switch (roundWinner){
            case "computer":
                computerPoints++
                break
            case "player":
                playerPoints++
                break
            case  "tie":
                break
        }
    }
    console.log("GAME OVER")
    let gameWinnerMessage
    if (computerPoints==playerPoints){
        gameWinnerMessage="Tie! No winner."
    }
    else if (computerPoints>playerPoints){
        gameWinnerMessage="Computer wins!"
    }
    else{
        gameWinnerMessage="Player wins!"
    }
    return gameWinnerMessage
}
console.log(game())
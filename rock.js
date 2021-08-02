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
function playRound(playerSelection){
    let computerSelection=computerPlay()
    if (playerSelection==computerSelection){
        return "tie"
    }
    else if (playerSelection=="rock"){
        return (computerSelection=="paper") ? "computer":"player"
    }
    else if (playerSelection="paper"){
        return (computerSelection=="scissors") ? "computer":"player"
    }
    else if (playerSelection="scissors"){
        return (computerSelection=="rock") ? "computer":"player"
    }
}
function game(){
    let playerPoints=0
    let computerPoints=0
    let roundWinner
    let roundMessage
    const roundResult=document.querySelector('#roundresult')
    const gameResult=document.querySelector('#gameresult')
    const btn=document.querySelectorAll('#choicebutton')
    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener('click', () => {
            if (playerPoints<5 && computerPoints<5){
            roundWinner = playRound(btn[i].innerText.toLowerCase())
            roundMessage = (roundWinner=="tie") ? ("Tie!"):("Winner of the round is "+roundWinner+"!")
            roundResult.innerText=roundMessage
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
            else{
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
            gameResult.innerText=gameWinnerMessage
            }
        } )
    }
}
game()


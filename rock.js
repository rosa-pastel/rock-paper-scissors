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
    const computer=document.querySelector('#computerchoice')
    switch (computerSelection.toUpperCase()){
      case 'ROCK':
        computer.src="./pictures/rockvector_computer.png"
        break
      case 'PAPER':
        computer.src="./pictures/papervector_computer.png"
        break
      case 'SCISSORS':
        computer.src="./pictures/scissorsvector_computer.png"
        break
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
    const result=document.querySelector('#result')
    result.innerText=''
    const img=document.querySelectorAll('#images>img')
    for(let i=0; i<img.length; i++){
        img[i].addEventListener('click', () => {
            let playerSelection=img[i].alt.toLowerCase()
            if (playerPoints<5 && computerPoints<5){
            roundWinner = playRound(playerSelection)
            const player=document.getElementById('playerchoice')
            switch (playerSelection.toUpperCase()){
            case 'ROCK':
              player.src = "./pictures/rockvector_player.png"
              break
            case 'PAPER':
              player.src = "./pictures/papervector_player.png"
              break
            case 'SCISSORS':
              player.src = "./pictures/scissorsvector_player.png"
              break
            }
            roundMessage = (roundWinner=="tie") ? ("Tie!"):("Winner of the round is "+roundWinner+"!")
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
            let playerScore=document.querySelector('#playerscore')
            playerScore.innerText=playerPoints
            let computerScore=document.querySelector('#computerscore')
            computerScore.innerText=computerPoints
                if(playerPoints==5 || computerPoints==5){
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
                    result.innerText=gameWinnerMessage.toUpperCase()
                }
                else{
                    result.innerText=roundMessage
                }
            }
        } )
    }
}
function newgame(){ 
    const playerScore=document.querySelector('#playerscore')
    playerScore.innerText=0
    let computerScore=document.querySelector('#computerscore')
    computerScore.innerText=0
    const result=document.querySelector('#result')
    result.innerText=''
    game()
}
game()
btn=document.querySelector('#again')
btn.addEventListener('click',newgame)

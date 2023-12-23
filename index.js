let userName = prompt("What is your name?")


const player = { 
    name: userName,
    chips: 200
}


let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let gameOver = false

const messageEl = document.getElementById("message-el")
const cardsEl = document.getElementById("cards-el")
const sumEl = document.getElementById("sum-el")
const playerEl = document.getElementById("player-el")
const startBtnEl = document.getElementById("start-btn-el")
const newCardBtnEl = document.getElementById("new-card-el")

playerEl.textContent =  `${player.name}: ${player.chips}£`

function getRandomNumber(){
   let randomNumber =  Math.floor(Math.random() * 13 ) + 1 ; 
   if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}


function startGame (){
    if (gameOver){
        startBtnEl.disabled = true
        newCardBtnEl.disabled = true
    } else {
    
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
    player.chips -= 25
}}


function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i < cards.length ; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum  
    if(sum <= 20 ){
        messageEl.textContent = "Do you want to draw a new card?"
        isAlive= true
    }  else if ( sum === 21 ){
        hasBlackJack = true
        messageEl.textContent = "You've got Blackjack!"
        player.chips += 50
    } else {
        isAlive = false
        messageEl.textContent = " you are out of the game!" 
    }
    
    playerEl.textContent =  `${player.name}: ${player.chips}£`
    if (player.chips === 0){
        gameOver = true
        messageEl.textContent = "Game Over!"
        
    }

}

function newCard(){
    if(isAlive === true && hasBlackJack === false) {
        let card = getRandomNumber()
        sum += card
        cards.push(card)
        renderGame()
    }
}




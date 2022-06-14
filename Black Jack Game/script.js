
//declaration

let player= {
    name:"Gaius",
    chips: 1000,
}

let cards=[]
let sum = 0
let isAlive =false
let hasBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent = player.name +" : $" + player.chips

//to get random card
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if (randomCard>10){
     return 10
    }
    else if (randomCard===1){
        return 11 
    }
    else{
        return randomCard
    }
}

//starting game
function startGame(){
    if (player.chips>0){
        player.chips-= 10
        let isAlive =true
        let firstCard =getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard,secondCard]
        sum = firstCard + secondCard
        playerEl.textContent = player.name +" : $" + player.chips
        renderGame()
        
    }
}

//rendering game
function renderGame()
{
    //rendering sum & cards on page
    cardsEl.textContent = "Cards :"
    for (let i=0; i < cards.length ; i++ )
    {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent= "Sum : " + sum

    //Testing condition for blackjack 
    if (sum<=20) {
        isAlive=true
        message="Do you want to draw another card"
    }
    else if(sum===21){
        message="You have got BlackJack !!!"
        hasBlackJack = true
        player.chips+= 100
        playerEl.textContent = player.name +" : $" + player.chips

  
    }
    else{
        message="You are out of the game"
        isAlive=false
    }
    
    //displaying message of result
    messageEl.textContent = message
    

}

//new card selection
function newCard(){
    //only allow the player to get a new card if she/he is alive and not have the blackjack
    if(isAlive === true && hasBlackJack === false){
        let newCard = getRandomCard()
        sum+=newCard
        cards.push(newCard)
        renderGame()
    }
}


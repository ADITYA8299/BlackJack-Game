let player={
    name :"Per",
    chips: 200
}
let messageel=document.getElementById("message")
let sumel=document.getElementById("sum")
let cardel=document.getElementById("card")
let cards=[]
let hasblackjack=false
let isalive=false
let sum=0
let message=""
let playerel=document.getElementById("player-el")
playerel.textContent=player.name + ": $"+ player.chips

function getrandomcard(){
    let number= Math.floor(Math.random()*13)+1
    if(number==1)
        return 11
    else if(number >=11 && number <=13)
        return 10
    else 
    return number
}

function startGame(){
    isalive=true
    let firstcard=getrandomcard()
    let secondcard=getrandomcard()
    cards=[firstcard,secondcard]
    sum=firstcard+secondcard
    renderGame()
}

function renderGame(){
    cardel.textContent="CARD: "

    for(let i=0;i<cards.length;i++){
        cardel.textContent +=cards[i]+" "
    }


    sumel.textContent ="SUM: "+sum
    if(sum<=20){
        message="Do you want to draw a new card?"
    } 
    else if(sum===21){
        message= " You got a blackjack!!"
        hasblackjack=true
    }
    else{
        message="You are out of the game."
        isalive=false
    }

messageel.textContent= message
}

function newcard(){
    if(isalive && !hasblackjack){
        let card= getrandomcard()
        sum +=card
        cards.push(card)
    }
    renderGame()
}
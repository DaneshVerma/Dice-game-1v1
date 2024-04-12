document.querySelector("button").addEventListener('click', randomDices)

function randomDices(){

    var randomNumber1 = Math.floor(Math.random()  * 6) + 1 // random Number for dice img 1
    
    var randomNumber2 = Math.floor(Math.random()  * 6) + 1 // random Number for dice img 2
    
    document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png" ) // Changed the Dice img1
    
    document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png" ) // Changed the Dice img1
    
    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerText = "Player 1 Won"
    }else if(randomNumber1 < randomNumber2){
        document.querySelector("h1").innerText = "Player 2 Won"
    }else if(randomNumber1 == randomNumber2){
        document.querySelector("h1").innerText = "Its a Draw"
        
    }
}
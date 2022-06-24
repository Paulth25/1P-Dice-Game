let rollDice = document.querySelector("#rollBtn")
let change = document.querySelector("#switchBtn")
let theMessage = document.querySelector("#message")
let currentScore = document.querySelector("#scoreUpdate")

let winMsg = "winner"
let loseMsg = "Thats a big fat L mate"

let gameScore = 0;
let fail = 1;
let winValue = 20;


const rollDie = ()=>{
    ranDie = Math.floor((Math.random()*6)+1)
    document.getElementById("dice").src = "./dice" + ranDie + ".png";
    gameScore = (gameScore + ranDie);
    currentScore.textContent = gameScore;

    if (ranDie == fail && gameScore <= winValue)
    {
        gameScore = 0;
        currentScore.textContent = 0;
        theMessage.innerText = loseMsg
        document.getElementById("message").style.backgroundColor = "red"
        document.getElementById("message").style.color = "white"
    }
    else if (gameScore >= winValue)
    {
        gameScore = 0;
        currentScore.textContent = 0;
        theMessage.innerText = winMsg
        document.getElementById("message").style.backgroundColor = "green"
        document.getElementById("message").style.color = "white"
    }
    else
    {
        theMessage.textContent = "Rollin, Rollin"
        document.getElementById("message")
        document.getElementById("message")
    }
}


rollDice.addEventListener("click", rollDie)
var timer = 60;
let score = 0 ;
let hitrn = 0 ;
let timerInterval;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score ;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitrn;
}

function makeBubble() {
    let text = "";
    for (let i = 1; i <= 60; i++) {
        let num = Math.floor(Math.random() * 10);
        text += `<div id = "gola">${num}</div>`;
    }
    document.querySelector("#bubble_03").innerHTML = text;
}

function runTimer(){
    let timerTimer = setInterval(function(){
        if( timer>0){
            timer--;
        document.querySelector("#timer-second").textContent= timer ;
        }
        else{
            clearInterval(timerTimer);
            document.querySelector("#bubble_03").innerHTML=`<h1>Game Over : Your Score is ${score}</h1>`
        }
    },1000);
}
function resetGame() {
    // Reset game variables
    timer = 60;
    score = 0;
    hitrn = 0;

    // Reset UI elements
    document.querySelector("#score").textContent = score;
    document.querySelector("#timer-second").textContent = timer;
    document.querySelector("#bubble_03").innerHTML = "";
    
    // Clear existing interval
    clearInterval(timerInterval);
    
    // Restart game functions
    runTimer();
    makeBubble();
    getNewHit();
}

document.querySelector("#bubble_03").addEventListener("click",function(dets){
    let clickNum = Number(dets.target.textContent);
    if (clickNum == hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
    
})

document.querySelector("#restart-btn").addEventListener("click", resetGame);
// document.querySelector("#history-list").innerHTML = score;
runTimer();
makeBubble();
getNewHit();
increaseScore();
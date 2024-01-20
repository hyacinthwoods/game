const bunny = document.getElementById("bunny")
const bush = document.getElementById("bush")

let score = 0;

function jump() {
    if(bunny.classList != "jump") {
    bunny.classList.add("jump");

    setTimeout(function() {
        bunny.classList.remove("jump"); 
    }, 300);
   } 
 }

let isAlive = setInterval(function () {
    //* get current bunny Y position
    let bunnyTop = parseInt(window.getComputedStyle(bunny).getPropertyValue("top"));

    //* get current bush X position
    let bushLeft = parseInt(
            window.getComputedStyle(bush).getPropertyValue("left")
        );  


    //* detect collision

    if (bushLeft <100 && bushLeft > 10 && bunnyTop >= 320) {
        alert ("Game Over!Your Score:"+score)
    }
const scoreElement = document.getElementById("score");

function updateScore() {
    scoreElement.innerHTML = "Score: " + score;
}
}, 10)

document.addEventListener("keydown", function (event) {
    jump();
    increaseScore();
})

function increaseScore() {
    score += 1;
    updateScore();
}
function startGame() {
    let startDiv = document.getElementById("start");
    let getCanvas = document.getElementById("game");
    let gameOver = document.getElementById("gameOver");
    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    start();
}

function gameOver() {
    let  = document.getElementById("start");
    let getCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("gameOver");
    startDiv.style.display = "none";
    gameCanvas.style.display = "none";
    gameOver.style.display = "block";
    start();

    
}
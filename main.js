window.onload = function() {
    console.log('gameloop');
}

function update() {
    console.log("updating");
}

function render() {
    console.log("rendering"); 
}
 

const bunny = document.getElementById("bunny")
const bush = document.getElementById("bush")

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
        alert("Game Over!")
    }

}, 10)
document.addEventListener("keydown", function (event) {
    jump();
})
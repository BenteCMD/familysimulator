var startButton = document.querySelector("#startbutton");
var startgame = new Audio("sounds/ding-dong.mp3");

function dingdong () {
    startgame.play("sounds/ding-dong.mp3");
}

startButton.addEventListener("mouseover", dingdong);

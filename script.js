const gameBoard = document.getElementById("GameBoard");
const ctx = gameBoard.getContext("2d");
const image = document.getElementById("Background-img");
const startButton = document.getElementById("StartGame");
const background = document.getElementById("background-img");

var startGame = false;
var directionX = null;
var directionY = null;
var playerPosX = gameBoard.clientWidth/2; 
var playerPosY = gameBoard.clientHeight/2;
var lastFrameTime = 0;

startButton.addEventListener("click", activeGame);
document.addEventListener("keydown", function(event){
    
   switch (event.key) {
        case('a'): {
            directionX = "w";
            break;
        }
        case('d'): {
            directionX = "e";
            break;
        }
        case('s'): {
            directionY = "s";
            break;
        }
        case('w'): {
            directionY = "n";
            break;
        }
    }
    
    
})
document.addEventListener("keyup", function(event){
    
    switch (event.key) {
         case('a'): {
             if(directionX === "w") {
                 directionX = 0
             }
             break;
         }
         case('d'): {
             if(directionX === "e"){
                 directionX = 0;
             };
             break;
         }
         case('s'): {
             if(directionY === "s"){
                 directionY = 0;
             };
             break;
         }
         case('w'): {
            if(directionY === "n") {
                directionY = 0;
            };
            break;
         }
     }
     
     
 })
ctx.drawImage(background, 0, 0);

function clearScreen(){
    ctx.clearRect(0, 0, gameBoard.clientWidth, gameBoard.height);
}

function gameLoop(timeStamp){
    let dt = timeStamp - lastFrameTime;
    lastFrameTime = timeStamp;

    console.log("penis");
    movement(dt);
    draw();
    window.requestAnimationFrame(gameLoop);
}

function activeGame(){
    console.log("it worked");
    startGame = true; 
    window.requestAnimationFrame(gameLoop);
}

function draw(){
    clearScreen();
    ctx.drawImage(background, 0, 0);
    drawPlayer();
}
function movement(timeStamp){
    playerMovement(timeStamp);
}


function playerMovement(timeStamp){

    switch(directionX){   
        case('e'):{
            playerPosX += 0.5 * timeStamp;
            break;
        }
        case('w'):{
            playerPosX -= 0.5 * timeStamp;
            break;
        }
    }
    switch(directionY){
        case('n'):{
            playerPosY -= 0.5 * timeStamp;
            break;
        }
        case('s'):{
            playerPosY += 0.5 * timeStamp;
            break;
        }
    }

}
function drawPlayer(){
    ctx.fillStyle = "blue";
    ctx.fillRect(playerPosX, playerPosY, 40, 60);

}
const gameBoard = document.getElementById("GameBoard");
const ctx = gameBoard.getContext("2d");
const startButton = document.getElementById("StartGame");
const background = document.getElementById("background-img");

var startGame = false;
var lastFrameTime = 0;

var player = new Player(gameBoard.clientWidth / 2, gameBoard.clientHeight * .33, null);
var backgroundEntity = new BkgImage(background);

ctx.drawImage(background, 0, 0);

function clearScreen(){
    ctx.clearRect(0, 0, gameBoard.clientWidth, gameBoard.height);
}

function gameLoop(timeStamp){
    let dt = timeStamp - lastFrameTime;
    lastFrameTime = timeStamp;

    console.log("penis");
    draw(dt);
    window.requestAnimationFrame(gameLoop);
}

function activeGame(){

    console.log("it worked");
    startGame = true; 
    window.requestAnimationFrame(gameLoop);
}


function draw(timeStamp){
    clearScreen();
    submitEntity(backgroundEntity);
    submitEntity(player);
    drawEntities(ctx, timeStamp);
}

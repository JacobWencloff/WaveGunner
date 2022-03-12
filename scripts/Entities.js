class Player {
    constructor(posX, posY, image) {
        this.posX = posX;
        this.posY = posY;
        this.image = image;
        this.directionX = 0;
        this.directionY = 0;
        this.velocityX = 0.5;
        this.velocityY = 0.5;
        // this.gun = new Entity(this.posX, this.posY)
    }

    movement = function(timeStamp) {
        switch(this.directionX){   
            case('e'):{
                this.posX += 0.5 * timeStamp;
                break;
            }
            case('w'):{
                this.posX -= 0.5 * timeStamp;
                break;
            }
        }
        switch(this.directionY){
            case('n'):{
                this.posY -= 0.5 * timeStamp;
                break;
            }
            case('s'):{
                this.posY += 0.5 * timeStamp;
                break;
            }
        }
    }

    draw = function(ctx) {
        ctx.fillRect(this.posX, this.posY, 40, 60);
    }
}

class BkgImage {
    constructor(image){
        this.image = image;
    }
    draw = function(ctx){
        ctx.drawImage(this.image, 0, 0);
    }
    movement = function(){}
}
var entitiesToDraw = [];

function drawEntities(ctx, timeStamp) {
    for(let i = 0; i < entitiesToDraw.length; i ++) {
        console.log(entitiesToDraw[i]);
        entitiesToDraw[i].movement(timeStamp);
        entitiesToDraw[i].draw(ctx);
    }
    entitiesToDraw = [];
}

function submitEntity(entity) {
    entitiesToDraw.push(entity);
}
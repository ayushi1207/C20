var fixedRect,movingRect;

var gameobject1,gameobject2;
function setup() {
  createCanvas(800,600);

  fixedRect=createSprite(400, 200, 50, 80);
  movingRect=createSprite(400,400,80,30);

  fixedRect.shapeColor="blue";
  movingRect.shapeColor="yellow";

  fixedRect.debug=true;
  movingRect.debug=true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  
}

function draw() {
  background("black"); 
  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  
  //console.log(movingRect.x)
  //console.log(movingRect.x - fixedRect.x);
  //console.log(movingRect.width/2 - fixedRect.width/2)
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2){

      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);

    }
  
  if( movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y <fixedRect.height/2 + movingRect.height/2){

      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    }
  
    
  
drawSprites();
}


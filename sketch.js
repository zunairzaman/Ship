var ocean, shipImage, shipAnimation, oceanImage;
function preload(){
  oceanImage = loadImage("sea.png");
  shipAnimation= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);
  ocean = createSprite(80,300,20,50);
  ocean.addImage("sea",oceanImage);
  ocean.scale=0.4;
  ocean.velocityX=-5;

  shipImage = createSprite(80,300,20,50);
  shipImage.addAnimation("floating",shipAnimation);
  shipImage.scale=0.2;
}

function draw() {
  background("blue");
  ocean.velocityX=-2;
 if(ocean.x < 0){
   ocean.x=ocean.width/8;
 }
 drawSprites();
}
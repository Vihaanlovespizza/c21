var gameobj1, gameobj2;

function setup() {
  createCanvas(1200,800);
  gameobj1 = createSprite(400, 100, 50, 80);
  gameobj1.shapeColor = "green";
  gameobj1.debug = true;
  gameobj2 = createSprite(400, 800,80,30);
  gameobj2.shapeColor = "green";
  gameobj2.debug = true;

  gameobj2.velocityY = -5;
  gameobj1.velocityY = +5;
}

function draw() {
  background(0,0,0);  


bounceoff(gameobj1,gameobj2)

 
  drawSprites();
}





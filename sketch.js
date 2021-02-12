var fixrect, movingrect
function setup() {
  createCanvas(800,400);
  fixrect =createSprite(400, 200, 50, 50);
  movingrect= createSprite(100,200,40,60);
  fixrect.shapeColor="blue";
  movingrect.shapeColor="blue";
}

function draw() {
  background(255,255,255);
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixrect.x<fixrect.width/2+movingrect.width/2 &&
    fixrect.x-movingrect.x<fixrect.width/2+movingrect.width/2 &&
    movingrect.y-fixrect.y<fixrect.height/2+movingrect.height/2 &&
    fixrect.y-movingrect.y<fixrect.height/2+movingrect.height/2
    )    
  {
    movingrect.shapeColor="red";
    fixrect.shapeColor="red";
  }
  else{
    movingrect.shapeColor="orange";
    fixrect.shapeColor="orange";
  }
    drawSprites();
}
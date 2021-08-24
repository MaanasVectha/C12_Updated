var runner;
var path;
var runner_running;
var road;
var invisibleBoundary1;
var invisibleBoundary2;
// This function loads the images to be used in the project
function preload()
{
  runner_running=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png");
  road=loadImage("path.png");
}

// This function setup the sprites, canvas
function setup()
{
  createCanvas(600,600);
 
  path = createSprite(300,300,300,600);
  path.addImage("running",road)
  path.velocityY=3;

  runner = createSprite(300,555,20,20);
  runner.addAnimation("running",runner_running);
  runner.scale=0.5

  invisibleBoundary1 = createSprite(160,300,20,600);
  invisibleBoundary1.visible=false;

  invisibleBoundary2 = createSprite(440,300,20,600);
  invisibleBoundary2.visible=false;

}

function draw() 
{
    background(0);
    drawSprites();
    console.log(path.y);
    
    // Making the ground to infinite
    if(path.y>500)
    { 
      path.y=303 
    }

    if(keyDown("right"))
    {
      runner.x=runner.x+10;
    }

    if(keyDown("left"))
    {
      runner.x=runner.x-10;
    }
    //checking for collision of invisible boundary and making the object to stay with in the boundary
    runner.collide(invisibleBoundary1);
    runner.collide(invisibleBoundary2);
}

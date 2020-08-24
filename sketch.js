var helicopter, helicopterSprite, packageSprite,package;
var packageBody,ground, Boxleft, Boxmiddle, Boxright;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopter=loadImage("helicopter.png")
	package=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(package)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopter)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

    Boxleft = createSprite(280, 610, 20, 100);
	Boxleft.shapeColor = color(255, 0, 0);
	Boxleft.isStatic = true

	Boxmiddle = createSprite(375, 650, 200, 20);
	Boxmiddle.shapeColor = color(255, 0, 0);
	Boxmiddle.isStatic = true
	

	Boxright = createSprite(470, 610, 20, 100);
	Boxright.shapeColor = color(255, 0, 0);
	Boxright.isStatic = true


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20 , {restitution:.5, isStatic:true});
	World.add(world, packageBody);
	



	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  keyPressed();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	
  }
}




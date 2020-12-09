var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	strok_1 = createSprite (400, 650, 200, 20);
	strok_1.shapeColor = color (255,0,0);

	strok_2 = createSprite(300, 610, 20, 100);
	strok_2.shapeColor = color (255,0,0);

	strok_3 = createSprite(500, 610, 20, 100);
	strok_3.shapeColor =color (255,0,0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	fill = "red";
	 strok_1 = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, strok_1);

	 strok_2 = Bodies.rectangle(width/2, 610, width, 100 , {isStatic:true} );
	 World.add(world, strok_2);
	 
	 strok_3 = Bodies.rectangle(width/2, 610, width, 100 , {isStatic:true} );
	 World.add(world, strok_3);
	 
	Engine.run(engine);

	keyPressed ();
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  keyPressed ();
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.setStatic( packageBody, false);	
  }
}




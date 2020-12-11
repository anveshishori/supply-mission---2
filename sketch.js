var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, boxleft, boxright
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
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,20);
	groundSprite.shapeColor=color(255)
	
	boxbottomSprite = createSprite(groundSprite.x, groundSprite.y-20,200,20);
	boxbottomSprite.shapeColor = color("red");

	boxleftSprite=createSprite(boxbottomSprite.x - boxbottomSprite.width/2, boxbottomSprite.y - 50, 20,100);
	boxleftSprite.shapeColor=color("red")

	boxrightSprite=createSprite(boxbottomSprite.x + boxbottomSprite.width/2, boxbottomSprite.y - 50, 20,100);
	boxrightSprite.shapeColor=color("red")

	

	myengine = Engine.create();
	myworld = myengine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(myworld, packageBody);

	
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(myworld, ground);
	
	boxleftBody = Bodies.rectangle(boxleftSprite.x, boxleftSprite.y, 20,100,{isStatic:true})
	boxrightBody = Bodies.rectangle(boxrightSprite.x, boxrightSprite.y, 20,100,{isStatic:true})
	boxbottomBody = Bodies.rectangle(groundSprite.x, groundSprite.y-20,200,20,{isStatic:true})


	World.add(myworld, boxbottomBody);
	World.add(myworld, boxleftBody);
	World.add(myworld, boxrightBody);

	Engine.run(myengine);
  
}


function draw() {

	
  rectMode(CENTER);
  background(0);
  Engine.update(myengine);
  packageSprite.x = packageBody.position.x 
	packageSprite.y = packageBody.position.y 
  
	keyPressed();
  
  

 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Body.setStatic(packageBody,false)
    
  }
if (keyCode === LEFT_ARROW){
helicopterSprite.x = helicopterSprite.x-2;
translation={x:-2,y:0}
Matter.Body.translate(packageBody, translation)

}
if (keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x+2;
	translation={x:2,y:0}
    Matter.Body.translate(packageBody, translation)
	
	}


}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var paper = new Crumpled (200,100,20,options);
	World.add(world,paper);

  var ground=createSprite(400,30,800,30);
  World.add(world,ground);

  var rect1=createSprite(40,600,40,10);
  World.add(world,rect1);


	Engine.run(engine);
 

	

}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.body,applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paperObject



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
   paperObject = new Paper 

   

  drawSprites();
 
}

function keyPressed() {
	if(keycode === UP_ARROW ) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


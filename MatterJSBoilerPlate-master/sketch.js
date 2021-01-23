
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var dustBin1;
var dustBin2;
var dustBin3;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1=new Paper(100, 300, 20, 20);
ground=new Ground(500, 390, 1000, 10);
dustBin1=new dustBin(980, 345, 15, 100);
dustBin2=new dustBin(780, 345, 15, 100);
dustBin3=new dustBin(880, 390, 200, 15);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper1.display();
  ground.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  drawSprites();
 keyPressed();
}
function keyPressed (){
if (keyCode==UP_ARROW){

	Matter.Body.applyForce(paper1.body, paper1.body.position,{x:20, y:20}); 
}}



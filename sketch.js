
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
	plane1=new Plane(600,600,1200,20);
	iron = new Iron(300,350);
	hammer = new Hammer(10,100);
	stone =new Stone(700,320,100,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  plane1.display();
  iron.display();
  hammer.display();
  stone.display();
 
 
}




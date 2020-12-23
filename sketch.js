
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin1,paper1,ground1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	bin1 = new Bin(900,460,200,200)
  paper1 = new Paper(200,450,70)
 
	ground1 = new Ground(600,560,1300,10)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  paper1.display();
  ground1.display();
  bin1.display();
 
 
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {

    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:75,y:-65})
    
    }
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(280,450,30);
	bob2 = new Bob(340,450,30);
	bob3 = new Bob(400,450,30);
	bob4 = new Bob(460,450,30);
	bob5 = new Bob(520,450,30);

	roof = new Roof(400,220,300,20);

	rope1 = new Rope(bob1.body,roof.body,-bob1.body.radius*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bob2.body.radius*2,0);
	rope3 = new Rope(bob3.body,roof.body,-bob3.body.radius*2,0);
	rope4 = new Rope(bob4.body,roof.body,-bob4.body.radius*2,0);
	rope5 = new Rope(bob5.body,roof.body,-bob5.body.radius*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
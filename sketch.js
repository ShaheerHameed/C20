//name spacing for engine, world, and bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine;
var world;
var ground;
var ball;


function setup()
{
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }
  //step 1 in creating a body 
  ground = Bodies.rectangle(0,380,600,20, options);
  World.add(world, ground);

  var ballOptions = {
    restitution: 2,
    density: 1.5,
    frictionAir: 1
  }
   ball = Bodies.circle(200,200,25, ballOptions) 
   World.add(world, ball);
}

function draw() 
{
  background(51);

  Engine.update(engine);

  push ()
  fill ("red")
  rect(ground.position.x, ground.position.y, 600, 20);  
  pop ()   
  ellipse(ball.position.x, ball.position.y, 25, 25);
 
}


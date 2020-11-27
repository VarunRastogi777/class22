const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world



function setup() {
  createCanvas(400,400);
  
  engine=Engine.create()

  world=engine.world
  var options={
   isStatic:true
  }

  ground=Bodies.rectangle(200,380,400,20,options)
  World.add(world,ground)
  var options={
    restitution:1
  }
   
  ball=Bodies.circle(200,200,20,options)
  World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(200,380,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
}
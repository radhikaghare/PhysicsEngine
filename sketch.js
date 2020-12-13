const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, object1
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic:true
  }

  object1 = Bodies.rectangle(200,380,400,10,options);

  World.add(world,object1);
  console.log(object1);
}

function draw() {
  background(0);  
  rectMode(CENTER)
  Engine.update(engine);
  rect(object1.position.x,object1.position.y,400,10)


}
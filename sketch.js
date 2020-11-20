const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var engine, world;
var ballon;
var shape = [];
function setup() {
  createCanvas(600, 900);
  engine = Engine.create();
  world = engine.world;
  ballon = new Ballon(300, 760, 70, 120);
  ball = new Ball(100, 100, 20, 20);
  s1 = new Shape(100, 100, 20, 20);
}

function draw() {
  background("#FCBD70");
  Engine.update(engine);
  text(mouseX + "," + mouseY, mouseX, mouseY);
  if (frameCount % 60 === 0) {
    shape[] 
  }
  s1.display();
  ballon.display();
  ball.display();
}

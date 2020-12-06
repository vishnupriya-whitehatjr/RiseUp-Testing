const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;
var engine, world;
var ballon;
var shape = [];
var mConstraint;

function setup() {
  var canvas = createCanvas(600, 900);
  engine = Engine.create();
  world = engine.world;
  ballon = new Ballon(300, 760, 70, 120);

  ball = new Ball(300, 650, 20, 20);
}

function draw() {
  background("#FCBD70");
  Engine.update(engine);
  text(mouseX + "," + mouseY, mouseX, mouseY);

  if (frameCount % 20 === 0) {
    shape.push(new Shape(random(200, 400), 10, 8, 8));
  }
  for (var i = 0; i < shape.length; i++) {
    shape[i].display();
  }
  ballon.display();
  ball.display();
}
function keyPressed() {
  if (keyCode === 38) {
    Matter.Body.setVelocity(ball.body, { x: 0, y: -5 });
  } else if (keyCode === 37) {
    Matter.Body.setVelocity(ball.body, { x: -5, y: 0 });
  } else if (keyCode === 39) {
    Matter.Body.setVelocity(ball.body, { x: 5, y: 0 });
  }
}

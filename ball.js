class Ball {
  constructor(x, y, width, height) {
    var options = {
      restitution: 2.5,
      friction: 0.01,
      density: 0.005,
      frictionAir: 0.06,
      //isStatic: true,
    };
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("ballon.png");
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  display() {
    var angle = this.body.angle;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    push();

    noStroke();
    ellipseMode(RADIUS);
    fill("white");
    ellipse(
      this.body.position.x,
      this.body.position.y,
      this.width,
      this.height
    );
    pop();
  }
}

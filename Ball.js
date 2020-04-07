class Ball {
  constructor(x, y, radius) {
    var options = {};
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;
    World.add(world, this.body);
  }
  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    strokeWeight(3);
    fill("red");
    ellipseMode(CENTER);
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
}
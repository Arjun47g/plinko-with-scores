class Ball{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.radius = 15;
        this.color = color(random(0, 255), random(0, 255), random(0, 255))
        this.body = Bodies.circle(x, y, this.radius/2, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}
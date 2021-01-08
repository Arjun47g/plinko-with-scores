class Plinko{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.radius = 15;
        this.body = Bodies.circle(x, y, this.radius/2, options)
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}
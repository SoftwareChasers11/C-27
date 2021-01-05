class Sling_Shot {
    constructor(bodyA,bodyB){
        var options= { 
            stiffness:0.04,
            length:10,
            bodyA:bodyA,
            bodyB:bodyB
        }

        this.SlingShot= Constraint.create(options)
        World.add(world,this.SlingShot)
    }
display()
{
    var pointA = this.SlingShot.bodyA.position;
    var pointB = this.SlingShot.bodyB.position;
    strokeWeight (3);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
}
}
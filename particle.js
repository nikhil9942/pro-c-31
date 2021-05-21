class Particle{
    constructor(x,y,radius){
var options={
    restitution:0.2
}
        this.body=Bodies.circle(x,y,this.radius,options)
        this.color=color ;random(0,255),random(0,255)
        World.add(world,this.body)
    }
    display(){


        var pos=this.body.position;
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius)


    }
}

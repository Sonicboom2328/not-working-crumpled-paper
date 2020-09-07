class Crumpled{
    constructor(){
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2,
    }
 Matter.bodies.circle(this.body.position.x,this.body.position.y,radius,options);
    }
} 
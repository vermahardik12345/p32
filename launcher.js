class launcher{
    constructor(body, anchor){
        var options = {
            bodyA: body,
            pointB:anchor,
            stiffness: 0.1,
            length: 10
        }
        
        this.bodyA=body
            this.pointB=anchor
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
   fly(){
       this.launcher.bodyA=null;
   }
   attach(body){
    this.launcher.bodyA=body;
}
    display(){
        
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }}

    
}
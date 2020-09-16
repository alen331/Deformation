class Box{
    constructor(xposition, yposition, width, height){
         
         this.body = Bodies.rectangle(xposition,yposition,this.width, this.height);
         this.width=width;
         this.height=height;
         World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
    }
   }
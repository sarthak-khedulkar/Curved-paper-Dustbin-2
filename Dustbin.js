class Dustbin {
    constructor(x, y,width,height) {
      var options ={
          isStactic:true
      }
      this.image=loadimage("dustbingreen.png")
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
      }
     display(){
    imageMode(CENTRE);
      fill(255,25,255,0.5);
      rect(this.body.positionX, this.body.positionY, this.width, this.height);
    }
  };
  
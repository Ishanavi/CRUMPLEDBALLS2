class Bin{
    constructor(x,y,width,height)
    {
       var options = 
       {
         'isStatic' : true,
         //'density' : 1
       } 
       
       this.width = width
       this.height = height
       this.x = x
       this.y = y
       this.body = Bodies.rectangle(this.x,this.y,width,height,options)
       this.image = loadImage("images/dustbingreen.png")

       World.add(world,this.body)
    }
      
    display()
    {
    var pos = this.body.position;
    fill("blue")
    imageMode(CENTER)
    image(this.image,pos.x,pos.y,this.width,this.height)
    }
}
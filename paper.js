class Paper
{
    constructor(x,y,r)
    {
        var options = 
        {
            'isStatic' : false,
            'restitution' : 0.5,
            'friction' : 0,
            'density' : 1
        }
       
       // this.width = width;
       // this.height = height;
       this.x = x
       this.y = y
       this.r = r
       this.body = Bodies.circle(this.x,this.y,(this.r)/2-10,options)
        this.image = loadImage("images/paper.png")
        World.add(world,this.body)
    }
    display()
    {
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,0,0,this.r,this.r)
      pop();

    }
}


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(987,700);
  
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,height,2000,20);
  division0 = new Division(10,540,10,300) 
  division1 = new Division(140,540,10,300)
  division2 = new Division(280,540,10,300)
  division3 = new Division(420,540,10,300)
  division4 = new Division(560,540,10,300)
  division5 = new Division(700,540,10,300)
  division6 = new Division(840,540,10,300)
  division7 = new Division(980,540,10,300)

  for (var j = 75; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,75))
}

for (var j = 50; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175))
}

for (var j = 75; j <=width; j=j+50)
{
  plinkos.push(new Plinko(j,275))
}


for (var j = 50; j <=width-10; j=j+50)
{
  plinkos.push(new Plinko(j,375))
}









  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ground.display()
  division0.display()
  division1.display()
  division2.display()
  division3.display()
  division4.display()
  division5.display()  
  division6.display()  
  division7.display() 

  for (var i=0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  var rand=Math.round(random(20,400))
  if(frameCount%60===0){
    particles.push(new particles(rand,10,10))
  }

  for (var j=0; j<particles.length;j++){
    particles[j].display();
  }

  for (var i = 0;i<divisions.length; i++){
    divisions[i].display()
  }

  drawSprites();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos=[];
var particles=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  Ground1=new Ground(240,790,480,17);

  Wall1=new Wall(240,800,480,10);
  Wall2=new Wall(480,400,10,800);
  Wall3=new Wall(0,400,10,800);
  Wall4=new Wall(240,0,480,10);

  Division1=new Division(0,645,10,300);
  Division2=new Division(80,645,10,300);
  Division3=new Division(160,645,10,300);
  Division4=new Division(240,645,10,300);
  Division5=new Division(320,645,10,300);
  Division6=new Division(400,645,10,300);
  Division7=new Division(480,645,10,300);

  for (var j = 40; j <=width; j=j+50)
  {
      plinkos.push(new Plinko(j,75));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
      plinkos.push(new Plinko(j,175));
  }
  for (var j = 40; j <=width; j=j+50)
  {
      plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <=width-10; j=j+50)
  {
      plinkos.push(new Plinko(j,375));
  }

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  push();
  fill(255)
  textSize(30);
  text("Guess which tub will fill first?",50,240)
  pop();

  Ground1.display();

  Division1.display();
  Division2.display();
  Division3.display();
  Division4.display();
  Division5.display();
  Division6.display();
  Division7.display();

  Wall1.display();
  Wall2.display();
  Wall3.display();
  Wall4.display();

  for (var j = 0; j < particles.length;j++){
    particles[j].display();
  }
  if(frameCount%15===0){
    particles.push(new Particle(random(width/4-10,width/4+10),10,10));
  }
  if(frameCount%15===0){
    particles.push(new Particle(random(width/1.4-10,width/1.4+10),10,10));
  }
  
  for(var i=0;i<plinkos.length;i++){
     plinkos[i].display();
  }

}

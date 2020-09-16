/*const Engine= Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

  function setup() {

   createCanvas(400,400);

   engine=Engine.create();
   world=engine.world;

   var ground_options ={
      isStatic : true
     } 

  //   object=Bodies.rectangle(200,100,50,10,options);
   ground=Bodies.rectangle(200,300,200,10,ground_options);
   World.add(world,ground);
    }

     function draw() {

       background(0);
       Engine.update(engine);
        rectMode(CENTER);
        rect(ground.position.x,ground.position.y,50,10);

     //rect(200,200,50,50); 
    drawSprites(); 
  }
  const Engine = Matter.Engine;
  const World= Matter.World;
  const Bodies = Matter.Bodies;
  
  var engine, world;
  var box1;
  
  function setup(){
      var canvas = createCanvas(400,400);
      engine = Engine.create();
      world = engine.world;
      box1 = new Box(200,300,50,50);
      box1.shapeColor = "white"
  }
  
  function draw(){
      background(0);
      Engine.update(engine);
      box1.display();
  }*/

var car, wall;
var speed, weight;

  function setup() {
canvas = createCanvas(1600, 400);

speed = random(55, 90)
weight = random(400, 1500)

car = createSprite(50, 200, 50, 50);
car.velocityX = speed;
wall = createSprite(1500, 200, 60, height/2);
wall.shapeColor = (80,80,80);
  }

  function draw() {
background(0);

if(wall.x - car.x < car.width/2 + wall.width/2){
  car.velocityX = 0;

 var deformation = 0.5 * weight * speed * speed / 22509;

 if(deformation > 180){
   car.shapeColor = color(255,0,0);
 }

 if(deformation < 180 && deformation > 100){
 car.shapeColor = color	(230, 230, 0);
 }

 if(deformation < 100){
  car.shapeColor = color (255, 0, 0);
 }
}

drawSprites();
  }
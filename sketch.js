const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;

var polygon_img, hexa;
var chain;

function preload(){

  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
  
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  block17 = new Block(700, 180, 30, 40);
  block18 = new Block(730, 180, 30, 40);
  block19 = new Block(670, 180, 30, 40);
  block20 = new Block(640, 180, 30, 40);
  block21 = new Block(760, 180, 30, 40);
  //level two
  block22 = new Block(700, 140, 30, 40);
  block23 = new Block(730, 140, 30, 40);
  block24 = new Block(670, 140, 30, 40);
  //top
  block25 = new Block(700, 100, 30, 40);

  hexa = Bodies.circle(50, 200, 20);
  World.add(world,hexa);

  chain = new Chain(this.hexa,{x: 100, y:200});

}
function draw() {
  background(226, 214, 246); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill(24, 124, 247);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(44, 173, 247);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(25, 224, 247);
  block13.display();
  block14.display();
  block15.display();
  fill(151, 255, 255);
  block16.display();
  fill(24, 124, 247);
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();  
  fill(44, 173, 247);
  block22.display();
  block23.display();
  block24.display();
  fill(25, 224, 247);
  block25.display();




  imageMode(CENTER);
  image(polygon_img, hexa.position.x, hexa.position.y, 40, 40);

  chain.display();

}

function mouseDragged(){
  Matter.body.setPosition(this.hexa,{x: mouseX, y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

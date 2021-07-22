const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(300,800,200);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(900,200,200);

  box1 = new Box(580, 400, 50, 50);
  box2 = new Box(630, 400, 50, 50);
  box3 = new Box(680, 400, 50, 50);
  box4 = new Box(730, 400, 50, 50);
  box5 = new Box(700, 220, 50, 50);
  box6 = new Box(650, 220, 50, 50);
  box7 = new Box(600, 220, 50, 50);
  box8 = new Box(680, 160, 50, 50);
  box9 = new Box(630, 160, 50, 50);
  box10= new Box(640, 120, 50, 50);

  Engine.run(engine);
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
   stroke(15);
   fill("red")

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();



  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX , y:mouseY});
}
   
   function mouseReleased(){
     attach.fly();
   }

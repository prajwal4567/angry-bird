const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,log1,log2,log3,log4,ground,pig1,pig2,bird;

function setup(){
    var canvas = createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,580,50,50);
    box2= new Box(350,580,50,50);
    ground= new Ground(300,590,600,20);
    pig1= new Pig(275,580);
    log1= new Log(275,575,200,PI/2);
    box3 = new Box(200,540,50,50);
    box4= new Box(350,540,50,50);
    pig2= new Pig(275,510);
    log2= new Log(275,505,200,PI/2);
    box5= new Box(275,480,50,50);
    log3= new Log(220,430,150,PI/5);
    log4= new Log(320,430,150,PI/-5);
    bird= new Bird(100,100,20,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird.display();

}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var globo1, globo2, globo3, globo4, globo5, globo6;
var arko;
var arrow;
var kuerda;
var Canvas;

function preload(){
  bakgroundImg = loadImage("Imagenes/Fondo.jpg");
}

function setup() {
  Canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  createSprite(400, 200, 50, 50);
  globito = new Globos(400, 200, 30);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  globito.display();
}
var alqaab,a;
var back,b;
var rainbow,c;
var sun,d;

function preload(){
  b = loadImage("BG.jpg");
  a = loadImage("boy.png");
  c = loadImage("rainbow.png");
  d = loadImage("sun.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  alqaab = createSprite(width/2,height/2+150,50,50);
  alqaab.addImage(a);
  alqaab.scale = 0.2;

  sun = createSprite(width/2+500,height/2-275,50,50);
  sun.addImage(d);
  sun.scale = 0.2;

  rainbow = createSprite(width/2-100,width/2-600,30,30);
  rainbow.addImage(c);
  rainbow.scale = 0.2;

  rainbow = createSprite(width/2+350,width/2-500,30,30);
  rainbow.addImage(c);
  rainbow.scale = 0.2;

  rainbow = createSprite(width/2-550,width/2-679,30,30);
  rainbow.addImage(c);
  rainbow.scale = 0.2;

  rainbow = createSprite(width/2-440,width/2-400,30,30);
  rainbow.addImage(c);
  rainbow.scale = 0.2;
}

function draw() {
  background(b);  
  drawSprites();

  textSize(30);
  strokeWeight(4);
  stroke("black");
  fill("white");
  text("Alqaab: Finally!!!", width/2-75,height/2+275);

  sun.velocityX = -1.5;

  if (sun.x<width/2-width/2-100){
    sun.x = width/2+800
  }
}
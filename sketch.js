var ground,groundimage;
var invisibleground;
var num
var cloud,cloudimage
var trex ,trex_running;
var edges;
var cactus,cactus1,cactus2,cactus3,cactus4,cactus5,cactus6;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png") ;
groundimage=loadImage("ground2.png")
cloudimage=loadImage("cloud.png")
cactus1=loadImage("obstacle1.png")
cactus2=loadImage("obstacle2.png")
cactus3=loadImage("obstacle3.png")
cactus4=loadImage("obstacle4.png")
cactus5=loadImage("obstacle5.png")
cactus6=loadImage("obstacle6.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,150,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5;

 edges=createEdgeSprites();
 ground=createSprite(200,180,300,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 ground.addImage(groundimage);

 invisibleground=createSprite(100,195,300,10);
 invisibleground.visible=false;
 num=Math.round(random(1,100));
}

function draw(){
  background(0)
  console.log(num)
  if(keyDown("space")&&trex.y>=100){
    trex.velocityY=-10;
  }
  trex.velocityY=trex.velocityY+0.8;
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.collide(invisibleground);
  spawnClouds();
  spawnCactus();
drawSprites();
}

function spawnClouds(){
  if(frameCount%60===0){
    cloud=createSprite(600,30,20,10);
    cloud.velocityX=-3;
    cloud.y= Math.round(random(20,50))
    cloud.addImage(cloudimage)
    cloud.scale=0.5
cloud.lifetime=200

  }

}
function spawnCactus(){
if(frameCount%60===0){
  cactus=createSprite(600,185,10,30);
  cactus.velocityX=-6;
var num=Math.round(random(1,6))
switch(num){
  case 1:cactus.addImage(cactus1);
  break;
  case 2:cactus.addImage(cactus2);
  break;
  case 3:cactus.addImage(cactus3);
  break;
  case 4:cactus.addImage(cactus4);
  break;
case 5:cactus.addImage(cactus5);
break;
case 6:cactus.addImage(cactus6);
break;
default:break;
}
cactus.scale=0.5
}
}



var fondo,fondoImage;
var obstacle, obstacleImage, obstaclesGroup;
var girl,girlRunning,girlStop;


function preload(){

    girlRunning= loadAnimation("GirlRun.png","GirlRun2.png","GirlRun3.png");
    girlStop=loadImage("GirlRun.png")
    fondoImage=loadImage("fondo.png");
    obstacleImage=loadImage("obstacle.gif");




}

function setup() {
    createCanvas(700,600);
    

//sprite del fondo
fondo=createSprite(350,300);
fondo.addImage("fondo",fondoImage);
fondo.velocityX=-2;


    //sprite del personaje
girl=createSprite(100,515,50,50);
girl.addAnimation("running",girlRunning);
//girl.addImage("collide",girlStop);
//girl.scale=0.9;
  
obstaclesGroup = new Group();

}

function draw() {
    background(180);

  if(fondo.x<300){
      fondo.x=350;
  }

  console.log(fondo.x);
  spawnObstacles();
    drawSprites()
}


function spawnObstacles() {
   

    if(frameCount % 120 === 0) {
      var obstacle = createSprite(600,510,10,40);
      obstacle.addImage("obstaculo",obstacleImage);
      obstacle.scale=0.2;
      obstacle.lifetime = 300;
    
      obstacle.velocityX = -4;
obstaclesGroup.add(obstacle);
    }
    }
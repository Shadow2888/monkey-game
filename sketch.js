
var ground ;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score,background1,bottomEdge;

function preload(){
  //bgi = loadImage("jungle.jpg");
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
 createCanvas(600, 600);
var survivalTime=0;
   monkey = createSprite(150,500,200,500);
   monkey.addAnimation("runing", monkey_running);
   monkey.scale = 0.2;
  // monkey.setCollider("circle",0,0,40);

   
  ground = createSprite(300,540,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 
 FoodGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
  background("white");

 if (ground.x < 0){
      ground.x=ground.width/2;
  } 
  
if (keyDown("space")) {   
monkey.velocityY = -12;  
}

monkey.velocityY = monkey.velocityY + 0.8;
monkey.collide(ground);
spawnfood();
spawnObstacles();
  drawSprites(); 
 if(obstaclesGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstaclesGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstaclesGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    }
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  }
  
  


 function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana =createSprite(700,Math.round(random(120,200)),40,10);
      banana.addImage( bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -4; 
     //assign lifetime to the variable
   banana.lifetime = 250; 
    FoodGroup.add(banana);
  }
  
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(700,510,10,40);
    //obstacle.debug = true;
    obstacle.velocityX = -4;
     obstacle.addImage( obstacleImage);
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale=0.15;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}
 
   
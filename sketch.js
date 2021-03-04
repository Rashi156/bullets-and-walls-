var wall,bullet;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  thickness=random(22,83);
 bullet= createSprite(50, 200, thickness, 50);
 wall=createSprite(700,200,50,50);
 speed=random(55,90);
 weight=random(400,1500);
 
bullet.velocityX=speed
}

function draw() {
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage =0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red";
      
    }
    else{
      wall.shapeColor="green";
    }
  }
  
  drawSprites();
}
function hasCollided(obj1,obj2){
  bulletR=obj1.x+obj1.width;
  wallL=obj2.x;
  if(bulletR>=wallL){
    return true;
  }
  else{
    return false;
  }
}
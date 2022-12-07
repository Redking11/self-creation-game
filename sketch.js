var space,spaceImg
var player,playerImg
var enemy1,enemy2,enemy3
var enemy1Img,enemy2Img,enemy3Img
var enemy1g,enemy2g,enemy3g
var laserg
var score=0


function preload(){
spaceImg = loadImage("space10.png")
playerImg = loadImage('enemy40.png') 
enemy1Img = loadImage("enemy10.png")
enemy2Img = loadImage("enemy20.png")
enemy3Img = loadImage("enemy30.png")
}


function setup(){
  createCanvas(400,400)  
 space = createSprite(200,200,400,400)
  space.addImage('space',spaceImg)
  space.velocityY=4
  space.scale =2.9
  
  player = createSprite(200,350,25,25)
  player.addImage("player",playerImg)
  
  enemy1g=new Group()
  enemy2g= new Group()
  enemy3g=new Group()
  laserg=new Group()
}

function draw(){
  
  background("white")
 if(space.y>600){
 space.y=200  
   
    }
  
  player.x=mouseX
 //player.y=mouseY
 
  var selectenemy=Math.round(random(1,3))
  if(frameCount%70===0){
    switch(selectenemy){
      case 1:foe1()
        break
        case 2:foe2()
        break
        
        case 3:foe3()
        break
    }
 
  }
     if(keyDown("space")){
     createLaser()
     }
    if(laserg.isTouching(enemy1g)){
laserg.destroyEach()
enemy1g.destroyEach() 
score=score+1      
     }
    else if(laserg.isTouching(enemy2g)){
  laserg.destroyEach()
  enemy2g.destroyEach()    
     score=score+1         
            }
      else if(laserg.isTouching(enemy3g)){
  laserg.destroyEach()
  enemy3g.destroyEach()
  score=score+1  
      } 
  drawSprites()
  text(score,20,20)
}
function foe1(){
  enemy1=createSprite(random(50,350),1,20,20)
  
  enemy1.addImage("enemy1",enemy1Img)
  enemy1.velocityY=3
  enemy1g.add(enemy1)
}
function foe2(){
  enemy2 = createSprite(random(50,350),1,20,20)
  enemy2.velocityY=3
  enemy2.addImage("enemy2",enemy2Img)
  enemy2g.add(enemy2)
}

function foe3(){
  enemy3 = createSprite(random(50,350),1,20,20)
  enemy3.velocityY=3
  enemy3.addImage("enemy3",enemy3Img)
  enemy3g.add(enemy3)
}
function createLaser (){
var laser = createSprite(player.x,player.y,2,7)
laser.shapeColor="red"
laser.velocityY=-5
  laserg.add(laser)
}

var gameBoard
var iron_img,hat_img,ship_img,dog_img,players
var community_chest,chance
var dice,dice1,dice2,dice3,dice4,dice5,dice6
var chance =1
function preload(){
  gameBoard = loadImage("images/monopolyboard.jpg")
 iron_img = loadImage("images/player1.png")
  hat_img = loadImage("images/player2.png")
  ship_img = loadImage("images/player3.png")
  dog_img = loadImage("images/player4.png")
  dice1 = loadImage("images/dice1.jpg")
  dice2 = loadImage("images/dice2.png")
  dice3 = loadImage("images/dice3.png")
  dice4 = loadImage("images/dice4.png")
  dice5 = loadImage("images/dice5.png")
  dice6 = loadImage("images/dice6.png")
}

function setup(){
    canvas = createCanvas(windowWidth-20,windowHeight-20);
    database = firebase.database();
   iron = createSprite(width-40,height-25);
   iron.addImage(iron_img)
   iron.scale=0.25
    hat = createSprite(width-40,height-80);
    hat.addImage(hat_img)
    hat.scale=0.25
    ship = createSprite(width-130,height-80);
    ship.addImage(ship_img)
    ship.scale=0.15
    dog = createSprite(width-130,height-25);
    dog.addImage(dog_img)
    dog.scale=0.13

    players=[iron,hat.ship,dog]
    
   dice = createSprite(width/2+200,height/2+80);
  dice.scale = 0.2;
  dice.addImage(dice1) 



}
  


function draw(){
  background(gameBoard)
  if(keyWentDown( "space")){
    rand = Math.round(random(1,6));
   switch(rand){
     case 1: dice.addImage(dice1)
     break ;
     case 2: dice.addImage(dice2)
     break ;
     case 3: dice.addImage(dice3)
     break ;
     case 4: dice.addImage(dice4)
     break ;
     case 5: dice.addImage(dice5)
     break ;
     case 6: dice.addImage(dice6)
     break ;
   }
   chance++
   if(chance>4){
     chance=1
   }
   switch(chance){
     case 1:
   }
  } 
  if(mousePressed){
    console.log(mouseX,mouseY)
    }  


  drawSprites();
  textAlign(CENTER)
  textSize(30)
  fill(0)
  text("Press Space to Roll the Dice",width/2+30,200);

}

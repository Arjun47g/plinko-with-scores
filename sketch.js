const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var plinkos = []
var ball;
var PLAY = 1;
var END = 0;
var gameState = 1;

var count = 0;

var score = 0;


function setup() {
  createCanvas(405,505);
  
  engine = Engine.create();
  world = engine.world;


   ground = new Ground(200, 497.5, 400, 5);
   ground2 = new Ground(200, 502.5, 400, 5);
   ground3 = new Ground(2.5, 252.5, 5, 505);
   ground4 = new Ground(402.5, 252.5, 5, 505);

   wall1 = new Wall(2.5, 420, 5, 170);
   wall2 = new Wall(50, 420, 5,  170);
   wall3 = new Wall(100, 420, 5,  170);
   wall4 = new Wall(150, 420, 5,  170);
   wall5 = new Wall(200, 420, 5,  170);
   wall6 = new Wall(250, 420, 5,  170);
   wall7 = new Wall(300, 420, 5,  170);
   wall8 = new Wall(350, 420, 5,  170);
   wall9 = new Wall(397.5, 420, 5,  170);
   
   for (var i = 20; i < 400; i+=40) {
     plinkos.push(new Plinko(i, 75));

   }

   for (var i = 40; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 125));

  }

  for (var i = 20; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 175));

  }

  for (var i = 40; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 225));

  }

  for (var i = 20; i < 400; i+=40) {
    plinkos.push(new Plinko(i, 275));

  }
   
}

function draw() {
  background(0);
  
  
  Engine.update(engine);
  
  text(mouseX + " , " + mouseY, mouseX, mouseY);
  
 


  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  
  textSize(20);
  text("500", 210, 380 );
  text("500", 160, 380 );
  text("200", 110, 380 );
  text("200", 260, 380 );
  text("100", 60, 380 );
  text("100", 310, 380 );
  text("50", 10, 380 );
  text("50", 360, 380 );
  text("Score : " + score, 30, 50);

  for (i = 0; i < plinkos.length; i++) {
    plinkos[i].display();
  }



 

  

  if(ball!= null){
   ball.display();
    
     if(ball.body.position.y > 400){
      
       if(ball.body.position.x < 51 || ball.body.position.x >  349 ){
             
        score = score + 50
           
             if (count >= 5){
               gameState = 0;
             }
       }
         
      if((ball.body.position.x < 101 && ball.body.position.x > 51) || (ball.body.position.x < 349 && ball.body.position.x > 300)){
          
        
        score = score + 100
           
            if (count >= 5){
              gameState = 0;
            }
      }   
      
      if((ball.body.position.x < 150 && ball.body.position.x >  99) || (ball.body.position.x < 299 && ball.body.position.x >  250)){
           
        score = score + 200
          
            if (count >= 5){
              gameState = 0;
            }
      }
          
      if(ball.body.position.x < 250 && ball.body.position.x >  150){
           
        score = score + 500
          
            if (count >= 5){
              gameState = 0;
            }
      }
      
      ball = null;

    }
    

  }
    
  
}

function mousePressed () {
if (gameState !== 0){
  count++
   ball = null;
  ball = new Ball(mouseX, 10, 10);
}


}




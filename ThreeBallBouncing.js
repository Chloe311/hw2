var ballX1;
var ballX2;
var ballX3;

var ballY1;
var ballY2;
var ballY3;

var ballXSpeed;
var ballXSpeed2;
var ballXSpeed3;

var ballYSpeed;
var ballYSpeed2;
var ballYSpeed3;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

ballX1 = ballX2 = ballX3 = 0;//start at the top left
ballY1 = ballY2 = ballY3 = 0;

ballXSpeed = ballYSpeed = 3;  
ballXSpeed2 = ballYSpeed2 = 5;
ballXSpeed3 = ballYSpeed3 = 7;

function draw() {
  background(220); 
  ellipse(ballX1,ballY2,60); 
  ellipse(ballX2,ballY2,60);
  ellipse(ballX3,ballY3,60);
  
  fill(0,125,125);
  ballX1 += ballXSpeed;
  ballX2 += ballXSpeed2;
  ballX3 += ballXSpeed3;
  
  ballY1 += ballYSpeed;
  ballY2 += ballYSpeed2;
  ballY3 += ballYSpeed3;
  
  //ball1 bouncing
  if(ballX1 >= width){
    ballXSpeed = -2;
  }
  
  if(ballX1 <= 0){
    ballXSpeed *=  -1; 
  }
  
  if(ballY1 >= height){
    ballYSpeed = -3;
  }
  
  if(ballY1 <= 0){
    ballYSpeed *= -1;
  }
  
  //ball2 bouncing
  if(ballX2 >= width){
    ballXSpeed2 = -4;
  }
  
  if(ballX2 <= 0){
    ballXSpeed2 *= -1; 
  }
  
  if(ballY2 >= height){
    ballYSpeed2 = -5;
  }
  
  if(ballY2 <= 0){
    ballYSpeed2 *= -1;
  }
  
  //ball3 bouncing
  if(ballX3 >= width){
    ballXSpeed3 = -6;
  }
  
  if(ballX3 <= 0){
    ballXSpeed3 *= -1; 
  }

  if(ballY3 >= height){
    ballYSpeed3 = -7;
  }
  
  if(ballY3 <= 0){
    ballYSpeed3 *= -1;
  }
  
}

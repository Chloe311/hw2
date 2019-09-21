//random color 
//https://editor.p5js.org/aferriss/sketches/rJf3luXdG
var ballYColorR;
var ballYColorG;
var ballYColorB;

function setup() {
  createCanvas(400, 400);
  noStroke();
}


var ballY = 0;
var ballSpeed = 3;

var ballY2 = 400;
var ballSpeed2 = 5;


function draw() {
  background(220);

  //slow down random color generation rate  
  //https://stackoverflow.com/questions/51107790/how-can-i-slow-down-the-random-generation-rate
  if(frameCount % 12 == 0){
    ballYColorR = random(255);
    ballYColorG = random(255);
    ballYColorB = random(255);
  }
  
  fill(ballYColorR,ballYColorG,ballYColorB);
  ellipse(100, ballY, ballY);//ball1
  
  fill(ballYColorR,ballYColorG,ballYColorB);
  ellipse(300, ballY2, ballY);//ball2

  ballY = ballY + ballSpeed;
  ballY2 = ballY2 + ballSpeed2;

  if (ballY >= 400) {
    ballSpeed = -3;
  }

  if (ballY2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballY <= 0) {
    ballSpeed = 3;
  }

  if (ballY2 <= 0) {
    ballSpeed2 = 5;
  }
 
}

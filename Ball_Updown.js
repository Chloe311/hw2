function setup() {
  createCanvas(400, 400);
  noStroke();
}

var ballY = 50;
var ballSpeed = 3;

var ballY2 = 70;
var ballSpeed2 = 5;

function draw() {
  background(220);

  fill(0,125,125);
  ellipse(100, ballY, 50);
  
  ellipse(300, ballY2, 50);

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

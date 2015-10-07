var Ball = function() {
  this.x = random(width);
  this.y = random(height);
  this.speedX = random(-1,1);
  this.speedY = random(-1,1);

  this.diameter = random(20,50);
}

var balls = [];



function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {

  background(0);
  
  for (var i = 0; i < balls.length; i++) {
    ellipse(balls[i].x, balls[i].y, balls[i].diameter, balls[i].diameter);
    balls[i].x = balls[i].x + balls[i].speedX;
    balls[i].y = balls[i].y + balls[i].speedY;

  }

  if (frameCount%15 == 0 && balls.length < 10000) {
  balls.push(new Ball());
  }


}

function mousePressed() {
  balls.push( new Ball() );
}
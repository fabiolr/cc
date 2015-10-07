var xPoints = [];
var yPoints = []; 
var sizes = [];
var s = .5;
var DisplaySpeed = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  for (var i = 0; i < windowWidth/2; i++) {

// creates array of random locations for stars

    xPoints.push(random(-100,windowWidth));
    yPoints.push(random(windowHeight));
    sizes.push(random(1,4)); // random sizes, cool!

  }

}

function draw() {

  background(0);


// draws stars

  for (var i = 0; i < xPoints.length; i++) {
    stroke(255);
    ellipse(xPoints[i], yPoints[i], sizes[i], sizes[i]);
    xPoints[i] = xPoints[i] + s;
    if (xPoints[i] > windowWidth) {
      xPoints[i] = -100;
    }
  }

  // checks if needs to display speed, and does so
  
      if (DisplaySpeed > 0) {
      textSize(15);
      noStroke();
      fill(255);
      text("Speed: " + s.toFixed(2),windowWidth-100,windowHeight - 20);
      DisplaySpeed = DisplaySpeed - 1;  // counts down the speed display
    }


}


// Changes speed in 10% on arrows and reset speed dusplay counter

function keyPressed() {
  if (keyCode == UP_ARROW) {
    s = s * 1.1;
    DisplaySpeed = 25;

  } else if (keyCode == DOWN_ARROW) {
    s = s * .9;
    DisplaySpeed = 25;

  }
  return false; 
}


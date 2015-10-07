var xPoints = [];
var yPoints = []

function setup() {
  createCanvas(windowWidth, windowHeight); 
  
  for (var i = 0; 1 < 1000, i++) {
    xPoints.push(random(windowWidth));
    yPoints.push(random(windowHeight));

  }

}

function draw() {

  background(0);


  for (var i = 0; i < xPoints.length; i++) {

    stroke(255);
    ellipse(xPoints[i], yPoints[i], 2, 2);

  }

}


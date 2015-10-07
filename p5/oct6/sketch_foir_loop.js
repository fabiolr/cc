var dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 

  for (var i = 0; i < 10; i++) {
    dots.push(random(10,50));
  }

}

function draw() {

  background(0);
  noFill();
  stroke(255,0,0);
  var tenth = height/10;

strokeWeight(0);
textSize(12);
textStyle(NORMAL);
text("Font Style Normal", 10, 30);
  for (var i = 0; i < dots.length; i++) {
    ellipse(width/2, i * tenth, dots[i], dots[i]);
  }

}
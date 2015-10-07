var startColor;
var endColor;
var counter;
var bgColor;
var y = 0;
var ySpeed = 1;
var move;
var goY;

function setup() {
   	createCanvas(windowWidth, windowHeight);
background(200);
}

function draw() {

  if (move = 1) {
    Girl(mouseX,goY);
    goY = goY + 1;
     //background(200);

  }


}

function keyPressed() {
  var move = 0;
  background(200);


}
function mousePressed() {
Girl(mouseX,mouseY);
goY = mouseY;
var move = 1;
}

function mouseDragged() {
	ySpeed = ySpeed * 1.01;
}

function Girl(X,Y) {
	   background(200);
    fill(255);
  	noStroke();
  	rect(X-20,Y+30,10,40);
  	rect(X+10,Y+30,10,40);
  	rect(X-50,Y-25,100,10);
  	ellipse(X,Y-60,45,45);
  	triangle(X,Y-50,X+40,Y+30,X-40,Y+30);
  	stroke(200);
  	strokeWeight(3);
  	arc(X,Y-57,20,20,QUARTER_PI, PI- QUARTER_PI);
  	ellipse(X-10,Y-63,5,5);
    ellipse(X+10,Y-63,5,5);
    noFill();
    stroke(100);
    bezier(X-15, Y-45, X-45, Y-93, X+45, Y-93 , X+15, Y-45);
	}

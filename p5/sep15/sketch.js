var x;
var y;
var easing;
var follower;
var happy;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	easing = .05;
	x = width/2;
	y = height/2;
	happy = 0;
	follower = 1;
}

function draw() {
	
	background(255);
	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;
	x = x + eX;
	y = y + eY;

	if (dist(mouseX,mouseY,x,y) < 10) {
		happy = 1;
		} else {
		happy = 0;
	}

		Girl(x, y, happy);

}

function mousePressed() {

if (follower) {

	follower = 0;
	easing = 0;
}
	else {
	follower = 1;
	easing = 0.05;
	}

}


function Girl(X,Y,smile) {
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
  	ellipse(X-8,Y-63,5,5);
    ellipse(X+8,Y-63,5,5);
    noFill();
    stroke(100);
    bezier(X-15, Y-45, X-45, Y-93, X+45, Y-93 , X+15, Y-45);
    if (smile) {
  	arc(X,Y-57,20,20,QUARTER_PI, PI- QUARTER_PI);
  	} else { 
  	line(X-5,Y-49,X+5,Y-50);
  	}

  	

	}



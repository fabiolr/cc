var x;
var y;
var easing;
var flying = false;

// Run at the beginning of the sketch
function setup() {
	createCanvas(windowWidth, windowHeight);
	
    easing = .05;
    x = width/2;
    y = height/2;
    
}

// Runs 60 times/sec
function draw() {
    console.log("MouseX: " + mouseX + " MouseY:" + mouseY);
    
//    background(127); // grey
    
    houseDraw(); // Draw house at mouse coordinates
    
}

function houseDraw() {
    // if house raises above center canvas then, house changes color
    
    if(mouseY < windowHeight / 2) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);  
    }
    
    if (mouseX > windowWidth/2) {
        background(0);
    } else {
        background(255);
    }
    
    
    rect(x, y, 50, 50);
    triangle(x-10, y, x+25, y-20, x+60, y);
    
	var eX = (mouseX - x) * easing;
	var eY = (mouseY - y) * easing;
    x = x + eX;
    y = y + eY;
    
  }

var vib;
var speedSlider;
var cs;
var cc;
var vv;
var decay;

// defines class, all particle attribures are remebered for each particle.

var Particle = function(x, y, ss, cc) {
	this.x = x;
	this.y = y;
	this.diameter = random(5,10);
	this.speedFall = 1;
	this.speedVibrate = 4;
	this.speedShoot = ss;
	this.directionX = random(-1,1);
	this.directionY = this.speedShoot - this.directionX;
	this.Xinverter = 1;
	this.Yinverter = 1;
	this.Color = cc;
	this.toVib = false;
	this.toDecay = false;

	this.create = function() {
							fill(cc);
							ellipse(this.x, this.y, this.diameter, this.diameter);
							}
	this.fall = function() {
							if (this.toDecay == true) {
								this.y = this.y + this.speedFall;
								}
							}

	this.vibrate = function() {
							if (this.toVib == true) {
								this.y = this.y + random(-1,1)*this.speedVibrate;
								this.x = this.x + random(-1,1)*this.speedVibrate;
								}
							}
	this.shoot = function() {

							this.y = this.y + (this.directionY * this.Yinverter);
							if (this.y < 0 || this.y > windowHeight) {this.Yinverter = this.Yinverter * -1}
							this.x = this.x + (this.directionX * this.Xinverter);
							if (this.x < 0 || this.x > windowWidth) {this.Xinverter = this.Xinverter * -1}

							}


}

var particles = [];


function setup() {
  createCanvas(windowWidth, windowHeight); 
  fill(100);

  // set up controls

  speedSlider = createSlider(1,10);
  colorSlider = createSlider(0,255);
  speedSlider.position(30,20);
  colorSlider.position(30,50);
  vib = createCheckbox();
  vib.position(80,80);
  vib.attribute("type","checkbox");
  vib.attribute('checked', null);  
  decay = createCheckbox();
  decay.position(100,80);
  decay.attribute("type","checkbox");
  decay.attribute('checked', null);  




}

function draw() {

  background(30);

// grabs controls values
  	
  	cs = speedSlider.value(); 
  	cc = colorSlider.value();
  	vv = vib.value();
  	dc = decay.value();

  	text("S",15,32); 
 	text("C",15,62);
 	text("Decay",125,93);
 	textAlign(RIGHT);
 	text("Vibrate",70,93);




// runs for each particle in array

  for (var i = 0; i < particles.length; i++) {
  	particles[i].speedShoot = cs;
  	if (vib.elt.checked) {  
  		particles[i].toVib = true;
  	}
  	if (decay.elt.checked) {  
  		particles[i].toDecay = true;
  	}

  	// calls methods to do stuff with particles

  	particles[i].create(); // creates particle
  	particles[i].fall();  // methos fall so particle does not stay in canvas forever
	particles[i].vibrate();  // method to vibrate particle
	particles[i].shoot(); // methos to move particle around
  }

}

// pressing the mouse will create a new particle where mouse is


function mousePressed() {
	particles.push( new Particle(mouseX, mouseY, cs, cc) );
}



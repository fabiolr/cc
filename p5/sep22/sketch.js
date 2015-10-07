var x;
var y;
var easing;
var follower;
var happy;
var PurseX;
var PurseY;
var PossibleX = [];
var PossibleY = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    easing = .05;
    x = width/2;
    y = height/2;
    happy = 0;
    follower = 1;
    PossibleX = [(windowWidth * .1),(windowWidth * .2),(windowWidth * .3),(windowWidth * .4),(windowWidth * .5),(windowWidth * .6),(windowWidth * .7),(windowWidth * .8),(windowWidth * .9)];
    PossibleY = [(windowHeight * .1),(windowHeight * .2),(windowHeight * .3),(windowHeight * .4),(windowHeight * .5),(windowHeight * .6),(windowHeight * .7),(windowHeight * .8),(windowHeight * .9)];
    PurseX = PossibleX[int(random(PossibleX.length))];
    PurseY = PossibleY[int(random(PossibleY.length))];

}

function draw() {
    
    background(255);
    var eX = (PurseX - x) * easing;
    var eY = (PurseY - y) * easing;
    x = x + eX;
    y = y + eY;

    if (dist(PurseX,PurseY,x,y) < 10) {
        happy = 1;
        } else {
        happy = 0;
    }  

    Girl(x, y, happy);
    Purse(PurseX,PurseY);

    text("Purse Address: " + int(PurseX) + ", " + int(PurseY),40,40);
    text("Distance: " + int(dist(PurseX,PurseY,x,y)), 40, 60);

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

function keyPressed() {

    PurseX = PossibleX[int(random(PossibleX.length))];
    PurseY = PossibleY[int(random(PossibleY.length))];

}

function Purse(px,py) {


        fill(255);
        ellipse(px+45,py-3,20,20)
        quad(px+30,py+10,px+60,py+10,px+80,py+50,px+10,py+50);


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



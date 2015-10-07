function setup() {
 createCanvas(600,600);
}

function draw() {
        var x = 0;
        var y = 0;
  for (i=0; i <= width; i++){
    background(255,69,0);
    line (0,0,width,height);
    fill(0,191,255);
    ellipse(x, y, 120, 120);
    x++;
    y++;
 }
}
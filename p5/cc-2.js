        // Code by @fabiolr //
        // var CanvasWidth = 700;
        // var CanvasHeight = 50;
        // var Shades = 255;


function MakeGradient(CanvasWidth,CanvasHeight,Shades) {
    

    function setup() {
    createCanvas(CanvasWidth, CanvasHeight);
    }
    function draw() {
        noStroke()
        var StartX = 5;
        var StartY = 5;
        var Width = (CanvasWidth-(2*StartY))/Shades;
        var Height = CanvasHeight;
        var r = 255;
        var b = 0;
        var i = 255/Shades; 
        for (l = 1; l <= Shades; l++) { 
            EndX = StartX + Width;
            fill(r-l*i,0,b+l*i)
            quad (StartX,StartY,EndX,StartY,EndX,Height,StartX,Height)
            StartX = StartX + Width;
            } 
        
    }
    
}


   MakeGradient(700,60,155);

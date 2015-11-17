function setup(){
  angleMode(DEGREES);
  canvas = createCanvas(1000, 700);
  canvas.id("drawing");
  frameRate(4);
 
}

function draw() {
  background(50);
  noStroke();
  fill(245);
  for(var i=0; i<100; i++) {
    for(var j=0; j<40; j++) {
      ellipse(random(400,600),random(i*10-50,i*10+50), random(10*i+40), 0.5);
    }          
  }  
}
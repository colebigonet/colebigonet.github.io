function setup() {
  canvas = createCanvas(1000,700);
  canvas.id("drawing");
  angleMode(DEGREES);
}

function draw() {
  for(var i=1; i<20; i++) {
    ellipse(50*i, 300+20*sin(100*i+frameCount), 40, 40);
  }
}
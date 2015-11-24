function square(cx,cy,side, cornerradius){
  rect(cx-side/2, cy-side/2, side, side, cornerradius);
}

function setup() {
  createCanvas(700,700);
  frameRate(12);
}

function draw() {
  noFill();
  clear();
  background(0);
  stroke(255);
  for(var i=1; i<101; i++) {
    rotate(45);
    //square(width/2, height/2, pow(frameCount%(i),1.5));
    ellipse(width/2, height/2, pow(frameCount%(i), 1.5), pow(frameCount%(i), 1.5));
    //square(width/2, height/2, pow(i%3,frameCount%(i/5)));
  }
}
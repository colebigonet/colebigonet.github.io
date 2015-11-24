function square(cx,cy,side, cornerradius){
  rect(cx-side/2, cy-side/2, side, side, cornerradius);
}

function setup() {
  createCanvas(700,700);
  frameRate(20);
}

function draw() {
  noFill();
  clear();
  for(var i=1; i<101; i++) {

    square(width/2, height/2, pow(frameCount%(i),1.5));
    //square(width/2, height/2, pow(i%3,frameCount%(i/5)));
  }
} 
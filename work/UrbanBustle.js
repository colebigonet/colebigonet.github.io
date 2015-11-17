var circles = [];
function generateCircles(n, maxRadius) {
  for(var i=1; i<=n; i++) {
    var x = floor(random(0,width/maxRadius))*maxRadius + maxRadius/2;
    var y = floor(random(0,width/maxRadius))*maxRadius + maxRadius/2;
    var r = random(maxRadius);
    circles.push({cx: x, cy: y, r: r});
    ellipse(x,y,r,r);
  }
}

function setup(){
  canvas = createCanvas(1000, 700);
  canvas.id("drawing");
  background(0);
  generateCircles(500, 10);
  angleMode(DEGREES);
 /* for(var i=0; i<circles.length; i++) {
    if(i%2 == 0) {
      fill('red');
    }
    else {
      noFill();
    }
    ellipse(circles[i].cx, circles[i].cy, circles[i].r, circles[i].r)
  } */
}

function draw() {
  //clear();
  //background(0);
  for(var i=0; i<circles.length; i++) { 
    ellipse(circles[i].cx+20*sin(i+random(frameCount)), 
            circles[i].cy+20*sin(i-random(frameCount)), 
            circles[i].r*sin(frameCount), 
            circles[i].r*sin(frameCount));
  }
}
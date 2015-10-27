function setup() {
  createCanvas(displayWidth, displayHeight);
  console.log(displayWidth);
  angleMode(DEGREES);
}

function draw() {
  clear();
  var numcircles = 360;
  for(var i=1; i<numcircles+1; i++) {
    var cx1 = 8*i;
    var cy1 = 300+100*sin(10*i*pow(-1, i)+frameCount);
    ellipse(cx1, cy1, 5, 5);
    strokeWeight(2);
    fill(10);
    if(i !== 1 && i !== numcircles-1 && i%2 === 0) {
      var cx2 = 8*(i+1);
      var cy2 = 300+100*sin(10*(i+1)*pow(-1, i+1)+frameCount);
      line(cx1,cy1,cx2,cy2);
      cx2 = 8*(i+2);
      cy2 = 300+100*sin(10*(i+2)+frameCount);
      line(cx1,cy1,cx2,cy2);
    }
    else if(i!== numcircles && i%2 === 1) {
      var cx2 = 8*(i+2);
      var cy2 = 300+100*sin(10*(i+2)*pow(-1, i+2)+frameCount);
      line(cx1,cy1,cx2,cy2);
    }
  }
}
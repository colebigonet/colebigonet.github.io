var HEIGHT = 360;
var WIDTH = 640;
var canvas = document.querySelector('canvas');
var drawContext = canvas.getContext('2d');
canvas.width = WIDTH;
canvas.height = HEIGHT;

var audio = new Audio();
//audio.crossOrigin = "anonymous";
audio.src = 'audio/Little Cello - Cole Bigonet.mp3';
audio.controls = false;
audio.autoplay = true;
document.body.appendChild(audio);

var context = new AudioContext();
var analyser = context.createAnalyser();

// Wait for window.onload to fire. See crbug.com/112368
window.addEventListener('load', function(e) {
  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.fftSize = 2048;
  /*drawContext.beginPath();
  drawContext.arc(WIDTH/2, HEIGHT/2, 50, 0, 2 * Math.PI, false);
  drawContext.fill();*/

  var sample = function(timestamp) {
    var bufferLength = analyser.frequencyBinCount;
    var dataArray = new Uint8Array(bufferLength);
    analyser.getByteTimeDomainData(dataArray);
    drawContext.clearRect(0, 0, WIDTH, HEIGHT);
    /*drawContext.beginPath();
  drawContext.arc(WIDTH/2, HEIGHT/2-10, 100, 0, 2 * Math.PI, false);
  drawContext.fillStyle = '#eeeeee';
        drawContext.fill();*/
      drawContext.beginPath();
        drawContext.arc(WIDTH/2, HEIGHT/2-10, 100, 0, 2 * Math.PI, false);
        //drawContext.fillStyle = '#c6c6c6';
        var b = Math.floor(255*Math.random());
        //console.log(b);
        drawContext.fillStyle = "rgba(232,166," + b + ",1)";
        drawContext.fill();    
    //test code:
    for(var string=0; string<4; string++){
      for (var i = 0; i < analyser.frequencyBinCount; i++) {
        var value = dataArray[i];
        var percent = value / 256;
        var height = HEIGHT * percent;
        var offset = HEIGHT - height - 1;
        var barWidth = WIDTH/analyser.frequencyBinCount;
        drawContext.fillStyle = 'black';
        drawContext.fillRect(i * barWidth, 30*string+offset-50, 1, 1);

        /*drawContext.beginPath();
        drawContext.arc(WIDTH/2, HEIGHT/2-10, 100, 0, 2 * Math.PI, false);
        //drawContext.fillStyle = '#c6c6c6';
        var b = Math.floor(255*Math.random());
        //console.log(b);
        drawContext.fillStyle = "rgba(232,166," + b + ",0.2)";
        drawContext.fill();*/
      }
    }  
    window.requestAnimationFrame(sample);
   }
  window.requestAnimationFrame(sample);
  //console.log(dataArray);
  analyser.connect(context.destination);

  // ...call requestAnimationFrame() and render the analyser's output to canvas.
}, false);
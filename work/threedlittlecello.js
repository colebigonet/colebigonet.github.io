window.addEventListener('load', function(e) {

    var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 500 );

  var renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );   

  //audio setup
  var audio = new Audio();
  //audio.crossOrigin = "anonymous";
  audio.src = 'audio/Little Cello - Cole Bigonet.mp3';
  audio.controls = false;
  audio.autoplay = true;
  document.body.appendChild(audio);

  var context = new AudioContext();
  var analyser = context.createAnalyser();

  camera.position.y = 5;
  camera.lookAt(new THREE.Vector3(0, 0, 1));

  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  //scene.add( light );

  var plight1 = new THREE.PointLight( 0xffffff, 1, 100 );
  light.position.set( 20, 20, 20 );
  //scene.add( plight1 );

  var hlight = new THREE.HemisphereLight( 0xf22fbb, 0x080820, 1 );
  //scene.add( hlight );

  var framecount = 1;

  var circles = [];

  for(var c = 0; c<20; c++) {
    //var geometry = new THREE.CircleGeometry( 2, 64 );
    //var geometry = new THREE.CircleGeometry( 1+c/10, 64 );
    var geometry = new THREE.CircleGeometry( 0.1+Math.random(), 64 );
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var material = new THREE.MeshBasicMaterial( { color: color, side: THREE.DoubleSide } );
    var circle = new THREE.Mesh( geometry, material );
    circle.position.z = c/10+0.1;
    circles.push(circle);
    scene.add( circle ); 
  }

  /*controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false; */

  var render = function () {
    requestAnimationFrame( render );


    //start sampling
      var bufferLength = analyser.frequencyBinCount;
      var dataArray = new Uint8Array(bufferLength);
      analyser.getByteTimeDomainData(dataArray);

    /*  for (var i = 0; i < analyser.frequencyBinCount; i++) {
        for(var circle=0; circle<circles.length; circle++){
          var value = dataArray[i];
          circles[circle].scale.x=value/128;
          circles[circle].scale.y=value/128; */

      for(var circle=0; circle<circles.length; circle++){
        for (var i = 0; i < analyser.frequencyBinCount; i++) {

          var value = dataArray[i];
          circles[circle].scale.x=value/64;
          circles[circle].scale.y=value/64; 
          //var percent = value / 256;

          /*var value = dataArray[i];
          var percent = value / 256;
          var height = HEIGHT * percent;
          var offset = HEIGHT - height - 1;
          var barWidth = WIDTH/analyser.frequencyBinCount;
          drawContext.fillStyle = 'black';
          drawContext.fillRect(i * barWidth, 30*string+offset-50, 1, 1);*/
        }
      }  


   /* for(var circle=0; circle<circles.length; circle++) {
      scale = Math.random();
      circles[circle].scale.x=scale;
      circles[circle].scale.y=scale;
    } */

    camera.position.x=1*Math.cos(framecount/180);
    camera.position.z=1*Math.sin(framecount/180);

    renderer.render(scene, camera);
    framecount++;
  };

  // Our <audio> element will be the audio source.
  var source = context.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.fftSize = 2048;

  analyser.connect(context.destination);

  render();

}, false);
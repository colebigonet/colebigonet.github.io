var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
            
var cubesgrid = []; 
for(var x=0; x<5; x+=0.5) {
    var cubesrow = [];
    for(var z=0; z<5; z+=0.5) {
        var geometry = new THREE.BoxGeometry( 0.5, 0.5, 0.5 );
	    var material = new THREE.MeshLambertMaterial( 
          { 
            color: 0x00ff00, 
            wireframe: false 
           });
		var cube = new THREE.Mesh( geometry, material );
        cube.position.x = x;
        cube.position.z = z;
        cubesrow.push(cube);
	    scene.add( cube );
     }
     cubesgrid.push(cubesrow);
}
            

camera.position.x = -0.5;
camera.position.z = 6;
camera.position.y = 3;
camera.lookAt(new THREE.Vector3( 2, 0, 2 ));

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

var plight1 = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 20, 20, 20 );
scene.add( plight1 );

var hlight = new THREE.HemisphereLight( 0xf22fbb, 0x080820, 1 );
scene.add( hlight );

var framecount = 1;

var render = function () {
  requestAnimationFrame( render );
  for(var z=0; z<10; z++) {
    for(var x=0; x<10; x++) {
      cubesgrid[z][x].position.y = 1+Math.sin(x/5+z/5+framecount/40);
    }
  }  
  //cubesgrid[5][5].position.y = 1+Math.sin(framecount/100);

  renderer.render(scene, camera);
  framecount++;
};

render();
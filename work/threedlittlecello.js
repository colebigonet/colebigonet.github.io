//TO DO: put circle drawing a in a separate function and animate it.

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 500 );

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );   


/*camera.position.x = -0.5;
camera.position.z = 6;
camera.position.y = 3;
camera.lookAt(new THREE.Vector3( 2, 0, 2 )); */

camera.position.z = 5;

var light = new THREE.AmbientLight( 0x404040 ); // soft white light
//scene.add( light );

var plight1 = new THREE.PointLight( 0xffffff, 1, 100 );
light.position.set( 20, 20, 20 );
//scene.add( plight1 );

var hlight = new THREE.HemisphereLight( 0xf22fbb, 0x080820, 1 );
//scene.add( hlight );

var framecount = 1;

var geometry1 = new THREE.CircleGeometry( 2, 64 );
//geometry1.position.z = 0.1;
var material1 = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.DoubleSide } );
var circle1 = new THREE.Mesh( geometry1, material1 );
scene.add( circle1 ); 

//add another circle for testing purposes, later add for loop:
var geometry2 = new THREE.CircleGeometry( 2, 64 );
var material2 = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var circle2 = new THREE.Mesh( geometry2, material2 );

scene.add( circle2 ); 

var render = function () {
  requestAnimationFrame( render );

  //cubesgrid[5][5].position.y = 1+Math.sin(framecount/100);


  circle1.rotation.y += Math.PI/180;
  circle2.rotation.y += Math.PI/180;

  //camera.position.y+=0.1;
  //camera.position.x+=0.1;

  //camera.lookAt(new THREE.Vector3( 0, 0, 0 ));

  renderer.render(scene, camera);
  framecount++;
};

render();
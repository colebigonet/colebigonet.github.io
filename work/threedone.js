var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//lights
var directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.9 );
directionalLight1.position.set( 0, 1, 1 );
scene.add( directionalLight1 );

var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.9 );
directionalLight2.position.set( 0, -1, 1 );
scene.add( directionalLight2 );

camera.position.z = 5;

var render = function () {
	requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	//cube.rotation.z += 0.1;

	camera.position.z+=();

	renderer.render(scene, camera);
};

render();
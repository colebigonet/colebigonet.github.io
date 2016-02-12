    var scene, camera, renderer;
    var geometry, material, mesh;

    init();
    animate();

    function init() {

        scene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        camera.position.z = 1000;
      
        v = new THREE.Vector3( 0, 0, 0 );
        camera.lookAt(v);
       

        geometry = new THREE.TorusKnotGeometry(300, 60, 100);
        material = new THREE.MeshPhongMaterial({wireframe: false });

        mesh = new THREE.Mesh( geometry, material );
        scene.add( mesh );
      
        var directionalLight1 = new THREE.DirectionalLight( 0xffffaa, 0.9 );
        directionalLight1.position.set( 0, 1, 0 );
        scene.add( directionalLight1 );
    

        renderer = new THREE.WebGLRenderer({ alpha: false });
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

    }

    function animate() {
        requestAnimationFrame( animate );
        mesh.rotation.y+=0.01;
        renderer.render( scene, camera );

    }
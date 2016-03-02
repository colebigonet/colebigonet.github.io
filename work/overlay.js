var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

			//var geometry = new THREE.SphereGeometry(2, 32, 32);
			var loader = new THREE.TextureLoader();
				loader.load( 'img/overlay.jpg', function ( texture ) {
					console.log("texture: ", texture);
					var geometry = new THREE.SphereGeometry( 2, 32, 32 );

					var material = new THREE.MeshBasicMaterial( { map: texture, overdraw: 0 } );
					var mesh = new THREE.Mesh( geometry, material );
					scene.add( mesh );

				} );

			var directionalLight1 = new THREE.DirectionalLight( 0xffffaa, 0.9 );
        directionalLight1.position.set( 0, 4, 0 );
        scene.add( directionalLight1 );	
			//var material = new THREE.MeshPhongMaterial( { map: loader.load('img/overlay.jpg') } );
			//var sphere = new THREE.Mesh( geometry, material );
			//scene.add( sphere );


			camera.position.z = 5;

			var render = function () {
				requestAnimationFrame( render );


				renderer.render(scene, camera);
			};
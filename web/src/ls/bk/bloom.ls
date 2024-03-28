{animate, controls, renderer, camera, scene, w, h} = init!

camera.position.set 1, 1, 1
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0x222222
renderer.toneMapping = THREE.ReinhardToneMapping

geom = new THREE.IcosahedronGeometry 3, 3
wireframe = new THREE.WireframeGeometry geom
line = new THREE.LineSegments wireframe
line.material.color = new THREE.Color(0xffffff)
scene.add line
light = new THREE.AmbientLight 0xffffff
scene.add light

composer = new THREE.EffectComposer renderer
rp = new THREE.RenderPass scene, camera
sp = new THREE.UnrealBloomPass(new THREE.Vector2( w, h), 2, 0.1, 0.0 )
sp.renderToScreen = true
composer.addPass rp
composer.addPass sp
composer.setSize w, h

start = Date.now!
animate ->
  camera.rotation.x += 0.001
  camera.rotation.y += 0.0007
  camera.rotation.z += 0.0005
  t = (Date.now! - start) * 0.001
  composer.render!

  #renderer.render scene, camera


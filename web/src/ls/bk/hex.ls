{animate, controls, scene, camera, renderer, w, h} = init!

camera.position.set 1, -100, 60
camera.lookAt 0, 0, 0

renderer.toneMapping = THREE.ReinhardToneMapping;
scene.background = new THREE.Color 0x222222

shape = new THREE.Shape!

r = 4.6
for i from 0 til 6 =>
  a = i * (Math.PI * 2 / 6)
  [x, y] = [r * Math.cos(a), r * Math.sin(a)].map -> it * 0.99
  if i == 0 => shape.moveTo x, y
  else shape.lineTo x, y
r = 5

geom = new THREE.ExtrudeGeometry shape, do
  steps: 1, depth: 0.01
  bevelEnabled: true
  bevelThickness: 0.2
  bevelSize: 0.2
  bevelSegments: 3

list = []
for i from -30 til 30
  for j from -30 til 30
    material = new THREE.MeshStandardMaterial do
      opacity: if Math.random! > 0.5 => 0 else (Math.random! * 0.5)
      transparent: true
      color: 
        #d3.interpolateBlues(Math.random! * 0.01 + ((i + j + 60) / 120))
        d3.interpolateRdYlGn(Math.random! * 0.01 + ((i + j + 60) / 120))
      side: THREE.DoubleSide
      metalness: 0.0, roughness: 0.5
    mesh = new THREE.Mesh geom, material
    x = i * r * 1.5
    y = Math.sqrt(3) * r * j  + ((i % 2) * Math.sqrt(3)) * r * 0.5
    z = Math.random! * 10
    s = Math.random! * 0.4 + 0.8
    mesh.position.set x, y, z
    mesh.scale.set s, s, 1
    list.push [mesh, material]
    scene.add mesh
    wireframe = new THREE.WireframeGeometry geom
    line = new THREE.LineSegments wireframe
    x = x + (Math.random! - 0.5) * 0
    y = y + (Math.random! - 0.5) * 0
    line.position.set x, y, z - 0.1
    line.scale.set s, s, 1
    line.material.color = new THREE.Color 0xffffff
    line.material.side = THREE.DoubleSide
    line.material.opacity = 0.1
    line.material.transparent = true
    if material.opacity => scene.add line


light = new THREE.AmbientLight 0xffffff, 1
scene.add light

composer = new THREE.EffectComposer renderer
rp = new THREE.RenderPass scene, camera
sp = new THREE.UnrealBloomPass(new THREE.Vector2( w, h), 1, 0.001, 0.3 )
sp.renderToScreen = true
composer.addPass rp
composer.addPass sp
composer.setSize w, h


animate ->
  controls.update!
  #renderer.render scene, camera
  composer.render!

{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 100
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffeedd #0x443322

count = 10000
for i from 0 til 1 by 0.1
  [x, y] = [Math.cos(i * Math.PI * 2), Math.sin(i * Math.PI * 2)]
  light = new THREE.DirectionalLight 0xffffff
  light.position.set x, y, 10
  scene.add light

mat = new THREE.MeshStandardMaterial color: 0xff9922, side: THREE.DoubleSide, transparent: true, opacity: 0.5

for i from 0 til count
  r = Math.random! * 1 + 0
  geom = new THREE.CircleGeometry r, 32
  mesh = new THREE.Mesh geom, mat
  [x, y, z] = [300, 300, 300].map -> Math.random! * it - it * 0.5
  [rx, ry, rz] = [1, 1, 1].map -> Math.random! * Math.PI * 2
  mesh.position.set x, y, z
  mesh.rotation.set rx, ry, rz
  scene.add mesh

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  renderer.render scene, camera

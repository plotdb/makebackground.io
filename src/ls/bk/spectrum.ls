{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 100
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffffff

circleCurve = (r) ->
  @r = r or 1
  THREE.Curve.call @
circleCurve.prototype = {} <<< THREE.Curve.prototype <<< do
  constructor: circleCurve
  getPoint: (t) -> 
    [x, y, z] = [@r * Math.cos(t * Math.PI * 2), @r * Math.sin(t * Math.PI * 2), 0]
    new THREE.Vector3(x, y, z)

path = new circleCurve 10

geom = new TubeBufferGeometry(
  path,
  256, (->
    t = it * Math.PI * 2
    Math.abs(2 * Math.sin(t) * Math.sin(t * Math.cos(t))) + 0.1
  ), 32, false
)

mat = new THREE.MeshStandardMaterial color: 0xff0000
mesh = new THREE.Mesh geom, mat
scene.add mesh
mat = new THREE.MeshStandardMaterial color: 0x000000
mesh = new THREE.Mesh geom, mat
mesh.position.set 2, -2, -10
scene.add mesh

light = new THREE.AmbientLight 0xffffff
light.position.set 1, 1, 10
scene.add light

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  renderer.render scene, camera


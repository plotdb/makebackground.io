{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 0, 0, 70
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0x7799bb

light = new THREE.DirectionalLight 0xffffff
light.position.set 5, 5, 50
scene.add light

groups = new THREE.Group!
scene.add groups
group-list = []
mat-list = []

count = 500

mat = new THREE.ShaderMaterial do
  transparent: true
  depthWrite: false
  uniforms:
    time: type: \f, value: 0
    texture: type: \t, value: THREE.ImageUtils.loadTexture(\/assets/img/bk/snow.svg)
  vertexShader: """
  varying vec2 vUv;
  uniform float time;
  void main() {
    vUv = uv;
    vec3 pos = position;
    pos.y = pos.y - time;
    gl_PointSize = position.z * 0.1 + 200.;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  uniform sampler2D texture;
  void main() {
    vec4 color = texture2D(texture, gl_PointCoord);
    gl_FragColor = color;
  }
  """

geom = new THREE.BufferGeometry!
position = new Float32Array ( count * 3 )
geom.addAttribute \position, new THREE.BufferAttribute position, 3

for i from 0 til count =>
  z = offset = 70 - i * 10
  rx = z * 2
  ry = z * 1
  x = Math.random! * rx - rx * 0.5 
  y = Math.random! * ry - ry * 0.5
  position[i * 3 + 0] = x
  position[i * 3 + 1] = y
  position[i * 3 + 2] = z

points = new THREE.Points geom, mat
scene.add points

start = Date.now!

[cx, cy] = [0, 0]
animate ->
  camera.position.set 0 + cx, 0 + cy, 70
  camera.lookAt 0, 0, 0
  controls.update!
  t = (Date.now! - start) * 0.01
  mat.uniforms.time.value = t;
  renderer.render scene, camera

document.body.addEventListener \mousemove, (e)->
  [mx, my] = [e.clientX/w, e.clientY/h]
  cx := mx * 30 - 15
  cy := my * 30 - 15

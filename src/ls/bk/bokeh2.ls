{animate, controls, renderer, camera, scene, w, h} = init!

camera.position.set 0, 0, 100
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffdd99
count = 30000

geom = new THREE.BufferGeometry!

position = new Float32Array ( count * 3 )
pos2 = new Float32Array ( count * 3 )
for i from 0 til count =>
  z = 4000 * Math.random! - 2000
  [x,y] = [200 + Math.sqrt(z), 200 + Math.sqrt(z)].map -> Math.random! * it - it * 0.5
  pos2[i * 3] = x
  pos2[i * 3 + 1] = y
  pos2[i * 3 + 2] = z
geom.addAttribute \pos2, new THREE.BufferAttribute pos2, 3
geom.addAttribute \position, new THREE.BufferAttribute position, 3

attr = new Float32Array( count )
for i from 0 til count => attr[i] = i * 0.001
geom.addAttribute \idx, new THREE.BufferAttribute attr, 1

mat = new THREE.ShaderMaterial do
  transparent: true
  blending: THREE.AdditiveBlending
  side: THREE.DoubleSide
  depthWrite: false
  uniforms: time: type: \f, value: 0
  vertexShader: """
  uniform float time;
  attribute float idx;
  attribute vec3 pos2;
  varying vec3 pos3;
  varying float size;
  void main() {
    pos3 = vec3(modelViewMatrix * vec4(pos2, 1.));
    gl_PointSize = pow((abs(pos3.z + 100.)) + 1., 1.4);
    size = gl_PointSize;
    vec3 pos = pos2;
    pos.x = pos.x + 0.3 * sin(0.01 * time * pos3.z) * sqrt(abs(pos3.z - 100.));
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
  """

  fragmentShader: """
  varying vec3 pos3;
  void main() {
    float opacity = 1.;
    vec2 pc = gl_PointCoord;
    float d = clamp(length(vec2(pc.x - 0.5, pc.y - 0.5)), 0., 1.);
    if(d > 0.5) { discard; }
    if(d > (0.5 - 0.08)) {
      opacity = (0.5 - d) / 0.08;
    }
    if(d < 0.) { discard; }
    d = pow(d * 1.1,1.5);
    opacity = opacity * pow(clamp(( 1. - 3. * abs(pos3.z + 110.) / 110.), 0.0000000, 0.4), 1.3);
    

    gl_FragColor = vec4(1., 1., d, opacity * 0.8);
  }
  """
mat.transparent = true
points = new THREE.Points geom, mat
scene.add points
composer = new THREE.EffectComposer renderer
sp = new THREE.ShaderPass do
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(1., 1., 1., 1.);//vec4(vUv.x, vUv.y, vUv.x * vUv.y, 1.);
  }
  """
#composer.addPass sp
rp = new THREE.RenderPass scene, camera
rp.renderToScreen = true
composer.addPass rp

start = Date.now!
animate ->
  t = (Date.now! - start) * 0.001
  mat.uniforms.time.value = t;
  camera.position.set 30 * Math.sin(t), 30 * Math.cos(t), camera.position.z
  camera.lookAt 0, 0, 0
  controls.update!
  #renderer.render scene, camera
  composer.render!


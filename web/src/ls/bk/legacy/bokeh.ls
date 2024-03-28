{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 200
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xbb8844

mat = new THREE.ShaderMaterial do
  uniforms: time: { type: \f, value: 0}
  side: THREE.DoubleSide
  transparent: true
  vertexShader: """
  varying vec2 vUv;
  varying float z;
  uniform float time;
  void main() {
    vUv = uv;
    vec3 pos = position;
    vec4 xx = modelViewMatrix * vec4(pos, 1.);
    z = xx.z;
    pos.x = pos.x + sin(time * (pos.z * 13248.7 + 1.) * 1.) * 20.;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  varying float z;
  void main() {
    float v = abs((z * 0.1 / 2000.) + 1.5);
    float r = clamp(
      1. - sqrt(pow((vUv.x - 0.5), 2.) + pow((vUv.y - 0.5), 2.)) / v,
      0., 1.
    );
    r = clamp(
      sqrt((2500. - pow(z + 250., 2.))) / 50.,
      0.3, 0.8
    );
    r = r * (1. - sqrt(pow((vUv.x - 0.5), 2.) + pow((vUv.y - 0.5), 2.)) / clamp(r, .5, 1.));

    gl_FragColor = vec4(1., 1., 0.5, r);
  }
  """
count = 200
r = 8
for i from 0 til count
  [x, y] = [300, 150].map (it) -> Math.random! * it - it * 0.5
  z = Math.random! * 1000 - 500
  geom = new THREE.CircleGeometry Math.random! * r + r * 0.5, 64
  mesh = new THREE.Mesh geom, mat
  mesh.position.set x, y, z
  scene.add mesh
light = new THREE.AmbientLight 0xffffff
scene.add light

/*
composer = new THREE.EffectComposer renderer
composer.addPass new THREE.RenderPass(scene, camera)
bp = new THREE.BokehPass scene, camera, do
  focus: 100
  aperture: 0.00001
  maxblur: 0.05 
  width: w
  height: h
bp.renderToScreen = true
composer.addPass bp
composer.setSize w, h
*/

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  mat.uniforms.time.value = t
  renderer.render scene, camera
  #composer.render 0.1


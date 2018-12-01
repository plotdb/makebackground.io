{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 0, 0, 13
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0x333344

geom = new THREE.PlaneGeometry 10, 10, 10, 10
mat = new THREE.ShaderMaterial do
  transparent: true
  uniforms: do
    time: type: \f, value: 0
    resolution: value: new THREE.Vector2(w, h)
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  """
  fragmentShader: shaderlib.full + """
  varying vec2 vUv;
  uniform vec2 resolution;
  uniform sampler2D texture;
  uniform float time;
  void main() {
    float v = 0.;
    for(int i=1;i<10;i++) {
      v = v + 0.2 * fbm(fbm(vec2(vUv.x + float(i) * (time * 0.2 + 1000.) * 0.1, vUv.y)) * 2. + time * float(i) * 0.01) - 0.1;
    }
    float opacity = 1.0;

    gl_FragColor = vec4(v, v, v, opacity);
  }
  """
mesh = new THREE.Mesh geom, mat
scene.add mesh

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  mat.uniforms.time.value = t
  renderer.render scene, camera


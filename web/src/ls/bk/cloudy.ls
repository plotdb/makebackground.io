{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 100
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffffff

plane = new THREE.PlaneGeometry 80, 80, 80, 80
mat = new THREE.MeshStandardMaterial color: 0xff0000
mat = new THREE.ShaderMaterial do
  uniforms: time: type: \f, value: 0
  side: THREE.DoubleSide
  vertexShader: shaderlib.full + """
  varying vec3 pos;
  uniform float time;
  void main() {
    pos = position;
    float f = 20. * fbm(time * 0.1 + 0.1 * pos * fbm(pos * 0.001));
    pos.z = f;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  """
  fragmentShader: shaderlib.full + """
  varying vec3 pos;
  uniform float time;
  void main() {
    float f = 0.;
    for(int i=0;i<5;i++) {
      f = f + fbm(pow(float(i), 0.2) * pos * 0.1); // cloudy
    }
    f = sin(f) * 0.5 + 0.5;
    gl_FragColor = vec4(f, f, f, 1.);
  }
  """
mesh = new THREE.Mesh plane, mat
scene.add mesh
light = new THREE.AmbientLight 0xffffff
scene.add light

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  mat.uniforms.time.value = t
  renderer.render scene, camera


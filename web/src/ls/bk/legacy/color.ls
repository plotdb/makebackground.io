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
    c1: value: new THREE.Vector3(1, 0, 0)
    c2: value: new THREE.Vector3(0, 1, 0)
    c3: value: new THREE.Vector3(0, 0, 1)
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
  uniform vec3 c1;
  uniform vec3 c2;
  uniform vec3 c3;
  void main() {
    float v = 0.;
    float r = 0., g = 0., b = 0.;
    for(int i=1;i<5;i++) {
      r = r + 0.2 * fbm(fbm(vec2(vUv.x + float(i) * (time * 0.2 + 957.) * 0.1, vUv.y)) * 2. + time * float(i) * 0.01) - 0.1;
      g = g + 0.2 * fbm(fbm(vec2(vUv.x + float(i) * (time * 0.1 + 249.) * 0.1, vUv.y)) * 3. + time * float(i) * 0.02) - 0.1;
      b = b + 0.2 * fbm(fbm(vec2(vUv.x + float(i) * (time * 0.3 + 129.) * 0.1, vUv.y)) * 4. + time * float(i) * 0.02) - 0.1;
    }
    vec3 cc = (c1 * abs(r) + c2 * abs(g) + c3 * abs(b));
    gl_FragColor = vec4(cc, 1.);
  }
  """
mesh = new THREE.Mesh geom, mat
scene.add mesh

mat.uniforms.c1.value = new THREE.Vector3 2.0, 0.5, 0
mat.uniforms.c2.value = new THREE.Vector3 0.5, 0, 1.0
mat.uniforms.c3.value = new THREE.Vector3 0.0, 0.5, 1.0

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  mat.uniforms.time.value = t
  renderer.render scene, camera



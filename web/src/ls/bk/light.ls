{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 0, 0, 10
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0x000000

geom = new THREE.PlaneGeometry 10, 10, 32, 32
mat = new THREE.ShaderMaterial do
  uniforms: do
    texture: type: \t, value: THREE.ImageUtils.loadTexture \texture.svg
    resolution: value: new THREE.Vector2(w, h)
    time: type: \f, value: 0
  transparent: true
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
  \#define MOD3 vec3(.1031,.11369,.13787)
  vec3 hash3(float p) {
    vec3 p3 = fract(vec3(p) * MOD3);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
  }
  void main() {
    float v = 0.;
    for(float i=1.;i<5.;i++) {
      v = v + 0.5 * fbm((vUv.x + vUv.y * 0.5 + sin(vUv.x * 0.1)) * 10. * i * i + i * time) / pow(i, 2.);
    }
    float opacity = vUv.y * fbm(vUv.y);
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



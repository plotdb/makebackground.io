{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 0, 0, 12.5
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0x000000

geom = new THREE.PlaneGeometry 10, 10, 30, 30
mat = new THREE.ShaderMaterial do
  transparent: true
  uniforms: do
    resolution: value: new THREE.Vector2(w, h)
    time: type: \f, value: 0
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
    vec2 pos2;
    vec3 pos3;
    float s, v, c, opacity = 0., k;
    float base = 0.6 * (fbm(vUv + vec2(time * 0.1)) + fbm(vUv * 2. + vec2(time * 0.01))) + fbm(vUv.x + vUv.y * 0.5) * 0.8;
    c = base;
    for(float j=0.;j<4.;j++) {
      k = j * 0.05;
      for(float i=0.;i<40.;i++) {
        pos3 = vec3(
          hash3(i) + 0.1 * vec3(sin(cos(time + i - k) * 1.5), 0.2 * cos(i + 2. * time - k), 1.)
        );
        pos2 = vec2(pos3);
        s = pos3.z * 0.00002 * (5. - j) / 5.;
        c += (s / dot(vUv - pos2, vUv - pos2)) * (9. - pow(j, 2.)) / 9.;
      }
    }
    gl_FragColor = vec4(c, c, c, 1.);
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



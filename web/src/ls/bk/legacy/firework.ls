{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 10
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffffff

composer = new THREE.EffectComposer renderer
sp = new THREE.ShaderPass do
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
  \#define MOD3 vec3(.1031,.11369,.13787)

  varying vec2 vUv;
  uniform vec2 resolution;
  uniform float time;
  uniform sampler2D texture;
  vec3 hash3(float p) {
    vec3 p3 = fract(vec3(p) * MOD3);
    p3 += dot(p3, p3.yzx + 19.19);
    return fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
  }
  float light(vec2 uv, vec2 pos, float size) {
    uv = uv - pos;
    return size / dot(uv, uv);
  }

  void main() {
    float id = floor(time);
    float et = time - id, pt;
    vec3 center = hash3(id) * 0.1 + 0.5 + vec3(0., sin(et + 1.4) - 1.0, 0.);
    vec3 des, n, c = vec3(0., 0., 0.);
    vec2 pos;
    float size = 1.;
    for(float i=0.;i<100.;i++) {
      n = hash3(i + id) - .5;
      des = center + n * n.z;
      pt = 1. - pow(1. - et, 10.);
      size = 0.01 * ( 1. - pt );
      pos = vec2(mix(center, des, pt));
      c += vec3(1., 1., 1.) * light(vUv, pos, size) * 0.001;
    }
    gl_FragColor = vec4(c, 1.);
  }
  """
sp.renderToScreen = true
composer.addPass sp

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.0005
  sp.uniforms.time.value = t
  composer.render!



{animate, controls, scene, camera, renderer, w, h} = init!

camera.position.set 1, 1, 10
camera.lookAt 0, 0, 0

scene.background = new THREE.Color 0x222222

CustomShader = do
  uniforms: {}
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(1., 1., 1., 1);
  }
  """

TriShader = do
  uniforms: {}
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  void main() {
    float d = clamp(1. - sqrt((vUv.x - 0.5) * (vUv.x - 0.5) + (vUv.y - 0.5) * (vUv.y - 0.5)), 0., 1.);
    float e = clamp(1. - sqrt((vUv.x - 0.8) * (vUv.x - 0.8) + (vUv.y - 0.2) * (vUv.y - 0.2)), 0., 1.);
    float f = clamp(1. - sqrt((vUv.x - 0.2) * (vUv.x - 0.2) + (vUv.y - 0.6) * (vUv.y - 0.6)), 0., 1.);
    gl_FragColor = vec4(d + e + f * 0.5, e + f * 0.1, f, 1.);
  }
  """

CaveShader = do
  uniforms: {}
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  void main() {
    float r = clamp(0.5 - sqrt((vUv.x - 0.5) * (vUv.x - 0.5) + 0.2 * (vUv.y - 0.8) * (vUv.y - 0.8)), 0., 1.);
    gl_FragColor = vec4(r * 0.9, r * 0.86 + 0.14, 0.2 + r * 0.75, 1);
  }
  """

CustomShader = do
  uniforms: {
    resolution: { value: new THREE.Vector2(w, h) }
  }
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.);
  }
  """
  fragmentShader: """
  varying vec2 vUv;
  uniform vec2 resolution;
  float blah(float a, float b, float c) {
    c = 1. / (exp(-(6. * c) + 3.) + 1.);
    return (b - a) * c + a;
  }
  void main() {
    vec2 pos = gl_FragCoord.xy / resolution.xy;
    vec3 c1 = vec3(.176, .69, .89);
    vec3 c2 = vec3(.02, .364, .458);
    //vec3 c1 = vec3(.176, .69, .89);
    //vec3 c2 = vec3(1., 1., 1.);
    float rate = clamp(length(pos - vec2(.5, .5)) * 2., 0., 2.);
    float r, g, b;
    r = blah(c1.r, c2.r, rate);
    g = blah(c1.g, c2.g, rate);
    b = blah(c1.b, c2.b, rate);
    gl_FragColor = vec4(r, g, b, 1);
  }
  """

composer = new THREE.EffectComposer renderer
composer.addPass new THREE.RenderPass scene, camera
effect = new THREE.ShaderPass CustomShader
effect.renderToScreen = true
composer.addPass effect

animate ->
  controls.update!
  composer.render!

{animate, controls, scene, camera, renderer, w, h} = init!

camera.position.set 1, 1, 10
camera.lookAt 0, 0, 0

scene.background = new THREE.Color 0x222222

TriShader = do
  uniforms: {time: {type: \f, value: 0}}
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

composer = new THREE.EffectComposer renderer
composer.addPass new THREE.RenderPass scene, camera
effect = new THREE.ShaderPass TriShader
effect.renderToScreen = true
composer.addPass effect

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  effect.uniforms.time.value = t
  composer.render!

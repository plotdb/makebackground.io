{animate, controls, scene, camera, renderer, w, h} = init!

camera.position.set 1, 1, 10
camera.lookAt 0, 0, 0

scene.background = new THREE.Color 0x222222

CustomShader = do
  uniforms: {
    resolution: { value: new THREE.Vector2(w, h) }
    time: {type: \f, value: 0}
  }
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.);
  }
  """
  fragmentShader: """
  uniform vec2 resolution;
  uniform float time;
  varying vec2 vUv;
  void main() {
    gl_FragColor = vec4(
      sin(3. * vUv.x) * 0.5 + 0.5,
      sin(3. * vUv.y) * 0.5 + 0.5,
      sin(3. * vUv.x * vUv.y) * 0.5 + 0.5,
      1.0
    );
  }
  """

composer = new THREE.EffectComposer renderer
composer.addPass new THREE.RenderPass scene, camera
effect = new THREE.ShaderPass CustomShader
effect.renderToScreen = true
composer.addPass effect

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  effect.uniforms.time.value = t
  composer.render!

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

    vec2 p = ( max(resolution.x, resolution.y) * vUv.xy - resolution ) / max( resolution.x,resolution.y );
    float j;
    float t = sin(time * 0.1) * 4. + 3.;
    for(int i=1;i<50;i++) {
        j = float(i);
          p.x += 0.01 * sin(atan( 0.03 * j + p.y * j + t)) + 0.001;
            p.y += 0.01 * sin(atan( 0.03 * j + p.x * j + t)) - 0.001;
    }
    vec3 col = vec3(
        0.5 * sin( 3.0 * p.x + p.y ) + 0.5,
          0.5 * cos( 3.0 * p.y + p.x * 3.5) + 0.5,
            (sin(p.x * p.y + p.x) * 0.5 + 0.5)
    );
    gl_FragColor = vec4(col, 1.0);

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

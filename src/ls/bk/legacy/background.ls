{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 10
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffffff

geom = new THREE.SphereGeometry 1, 64, 64
mat = new THREE.ShaderMaterial do
  uniforms: do
    time: type: \f, value: 0
    texture: type: \t, value: THREE.ImageUtils.loadTexture \texture.svg
    resolution: value: new THREE.Vector2(w, h)
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  """
  fragmentShader: shaderlib.full + """
  \#ifdef GL_ES
  precision mediump float;
  \#endif

  uniform vec2 resolution;
  uniform float time;

  const float Pi = 3.14159;

  float sinApprox(float x) {
      x = Pi + (2.0 * Pi) * floor(x / (2.0 * Pi)) - x;
      return (4.0 / Pi) * x - (40.0 / Pi / Pi) * x * abs(x);
  }

  float cosApprox(float x) {
      return sinApprox(x + 0.5 * Pi);
  }
  
  varying vec2 vUv;
  void main()
  {
    vec2 p = ( max(resolution.x, resolution.y) * vUv.xy - resolution ) / max( resolution.x,resolution.y );
    float t = time * 0.1;
    p.x = cos(p.x * 1. + t) + t;
    p.y = sin(p.y * 1. + t) + t;
    vec3 col = vec3(
      0.5 * sin( 3.0 * p.x + p.y ) + 0.5,
      0.5 * cos( 3.0 * p.y + p.x * 3.5) + 0.5,
      (sin(p.x * p.y + p.x) * 0.5 + 0.5)
    );
    gl_FragColor = vec4(col, 1.0);
  }

  """

geom = new THREE.PlaneGeometry 10, 10, 1

mesh = new THREE.Mesh geom, mat
scene.add mesh

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  mat.uniforms.time.value = t
  renderer.render scene, camera



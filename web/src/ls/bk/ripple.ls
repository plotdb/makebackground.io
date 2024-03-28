{animate, controls, renderer, camera, scene, w, h} = init!

#renderer.shadowMap.enabled = true
#renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 0, 0, 12
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffffff

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

  vec2 hash2( vec2 p ) {
    p = vec2( dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)) );
    return fract(sin(p)*43758.5453);
  }

  void main() {
    vec2 center = hash2(vec2(0.5, 0.5));
    vec2 dir = normalize(vUv - center);
    float len = 1. - sqrt(pow(vUv.x - center.x, 2.) + pow(vUv.y - center.y, 2.));
    vec2 pos = (
      vUv +
      vec2(time * 0.001, time * 0.002) +
      vec2(sin(time * 10. + pow(vUv.y, 0.5) * 11. + pow(vUv.x, 2.3) * 23.) * 0.02, 0) + 
      vec2(sin(time * 10. + pow(vUv.y, 0.5) * 31. + pow(vUv.x, 2.3) * 5.) * 0.005, 0) +
      dir * sin(len * 75. + time * 5.) * 0.01 * len
    );
    gl_FragColor = vec4(vec3(fbm(pos)), 1.);
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

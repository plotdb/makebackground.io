{animate, controls, scene, camera, renderer, w, h} = init!

camera.position.set 0, 0, 60
camera.lookAt 0, 0, 0

renderer.shadowMap.enabled = true
renderer.shadowMapType = THREE.PCFSoftShadowMap
renderer.shadowMap.type = THREE.PCFSoftShadowMap
#renderer.toneMapping = THREE.ReinhardToneMapping;
scene.background = new THREE.Color 0x222222

r = 5
geom = new THREE.Geometry!
for i from 0 til 7 =>
  a = i * (Math.PI * 2 / 6)
  [x, y] = [r * Math.cos(a), r * Math.sin(a)].map -> it * 0.99
  geom.vertices.push new THREE.Vector3 x, y, 0

list = []
for i from -30 til 30
  for j from -30 til 30
    mat = new THREE.LineBasicMaterial color: 0xffffff
    line = new THREE.Line geom, mat
    x = i * r * 1.5 + Math.random! * r
    y = Math.sqrt(3) * r * j  + ((i % 2) * Math.sqrt(3)) * r * 0.5 + Math.random! * r
    line.position.set x, y, 0
    scene.add line

composer = new THREE.EffectComposer renderer
rp = new THREE.RenderPass scene, camera
sp = new THREE.ShaderPass do
  uniforms: tDiffuse: type: \t, value: null
  vertexShader: """
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
    """
  fragmentShader: """
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      if(color.r < 0.9) { discard; }
      gl_FragColor = vec4(vUv.x, vUv.y, atan(sin(vUv.x) + cos(vUv.y)), 1.);
    }
  """
sp.renderToScreen = true
composer.addPass rp
composer.addPass sp

animate ->
  controls.update!
  #renderer.render scene, camera
  composer.render!

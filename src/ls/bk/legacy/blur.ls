{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 100
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0x0

geom = new THREE.IcosahedronGeometry 1, 2
wireframe = new THREE.WireframeGeometry geom
line = new THREE.LineSegments wireframe
scene.add line
#mat = new THREE.MeshStandardMaterial color: 0xffff00
#mesh = new THREE.Mesh geom, mat
#scene.add mesh

light = new THREE.AmbientLight 0xff9900
scene.add light

composer = new THREE.EffectComposer renderer
rp = new THREE.RenderPass scene, camera
sp1 = new THREE.ShaderPass blur
sp2 = new THREE.ShaderPass blur
sp2.uniforms.direction.value = new THREE.Vector2(0,1)
sp3 = new THREE.ShaderPass blur
sp3.uniforms.direction.value = new THREE.Vector2(0.7,0.7)
sp4 = new THREE.ShaderPass blur
sp4.uniforms.direction.value = new THREE.Vector2(-0.7,0.7)

sp5 = new THREE.ShaderPass do
  transparent: true
  uniforms: tDiffuse: {value: null}, time: {type: \f, value: 0}
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  """
  fragmentShader: shaderlib.full + """
  varying vec2 vUv;
  uniform sampler2D tDiffuse;
  uniform float time;
  void main() {
    float d = pow(fbm(fbm(vUv * 1000. * time) + time), 2.);
    gl_FragColor = vec4(d, d, d, 1.);
    gl_FragColor = (d * 0.9 + 0.1) * texture2D(tDiffuse, vUv);
  }
  """
sp5.renderToScreen = true

composer.addPass rp
composer.addPass sp1
composer.addPass sp2
composer.addPass sp3
composer.addPass sp4
composer.addPass sp5


start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  sp1.uniforms.time.value = t
  sp4.uniforms.time.value = t
  #renderer.render scene, camera
  composer.render!

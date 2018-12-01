{animate, controls, renderer, camera, scene, w, h} = init(window.innerWidth * 0.5)

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 15, 15, 40
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xffffff

texture = do
  renderer: new THREE.WebGLRenderer!
  camera: new THREE.PerspectiveCamera(75, w / h, 0, 10000)
  scene: new THREE.Scene!
  target: new THREE.WebGLRenderTarget(w, h)
  pass: {}

texture.shader = do
  uniforms: {}
  side: THREE.DoubleSide
  vertexShader: """
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
  }
  """
  fragmentShader: shaderlib.full + """
  varying vec2 vUv;
  \#define PI2 #{Math.PI * 2}
  void main() {
    float s = vignette(1., 0.5, vUv);
    //float n = noise(vUv * 100.);
    vec2 v = vUv;
    v.x = v.x - 0.05;
    float r = 6.;
    float a = 0.4;
    float n = sin((v.x * r * PI2)) * a + cos(sin(v.y * r * PI2)) * a;
    //float n = sin(pow(1. - length(vec2(v.x - 0.5, v.y - 0.5)), 5.));
    gl_FragColor = vec4( n, n, n, 1.0);
  }
  """

texture.renderer.setSize w, h
texture.composer = new THREE.EffectComposer(texture.renderer, texture.target)
texture.pass.render = new THREE.RenderPass texture.scene, texture.camera
texture.pass.effect = new THREE.ShaderPass texture.shader
texture.pass.effect.renderToScreen = true
texture.composer.addPass texture.pass.render
texture.composer.addPass texture.pass.effect

document.body.appendChild texture.renderer.domElement
texture.composer.render!

texture.texture = new THREE.CanvasTexture texture.renderer.domElement
geom = new THREE.SphereGeometry 1, 128, 128
mat = new THREE.MeshStandardMaterial do
  side: THREE.DoubleSide
  color: 0xffffff, metalness: 0.1, roughness: 0.5
  map: texture.texture
  displacementMap: texture.texture
  emissiveMap: texture.texture
  emissive: new THREE.Color 0x22ffbb
  displacementMapScale: 0.0
  lightMap: texture.texture
mesh = new THREE.Mesh geom, mat
scene.add mesh

light = new THREE.DirectionalLight 0xff9900
light.position.set 0, 10, 10
scene.add light

/*
light = new THREE.HemisphereLight 0x99ddff, 0xffff99, 0.3
scene.add light

light = new THREE.AmbientLight 0x222222
scene.add light
*/

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.001
  mesh.rotation.y += 0.05
  renderer.render scene, camera

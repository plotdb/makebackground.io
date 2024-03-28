setup = ->
  {animate, controls, renderer, scene, camera, w, h} = init 256, 256
  camera.position.set 0, 0, 10
  camera.lookAt 0, 0, 0
  scene.background = new THREE.Color 0xffffff
  geom = new THREE.PlaneGeometry 10, 10, 10, 10
  mat = new THREE.ShaderMaterial do
    uniforms: do
      seed: type: \f, value: 0
      time: type: \f, value: 0
      texture: type: \t, value: null
      resolution: value: new THREE.Vector2(w, h)
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
    void main() {
      vec4 c = texture2D(texture, vUv);
      gl_FragColor = c * 0.8;
    }
    """
  #mat = new THREE.MeshStandardMaterial color: 0xff0000
  #light = new THREE.AmbientLight 0xffff00
  #scene.add light
  mesh = new THREE.Mesh geom, mat
  scene.add mesh
  rt = [0,1].map -> new THREE.WebGLRenderTarget w, h
  return {renderer, scene, camera, mesh, mat, animate, controls, rt}

kits = [0, 1].map -> setup!

start = Date.now!
idx = 0
kits.0.animate ->
  kits.0.controls.update!
  t = (Date.now! - start) * 0.001

  kits.0.mat.uniforms.texture.value = kits.1.rt[idx].texture
  kits.1.mat.uniforms.texture.value = kits.0.rt[idx].texture
  kits.0.mat.uniforms.time.value = t
  kits.1.mat.uniforms.time.value = t + 2134.1239

  kits.0.renderer.render kits.0.scene, kits.0.camera, kits.0.rt[1 - idx]
  kits.0.renderer.render kits.0.scene, kits.0.camera
  kits.1.renderer.render kits.1.scene, kits.1.camera, kits.1.rt[1 - idx]
  kits.1.renderer.render kits.1.scene, kits.1.camera
  idx := 1 - idx

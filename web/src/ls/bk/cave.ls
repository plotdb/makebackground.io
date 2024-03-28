(->
  mod = do
    name: \cave
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    support: {}
    edit:
      color1: name: "Color 1", type: \color, default: \#20778c
      color2: name: "Color 2", type: \color, default: \#060408
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      camera.position.set 1, 1, 10
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0x222222


      CaveShader = do
        uniforms: do
          time: type: \f, value: 0
          color1: value: new THREE.Vector3(1, 1, 1)
          color2: value: new THREE.Vector3(0, 0, 0)
        vertexShader: """
        varying vec2 vUv;
        uniform float time;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.);
        }
        """
        fragmentShader: """
        varying vec2 vUv;
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        void main() {
          float r = clamp(0.5 - sqrt((vUv.x - 0.5) * (vUv.x - 0.5) + 0.2 * (vUv.y - 0.8) * (vUv.y - 0.8)), 0., 1.);
          vec3 color = color1 * r + color2 * (1. - r);//vec3(r, 0., 0.);//color1 * r + (1. - r) * color2;
          gl_FragColor = vec4(color, 1.);
        }
        """
      obj.composer = composer = new THREE.EffectComposer renderer
      composer.addPass new THREE.RenderPass scene, camera
      obj.effect = effect = new THREE.ShaderPass CaveShader
      effect.renderToScreen = true
      composer.addPass effect

    watch: (n) ->
      c1 = new THREE.Color(n.color1)
      c2 = new THREE.Color(n.color2)
      uni = mod.obj.effect.uniforms
      uni.color1.value = new THREE.Vector3(c1.r, c1.g, c1.b)
      uni.color2.value = new THREE.Vector3(c2.r, c2.g, c2.b)

    step: (t) ->
      obj = mod.obj
      obj.controls.update!
      obj.effect.uniforms.time.value = t
      obj.composer.render!

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

(->
  mod = do
    name: \contour-line
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    edit:
      speed: default: 6
      background: name: "Background", type: \color, default: \#006d44
      foreground: name: "Foreground", type: \color, default: \#00ffa0
    support: {}
    watch: (n, o) ->
      if !mod.obj => return
      bg = new THREE.Color(n.background)
      fg = new THREE.Color(n.foreground)
      uni = mod.obj.sp.uniforms
      uni.background.value = new THREE.Vector3(bg.r, bg.g, bg.b)
      uni.foreground.value = new THREE.Vector3(fg.r, fg.g, fg.b)
      uni.speed.value = n.speed
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      camera.position.set 1, 1, 100
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0xffffff

      obj.composer = new THREE.EffectComposer renderer
      rp = new THREE.RenderPass scene, camera
      obj.sp = sp = new THREE.ShaderPass do
        uniforms:
          time: type: \f, value: 0
          speed: type: \f, value: 1
          resolution: value: new THREE.Vector2(w, h)
          background: value: new THREE.Vector3(1,1,1)
          foreground: value: new THREE.Vector3(0,0,0)
        side: THREE.DoubleSide
        vertexShader: shaderlib.full + """
        varying vec3 vUv;
        uniform float time;
        uniform float speed;
        uniform vec2 resolution;
        void main() {
          vUv = vec3(uv, .0);
          if(resolution.x > resolution.y) { 
            vUv.x = vUv.x * resolution.x / resolution.y;
          } else {
            vUv.y = vUv.y * resolution.y / resolution.x;
          }
          float t = 0.1 * (time / speed);
          float f = 20. * fbm(t + vUv * fbm(vUv * 0.1));
          vUv.z = f;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        }
        """
        fragmentShader: shaderlib.full + """
        varying vec3 vUv;
        uniform float time;
        uniform float speed;
        uniform vec2 resolution;
        uniform vec3 foreground;
        uniform vec3 background;
        void main() {
          vec3 color;
          float t = 0.1 * (time / speed);
          float f;
          f = 20. * fbm(vUv * 0.5);
          f = (fract(f) < 0.10 ? 1. : clamp(0.1 - fract(f), 0., 1.));
          color = foreground * f + background * (1. - f);
          gl_FragColor = vec4(color, 1.);
        }
        """

      sp.renderToScreen = true
      obj.composer.addPass rp
      obj.composer.addPass sp

    step: (t) ->
      obj = mod.obj
      obj.controls.update!
      obj.sp.uniforms.time.value = t
      obj.composer.render!

    destroy: ->

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

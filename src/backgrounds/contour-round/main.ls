(->
  mod = do
    name: \contour-round
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    edit:
      background: name: "Background", type: \color, default: \#ab6841
      foreground: name: "Foreground", type: \color, default: \#cf9866
    support: {}
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!
      obj.composer = new THREE.EffectComposer renderer
      rp = new THREE.RenderPass scene, camera
      obj.sp = sp = new THREE.ShaderPass do
        uniforms:
          time: type: \f, value: 0
          speed: type: \f, value: 1
          background: value: new THREE.Vector3(1,1,1)
          foreground: value: new THREE.Vector3(0,0,0)

        side: THREE.DoubleSide
        vertexShader: shaderlib.full + """
        varying vec3 pos;
        uniform float time;
        uniform float speed;
        void main() {
          float t = time / speed;
          pos = position * 40.0;
          float f = t * 3. + 20. * fbm(0.1 * pos * fbm(pos * 0.001));
          pos.z = f;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        }
        """
        fragmentShader: shaderlib.full + """
        varying vec3 pos;
        uniform float time;
        uniform float speed;
        uniform vec3 background;
        uniform vec3 foreground;
        void main() {
          float f = 0.;
          for(int i=5;i<8;i++) {
            f = f * pow(float(i),2.) + fbm(pow(float(i), 0.5) * pos * 0.002);
            //f = f + fbm(pow(float(i), 0.1) * pos * 0.05); // cloudy
          }
          f = sin(f) * 0.5 + 0.5;
          if(f < 0.8) { f = 0.; }
          vec3 color = f * background + (1. - f) * foreground;
          gl_FragColor = vec4(color, 1.);
        }
        """

      sp.renderToScreen = true
      obj.composer.addPass rp
      obj.composer.addPass sp

    watch: (n, o) ->
      if !mod.obj => return
      bg = new THREE.Color(n.background)
      fg = new THREE.Color(n.foreground)
      uni = mod.obj.sp.uniforms
      uni.background.value = new THREE.Vector3(bg.r, bg.g, bg.b)
      uni.foreground.value = new THREE.Vector3(fg.r, fg.g, fg.b)
      uni.speed.value = n.speed

    step: (t) ->
      {controls, sp, composer,speed} = mod.obj
      controls.update!
      sp.uniforms.time.value = t
      composer.render!

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

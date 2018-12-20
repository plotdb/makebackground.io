(->
  mod = do
    name: \contour
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    edit:
      background: name: "Background", type: \color, default: \#fff
      foreground: name: "Foreground", type: \color, default: \#000
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

      camera.position.set 1, 1, 100
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0xffffff

      obj.composer = new THREE.EffectComposer renderer
      rp = new THREE.RenderPass scene, camera
      obj.bp = bp = new THREE.ShaderPass do
        uniforms: do
          resolution: { value: new THREE.Vector2(w, h) }
          time: {type: \f, value: 0}
        vertexShader: """
        varying vec2 vUv;
        uniform vec2 resolution;
        void main() {
          vUv = uv;
          float r;
          /*
          if(resolution.x > resolution.y) { 
            r = resolution.x / resolution.y;
            vUv.x = (vUv.x * r) - (r - 1.) * 0.5;
          } else {
            r = resolution.y / resolution.x;
            vUv.y = (vUv.y * r) - (r - 1.) * 0.5;
          }
          */
          if(resolution.x > resolution.y) {
            r = resolution.y / resolution.x;
            vUv.y = vUv.y * r - (r - 1.) * 0.5;
          } else {
            r = resolution.x / resolution.y;
            vUv.x = (vUv.x * r) - (r - 1.) * 0.5;
          }
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        }
        """
        fragmentShader: """
        uniform vec2 resolution;
        uniform float time;
        varying vec2 vUv;
        void main() {
          gl_FragColor = vec4(
            vUv.x, vUv.y, 0,
            //sin(3. * vUv.x) * 0.5 + 0.5,
            //sin(3. * vUv.y) * 0.5 + 0.5,
            //sin(3. * vUv.x * vUv.y) * 0.5 + 0.5,
            1.0
          );
        }
        """

      obj.sp = sp = new THREE.ShaderPass do
        uniforms:
          time: type: \f, value: 0
          speed: type: \f, value: 1
          resolution: value: new THREE.Vector2(w, h)
          background: value: new THREE.Vector3(1,1,1)
          foreground: value: new THREE.Vector3(0,0,0)
          tDiffuse: type: \t, value: null
        vertexShader: """
        varying vec3 vUv;
        uniform vec2 resolution;
        void main() {
          vUv = vec3(uv, .0);
          float r;
          /*
          if(resolution.x > resolution.y) { 
            r = resolution.x / resolution.y;
            vUv.x = vUv.x * r - (r - 1.) * 0.5;
          } else {
            r = resolution.y / resolution.x;
            vUv.y = vUv.y * r - (r - 1.) * 0.5;
          }
          */
          if(resolution.x > resolution.y) { // cover
            r = resolution.y / resolution.x;
            vUv.y = vUv.y * r - (r - 1.) * 0.5;
          } else {
            r = resolution.x / resolution.y;
            vUv.x = (vUv.x * r) - (r - 1.) * 0.5;
          }
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
          /*if(resolution.x > resolution.y) {  // contain
            vUv.x = vUv.x * resolution.x / resolution.y;
          } else {
            vUv.y = vUv.y * resolution.y / resolution.x;
          } */
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        }
        """
        fragmentShader: shaderlib.full + """
        varying vec3 vUv;
        uniform float time;
        uniform float speed;
        uniform vec3 background;
        uniform vec3 foreground;
        uniform sampler2D tDiffuse;
        void main() {
          float t = time / speed;
          float e = 20. * fbm(t * .1 + 10. * vUv * fbm(vUv * 0.1));
          vec3 base = vec3(texture2D(tDiffuse, vec2(vUv)));
          //float f = fbm(t * pos.z + fbm(0.3 * pos * fbm(pos * 0.0001 + t)));
          //f = pos.z - fract(pos.z);
          float f = e - fract(e);
          f = f - ((f * 0.5) - fract(f * 0.5)) * 2.;
          //f = clamp(f * 0.1 + 0.8 + fract(pos.z), 0., 1.3);
          f = clamp(f * 0.1 + 0.8 + fract(e), 0., 1.);
          gl_FragColor = vec4(1., f, f * 0.9, 1.);
          vec3 color = base - (1. - (f * background + (1. - f) * foreground));
          gl_FragColor = vec4(color, 1.);
        }
        """
      sp.renderToScreen = true
      obj.composer.addPass rp
      obj.composer.addPass bp
      obj.composer.addPass sp

    step: (t) ->
      obj = mod.obj
      obj.controls.update!
      obj.sp.uniforms.time.value = t
      [w,h] = [window.innerWidth, window.innerHeight]
      if w != obj.w or h != obj.h => 
        obj.sp.uniforms.resolution.value = new THREE.Vector2(w,h)
        obj.bp.uniforms.resolution.value = new THREE.Vector2(w,h)
      obj.composer.render!

    destroy: ->

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!


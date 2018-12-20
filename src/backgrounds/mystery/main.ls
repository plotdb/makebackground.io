(->
  mod = do
    name: \mystery
    type: \background
    desc: "fluid circular liquid background"
    tags: <[liquid flow water smoke]>
    slug: "liquid-background"
    license: \CC0
    support: {}
    edit:
      color1: name: "Color 1", type: \color, default: \#0056ff
      color2: name: "Color 2", type: \color, default: \#ff8c00
      color3: name: "Color 3", type: \color, default: \#c20000
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      camera.position.set 1, 1, 10
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0x222222

      CustomShader = do
        uniforms: {
          resolution: { value: new THREE.Vector2(w, h) }
          c1: { value: new THREE.Vector3(1, 1, 1) }
          c2: { value: new THREE.Vector3(1, 1, 1) }
          c3: { value: new THREE.Vector3(1, 1, 1) }
          time: {type: \f, value: 0}
        }
        vertexShader: """
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.);
        }
        """
        fragmentShader: """
        uniform vec2 resolution;
        uniform float time;
        varying vec2 vUv;
        uniform vec3 c1;
        uniform vec3 c2;
        uniform vec3 c3;
        void main() {
          vec2 p = ( max(resolution.x, resolution.y) * vUv.xy - resolution ) / max( resolution.x,resolution.y );
          float j;
          float t = fract(time);
          for(int i=1;i<50;i++) {
            j = float(i);
            p.x += 0.005 * cos( 0.3 * j + p.y * j + time) + 0.001;
            p.y += 0.005 * sin( 0.3 * j + p.x * j + time) - 0.001;
          }
          vec3 col = vec3(
            0.5 * sin( 3.0 * p.x + p.y) + 0.5,
            0.5 * cos( 3.0 * p.y + p.x * 3.5) + 0.5,
            sin(p.x * p.y + p.x) * 0.5 + 0.5
          ); 
          col = ((col.x * c1) + (col.y * c2) + (col.z * c3)) / 3.;
          gl_FragColor = vec4(col, 1.0);
        }
        """

      obj.composer = composer = new THREE.EffectComposer renderer
      composer.addPass new THREE.RenderPass scene, camera
      obj.effect = effect = new THREE.ShaderPass CustomShader
      effect.renderToScreen = true
      composer.addPass effect
    watch: (n) ->
      {effect} = mod.obj
      for i from 1 to 3 => effect.uniforms["c#i"].value = new THREE.Color n["color#i"]
    step: (t) ->
      obj = mod.obj
      obj.controls.update!
      obj.effect.uniforms.time.value = t
      obj.composer.render!

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

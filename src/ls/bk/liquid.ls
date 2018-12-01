(->
  mod = do
    name: \liquid
    type: \background
    edit: {}
    desc: "fluid circular liquid background"
    tags: <[liquid flow water smoke]>
    slug: "liquid-background"
    license: \CC0
    support: {}
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      camera.position.set 1, 1, 10
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0x222222

      CustomShader = do
        uniforms: {
          resolution: { value: new THREE.Vector2(w, h) }
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
        void main() {
          vec2 p = ( max(resolution.x, resolution.y) * vUv.xy - resolution ) / max( resolution.x,resolution.y );
          vec3 c1 = vec3(1.0, 1.0, 1.0);
          vec3 c2 = vec3(0.5, 0.9, 0.2);
          vec3 c3 = vec3(0.1, 0.2, 0.8);
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
    step: (t) ->
      obj = mod.obj
      obj.controls.update!
      obj.effect.uniforms.time.value = t
      obj.composer.render!

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

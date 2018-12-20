(->
  mod = do
    name: "linear-gradient"
    type: \background
    desc: "Simply linear gradient "
    tags: <[gradient linear]>
    slug: "linear-gradient"
    license: \CC0
    edit:
      color1: name: "Color 1", type: \color, default: \#00caf8
      color2: name: "Color 2", type: \color, default: \#0d3e66
      angle: name: "Angle", type: \number, min: 0, max: 360, step: 1, default: 135
    support: {}
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      camera.position.set 1, 1, 10
      camera.lookAt 0, 0, 0

      CustomShader = do
        uniforms: {
          speed: { type: \f, value: 1 }
          resolution: { value: new THREE.Vector2(w, h) }
          color1: { value: new THREE.Vector3(1, 1, 1) }
          color2: { value: new THREE.Vector3(1, 0, 0) }
          dir: { value: new THREE.Vector2(1, 0) }
        }
        vertexShader: """
        void main() {
          gl_Position = vec4(position, 1.);
        }
        """
        fragmentShader: """
        uniform vec2 resolution;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec2 dir;
        void main() {
          vec2 pos = gl_FragCoord.xy / resolution.xy;
          //float f = pos.x * dir.x + pos.y * dir.y;
          //gl_FragColor = vec4(mix(color1, color2, f), 1);
          gl_FragColor = vec4(
            (
              color1 * ((pos.x - 0.5) * dir.x + (pos.y - 0.5) * dir.y + 0.5) + 
              color2 * (-(pos.x - 0.5) * dir.x + -(pos.y - 0.5) * dir.y + 0.5)
            ), 1.
          );
        }
        """

      mod.obj.composer = composer = new THREE.EffectComposer renderer
      composer.addPass new THREE.RenderPass scene, camera
      mod.obj.effect = effect = new THREE.ShaderPass CustomShader
      effect.renderToScreen = true
      composer.addPass effect

    watch: (n, o) ->
      uni = mod.obj.effect.uniforms
      uni.speed.value = n.speed
      uni.dir.value = new THREE.Vector2(Math.cos(n.angle * Math.PI / 180), Math.sin(n.angle * Math.PI / 180))
      for i from 1 to 2 =>
        c = new THREE.Color(n["color#i"])
        uni["color#i"].value = new THREE.Color(c)

    step: (t) ->
      {controls, composer} = mod.obj
      controls.update!
      composer.render!

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

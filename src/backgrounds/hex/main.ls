(->
  mod = do
    debug: true
    name: \hex
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    edit:
      foreground: name: "Foreground", type: \color, default: \#441f47
      color1: name: "Color 1", type: \color, default: \#f00
      color2: name: "Color 2", type: \color, default: \#e3c9ff
      color3: name: "Color 3", type: \color, default: \#00b3ff
    support: {}

    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      camera.position.set 20, 20, 60
      camera.lookAt 0, 0, 0

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      scene.background = new THREE.Color 0x000000

      r = 2
      geom = new THREE.Geometry!
      for i from 0 til 7 =>
        a = i * (Math.PI * 2 / 6)
        [x, y] = [r * Math.cos(a), r * Math.sin(a)].map -> it * 0.99
        geom.vertices.push new THREE.Vector3 x, y, 0
      geom-face = geom.clone!
      geom-face.faces.push new THREE.Face3(0,1,2)
      geom-face.faces.push new THREE.Face3(0,2,3)
      geom-face.faces.push new THREE.Face3(0,3,4)
      geom-face.faces.push new THREE.Face3(0,4,5)

      list = []
      for i from -30 til 30
        for j from -30 til 30
          if Math.random! > 0.3 =>
            mat = new THREE.LineBasicMaterial color: 0xffffff
            mesh = new THREE.Line geom, mat
          else
            mat = new THREE.MeshBasicMaterial color: 0xffffff
            mesh = new THREE.Mesh geom-face, mat
          x = i * r * 1.5 + Math.random! * r
          y = Math.sqrt(3) * r * j  + ((i % 2) * Math.sqrt(3)) * r * 0.5 + Math.random! * r
          s = Math.random! * 0.8 + 0.6
          mesh.position.set x, y, 0
          mesh.scale.set s, s, s
          scene.add mesh

      mod.obj.composer = composer = new THREE.EffectComposer renderer
      rp = new THREE.RenderPass scene, camera
      mod.obj.sp = sp = new THREE.ShaderPass do
        uniforms:
          tDiffuse: type: \t, value: null
          speed: type: \f, value: 1
          fg: value: new THREE.Vector3(0,0,0)
          c1: value: new THREE.Vector3(1,1,1)
          c2: value: new THREE.Vector3(1,1,1)
          c3: value: new THREE.Vector3(1,1,1)
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
          uniform vec3 fg;
          uniform vec3 c1;
          uniform vec3 c2;
          uniform vec3 c3;
          void main() {
            float d = 0.001;

            vec4 p1 = texture2D(tDiffuse, vUv);
            vec3 c = c1 + c2 + c3; //vUv.x * c1 + vUv.y * c2 + atan(sin(vUv.x) + cos(vUv.y)) * c3;
            float f1 = fbm(vUv * 3.);
            float f2 = fbm(length(vUv * 3.));
            float f3 = fbm(sin(vUv * 3.));
            c = (
              c1 * f1 + c2 * f2 + c3 * f3
            ) * 0.5;
            /*
            if(p1.r > 0.8) {
              c = fg * 0.2 + c * 0.8;
            }*/
            c = fg * (p1.r * 0.8) + c;
            gl_FragColor = vec4(c, 1.);
          }
        """
      sp.renderToScreen = true
      composer.addPass rp
      composer.addPass sp

    watch: (n, o) ->
      if !mod.obj => return
      uni = mod.obj.sp.uniforms
      for i from 1 to 3 =>
        c = new THREE.Color n["color#i"]
        uni["c#i"].value = new THREE.Vector3(c.r, c.g, c.b)
      c = new THREE.Color n["foreground"]
      uni["fg"].value = new THREE.Vector3(c.r, c.g, c.b)
      uni.speed.value = n.speed

    step: (t) ->
      {renderer, camera, scene, controls, composer} = mod.obj
      controls.update!
      composer.render!


  if module? => module.exports = mod
  if ModManager? => ModManager.register mod
  return mod
)!

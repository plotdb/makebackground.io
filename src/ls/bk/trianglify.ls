(->
  mod = do
    name: \trianglify
    type: \background
    edit: {}
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    support: {}
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      camera.position.set 0, 0, 10
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0xffffff

      mat = new THREE.ShaderMaterial do
        vertexShader: """
        attribute vec3 color;
        varying vec3 vColor;
        varying vec3 pos;
        void main() {
          pos = position;
          vColor = color;
          pos.x = pos.x + 0.08 * fract(sin((pos.x + pos.y) * 10000000.)) - 0.04;
          pos.y = pos.y + 0.08 * fract(sin((pos.x * pos.y) * 10000000.)) - 0.04;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
        }
        """
        fragmentShader: """
        varying vec3 vColor;
        varying vec3 pos;
        void main() {
          gl_FragColor = vec4(vColor.r, vColor.g, vColor.b, 1.);
        }
        """

      [cw,ch] = [100,100]
      vec3 = (x, y) ->
        Math.seedrandom(x * ch + y)
        x = x + Math.random! * (x) * 0.1 + Math.random! * 0.2
        y = y + Math.random! * (y) * 0.1 + Math.random! * 0.2
        new THREE.Vector3(x, y, -Math.sqrt(x ** 2 + y ** 2) * 0.3 + Math.random! * 0.3)
      geom = new THREE.Geometry!
      attr = new Float32Array cw * ch * 6 * 3
      cfunc = d3.interpolateSpectral
      cfunc = d3.interpolateBlues
      for i from 0 til cw =>
        for j from 0 til ch =>
          idx = (i * ch + j) * 6
          x = i - cw * 0.5
          y = j - ch * 0.5
          geom.vertices.push vec3(x, y)
          geom.vertices.push vec3(x + 1, y)
          geom.vertices.push vec3(x, y + 1)
          geom.vertices.push vec3(x, y + 1)
          geom.vertices.push vec3(x + 1, y)
          geom.vertices.push vec3(x + 1, y + 1)
          geom.faces.push new THREE.Face3(idx, idx + 1, idx + 2)
          geom.faces.push new THREE.Face3(idx + 3, idx + 4, idx + 5)
          t = Math.sqrt(2.2 * (i - cw * 0.5) ** 2 + (j - ch * 0.5) ** 2) / Math.sqrt((cw * 0.5) ** 2 + (ch * 0.5) ** 2)
          r = 0.01
          t = 2 * (i - cw * 0.5) / cw + 0.5
          c = Math.random! * r - r * 0.5 + t
          c = d3.color(cfunc c)
          for k from 0 til 3 =>
            attr[(idx + k) * 3    ] = c.r / 256
            attr[(idx + k) * 3 + 1] = c.g / 256
            attr[(idx + k) * 3 + 2] = c.b / 256
          c = Math.random! * r - r * 0.5 + t
          c = d3.color(cfunc c)
          for k from 3 til 6 =>
            attr[(idx + k) * 3    ] = c.r / 256
            attr[(idx + k) * 3 + 1] = c.g / 256
            attr[(idx + k) * 3 + 2] = c.b / 256
      bgeom = new THREE.BufferGeometry!
      bgeom.fromGeometry geom
      bgeom.addAttribute \color, new THREE.BufferAttribute attr, 3
      #geom = new THREE.PlaneBufferGeometry 5, 5, 32,32
      wire = new THREE.WireframeGeometry geom
      line = new THREE.LineSegments wire, mat
      #scene.add line
      mesh = new THREE.Mesh bgeom, mat
      scene.add mesh
      light = new THREE.DirectionalLight 0xffffff
      light.position.set 1, 1, 10
      scene.add light

    step: (t) ->
      {controls, renderer, scene, camera} = mod.obj
      controls.update!
      renderer.render scene, camera

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

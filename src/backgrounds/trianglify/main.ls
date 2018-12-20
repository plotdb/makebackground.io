(->
  mod = do
    name: \contour
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    lib: [<[js https://unpkg.com/delaunator@3.0.2/delaunator.min.js]>]
    edit:
      color1: name: "Color 1", type: \color, default: \#fff
      color2: name: "Color 2", type: \color, default: \#000
      variance: name: "Variance", type: \number, default: 0.4, min: 0, max: 1, step: 0.01
      gridsize: name: "Grid Size", type: \number, default: 0.6, min: 0.3, max: 0.7, step: 0.05
    support: {}
    watch: (n, o) ->
      {uniforms} = @obj
      uniforms.color1.value = @obj.color1 = new THREE.Color n.color1
      uniforms.color2.value = @obj.color2 = new THREE.Color n.color2
      if n.variance != o.variance or n.gridsize != o.gridsize => @prepare n.variance, n.gridsize

    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!
      @prepare!

    prepare: (variance = 0.4, gridsize = 0.6) ->
      {camera, scene} = mod.obj
      scene.background = new THREE.Color 0xffffff
      if mod.obj.list => mod.obj.list.map -> scene.remove it
      mod.obj.list = list = []
      d = gridsize
      rc = 12
      cc = 18
      rc = Math.floor(rc / d)
      cc = Math.floor(cc / d)
      rc2 = Math.round(rc/2)
      cc2 = Math.round(cc/2)
      camera.position.set 0, 0, -10
      camera.lookAt 0, 0, 0
      light = new THREE.AmbientLight 0xffff00
      scene.add light
      list.push light
      pts = []
      for r from -rc2 to rc2 => for c from -cc2 to cc2 =>
        pts.push [c * d + (Math.random! - 0.5) * variance, r * d + (Math.random! - 0.5) * variance]
      delaunay = Delaunator.from(pts)
      console.log delaunay
      geom = new THREE.Geometry!
      box = [delaunay.coords.0, delaunay.coords.0, delaunay.coords.1, delaunay.coords.1]
      for i from 1 til delaunay.coords.length by 2 =>
        if box.0 > delaunay.coords[i] => box.0 = delaunay.coords[i]
        if box.1 < delaunay.coords[i] => box.1 = delaunay.coords[i]
        if box.2 < delaunay.coords[i + 1] => box.2 = delaunay.coords[i + 1]
        if box.3 > delaunay.coords[i + 1] => box.3 = delaunay.coords[i + 1]

      count = 0
      for i from 0 til delaunay.triangles.length by 3 =>
        tri = delaunay.triangles
        sx = 0
        for j from 0 til 3 =>
          sx += delaunay.coords[tri[i + j] * 2]
        for j from 0 til 3 =>
          [x, y] = [delaunay.coords[tri[i + j] * 2],delaunay.coords[tri[i + j] * 2 + 1]]
          z = (sx / 3 - box.0) / (box.1 - box.0)
          geom.vertices.push new THREE.Vector3(x, y, z)
        geom.faces.push new THREE.Face3(count, count + 1, count + 2)
        count += 3
      @obj.uniforms = uniforms = do
        color1: value: @obj.color1 or new THREE.Vector3(1, 1, 1)
        color2: value: @obj.color2 or new THREE.Vector3(0, 0, 0)
      mat = new THREE.ShaderMaterial do
        uniforms: uniforms
        vertexShader: """
        varying float c;
        varying float x;
        void main() {
          vec3 pos = position;
          c = pos.z;
          x = pos.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos.x, pos.y, 0, 1.);
        }
        """
        fragmentShader: """
        uniform vec3 color1;
        uniform vec3 color2;
        varying float c;
        varying float x;
        void main() {
          float t = c;
          vec3 col = (1. - t) * color1 + t * color2;
          gl_FragColor = vec4(col, 1.);
        }
        """
      mesh = new THREE.Mesh geom, mat
      scene.add mesh
      list.push mesh
      wireframe = new THREE.WireframeGeometry geom
      line = new THREE.LineSegments wireframe
      scene.add line
      list.push line

    step: (t) ->
      {controls, composer, renderer, camera, scene} = mod.obj
      controls.update!
      #obj.sp.uniforms.time.value = t
      #composer.render!
      renderer.render scene, camera


  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!


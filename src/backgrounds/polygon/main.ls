(->
  mod = do
    name: \polygon
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    edit: do
      variance: name: "Variance", type: \number, default: 0.4, min: 0, max: 1, step: 0.01
      gridsize: name: "Grid Size", type: \number, default: 0.6, min: 0.3, max: 0.7, step: 0.05
    support: {}
    init: ({three}) ->
      mod.obj = obj = {} <<< {controls, renderer, camera, scene, w, h} = three.prepare!
      @prepare!

    prepare: (variance = 0.4, gridsize = 0.6) ->
      {camera, scene} = mod.obj
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
      light = new THREE.AmbientLight 0xff0000
      scene.add light
      list.push light
      console.log variance, gridsize
     
      pts = for r from -rc2 to rc2 => for c from -cc2 to cc2 =>
        [c * d + (Math.random! - 0.5) * variance, r * d + (Math.random! - 0.5) * variance]
      console.log pts, rc, cc
      for r from 0 til rc =>
        for c from 0 til cc =>
          #p1 = (r * cc + c + Math.random! * cc) / (rc * cc)
          #p2 = (r * cc + c + Math.random! * cc) / (rc * cc)
          #p1 = (r * c / (rc * cc) + (rc - r) * (cc - c) / (rc * cc)) * 0.9;
          #p2 = (r * c / (rc * cc) + (rc - r) * (cc - c) / (rc * cc)) * 0.9;
          #p1 = (r * r + c * c) / (rc * rc + cc * cc)
          #p2 = (r * r + c * c) / (rc * rc + cc * cc)
          p1 = (r + c) / (rc + cc)
          p2 = (r + c) / (rc + cc)
          p1 += Math.random! * 0.04 - 0.02
          p2 += Math.random! * 0.04 - 0.02
          color1 = d3.color(d3.interpolateYlGn(p1))
          color1 = Math.round(color1.r * 0x10000 + color1.g * 0x100 + color1.b)
          color2 = d3.color(d3.interpolateYlGn(p2))
          color2 = Math.round(color2.r * 0x10000 + color2.g * 0x100 + color2.b)
          if !((r < rc2 and c < cc2) or (r >= rc2 and c >= cc2)) =>
            [x1, y1] = [pts[r][c].0, pts[r][c].1]
            [x2, y2] = [pts[r + 1][c].0, pts[r + 1][c].1]
            [x3, y3] = [pts[r + 1][c + 1].0, pts[r + 1][c + 1].1]
            [x4, y4] = [pts[r][c + 1].0, pts[r][c + 1].1]
          else
            [x2, y2] = [pts[r][c].0, pts[r][c].1]
            [x3, y3] = [pts[r + 1][c].0, pts[r + 1][c].1]
            [x4, y4] = [pts[r + 1][c + 1].0, pts[r + 1][c + 1].1]
            [x1, y1] = [pts[r][c + 1].0, pts[r][c + 1].1]

          geom = new THREE.Geometry!
          geom.vertices.push new THREE.Vector3(x1, y1, 0)
          geom.vertices.push new THREE.Vector3(x2, y2, 0)
          geom.vertices.push new THREE.Vector3(x3, y3, 0)
          geom.faces.push new THREE.Face3(0, 1, 2)
          mat = new THREE.MeshBasicMaterial color: color1, side: THREE.DoubleSide
          mesh = new THREE.Mesh geom, mat
          scene.add mesh
          list.push mesh

          geom = new THREE.Geometry!
          geom.vertices.push new THREE.Vector3(x1, y1, 0)
          geom.vertices.push new THREE.Vector3(x3, y3, 0)
          geom.vertices.push new THREE.Vector3(x4, y4, 0)
          geom.faces.push new THREE.Face3(0, 1, 2)
          mat = new THREE.MeshBasicMaterial color: color2, side: THREE.DoubleSide
          mesh = new THREE.Mesh geom, mat
          scene.add mesh
          list.push mesh

    watch: (n) ->
      @prepare n.variance, n.gridsize

    step: (t) ->
      {controls, renderer, camera, scene} = mod.obj
      renderer.render scene, camera

    destroy: ->

  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

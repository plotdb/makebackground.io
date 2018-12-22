(->
  mod = do
    name: \fall
    type: \background
    desc: "falling leaves in autumn season"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    support: {}
    edit:
      background: name: "Background", type: \color, default: \#b61
      color1: name: "Color 1", type: \color, default: \#f92
      color2: name: "Color 2", type: \color, default: \#ea8
      color3: name: "Color 3", type: \color, default: \#db9
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      camera.position.set 0, 0, 70
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0xbb6611

      light = new THREE.DirectionalLight 0xffffff
      light.position.set 5, 5, 50
      scene.add light

      groups = new THREE.Group!
      scene.add groups
      mod.obj.group-list = group-list = []
      mod.obj.mat-list = mat-list = []

      mod.obj.count = count = 500

      new THREE.SVGLoader!load '/assets/img/bk/leaf.svg', (paths) ->
        for k from 0 til count =>
          g = new THREE.Group!
          subg = new THREE.Group!
          rg = new THREE.Group!
          idx = Math.floor(Math.random! * 3)
          color = [0xff9922,0xeeaa88,0xddbb99][idx]
          mat = new THREE.MeshBasicMaterial color: color, side: THREE.DoubleSide, transparent: true
          mat.idx = idx
          for i from 0 til paths.length =>
            path = paths[i]
            shapes = path.to-shapes false, false
            for j from 0 til shapes.length =>
              shape = shapes[j]
              geom = new THREE.ShapeBufferGeometry shape
              mesh = new THREE.Mesh geom, mat
              rg.add mesh
              subg.add rg
              rg.position.set -5, 5, 0
              rg.rotation.set Math.PI, 0, 0
              rg.scale.set 0.1, 0.1, 0.1
              g.add subg
          groups.add g
          group-list.push [g, subg, rg]
          mat-list.push mat


      mod.obj <<< x: [], y: [] z: []
      {x, y, z} = mod.obj{x, y, z}
      vz = 0
      for i from 0 til count =>
        vz = 70 - i * 1.5
        rx = Math.pow(140 - vz, 0.5) * 20
        ry = Math.pow(140 - vz, 0.5) * 20
        x.push Math.random! * rx - rx * 0.5 
        y.push Math.random! * ry - ry * 0.5
        z.push vz

      mod.obj <<< {cx: 0, cy: 0}

      document.body.addEventListener \mousemove, (e)->
        [mx, my] = [e.clientX/w, e.clientY/h]
        mod.obj.cx := mx * 30 - 15
        mod.obj.cy := my * 30 - 15
    watch: (n) ->
      if !mod.obj => return
      mod.obj.mat-list.map ->
        it.color.setHex n["color" + (it.idx + 1)]
      mod.obj.scene.background = new THREE.Color n.background
      mod.obj.speed = n.speed

    step: (t) ->
      {x,y,z,cx,cy,camera,controls,group-list,mat-list,renderer,scene,camera,count,speed} = mod.obj
      t = t * 0.1 / (speed or 1)
      camera.position.set 0 + cx, 0 + cy, 100
      camera.lookAt 0, 0, 0
      controls.update!
      if !group-list[0] => return
      for i from 0 til count =>
        [g, subg, rg] = group-list[i]
        if !g => break
        dt = (t + y[i]) - Math.floor(t + y[i])
        dy = y[i] - (dt * 100 - 50)
        dx = x[i] + (dt * 100 - 50) * 2
        rz = dt * 20 + i
        mat-list[i].opacity = 4 * (0.25 - (dt - 0.5) ** 2)
        g.position.set dx, dy, z[i]
        subg.rotation.set rz, rz, rz
      renderer.render scene, camera

  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

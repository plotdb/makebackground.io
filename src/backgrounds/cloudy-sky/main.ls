(->
  mod = do
    name: "Cloud in the Sky"
    type: \background
    desc: "Cartoon style clouds flowing across the blue sky"
    tags: <[cloud sky wind high]>
    slug: "clouds-in-blue-sky"
    license: \CC0
    support: {}
    edit:
      background: name: "Background", type: \color, default: \#3198ff
      color1: name: "Color 1", type: \color, default: \#ffffff
      color2: name: "Color 2", type: \color, default: \#d1f8ff
      color3: name: "Color 3", type: \color, default: \#cadbff
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      camera.position.set -35, 15, 70
      scene.background = new THREE.Color 0x3198ff

      light = new THREE.DirectionalLight 0xffffff
      light.position.set 5, 5, 50
      scene.add light

      groups = new THREE.Group!
      scene.add groups
      group-list = []
      mat-list = []

      count = 100

      new THREE.SVGLoader!load '/assets/img/bk/cloud.svg', (paths) ->
        for k from 0 til count =>
          g = new THREE.Group!
          idx = Math.floor(Math.random! * 3)
          color = [0xffffff,0xeeeeee,0xdddddd][idx]
          mat = new THREE.MeshBasicMaterial color: color, side: THREE.DoubleSide, transparent: true
          mat.idx = idx
          for i from 0 til paths.length =>
            path = paths[i]
            shapes = path.to-shapes false, false
            for j from 0 til shapes.length =>
              shape = shapes[j]
              geom = new THREE.ShapeBufferGeometry shape
              mesh = new THREE.Mesh geom, mat
              mesh.position.set -5, 5, -100
              mesh.rotation.set Math.PI, 0, 0
              mesh.scale.set 0.1, 0.1, 0.1
              g.add mesh
          groups.add g
          group-list.push g
          mat-list.push mat

      y = for i from 0 til count => Math.random! * 80 - 40
      x = for i from 0 til count => Math.random! * 160 - 80
      mod.obj <<< {x, y, group-list, mat-list, count}

    watch: (n) ->
      if !mod.obj => return
      {mat-list, scene, speed} = mod.obj
      mat-list.map ->
        it.color.setHex n["color" + (it.idx + 1)]
      scene.background = new THREE.Color n.background
      mod.obj.speed = n.speed

    step: (t) ->
      {controls, count, renderer, scene, camera, mat-list, group-list, x, y} = mod.obj
      t = t / (mod.obj.speed or 1)
      camera.lookAt -15, 5, 0
      for i from 0 til count =>
        g = group-list[i]
        if !g => break
        dx = (t * 1 * ( 10 - i * 0.1 ) + x[i]) / 200
        dx = dx - Math.floor(dx)
        mat-list[i].opacity = 4 * (0.25 - (dx - 0.5) ** 2)
        g.position.set dx * 200 - 100, y[i], 140 - 160 * i / count
      renderer.render scene, camera

  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

(->
  mod = do
    name: \snowflake-slow
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
      camera.position.set 0, 0, 70
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0x7799bb

      light = new THREE.DirectionalLight 0xffffff
      light.position.set 5, 5, 50
      scene.add light

      groups = new THREE.Group!
      scene.add groups
      mod.obj.group-list = group-list = []
      mod.obj.mat-list = mat-list = []

      mod.obj.count = count = 500

      new THREE.SVGLoader!load 'assets/img/bk/snow.svg', (paths) ->
        for k from 0 til count =>
          g = new THREE.Group!
          color = [0xffffff,0xeeeeee,0xdddddd][Math.floor(Math.random! * 3)]
          mat = new THREE.MeshBasicMaterial color: color, side: THREE.DoubleSide, transparent: true
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


      mod.obj <<< x: [], y: [] z: []
      {x, y, z} = mod.obj{x, y, z}
      offset = 0
      for i from 0 til count =>
        offset = 70 - i * 10
        rate = offset
        rx = rate * 2
        ry = rate * 1
        x.push Math.random! * rx - rx * 0.5 
        y.push Math.random! * ry - ry * 0.5
        z.push offset

      mod.obj <<< {cx: 0, cy: 0}

      document.body.addEventListener \mousemove, (e)->
        [mx, my] = [e.clientX/w, e.clientY/h]
        mod.obj.cx := mx * 30 - 15
        mod.obj.cy := my * 30 - 15

    step: (t) ->
      {x,y,z,cx,cy,camera,controls,group-list,mat-list,renderer,scene,camera,count} = mod.obj
      t = t * 0.1
      camera.position.set 0 + cx, 0 + cy, 70
      camera.lookAt 0, 0, 0
      controls.update!
      for i from 0 til count =>
        g = group-list[i]
        if !g => break
        dt = (t + y[i]) - Math.floor(t + y[i])
        dy = -dt * 100 + y[i] + 50
        rz = dt * 20 + i
        mat-list[i].opacity = 4 * (0.25 - (dt - 0.5) ** 2)
        g.position.set x[i], dy, z[i]
        g.rotation.set 0, 0, rz
      renderer.render scene, camera

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

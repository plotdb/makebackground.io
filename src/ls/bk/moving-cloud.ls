(->
  mod = 
    destroy: ->
      mod.animate.run = false

    run: ->
      {animate, controls, renderer, camera, scene, w, h} = init!
      mod.animate = animate

      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      camera.position.set -25, 20, 70
      camera.lookAt 0, 0, 0
      scene.background = new THREE.Color 0x7799bb

      light = new THREE.DirectionalLight 0xffffff
      light.position.set 5, 5, 50
      scene.add light

      groups = new THREE.Group!
      scene.add groups
      group-list = []
      mat-list = []

      count = 1000

      new THREE.SVGLoader!load '/assets/img/bk/cloud.svg', (paths) ->
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


      start = Date.now!

      y = for i from 0 til count => Math.random! * 100 - 50
      x = for i from 0 til count => Math.random! * 200
      [cx, cy, cz] = [-25, 20, 70]
      animate ->
        camera.position.set -25 + cx, 20 + cy, 70 + cz
        camera.lookAt 0, 0, 0
        controls.update!
        t = (Date.now! - start) * 0.002
        dt = t
        for i from 0 til count =>
          g = group-list[i]
          if !g => break
          dx = (dt * ( 10 - i * 0.1 ) + x[i]) / 200
          dx = dx - Math.floor(dx)
          mat-list[i].opacity = 4 * (0.25 - (dx - 0.5) ** 2)
          g.position.set dx * 200 - 100, y[i], i * 5 - 50
        renderer.render scene, camera

      document.body.addEventListener \mousemove, (e)->
        [mx, my] = [e.clientX/w, e.clientY/h]
        cx := mx * 30 - 15
        cy := my * 30 - 15

  register \moving-cloud, mod
)!

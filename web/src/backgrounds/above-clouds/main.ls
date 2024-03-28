(->
  mod = do
    id: 'above-clouds'
    name: 'Above Clouds'
    type: \background
    desc: "Like flying high above the clouds"
    tags: <[cloud fly sky blue cyan]>
    slug: "blue-sky-above-cloud"
    license: \CC0
    support: {}
    edit:
      c1: name: "Color 1", type: \color, default: \#44ccee
      c2: name: "Color 2", type: \color, default: \#ffffff
    watch: (n) ->
      if !mod.obj => return
      ip = (a, b, c) ->
        Math.floor((b.r - a.r) * c + a.r) * 0x10000 +
        Math.floor((b.g - a.g) * c + a.g) * 0x100 +
        Math.floor((b.b - a.b) * c + a.b) * 0x1
      [c1, c2] = [ldColor.rgb(n.c1), ldColor.rgb(n.c2)]

      mod.obj.scene.background = new THREE.Color n.c1
      for mat in mod.obj.mat-list =>
        mat.color.setHex ip(c1, c2, mat.lv / 7)
      mod.obj.speed = n.speed

    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!
      c1 = r: 0x44, g: 0xcc, b: 0xee
      c2 = r: 0xff, g: 0xff, b: 0xff

      tc = -> it.r * 0x10000 + it.g * 0x100 + it.b
      ip = (a, b, c) ->
        Math.floor((b.r - a.r) * c + a.r) * 0x10000 +
        Math.floor((b.g - a.g) * c + a.g) * 0x100 +
        Math.floor((b.b - a.b) * c + a.b) * 0x1

      scene.background = new THREE.Color tc(c1)

      camera.position.set 0, 4, 22

      color = ip(c1, c2, 7/7)
      geom = new THREE.PlaneGeometry 60, 0, 10, 10
      mat = new THREE.MeshStandardMaterial color: color, metalness: 0, roughness: 0.9
      mesh = new THREE.Mesh geom, mat
      mesh.position.set 0, -4, -0.5
      scene.add mesh
      mod.obj.mat-list = mat-list = []

      mod.obj.layers = layers = []
      for i from 0 til 8 =>
        g = new THREE.Group!
        layers.push g
        scene.add g

        color = ip(c1, c2, i/7)

        for j from 0 til 30 =>
          ri = Math.random! * 2.0 + 1.0
          geom = new THREE.CircleGeometry ri, 64, 64
          mat = new THREE.MeshStandardMaterial color: color, side: THREE.FrontSide, metalness: 0, roughness: 0.9
          mat.lv = i
          mat-list.push mat
          mesh = new THREE.Mesh geom, mat
          a = Math.PI * (j - 2) / 25 + Math.PI
          x = j * 2 - 30
          y = 6 - i * 2 + 14 * (x / 30) ** 2
          z = i * 0.1
          mesh.position.set x, y, z
          g.add mesh

          ri = ri + 0.5 # 1.2
          geom = new THREE.CircleGeometry ri, 64, 64
          mat = new THREE.MeshStandardMaterial color: color, side: THREE.FrontSide, metalness: 0, roughness: 0.9
          mat.lv = i
          mat-list.push mat
          mesh = new THREE.Mesh geom, mat
          a = Math.PI * (j - 2) / 25 + Math.PI
          x = j * 2 - 30
          y = 5 - (i + 0.3) * 2 + 14 * (x / 30) ** 2
          z = i * 0.1
          mesh.position.set x, y, z
          g.add mesh


      light = new THREE.DirectionalLight 0xffffff
      light.position.set 1, 0, 20
      scene.add light

    step: (t) ->
      {renderer, scene, camera, layers, controls, speed} = mod.obj
      t = t * (speed or 1)
      controls.update!
      camera.lookAt 0, 4, 0
      for i from 0 til layers.length =>
        item = layers[i]
        item.position.x = Math.sin(t * 0.4 + i * 3545.6785)
      renderer.render scene, camera

  if module? => module.exports = mod
  if ModManager? => ModManager.register mod
  return mod
)!

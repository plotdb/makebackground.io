(->
  mod = do
    name: \space
    type: \background
    desc: "contour line background"
    tags: <[contour map]>
    slug: "contour-background-line"
    license: \CC0
    support: {}
    edit:
      background: name: "Background", type: \color, default: \#222
      color1: name: "Color 1", type: \color, default: \#ff0
      color2: name: "Color 2", type: \color, default: \#0f0
      color3: name: "Color 3", type: \color, default: \#00f
      color4: name: "Color 4", type: \color, default: \#f0f
    init: ({three}) ->
      mod.obj = obj = {} <<< {animate, controls, renderer, camera, scene, w, h} = three.prepare!
      scene.background = new THREE.Color 0x222222
      camera.position.set 0, 0, 10
      camera.lookAt 0, 0, 0
      geom = new THREE.Geometry!
      count = line: 100, point: 10000
      for i from 0 til count.point =>
        geom.vertices.push new THREE.Vector3 ((i - count.point * 0.5) * 50 / count.point), 0, 0
      mat = new THREE.MeshBasicMaterial color: 0xff0000
      mod.obj.uniforms = do
        time: {type: \f, value: 0}
        speed: {type: \f, value: 1}
        color1: {value: new THREE.Vector3(1, 1, 0)}
        color2: {value: new THREE.Vector3(0, 1, 0)}
        color3: {value: new THREE.Vector3(0, 0, 1)}
        color4: {value: new THREE.Vector3(1, 0, 1)}
      mat.onBeforeCompile = (shader) ->
        shader.uniforms <<< mod.obj.uniforms
        shader.vertexShader = shaderlib.full + shader.vertexShader.replace('#include <common>', """
        \#include <common>
        uniform float time;
        uniform float speed;
        varying vec4 pos;
        """).replace('#include <fog_vertex>', """
        \#include <fog_vertex>
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
        float f, x, y;
        float t = time / speed;
        x = position.x;
        y = gl_Position.y;
        f = fbm(vec3(gl_Position * 0.08) + t * 0.08) * 8. - 4.;
        f = 0.2 * sin(f + x + t + y) * 2. / (exp(-sin(f + gl_Position.x)) + 1.);
        //f = 0.2 * pow(cos(x + y * 0.2 + t + f * 5.), 2.);
        //f = cos(sin(y * gl_Position.x + t)) * 0.2;
        //f = sin(sin(fract(x * 0.5) * cos(x + t + y)) * cos(x));
        //f = sin(sin(x) * cos(x + t + y)) * cos(x);
        //f = atan(sin(x) * cos(x + t + y)) * atan(y + x) * 0.3 + pow(sin(y + x),2.) * 0.5;
        /*
        f = 0.;
        for(float i=0.;i<5.;i++) {
          f = f + 0.1 * sin(pow(x + y, 1./(i * 0.1 + 1.)) + i * x + t);
        }
        */

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y + f, 0., 1.);
        pos = gl_Position;
        """)
        shader.fragmentShader = shaderlib.full + shader.fragmentShader.replace('#include <common>', """
        \#include <common>
        varying vec4 pos;
        uniform vec3 color1;
        uniform vec3 color2;
        uniform vec3 color3;
        uniform vec3 color4;
        """).replace('#include <fog_fragment>', """
        \#include <fog_fragment>
        vec2 loc = vec2((pos.x / pos.z) * 0.5 + 0.5, (pos.y / pos.z) * 0.5 + 0.5);
        vec3 color = (
          color1 * ( 1.214 - sqrt(pow(loc.x, 2.) + pow(loc.y, 2.)) ) +
          color2 * ( 1.214 - sqrt(pow(1. - loc.x, 2.) + pow(loc.y, 2.)) ) +
          color3 * ( 1.214 - sqrt(pow(loc.x, 2.) + pow(1. - loc.y, 2.)) ) +
          color4 * ( 1.214 - sqrt(pow(1. - loc.x, 2.) + pow(1. - loc.y, 2.)) )
        );

        gl_FragColor = vec4(loc.x * loc.x, loc.y * loc.y, (1. - loc.x) * (1. - loc.y), 1.);
        gl_FragColor = vec4(color, 1.);
        """)

      for i from 0 til count.line => 
        line = new THREE.Line geom, mat
        line.position.set 0, (i - count.line * 0.5) * 0.2, 0
        scene.add line
      light = new THREE.AmbientLight 0xffffff
      scene.add light
    watch: (n, o) ->
      if !mod.obj => return
      uni = mod.obj.uniforms
      for i from 1 to 4 =>
        c = new THREE.Color n["color#i"]
        uni["color#i"].value = new THREE.Vector3(c.r, c.g, c.b)
      uni.speed.value = n.speed
      mod.obj.scene.background = new THREE.Color n.background

    step: (t) ->
      {renderer, camera, scene, uniforms} = mod.obj
      uniforms.time.value = t
      renderer.render scene, camera

  if module? => module.exports = mod
  else if ModManager => ModManager.register mod
  else return mod
)!

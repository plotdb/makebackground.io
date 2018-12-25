(->
  require! <[glslify]>
  mod = do
    id: \trianglify
    name: "Trianglify"
    type: \background
    desc: "Morphing triangles in gradient colors"
    tags: <[polygon triangle trianglify grid mesh]>
    slug: "trianglify-polygon-gradient"
    license: \CC0
    lib: [<[js https://unpkg.com/delaunator@3.0.2/delaunator.min.js]>]
    edit:
      c1: name: "Color 1", type: \color, default: \#1a0134
      c2: name: "Color 2", type: \color, default: \#b83959
      c3: name: "Color 2", type: \color, default: \#ffd082
      speed: default: 2
      dyn: name : "Dynamics", type: \number, default: 0.05, min: 0, max: 0.1, step: 0.01
      angle: name: "Angle", type: \number, default: 3.71, min: 0.0, max: 6.28, step: 0.01
      radius: name: "Radius", type: \number, default: 1.06, min: 0, max: 2, step: 0.01
      range: name: "Range", type: \number, default: 0.87, min: 0.1, max: 5, step: 0.01
      #grid: name: "Grid Size", type: \number, default: 0.1, min: 0.01, max: 0.5, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2 c3]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed dyn angle radius range grid]> => u[name]value = n[name]

    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0.76, 0.91, 0.81]
          c2: type: \3fv, value: [0.06, 0.45, 0.83]
          c3: type: \3fv, value: [0.06, 0.45, 0.83]
          speed: type: \1f, value: 2
          dyn: type: \1f, value: 0.05
          angle: type: \1f, value: 3.58
          radius: type: \1f, value: 1.16
          range: type: \1f, value: 1.41
          grid: type: \1f, value: 0.1

        buffer: (renderer, program) ->
          pts = []
          variance = 0.5
          [sx, sy] = [0.2, 0.2]
          {width, height} = renderer{width, height}
          if width > height => sx = sx * height / width
          else sy = sy * width / height

          for r from -1 - sy to 1 + sy by sy => for c from -1 - sx to 1 + sx by sx =>
            v = variance
            pts.push [c + (Math.random! - 0.5) * v * sx, r + (Math.random! - 0.5) * v * sy]
          delaunay = Delaunator.from(pts)
          npt = []
          tri = delaunay.triangles
          for i from 0 til delaunay.triangles.length by 3 =>
            [cx, cy] = [0, 0]
            for j from 0 til 3 =>
              cx += delaunay.coords[tri[i + j] * 2] / 3
              cy += delaunay.coords[tri[i + j] * 2 + 1] / 3
            for j from 0 til 3 =>
              npt.push delaunay.coords[tri[i + j] * 2]
              npt.push delaunay.coords[tri[i + j] * 2 + 1]
              npt.push cx
              npt.push cy
          gl = renderer.gl
          program.data.array = new Float32Array(npt)
          program.data.buffer = buffer = gl.createBuffer!
          gl.bindBuffer gl.ARRAY_BUFFER, buffer
          gl.bufferData gl.ARRAY_BUFFER, program.data.array, gl.STATIC_DRAW
          positionLocation = gl.getAttribLocation program.obj, "position"
          gl.enableVertexAttribArray positionLocation
          gl.vertexAttribPointer positionLocation, 4, gl.FLOAT, false, 0, 0
        render: (renderer, program) ->
          gl = renderer.gl
          gl.clearColor 1,0,0,1
          gl.clear gl.COLOR_BUFFER_BIT
          gl.drawArrays gl.TRIANGLES, 0, program.data.array.length / 4


        vertexShader: glslify '''
        #pragma glslify: fbm = require("shaderlib/func/fbm")
        attribute vec4 position;
        varying vec4 pos;
        uniform float uTime, speed, dyn;
        void main() {
          float t = uTime / speed;
          pos = position;
          pos.x = pos.x + sin(t + 9.42 * fbm(pos.y * 3.)) * clamp(pow(1. - abs(pos.x), 1.5 - dyn * 7.), 0., 1.) * dyn;
          pos.y = pos.y + cos(t + 9.42 * fbm(pos.x * 3.)) * clamp(pow(1. - abs(pos.y), 1.5 - dyn * 7.), 0., 1.) * dyn;
          gl_Position = vec4(vec2(pos), 0., 1.);
        }
        '''

        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: quantize = require("shaderlib/func/quantize")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")
          #pragma glslify: gradient = require("shaderlib/raster/gradient/3d1")

          uniform float uTime, speed, range, angle, radius;
          uniform vec2 uResolution;
          uniform vec3 c1, c2, c3;
          varying vec4 pos;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            float a = sin(uTime / speed) * 0.19634;
            mat2 rm = mat2( cos(a), -sin(a), sin(a), cos(a));
            uv.xy = ((uv.xy - vec2(.5)) * rm) + vec2(.5);
            float f;
            f = fbm(pos.zw);
            f = smoothstep(-1.2, 1.2, pos.w);
            vec2 rpt = vec2(radius, 0.) * mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
            f = smoothstep(0., 2.4, length(pos.zw - rpt));
            if(f<0.5) {
              gl_FragColor = vec4(mix(c1, c2, pow(f * 2., range)), 1.);
            } else {
              gl_FragColor = vec4(mix(c2, c3, pow((f - 0.5) * 2., range)), 1.);
            }
          }
        '''
      }
    ]

    init: ({shaderlib}) -> @ <<< shaderlib.prepare @shaders
    step: (t) -> @renderer.render t
    destroy: ->

  if module? => module.exports = mod
  if ModManager? => ModManager.register mod
  return mod
)!

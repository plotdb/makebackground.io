(->
  require! <[glslify]>
  mod = do
    debug: true
    name: "Dimensional Space"
    type: \background
    desc: "Spotlight style gradient in two colors"
    tags: <[fire flame flare campfire glowing dust particles]>
    slug: "cyan-spotlight-gradient"
    license: \CC0
    edit:
      c1: name: "Color 1", type: \color, default: \#c1e8ce
      c2: name: "Color 2", type: \color, default: \#0f72d3
      speed: default: 2
      range: name: "Range", type: \number, default: 1.7, min: 0.1, max: 5, step: 0.01
      curve: name: "Curve", type: \number, default: 2.0, min: 0.1, max: 10, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed range curve]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0.76, 0.91, 0.81]
          c2: type: \3fv, value: [0.06, 0.45, 0.83]
          speed: type: \1f, value: 2
          range: type: \1f, value: 1.7
          curve: type: \1f, value: 2
        vertexShader: glslify '''
          attribute vec3 position;
          varying vec3 uv;
          void main() {
            uv = position;
            mat4 mvMatrix = mat4(
              1., 0., 0., 0., 0., 1., 0., 0., 0., 0., 1., 0., 0., 0., 0., 1.
            );
            gl_Position = mvMatrix * vec4(position, 1.);
          }
        '''
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: quantize = require("shaderlib/func/quantize")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")
          #pragma glslify: gradient = require("shaderlib/raster/gradient/3d1")

          uniform float uTime, speed, range, curve;
          uniform vec2 uResolution;
          uniform vec3 c1, c2;
          varying vec3 uv;

          void main() {
            //vec3 uv = aspect_ratio(uResolution, 1);
            vec3 nuv = uv;
            nuv.x = uv.x * uResolution.x / uResolution.y;
            float c, size = 20.;
            vec2 id = floor(nuv.xy * size);
            vec2 ft = fract(nuv.xy * size);
            c = max(
              smoothstep(0.06, 0.03, abs(0.5 - ft.x)),
              smoothstep(0.06, 0.03, abs(0.5 - ft.y))
            );

            gl_FragColor = vec4(vec3(c), 1.);
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

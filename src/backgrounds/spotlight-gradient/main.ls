(->
  require! <[glslify]>
  mod = do
    name: "Spotlight Gradient"
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

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            float a = sin(uTime / speed) * 0.19634;
            mat2 rm = mat2( cos(a), -sin(a), sin(a), cos(a));
            uv.xy = ((uv.xy - vec2(.5)) * rm) + vec2(.5);
            float f = pow(pow(uv.x, curve) - pow(uv.y, curve), range);
            gl_FragColor = vec4(mix(c1, c2, f), 1.);
          }
        '''
      }
    ]

    init: ({shaderlib}) -> @ <<< shaderlib.prepare @shaders
    step: (t) -> @renderer.render t
    destroy: ->

  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

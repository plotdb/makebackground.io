(->
  require! <[glslify]>
  mod = do
    id: \ternary-gradient
    name: "Ternary Gradient"
    type: \background
    desc: "Smooth Gradient with three colors from different directions."
    tags: <[gradient red purple yellow ternary]>
    slug: "purple-ternary-rainbow-gradient"
    license: \CC0
    edit:
      c1: name: "Color 1", type: \color, default: \#ff3
      c2: name: "Color 2", type: \color, default: \#ff4c4c
      c3: name: "Color 3", type: \color, default: \#e54cb2
      speed: default: 0.66
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2 c3]> => u[name]value = ldColor.rgbfv(n[name])
      u.speed.value = n.speed
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [1, 1, 0.2]
          c2: type: \3fv, value: [1, 0.3, 0.3]
          c3: type: \3fv, value: [0.9, 0.3, 0.7]
          speed: type: \1f, value: 0.66
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: quantize = require("shaderlib/func/quantize")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")
          #pragma glslify: gradient = require("shaderlib/raster/gradient/3d1")

          uniform float uTime, speed;
          uniform vec2 uResolution;
          uniform vec3 c1, c2, c3;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            float a = uTime * speed;
            mat2 rm = mat2(
              cos(a), -sin(a),
              sin(a), cos(a)
            );
            uv.xy = ((uv.xy - vec2(.5)) * rm) + vec2(.5);
            vec3 c = vec3(
              pow(0. + uv.x, 0.7) * pow(0. + uv.y, 1.0),
              pow(1. - uv.x, 1.0) * (1. - length(0.5 - uv.y) * .2),
              pow(0. + uv.x, 0.8) * pow(1. - uv.y, 0.5)
            );
            gl_FragColor = vec4(c.x * c1 + c.y * c2 + c.z * c3, 1.);
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

(->
  require! <[glslify]>
  mod = do
    name: "Paper Cut Contour"
    type: \background
    desc: "Contour curve in paper cut style with gradient colors"
    tags: <[network graph social media internet map]>
    slug: "green-contour-paper-cut"
    license: \CC0
    edit:
      c1: name: "Color 1", type: \color, default: \#18ff87
      c2: name: "Color 2", type: \color, default: \#03042a
      s: name: "Scale", type: \number, default: 2, min: 0.01, max: 10, step: 0.01
      r: name: "Roundness", type: \number, default: 1, min: 0.01, max: 10, step: 0.01
      bias: name: "Bias", type: \number, default: 0.9, min: 0.09, max: 6, step: 0.01
      step: name: "Step", type: \number, default: 4, min: 1, max: 10
      shadow: name: "Shadow Depth", type: \number, default: 0.13, min: 0.0, max: 1.0, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed s r step bias shadow]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0.09, 1, 0.53]
          c2: type: \3fv, value: [0.01, 0.02, 0.16]
          speed: type: \1f, value: 1
          s: type: \1f, value: 2
          r: type: \1f, value: 1
          step: type: \1f, value: 4
          bias: type: \1f, value: 0.9
          shadow: type: \1f, value: 0.1
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: quantize = require("shaderlib/func/quantize")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")

          uniform vec2 uResolution;
          uniform vec3 c1, c2;
          uniform float uTime, speed, s, r, step, bias, shadow;

          void main() {
            float c, n, t = uTime * 0.1 / speed;
            vec2 v;
            vec3 uv = aspect_ratio(uResolution, 1);
            //uv.xy = uv.xy + vec2(sin(t), cos(t)) * .1;
            uv.xy = vec2(uv.x, uv.y);
            for(float i=-1.;i<=1.;i++) {
              n = noise(
                10. * s +
                0.5 * fbm(uv.xy * r * s + vec2(uv.z *  i * 0.1, .0) + t) +
                s * (uv.xy + vec2(uv.z * i * 0.1, .0))
              );
              v = v + quantize(pow(n, bias), step);
            }
            c = (v.x - v.y * shadow) / 3.;
            gl_FragColor = vec4(mix(c1, c2, vec3(c)), 1.0);
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

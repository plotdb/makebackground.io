(->
  require! <[glslify]>
  mod = do
    name: 'Smooth Contour'
    type: \background
    desc: "Smooth contour line with magical circular pattern."
    tags: <[contour map]>
    slug: "magical-smooth-contour-line"
    license: \CC0
    edit:
      c1: name: "Background", type: \color, default: \#ab6841
      c2: name: "Foreground", type: \color, default: \#cf9866
      scale: name: "Scale", type: \number, default: 1, min: 0.01, max: 5, step: 0.01
      rough: name: "Roughness", type: \number, default: 0.1, min: 0.01, max: 10, step: 0.01
      gap: name: "Gap", type: \number, default: 2, min: 1, max: 100, step: 1
      bias: name: "Bias", type: \number, default: 1, min: 0.16, max: 7, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed scale rough gap bias]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0, 0, 0]
          c2: type: \3fv, value: [0.93, 0.93, 0.93]
          speed: type: \1f, value: 1
          scale: type: \1f, value: 1
          rough: type: \1f, value: 1
          gap: type: \1f, value: 1
          bias: type: \1f, value: 1
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")
          uniform float uTime, speed, scale, rough, gap, bias;
          uniform vec2 uResolution;
          uniform vec3 c1, c2;
          void main() {
            float n, f = 0., t = uTime * 0.1 / speed;
            vec3 uv = aspect_ratio(uResolution, 1);
            for(float i=-1.;i<=1.;i++) {
              n = noise(
                10. / scale +
                0.5 * fbm(uv.xy * rough / scale + vec2(uv.z *  i * 0.1, .0) + t) +
                (uv.xy / scale + vec2(uv.z * i * 0.1, .0) / scale)
              );
              f += n;
            }
            f = pow(fract(f * gap), bias);
            if(f > 0.5) { f = 1.; }
            else { f = 0.; }
            gl_FragColor = vec4(mix(c1, c2, f), 1.);
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

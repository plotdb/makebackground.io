(->
  require! <[glslify]>
  mod = do
    name: 'Gradient Wave'
    type: \background
    desc: "Moving wave with gradient colors"
    tags: <[contour map]>
    slug: "gradient-wave"
    license: \CC0
    edit:
      c1: name: "Color 1", type: \color, default: \#000
      c2: name: "Color 2", type: \color, default: \#3cf
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      u.c1.value = ldColor.rgbfv(n.c1)
      u.c2.value = ldColor.rgbfv(n.c2)
      u.speed.value = n.speed
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0.0, 0.0, 0.0]
          c2: type: \3fv, value: [0.2, 0.8, 1.0]
          speed: type: \1f, value: 1
        fragmentShader: glslify '''

          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: quantize = require("shaderlib/func/quantize")

          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 c1;
          uniform vec3 c2;
          uniform float speed;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            float z1, z2, z3;
            float time = uTime / speed;
            vec2 s1, s2, s3;
            uv.z = uv.z * 0.2;
            z1 = 1.2 * ( uv.x + 0.1 ) * pow(uv.y, .5 + cos(time) * 0.1) + pow(uv.y, 6. + 1. * sin(time));
            z2 = 1.2 * ( uv.x + 0.1 + uv.z) * pow(uv.y, .5 + cos(time) * 0.1) + pow(uv.y, 6. + 1. * sin(time));
            z3 = 1.2 * ( uv.x + 0.1 - uv.z) * pow(uv.y, .5 + cos(time) * 0.1) + pow(uv.y, 6. + 1. * sin(time));
            vec3 c = vec3(.2, .8, 1.);
            s1 = quantize(z1, 12.);
            s2 = quantize(z2, 12.);
            s3 = quantize(z3, 12.);
            c = mix(
              c1,
              c2,
              (
                (s1.x - s1.y * 0.1) +
                (s2.x - s2.y * 0.1) +
                (s3.x - s3.y * 0.1)
              ) / 3.
            );

            gl_FragColor = vec4(c, 1.0);
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

(->
  require! <[glslify]>
  mod = do
    name: "Waves"
    type: \background
    desc: "Elegant flowing waves with simple colors and composition"
    tags: <[wave flow line curve tide]>
    slug: "flowing-waves"
    license: \CC0
    edit:
      c1: name: "Color 1", type: \color, default: \#db8b29
      c2: name: "Color 2", type: \color, default: \#f70
      c3: name: "Color 3", type: \color, default: \#8cbdd2
      bg: name: "Background", type: \color, default: \#600
      amp: name: "Amplitude", type: \number, default: 0.61, min: 0.01, max: 3, step: 0.01
      variance: name: "Variance", type: \number, default: 3, min: 0.01, max: 3, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[bg c1 c2 c3]> => u[name]value = ldColor.rgbfv(n[name])
      u.speed.value = n.speed
      u.amp.value = n.amp
      u.variance.value = n.variance
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0.85, 0.54, 0.16]
          c2: type: \3fv, value: [1, 0.474, 0.0]
          c3: type: \3fv, value: [0.549, 0.741, 0.82]
          bg: type: \3fv, value: [0.4, 0.0, 0.0]
          speed: type: \1f, value: 1
          amp: type: \1f, value: 1
          variance: type: \1f, value: 1
        fragmentShader: glslify '''

          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: noise = require("shaderlib/func/noise")
          #define PI2 6.2831852

          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 c1;
          uniform vec3 c2;
          uniform vec3 c3;
          uniform vec3 bg;
          uniform float speed;
          uniform float amp;
          uniform float variance;

          void main() {
            float f = 0., v, d, t = uTime * 0.25 / speed;
            vec3 uv = aspect_ratio(uResolution, 1);
            float c[3];

            for(float i=1.;i<8.;i++) {
              v = sin((uv.x + i * 0.3 + t * i * 0.1) * PI2 * (0.87 - i * 0.05)) * 
                 (sin(t + i) * 0.05 + i * 0.01) * amp * ((8. - i * variance - uv.x * 8. * (1. - variance)) / 8.) +
                  0.4;
              if(uv.y > v) {
                c[int(mod(i,3.))] += smoothstep(0.1, 0.0, uv.y - v) * 0.2;
              } else {
                c[int(mod(i,3.))] += smoothstep(0.001, 0.0, v - uv.y) * 0.2;
              }
            }
            gl_FragColor = vec4(
              c1 * c[0] +
              c2 * c[1] +
              c3 * c[2] + clamp((1. - (c[0] + c[1] + c[2])) * 1., 0., 1.) * bg,
              1.
            );
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

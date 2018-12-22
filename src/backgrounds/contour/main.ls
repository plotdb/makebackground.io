(->
  require! <[glslify]>
  mod = do
    name: \Contour
    type: \background
    desc: "Map style contour texture for your next vintage style project"
    tags: <[contour map]>
    slug: "gray-contour-map-vintage-texture"
    license: \CC0
    edit:
      c1: name: "Color 1", type: \color, default: \#000
      c2: name: "Color 2", type: \color, default: \#eee
      scale: name: "Scale", type: \number, default: 1, min: 0.05, max: 2, step: 0.01
      intensity: name: "Intensity", type: \number, default: 2.09, min: 0.01, max: 10, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed scale intensity]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0, 0, 0]
          c2: type: \3fv, value: [0.93, 0.93, 0.93]
          speed: type: \1f, value: 1
          scale: type: \1f, value: 1
          intensity: type: \1f, value: 2.09
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: fbm = require("shaderlib/func/fbm")

          uniform float uTime, speed, scale, intensity;
          uniform vec2 uResolution;
          uniform vec3 c1, c2;

          void main() {
            vec3 color = vec3(0., 0., 0.), duv, uv = aspect_ratio(uResolution, 1);
            float e, f, t = uTime / speed, s = 6. / scale;
            for(float i=-1.;i<2.;i++) {
              duv = s * (uv + vec3(uv.z * .2, 0., 0.) * i);
              e = 20. * fbm(t * .1 + duv + fbm(duv * 0.01));
              f = e - fract(e);
              f = f - ((f * 0.5) - fract(f * 0.5)) * 2.;
              f = clamp(f * 0.1 + 0.8 + fract(e), 0., 1.);
              color += mix(c1, c2, pow(f, intensity));
            }
            gl_FragColor = vec4(color / 3., 1.);
          }

        '''

      }]

    init: ({shaderlib}) -> @ <<< shaderlib.prepare @shaders
    step: (t) -> @renderer.render t
    destroy: ->

  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

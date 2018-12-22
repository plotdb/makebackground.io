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
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      #for name in <[c1 c2]> => u[name]value = ldColor.rgbfv(n[name])
      #for name in <[speed range curve]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0.76, 0.91, 0.81]
          speed: type: \1f, value: 1
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: gradient = require('shaderlib/raster/gradient/3d1')
          #pragma glslify: cloud = require('shaderlib/raster/cloud')
          #pragma glslify: vignette = require('shaderlib/func/vignette')
          uniform float uTime;
          uniform vec2 uResolution;
          vec3 cc(vec2 uv, float t) {
            vec3 c = gradient(uv, vec3(1.,0.,0.), vec3(0.,1.,0.), vec3(0.,0.,1.), 3.);
            float d = cloud(uv, t, vec2(1., 0.), 3.);
            float e = vignette(1., 0.5, uv);
            return c * d * e;
          }
          #define color_shift(a,b,c,d,e,f) (a(b, d) + a(vec2(b.x - c, b.y), d) * e * 0.5 + a(vec2(b.x + c, b.y), d) * f * 0.5)
          void main() {
            float t = uTime * 10.;
            vec2 uv = vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y);
            vec3 o = color_shift(cc, uv, 0.1, t, vec3(1., 0., 0.), vec3(0., 0., 1.));
            gl_FragColor = vec4(o, 1.);
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

(->
  require! <[glslify]>
  mod = do
    name: 'Mystery'
    type: \background
    desc: "Mysterious clouds spin around"
    tags: <[cloud fog dust moist]>
    slug: "mysterious-clouds"
    license: \CC0
    support: {}
    edit:
      c1: name: "Color 1", type: \color, default: \#0056ff
      c2: name: "Color 2", type: \color, default: \#ff8c00
      c3: name: "Color 3", type: \color, default: \#c20000
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[c1 c2 c3]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          c1: type: \3fv, value: [0, 0.34, 1]
          c2: type: \3fv, value: [1, 0.55, 0]
          c3: type: \3fv, value: [0.76, 0, 0]
          speed: type: \1f, value: 2
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")

          uniform vec2 uResolution;
          uniform float uTime, speed;
          uniform vec3 c1;
          uniform vec3 c2;
          uniform vec3 c3;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            vec2 p = (uv.xy - vec2(.7, .7))* uResolution.x * 0.001;
            float j, t = uTime / speed;
            for(float i=1.0;i<50.;i++) {
              p.x += 0.005 * cos( 0.3 * i + p.y * i + t) + 0.001;
              p.y += 0.005 * sin( 0.3 * i + p.x * i + t) - 0.001;
            }
            vec3 col = vec3(
              0.5 * sin( 3.0 * p.x + p.y) + 0.5,
              0.5 * cos( 3.0 * p.y + p.x * 3.5) + 0.5,
              sin(p.x * p.y + p.x) * 0.5 + 0.5
            ); 
            col = ((col.x * c1) + (col.y * c2) + (col.z * c3)) / 3.;
            gl_FragColor = vec4(col, 1.0);
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

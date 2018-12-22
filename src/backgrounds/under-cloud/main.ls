(->
  require! <[glslify]>
  mod = do
    name: "Under the Clouds"
    type: \background
    desc: "Fly high into the sky and surf around with clouds"
    tags: <[cloud smoke fog sky fly aviation air wind orange]>
    slug: "orange-fly-under-clouds"
    license: \CC0
    edit:
      fg: name: "Foreground", type: \color, default: \#ffb27f
      bg: name: "Background", type: \color, default: \#00194c
      spread: name: "Spread", type: \number, default: 1, min: 0, max: 10, step: 0.1
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[bg fg]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed spread]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          fg: type: \3fv, value: [1.0, 0.7, 0.5]
          bg: type: \3fv, value: [0.0, 0.1, 0.3]
          speed: type: \1f, value: 1
          spread: type: \1f, value: 1
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: fbm = require("shaderlib/func/fbm")

          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 bg;
          uniform vec3 fg;
          uniform float speed;
          uniform float spread;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            float c = 0.;
            float t, time = uTime / speed;
            for(float i=1.;i<4.;i++) {
              t = time / pow(i, 1.5);
              // dual side
              //c += fbm(pow(uv.y, 4.) + fbm(vec2(uv.x * (10. * i) + t, uv.y * (10. * i)))) * pow(sin(uv.y * 6.28),3.);
              // single side
              c += (
                fbm(
                  pow(uv.y, 4.) + fbm(vec2(uv.x * (10. * i) + t, uv.y * (10. * i))) * uv.y
                ) * pow(uv.y + .3, spread)
              );
            }
            gl_FragColor = vec4(mix(bg, fg, c), 1.);

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

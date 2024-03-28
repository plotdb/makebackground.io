(->
  require! <[glslify]>
  mod = do
    id: \glowing-fall
    name: "Glowing Fall"
    type: \background
    desc: "Glorious falling sparkles"
    tags: <[glowing fall flow fluid gold yellow]>
    slug: "yellow-golden-glowing-fall-sparkles"
    license: \CC0
    edit:
      bg1: name: "Background 1", type: \color, default: \#fff
      bg2: name: "Background 2", type: \color, default: \#fb3
      fg: name: "Foreground", type: \color, default: \#fff
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      u.bg1.value = ldColor.rgbfv(n.bg1)
      u.bg2.value = ldColor.rgbfv(n.bg2)
      u.fg.value = ldColor.rgbfv(n.fg)
      u.speed.value = n.speed
    shaders: [
      {
        uniforms:
          fg: type: \3fv, value: [1, 1, 1]
          bg1: type: \3fv, value: [1, 1, 1]
          bg2: type: \3fv, value: [1, 0.7, 0.2]
          speed: type: \1f, value: 1

        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: quantize = require("shaderlib/func/quantize")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")

          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 fg;
          uniform vec3 bg1;
          uniform vec3 bg2;
          uniform float speed;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            uv.y = 1. - uv.y;
            float t = uTime * .2 * speed;
            float m = 0., c=0.;
            for(float i=0.;i<5.;i+=2.) {
              float size = 3. + i;
              vec2 id = floor(uv.xy * size);
              vec2 ft = fract(uv.xy * size);
              m = smoothstep(.6, .4, ft.y * 0.6 + fbm((uv.x + i * 18. + t) * 27.1234) * 0.8 - 0.4);
              m = mod(100. - t  + ft.y * 0.6 + fbm(uv.x * 52.7134) * 0.4 - 0.2, .3);
              if(m > 0.5) m = 0.;
              if(m < 0.0) m = 0.;
              m = m * 2.;
              float f = fbm(uv.xy * 28981.515 + t);
              float g = fbm((uv.x + i * 32.) * 9890.181572 + t);
              if(g < .5) m = m * g;
              if(f < 0.6) m = m * f;
              c += m;
            }
            c = c * pow((1. -  uv.y), 2.);
            vec3 color = fg * c;
            vec3 bk = mix(bg1, bg2,  pow(length(uv.xy - vec2(.5, -.2)), 3.));
            gl_FragColor = vec4(color + bk, 1.);
          }
        '''
      }]

    init: ({shaderlib}) -> @ <<< shaderlib.prepare @shaders 
    step: (t) -> @renderer.render t
    destroy: ->

  if module? => module.exports = mod
  if ModManager? => ModManager.register mod
  return mod
)!

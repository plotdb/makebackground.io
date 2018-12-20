(->
  require! <[glslify]>
  mod = do
    name: "Glowing Fall"
    type: \background
    desc: "Glorious falling sparkles"
    tags: <[contour map]>
    slug: "glowing-fall-sparkles"
    license: \CC0
    edit:
      background1: name: "Background 1", type: \color, default: \#fff
      background2: name: "Background 2", type: \color, default: \#fb3
      foreground: name: "Foreground", type: \color, default: \#fff
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      bg1 = ldColor.rgb(n.background1)
      bg2 = ldColor.rgb(n.background2)
      fg = ldColor.rgb(n.foreground)
      u.background1.value = [bg1.r, bg1.g, bg1.b].map -> it / 255
      u.background2.value = [bg2.r, bg2.g, bg2.b].map -> it / 255
      u.foreground.value = [fg.r, fg.g, fg.b].map -> it / 255
    shaders: [
      {
        uniforms:
          foreground: type: \3fv, value: [1, 1, 1]
          background1: type: \3fv, value: [1, 1, 1]
          background2: type: \3fv, value: [1, 0.7, 0.2]

        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("../../shaderlib/src/aspect_ratio.shader")
          #pragma glslify: quantize = require("../../shaderlib/src/quantize.shader")
          #pragma glslify: fbm = require("../../shaderlib/src/fbm.shader")
          #pragma glslify: noise = require("glsl-noise/simplex/2d")

          // Processing specific input
          uniform float uTime;
          uniform vec2 uResolution;
          uniform vec3 foreground;
          uniform vec3 background1;
          uniform vec3 background2;

          void main() {
            vec3 uv = aspect_ratio(uResolution, 1);
            uv.y = 1. - uv.y;
            float t = uTime * .2;
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
            vec3 color = foreground * c;
            vec3 bk = mix(background1, background2,  pow(length(uv.xy - vec2(.5, -.2)), 3.));
            gl_FragColor = vec4(color + bk, 1.);
          }
        '''
      }]
    init: ({shaderlib}) ->
      shaderlib.prepare @shaders


    step: (t) ->
      obj = mod.obj

    destroy: ->
  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

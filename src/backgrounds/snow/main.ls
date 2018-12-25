(->
  require! <[glslify]>
  mod = do
    id: \snow
    name: "Snow"
    type: \background
    desc: "Snow fall in winter time"
    tags: <[freeze cold winter christmas ice snow]>
    slug: "blue-snow-backgorund"
    license: \CC0
    edit:
      bg1: name: "Background 1", type: \color, default: \#1059a2
      bg2: name: "Background 2", type: \color, default: \#ffe8e8
      fg: name: "Foreground", type: \color, default: \#ffffff
      speed: default: 1
      blur: name: "Blur", type: \number, default: 0.09, min: 0.01, max: 0.09, step: 0.005
      fade: name: "Fade", type: \number, default: 0.2, min: -0.5, max: 0.5, step: 0.01
      range: name: "Range", type: \number, default: 3, min: 1, max: 4, step: 0.1
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[fg bg1 bg2]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed blur fade range]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          bg1: type: \3fv, value: [0.06, 0.35, 0.64]
          bg2: type: \3fv, value: [1, 0.91, 0.91]
          fg: type: \3fv, value: [1, 1, 1]
          speed: type: \1f, value: 2
          blur: type: \1f, value: 1
          fade: type: \1f, value: 0.2
          range: type: \1f, value: 3
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: noise = require("shaderlib/func/noise")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: cloud = require("shaderlib/raster/cloud")
          #pragma glslify: vignette = require("shaderlib/func/vignette")
          #pragma glslify: blend = require("shaderlib/blend/overlay")

          uniform float uTime, speed, blur, fade, range;
          uniform vec2 uResolution;
          uniform vec3 fg, bg1, bg2;

          vec2 getpt(vec2 id, float t, float layer) {
            vec2 pt = vec2(noise(id.x + noise(id.y) * 625.788 + layer) * t, noise(id.y + noise(id.x) * 9527.145) * t);
            pt = vec2(cos(pt.x), sin(pt.y)) * 0.2;
            return pt;
          }

          void main() {
            float t = (uTime / speed) + 1324.78, f, d;
            float size = 20., s;
            vec3 uv3 = aspect_ratio(uResolution, 0);
            vec2 uv, id, pt, duv;
            f = 0.;
            for(float i=0.;i<3.;i++) {
              size = 9. - range * i;
              duv = vec2(uv3) + t * 0.6 / size + i * 0.2;
              uv = fract(vec2(duv) * size) - 0.5;
              id = floor(vec2(duv) * size);
              s = noise(id) * (0.1 + i * 0.025);
              pt = getpt(id, t, i);
              d = length(uv - pt);
              if(fbm(id * 27.2266) < 0.5) { continue; }
              f += (
                clamp(smoothstep(0.02 + (0.02 + blur) * i + s, 0.02 * i + s, d), 0., 1.) *
                pow(2., 2. - i) / 6.
              );
            }
            float c = cloud(vec2(uv3), t * 10., vec2(1., 0.), 2.) * 0.9;
            vec3 bg = mix(vec3(1.), mix(bg1, bg2, c), fade + uv3.y);
            gl_FragColor = vec4(mix(bg, fg, f), 1.);
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

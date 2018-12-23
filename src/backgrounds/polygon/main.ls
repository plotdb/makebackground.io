(->
  require! <[glslify]>
  mod = do
    name: "Network"
    type: \background
    desc: "web-like interconnection between nodes for your technology project"
    tags: <[network graph social media internet map blue connection]>
    slug: "blue-network-connection-graph"
    license: \CC0
    edit:
      bg: name: "Background", type: \color, default: \#00111a
      fg: name: "Foreground", type: \color, default: \#b7efff
      size: name: "Grid Size", type: \number, default: 19, min: 1, max: 100, step: 1
      rand: name: "Randomness", type: \number, default: 0.4, min: 0.0, max: 1, step: 0.01
      jam: name: "Jamming", type: \number, default: 0.08, min: 0.0, max: 1, step: 0.01
      shadow: name: "Shadow", type: \number, default: 0.92, min: 0, max: 2, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[bg fg]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed size rand jam shadow]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          bg: type: \3fv, value: [0, 0.07, 0.1]
          fg: type: \3fv, value: [0.72, 0.94, 1]
          speed: type: \1f, value: 1
          size: type: \1f, value: 12
          rand: type: \1f, value: 0.5
          jam: type: \1f, value: 0.06
          shadow: type: \1f, value: 1
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: noise = require("shaderlib/func/noise")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: cloud = require("shaderlib/raster/cloud")
          #pragma glslify: vignette = require("shaderlib/func/vignette")
          #pragma glslify: distance_line = require("shaderlib/distance/line")

          uniform float uTime, size, speed, rand, jam, shadow;
          uniform vec2 uResolution;
          uniform vec3 bg, fg;

          float line(vec2 p, vec2 a, vec2 b) {
            float d = distance_line(p, a, b);
            return clamp(smoothstep(0.02, 0.0, d), 0.0, 0.9);
          }

          vec2 getpt(vec2 id, float t) {
            vec2 pt = vec2(noise(id.x + noise(id.y) * 625.788) * t, noise(id.y + noise(id.x) * 9527.145) * t);
            pt = vec2(cos(pt.x), sin(pt.y)) * rand;
            return pt;
          }

          void main() {
            float r, f, d, t = (uTime + 2586.9363) * 2. / speed;
            vec2 auv = gl_FragCoord.xy / uResolution.xy;
            vec2 duv;
            if(uResolution.x > uResolution.y) {
              r = uResolution.x  / uResolution.y;
              auv.x = auv.x * r - ( r - 1. ) * 0.5;
              duv = vec2(r, 1.);
            } else {
              r = uResolution.y  / uResolution.x;
              auv.y = auv.y * r - ( r - 1. ) * 0.5;
              duv = vec2(1., r);
            }
            vec2 uv = fract(vec2(auv) * size) - 0.5;
            vec2 id = floor(vec2(auv) * size);
            vec2 pt1, pt2, pt3;
            vec2 p[9], mv;
            float min = 999.;
            for(float i=-1.;i<=2.;i+=1.) {
              for(float j=-1.;j<=2.;j+=1.) {
                p[int(i * 3. + j + 4.)] = getpt(id + vec2(i, j), t) + vec2(i, j);
                if(length(uv - p[int(i * 3. + j + 4.)]) < min) {
                  min = length(uv - p[int(i * 3. + j + 4.)]);
                  mv = id + vec2(i, j);
                }
              }
            }
            d = length(uv - p[4]);
            f = smoothstep(0.09, 0.08, d);
            f = pow(mix(pow(
              clamp((mv.x/size + (r - 1.) * 0.5 ) / r,0.,1.) *
              clamp((mv.y/size + (r - 1.) * 0.5 ) / r,0.,1.),
              0.5
            ), noise(mv), jam), 1.0);
            f = clamp(f, 0., 1.);
            f = f - pow((auv.x - mv.x / size) * 2. * shadow, 2.);
            gl_FragColor = vec4(mix(bg, fg, f), 1.);
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

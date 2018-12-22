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
      bg1: name: "Background 1", type: \color, default: \#00111a
      bg2: name: "Background 2", type: \color, default: \#002966
      fg: name: "Foreground", type: \color, default: \#b7efff
      size: name: "Grid Size", type: \number, default: 12, min: 1, max: 100, step: 1
      rand: name: "Randomness", type: \number, default: 0.5, min: 0.0, max: 1, step: 0.01
      jam: name: "Jamming", type: \number, default: 0.06, min: 0.0, max: 1, step: 0.01
      offset: name: "Offset", type: \number, default: 0.25, min: 0.0, max: 1, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[bg1 bg2 fg]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed size rand jam offset]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          bg1: type: \3fv, value: [0, 0.07, 0.1]
          bg2: type: \3fv, value: [0, 0.16, 0.4]
          fg: type: \3fv, value: [0.72, 0.94, 1]
          speed: type: \1f, value: 1
          size: type: \1f, value: 12
          rand: type: \1f, value: 0.5
          jam: type: \1f, value: 0.06
          offset: type: \1f, value: 0.25
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: noise = require("shaderlib/func/noise")
          #pragma glslify: fbm = require("shaderlib/func/fbm")
          #pragma glslify: cloud = require("shaderlib/raster/cloud")
          #pragma glslify: vignette = require("shaderlib/func/vignette")
          #pragma glslify: distance_line = require("shaderlib/distance/line")

          uniform float uTime, size, speed, rand, jam, offset;
          uniform vec2 uResolution;
          uniform vec3 bg1, bg2, fg;

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
            float t = (uTime + 2586.9363) * 2. / speed, f, d;
            vec3 uv3 = aspect_ratio(uResolution, 0);
            vec2 uv = fract(vec2(uv3) * size) - 0.5;
            vec2 id = floor(vec2(uv3) * size);
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
            mv += vec2(size, size) * offset;
            d = length(uv - p[4]);
            f = smoothstep(0.09, 0.08, d);
            f = pow(mix(pow(clamp(mv.x/size,0.,1.) * clamp(mv.y/size,0.,1.), 0.5), noise(mv), jam), 1.0);
            f = clamp(f, 0., 1.);
            f = f - (uv3.x - mv.x / size) * 0.5;
            float c = jam * cloud(mv, t * 100., vec2(1., 0.), 0.1) * 0.9;
            gl_FragColor = vec4(mix(mix(bg1, bg2, c), fg, f), 1.);
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

(->
  require! <[glslify]>
  mod = do
    debug: true
    id: \glowing-connection
    name: "Glowing Connection"
    type: \background
    desc: "Connected particles with glowing lines in-between"
    tags: <[network graph social media internet map]>
    slug: "glowing-connect-network"
    license: \CC0
    edit:
      bg1: name: "Background 1", type: \color, default: \#005044
      bg2: name: "Background 2", type: \color, default: \#060b0a
      fg: name: "Foreground", type: \color, default: \#ffffbc
      size: name: "Grid Size", type: \number, default: 0.9, min: 0.1, max: 100, step: 1
      connectivity: name: "Connectivity", type: \number, default: 0.6, min: 0.21, max: 1, step: 0.01
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[bg1 bg2 fg]> => u[name]value = ldColor.rgbfv(n[name])
      for name in <[speed size connectivity]> => u[name]value = n[name]
    shaders: [
      {
        uniforms:
          bg1: type: \3fv, value: [0, 0.31, 0.27]
          bg2: type: \3fv, value: [0.02, 0.04, 0.04]
          fg: type: \3fv, value: [1, 1, 0.74]
          speed: type: \1f, value: 1
          size: type: \1f, value: 1
          connectivity: type: \1f, value: 0.6
        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: aspect_ratio = require("shaderlib/func/aspect_ratio")
          #pragma glslify: noise = require("shaderlib/func/noise")
          #pragma glslify: cloud = require("shaderlib/raster/cloud")
          #pragma glslify: vignette = require("shaderlib/func/vignette")
          #pragma glslify: distance_line = require("shaderlib/distance/line")

          uniform float uTime, size, connectivity, speed;
          uniform vec2 uResolution;
          uniform vec3 bg1, bg2, fg;

          float line(vec2 p, vec2 a, vec2 b) {
            float d = distance_line(p, a, b);
            return clamp(smoothstep(0.03, 0.00, d), 0.0, .9);
          }

          vec2 getpt(vec2 id, float t) {
            vec2 pt = vec2(noise(id.x + noise(id.y) * 625.788) * t, noise(id.y + noise(id.x) * 9527.145) * t);
            pt = vec2(cos(pt.x), sin(pt.y)) * 0.2;
            return pt;
          }

          void main() {
            float t = (uTime + 2586.9363) * 2. * speed, f, d;
            vec3 uv3 = aspect_ratio(uResolution, 0);
            vec2 uv = fract(vec2(uv3) * size) - 0.5;
            vec2 id = floor(vec2(uv3) * size);
            vec2 pt1, pt2, pt3;
            vec2 p[9];
            for(float i=-1.;i<=1.;i+=1.) {
              for(float j=-1.;j<=1.;j+=1.) {
                p[int(i * 3. + j + 4.)] = getpt(id + vec2(i, j), t) + vec2(i, j);
              }
            }
            d = length(uv - p[4]);
            f = smoothstep(0.15, 0.05, d);
            for(float i=0.;i<9.;i++) {
              f += line(uv, p[4], p[int(i)]) * smoothstep(connectivity, 0.2, 0.21 * length(p[int(i)] - p[4]));
            }
            f += line(uv, p[1], p[3]) * smoothstep(connectivity, 0.2, 0.21 * length(p[3] - p[1]));
            f += line(uv, p[1], p[5]) * smoothstep(connectivity, 0.2, 0.21 * length(p[5] - p[1]));
            f += line(uv, p[7], p[3]) * smoothstep(connectivity, 0.2, 0.21 * length(p[3] - p[7]));
            f += line(uv, p[7], p[5]) * smoothstep(connectivity, 0.2, 0.21 * length(p[5] - p[7]));

            f = clamp(pow(f, 1.5), 0., 1.);
            vec3 bg = vec3(.0, 0., .0);
            float c = cloud(vec2(uv3), t * 100., vec2(1., 0.), 0.1) * 0.9;
            gl_FragColor = vec4(mix(mix(bg1, bg2, c), fg, f), 1.);
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

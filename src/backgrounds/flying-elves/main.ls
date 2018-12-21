(->
  require! <[glslify]>
  mod = do
    name: 'Flying Elves'
    type: \background
    desc: "Sparkling particles like elves flying in the woods"
    tags: <[contour map]>
    slug: "flying-elves-glowing-particles"
    license: \CC0
    edit:
      bg1: name: "Background 1", type: \color, default: \#f00
      bg2: name: "Background 2", type: \color, default: \#0f0
      bg3: name: "Background 3", type: \color, default: \#00f
      fg: name: "Particle Color", type: \color, default: \#fff
    support: {}
    watch: (n, o) ->
      u = @shaders.0.uniforms
      for name in <[bg1 bg2 bg3 fg]> => u[name]value = ldColor.rgbfv(n[name])
      u.speed.value = n.speed
    shaders: [
      {
        uniforms:
          bg1: type: \3fv, value: [1, 0, 0]
          bg2: type: \3fv, value: [0, 1, 0]
          bg3: type: \3fv, value: [0, 0, 1]
          fg: type: \3fv, value: [1, 1, 1]
          speed: type: \1f, value: 1

        fragmentShader: glslify '''
          precision highp float;
          #pragma glslify: noise = require("shaderlib/func/noise")
          #pragma glslify: vignette = require("shaderlib/func/vignette")
          #pragma glslify: gradient = require("shaderlib/raster/gradient/3d1")
          uniform vec2 uResolution;
          uniform float uTime;
          uniform vec3 bg1;
          uniform vec3 bg2;
          uniform vec3 bg3;
          uniform vec3 fg;

          void main() {
            vec2 pos;
            float s, d;
            float c = 0.;
            float t = uTime / speed;
            vec2 uv = gl_FragCoord.xy / uResolution.xy;
            uv.y = uv.y * uResolution.y / uResolution.x;
            uv = uv * 0.8 + vec2(.1, .1);
            for(int i=0;i<50;i++) {
              s = noise(float(i) * 9527.7259);
              s = pow(s, 2.5) * 194. + 6.;
              //s = s * s * s * 80. + 20.;
              pos = vec2(
                uv.x + 1. * noise(float(i) * 18132.456) + sin(float(i) + t * 1.2 + uv.y) * 0.03 + t * s * 0.001,
                uv.y + 136.4261 * noise(float(i) * 97523.332 + s) + t * s * 0.001
              );
              pos = vec2(
                mod(pos.x / s, .5 / s) - 0.25 / s,
                mod(pos.y / s, .5 / s) - 0.25 / s
              );
              d = clamp( (1. / s) - length( pos ) / (0.5 / s), 0., 0.01 * pow(s,.5));
              d = d * 300. * (pow(s/100., 2.) + 0.002);
              c += d;
            }
            float vg = vignette(1.1, 0.5, uv);
            //float vg = 1. - vignette(1.0, 0.5, uv);
            gl_FragColor = vec4(
              vec3(vg * (
                1.0 * vec3(gradient(uv, bg1, bg2, bg3, 3.)) + 
                0.8 * fg * clamp(c, 0., 1.)
              )), 1.
            );
            //gl_FragColor = vg * (  vec4(vec3(clamp(c, 0., 1.)), 1.));
          }
        '''
      }
    ]
    init: ({shaderlib}) ->
      shaderlib.prepare @shaders


    step: (t) ->

    destroy: ->

  if module? => module.exports = mod
  if ModManager => ModManager.register mod
  return mod
)!

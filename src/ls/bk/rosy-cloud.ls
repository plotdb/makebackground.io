require! <[glslify]>

<- window.addEventListener \load, _

shader = do
  uniforms: do
    color: type: \3fv, value: [0,0,0]
  vertexShader: """
  precision highp float;
  uniform float uTime;
  attribute vec3 position;
  void main() {
    gl_Position = vec4(position, 1.);
  }
  """
  fragmentShader: glslify('''
  precision highp float;
  #pragma glslify: gradient = require('../../src/raster/gradient/3d1.shader')
  #pragma glslify: cloud = require('../../src/raster/cloud.shader')
  #pragma glslify: vignette = require('../../src/vignette.shader')
  //#pragma glslify: color_shift = require('../../src/color_shift.shader')
  uniform float uTime;
  uniform vec3 color;
  uniform vec2 uResolution;
  vec3 cc(vec2 uv, float t) {
    vec3 c = gradient(uv, vec3(1.,0.,0.), vec3(0.,1.,0.), vec3(0.,0.,1.), 3.);
    float d = cloud(uv, t, vec2(1., 0.), 3.);
    float e = vignette(1., 0.5, uv);
    return c * d * e;
  }
  #define color_shift(a,b,c,d,e,f) (a(b, d) + a(vec2(b.x - c, b.y), d) * e * 0.5 + a(vec2(b.x + c, b.y), d) * f * 0.5)
  void main() {
    float t = uTime;
    vec2 uv = vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y);
    vec3 o = color_shift(cc, uv, 0.1, t, vec3(1., 0., 0.), vec3(0., 0., 1.));
    gl_FragColor = vec4(o, 1.);
  }
  ''')

renderer = new shaderRenderer \#root, shader
renderer.animate (t) ->
  shader.uniforms.color.value = [1, 1, 1]


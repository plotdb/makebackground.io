blur = do
  defines: do
    KERNEL_RADIUS: 5,
    SIGMA: 1
  uniforms: do
    tDiffuse: {type: \t, value: null}
    colorTexture: { value: null },
    texSize: { value: new THREE.Vector2( 1.5, 1.5 ) },
    direction: { value: new THREE.Vector2( 1, 0 ) }
    time: {type: \f, value: 0}

  vertexShader:
    """varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }""",

  fragmentShader:
    """
    \#include <common>
    varying vec2 vUv;
    uniform sampler2D colorTexture;
    uniform sampler2D tDiffuse;
    uniform vec2 texSize;
    uniform vec2 direction;
    uniform float time;
    float gaussianPdf(in float x, in float sigma) {
      return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
    }
    void main() {
      vec3 sample;
      vec3 color = vec3(0,0,0);
      vec2 offset;
      int k = 5;
      for(int i=-5;i<5;i++) {
        offset = (0.001 + 0.001 * fract(sin(time * 0.1 * vUv.x) * 1000000.) ) * float(i) * direction;
        color += texture2D(tDiffuse, vUv + offset).rgb * ((6. - abs(float(i)))/5.);
      }
      color = 0.1 * texture2D(tDiffuse, vUv).rgb + 2. * (color / (float(k) * 2.));
      gl_FragColor = vec4(color, 1.);
    }"""

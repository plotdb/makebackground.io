(->
  config = css: {}, js: {}
  config.css <<< do
    base: <[
      /assets/bootstrap/4.0.0/css/bootstrap.min.css
      /assets/fontawesome/4.7.0/css/font-awesome.min.css
      /assets/loading.css/loading.css
      /assets/ldcolorpicker/0.1.4/ldcp.css
      /assets/ion-rangeslider/2.1.7/css/ion.rangeSlider.css
      /assets/ion-rangeslider/2.1.7/css/ion.rangeSlider.skinFlat.css
      /assets/loading-btn/loading-btn.min.css
      /css/index.css
    ]>
  config.js <<< do
    base: <[
      /assets/jquery/1.10.2/jquery.min.js
      /assets/popper/1.12.5/index.js
      /assets/bootstrap/4.0.0/js/bootstrap.min.js
      /assets/ion-rangeslider/2.1.7/js/ion.rangeSlider.min.js
      /assets/ldcolorpicker/0.1.4/ldcp.min.js
      /assets/ldColor/ldColor.min.js
      /assets/palette/palettes.js
      /assets/clusterize/0.18.1/clusterize.min.js
      /assets/visibility/1.2.4/visibility.min.js
      /assets/smiltool/latest/index.js
      /assets/gifjs/0.2.0/gif.js
      /assets/shaderlib/shader.js
      /js/module/modtool.js
      /js/module/editor.js
    ]>
    three: <[
      /assets/threejs/three.min.js
      /assets/threejs/OrbitControls.js
      /assets/threejs/THREE.MarchingCubes.js
      /assets/threejs/three-tube-geometry.js
      /assets/threejs/text-to-svg.js
      /assets/threejs/LuminosityHighPassShader.js
      /assets/threejs/svg-mesh.js
      /assets/threejs/GPUParticleSystem.js
      /assets/threejs/SVGLoader.js
      /assets/threejs/shaderlib.full.js
      /assets/threejs/EffectComposer.js

      /assets/threejs/CopyShader.js
      /assets/threejs/RenderPass.js
      /assets/threejs/seedrandom.min.js
      /assets/threejs/CurveExtras.js
      /assets/threejs/OutlineEffect.js
      /assets/threejs/UnrealBloomPass.js
      /assets/threejs/points-on-sphere.js
      /assets/threejs/BokehShader.js
      /assets/threejs/Projector.js
      /assets/threejs/d3-color.v1.min.js
      /assets/threejs/d3-interpolate.v1.min.js
      /assets/threejs/d3-scale-chromatic.v1.min.js
      /assets/threejs/ShaderPass.js
      /assets/threejs/BokehPass.js
      /assets/threejs/hexasphere.js
    ]>

  if module? => module.exports = config
)!

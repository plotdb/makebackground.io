init = (name="unnamed", w = window.innerWidth, h = window.innerHeight) ->
  camera = new THREE.PerspectiveCamera 45, w/h, 1, 10000
  scene = new THREE.Scene!
  renderer = new THREE.WebGLRenderer antialias: true
  renderer.setSize w, h
  document.body.appendChild renderer.domElement
  controls = new THREE.OrbitControls camera, renderer.domElement
  controls.enabled = false
  animate = (render-func) ->
    _animate = (value) ->
      requestAnimationFrame _animate
      render-func value
    _animate!
  return {camera, scene, renderer, w, h, controls, animate}

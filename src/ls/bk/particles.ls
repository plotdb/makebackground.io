{animate, controls, renderer, camera, scene, w, h} = init!

renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
camera.position.set 1, 1, 15
camera.lookAt 0, 0, 0
scene.background = new THREE.Color 0xbb66aa

ps = new THREE.GPUParticleSystem!
#scene.add ps

geom = new THREE.SphereGeometry 10, 32, 32
geom = new THREE.BufferGeometry!
/*
for i from 0 til 10000 =>
  [x,y,z] = [0,0,0].map -> Math.random! * 2 - 1
  len = Math.sqrt(x * x + y * y + z * z)
  [x,y,z] = [x,y,z].map -> it/len
  geom.vertices.push new THREE.Vector3(x, y, z)
*/

position = new Float32Array ( 30000 )
pos2 = new Float32Array ( 30000 )
for i from 0 til 10000 =>
  [x,y,z] = [0,0,0].map -> Math.random! * 2 - 1
  len = Math.sqrt(x * x + y * y + z * z)
  [x,y,z] = [x,y,z].map -> 1 * it/len
  pos2[i * 3] = x
  pos2[i * 3 + 1] = y
  pos2[i * 3 + 2] = z
geom.addAttribute \pos2, new THREE.BufferAttribute pos2, 3
geom.addAttribute \position, new THREE.BufferAttribute position, 3

attr = new Float32Array( 10000 )
for i from 0 til 10000 => attr[i] = i * 0.001 #Math.random! * Math.PI * 2 #i + Math.random! * 0.1
geom.addAttribute \idx, new THREE.BufferAttribute attr, 1

mat = new THREE.ShaderMaterial do
  transparent: true
  blending: THREE.AdditiveBlending
  side: THREE.DoubleSide
  depthWrite: false
  uniforms: time: type: \f, value: 0
  vertexShader: """
  uniform float time;
  attribute float idx;
  attribute vec3 pos2;
  void main() {
    vec3 pos = position;
    pos.x = pos.x + sin(pos.y * time) * 0.1 + pos2.x;
    pos.y = pos.y + cos(pos.x * time) * 0.1 + pos2.y;
    gl_PointSize = pos.x * 10. + 10.;
    // knot
    //pos.x = idx * sin(time + idx) + 2. * sin(2. * time + idx) + pos2.x;
    //pos.y = cos(time + idx) - 2. * cos(2. * time + idx) + pos2.y;
    pos.z = -sin(3. * time + idx) + pos.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
  }
  """

  fragmentShader: """
  void main() {
    vec2 pc = gl_PointCoord;
    float d = clamp(2. * (0.5 - length(vec2(pc.x - 0.5, pc.y - 0.5))), 0., 1.);
    if(d < 0.) { discard; }
    float opacity = d;
    gl_FragColor = vec4(1., d, 1., opacity);
  }
  """
mat.transparent = true
points = new THREE.Points geom, mat
scene.add points

start = Date.now!
animate ->
  controls.update!
  t = (Date.now! - start) * 0.0001
  mat.uniforms.time.value = t;
  /*
  for i from 0 til 100 =>
    options = do
      velocityRandomness: 0
      positionRandomness: 3
      size: 20
      colorRandomness: 0
    ps.spawnParticle options
    ps.update t
  */

  renderer.render scene, camera


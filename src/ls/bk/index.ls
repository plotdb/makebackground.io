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

/*
hash = {}

clear = ->
  Array.from(document.querySelectorAll \canvas).map -> it.parentNode.removeChild it



runner = do
  target-name: null
  is-running: false
  target-func: null
  start: (name, target-func) ->
    @ <<< {name, target-func, is-running: true}
    @thread!
  stop: -> @is-running = false
  thread: ->
    _animate = (value) ~>
      requestAnimationFrame _animate
      if @target-func => @target-func value
    if @is-running => _animate!

revoke = (name) ->
  if !hash[name] or !hash[name].destroy => return
  hash[name].destroy!

invoke = (name) ->
  clear!
  if runner.target-name => revoke that
  runner.start name, hash[mod.func]

register = (name, mod) ->
  hash[name] = mod
  if mod.init and !mod.inited =>
    mod.init!
    mod.inited = true
  invoke name

load = (name)->
  if !hash[name] =>
    script = document.createElement("script")
    script.src = "/js/bk/#name.js"
    document.body.appendChild(script)
  else
    invoke name

names = <[moving-cloud snowflake-slow contour]>
Array.from(document.querySelectorAll('#quick-picker .thumb')).map (d,i) -> d.addEventListener \click, ->
  load names[i]
*/



(->

  window.ModManager = ModManager = do
    mods: {}
    init: ->
    load: (name) -> new Promise (res, rej) ~>
      if @mods[name] => return res that
      console.log "first time load #name. load it from web..."
      if !@load.target => @load.target = do
        clear: -> @ <<< _callback: null, name: null, node: null, res: null, rej: null
        callback: (e, b) ->
          @ <<< name: null
          if !(@rej and @res) => return
          return if e => @rej e else @res b
      if @load.target.timeout => clearTimeout @load.target.timeout
      @load.target <<< do
        res: res, rej: rej
        name: name
        timeout: setTimeout (~> 
          if @load.target.node => that.parentNode.removeChild that
          @load.target.clear!
          rej!
        ), 10000
        node: document.createElement("script")

      @load.target.node.src = "/js/bk/#name.js"
      document.body.appendChild(@load.target.node)

    register: (mod) ->
      if !mod or !mod.name or @mods[mod.name] =>
        console.log "register error: ", mod
        return if @load.target and @load.target.callback => @load.target.callback true
      @mods[mod.name] = mod
      if !@load.target => return
      clearTimeout @load.target.timeout
      @load.target.callback null, mod

  ModManager.init!

  window.ModRenderer = ModRenderer = (target) ->
    @setContainer target
    @
  ModRenderer.prototype <<< do
    setSize: (w, h) -> @ <<< {w, h}
    setContainer: (target) -> 
      @target = if typeof(target) == typeof('') => document.querySelector(target) else target
      if @target =>
        box = @target.getBoundingClientRect!
        @ <<< {w: box.width, h: box.height}

    prepare: (w, h) ->
      w = if !(w? and w) => @w or window.innerWidth
      h = if !(h? and h) => @h or window.innerHeight
      camera = new THREE.PerspectiveCamera 45, w/h, 1, 10000
      scene = new THREE.Scene!
      renderer = new THREE.WebGLRenderer antialias: true, preserveDrawingBuffer: true
      renderer.setSize w, h
      controls = new THREE.OrbitControls camera, renderer.domElement
      controls.enabled = false
      return {camera, scene, renderer, w, h, controls}

    render: (mod) ->
      promise = if !mod.inited =>
        console.log "init mod..."
        Promise.resolve!then ~>
          mod.inited = true
          mod.init {three: prepare: ~> 
            ret = @prepare!
            mod._renderer = ret.renderer
            return ret
          }
      else Promise.resolve!
      promise.then ~>
        @mod = mod
        @start!

    running: false

    start: ->
      for i from @target.childNodes.length - 1 to 0 by -1 => @target.removeChild @target.childNodes[i]
      @target.appendChild @mod._renderer.domElement
      if @running => return
      @running = true
      _animate = (time) ~>
        if @running => requestAnimationFrame _animate
        @mod.step time * 0.001
      _animate 0

    stop: -> @running = false

  renderer = new ModRenderer!

  names = <[trianglify snowflake-slow contour liquid cave]>
  Array.from(document.querySelectorAll('#quick-picker .thumb')).map (d,i) -> d.addEventListener \click, ->
    ModManager.load names[i]
      .then ->
        renderer.setContainer \#target
        renderer.render it
      .catch -> console.log "error: ", it
)!


(->
  window.ScriptManager = ScriptManager = do
    hash: {}
    load: (type = \js, src) -> new Promise (res, rej) ~>
      if !@hash[src] => 
        @hash[src] = {promise: {res: [], rej: []}, loaded: false}
      @hash[src].promise.res.push res
      @hash[src].promise.rej.push rej
      if @hash[src].promise.res.length > 1 => return
      script = document.createElement \script
      script.src = src
      script.onload = ~>
        @hash[src].loaded = true
        @hash[src].promise.res.map -> res!
      document.body.appendChild script

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
          if e => return if @rej => @rej e else null
          promises = if b.lib => b.lib.map -> ScriptManager.load it.0, it.1
          else [Promise.resolve!]
          Promise.all promises .then ~> if @res => @res b
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
      @load.target.node.src = "/backgrounds/#name/main.js"
      document.body.appendChild(@load.target.node)

    register: (mod) ->
      if !mod or !mod.name =>
        console.log "register error: ", mod
        return if @load.target and @load.target.callback => @load.target.callback true
      @mods[mod.id] = mod
      if !@load.target => return
      clearTimeout @load.target.timeout
      @load.target.callback null, mod

  ModManager.init!

  window.ModRenderer = ModRenderer = (root, options = {}) ->
    @options = {scale: 1} <<< options
    @setContainer root
    @

  ModRenderer.prototype <<< do
    setSize: (w, h) -> @ <<< {w, h}
    setContainer: (root) -> 
      @root = if typeof(root) == typeof('') => document.querySelector(root) else root
      if @root =>
        box = @root.getBoundingClientRect!
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

    getDom: -> @mod._renderer.domElement

    init-mod: (mod) ->
      promise = if !mod.inited =>
        #console.log "init mod..."
        Promise.resolve!then ~>
          mod.inited = true
          mod.init do
            three: prepare: ~> 
              ret = @prepare!
              mod._renderer = ret.renderer
              return ret
            shaderlib: prepare: (shaders, option = {}) ~>
              renderer = new ShaderRenderer shaders, option <<< {root: @root, scale: @options.scale}
              renderer.init!
              mod._renderer = renderer
              return {renderer}

              
      else Promise.resolve!
      promise.then ~>
        @mod = mod
        @start!

    running: false

    render: (t) -> @mod.step if t? => t else @time * 0.001
    start: ->
      for i from @root.childNodes.length - 1 to 0 by -1 => @root.removeChild @root.childNodes[i]
      @root.appendChild @mod._renderer.domElement
      if @running => return
      @running = true
      _animate = (t) ~>
        if @running => requestAnimationFrame _animate
        @mod.step t * 0.001
        @time = t
      _animate 0

    stop: -> @running = false

)!


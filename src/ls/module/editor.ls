(->
  editor = do
    mod: null
    config: cur: {fontSize: 64}, old: {}

  editor.setSize = (w, h) ->
    @mod._renderer.setSize w, h

  editor.update = (name, value) ->
    @config.old = JSON.parse JSON.stringify @config.cur
    type = @mod.edit[name].type
    if type == \color =>
      if value => value = ldColorPicker.prototype.toHexString(ldColorPicker.prototype.convert.color value)
      @config.cur[name] = parseInt("0x" + ("" + value).substring(1))
    else @config.cur[name] = value
    if @mod.inited and @mod and @mod.watch => @mod.watch @config.cur, @config.old

  init-sliders = ->
    Array.from(document.querySelectorAll '.irs-input input')
      .map ->
        value = {}
        $(it)
          ..val value.default or 0
          ..ionRangeSlider do
            min: value.min or 0
            max: value.max or 100
            step: value.step or 1
            onChange: (data) -> #editor.update key, data.from

  init-colorpickers = ->
    Array.from(document.querySelectorAll '.color input')
      .map ->
        ldcp = new ldColorPicker(it, {class: 'top flat compact-palette'})

  init-slider = (node, key, value) ->
    $(node.querySelector('.irs-input input'))
      ..val value.default or 0
      ..ionRangeSlider do
        min: value.min or 0
        max: value.max or 100
        step: value.step or 1
        onChange: (data) -> editor.update key, data.from

  init-colorpicker = (node, key, value) ->
    ldcp = new ldColorPicker(node.querySelector('input'), {class: 'top flat compact-palette'})
    ldcp.on \change, ->
      editor.update key, it
      node.querySelector('.inner').style.background = it

  renderer = null
  window.init-editor = init-editor = (mod) ->
    if !renderer => renderer := new ModRenderer '#canvas-container'
    ModManager.load(mod)
      .then ->
        mod := it
        renderer.init-mod it
      .then ->
        prepare!
        colors = [v for k,v of mod.edit].filter(-> it.type == \color).map(-> it.default)
        options = document.querySelector(\#editor-custom-options)
        options.innerHTML = ''
        editor.mod = mod
        mod.edit.speed  = {min: 0.1, max: 20, step: 0.1, default: 1} <<< mod.edit.speed or {}
        mod.edit.width  = {min: 1, max: 1920, step: 1, default: 800} <<< mod.edit.width or {}
        mod.edit.height = {min: 1, max: 1280, step: 1, default: 600} <<< mod.edit.height or {}
        init-slider document.querySelector('.editor .speed-option'), \speed, mod.edit.speed
        init-slider document.querySelector('.editor .width-option'), \width, mod.edit.width
        init-slider document.querySelector('.editor .height-option'), \height, mod.edit.height
        for k,v of mod.edit =>
          if k in <[speed width height]> => continue
          node = document.querySelector("\#editor-option-sample-#{v.type}")
          if !node => continue
          node = node.cloneNode(true)
          if v.type == \color =>
            node.querySelector('label').textContent = v.name
            node.querySelector('input').setAttribute \name, k
            init-colorpicker node, k, v
          else if v.type == \number =>
            node.querySelector('label').textContent = v.name
            node.querySelector('input').setAttribute \name, k, v
            init-slider node, k, v
          options.appendChild(node)
          set-palette [] ++ colors
        else
          options.innerHTML = "<div class='col-sm'><div class='empty'></div></div>"
          set-palette []
        for k,v of mod.edit => editor.update k, v.default
        #for k,v of editor.config.{}cur => editor.update k, v.default
        document.querySelector '.editor .title big b' .innerText = "\"#{mod.name}\""
        document.querySelector '.editor .title span:nth-of-type(2)' .innerText = "#{mod.desc}"
        setTimeout (-> set-palette colors, \Palette), 100


  set-palette = (colors, name = 'Palette') ->
    document.querySelector('.editor .palette-option label').textContent = name
    document.querySelector('.editor .palette-option .palette').innerHTML = colors
      .map -> """<div class="color" style="background:#{it}"></div>"""
      .join('')

    Array.from(document.querySelectorAll(".editor *[data-toggle='colorpicker']")).map ((d,i)->
      ldcp = d.getColorPicker!
      ldcp.setPalette {colors: colors.map -> {hex: it}}
      ldcp.setIdx(i % colors.length)
    )

  prepare = ->
    document.querySelector('#palette-picker').addEventListener \click, (e) ->
      target = e.target
      if !target or !target.classList or !target.classList.contains \palette => return
      colors = Array.from(target.querySelectorAll('.color')).map(-> it.style.background)
      name = target.querySelector('.name').textContent
      $(\#palette-picker).modal \hide
      set-palette colors, name

    Array.from(document.querySelectorAll '.editor .color input[data-toggle="colorpicker"]').map (d,i) ->
      ldcp = d.getColorPicker!
      name = d.getAttribute(\name)
      ldcp.on \change, ->
        editor.update name, it
        d.parentNode.querySelector('.inner').style.background = it

    html = []
    for i from 0 til palettes.length by 4 =>
      code = ""
      for j from 0 til 4 =>
        d = palettes[i + j]
        if !d => break
        code += """<div class="palette"><div class="name">#{d.0}</div>""" +
        (d.1.map(-> "<div class='color' style='background:#it'></div>").join('')) +
        "</div>"
      html.push "<div class='line'>#code</div>"

    clusterize = new Clusterize do
      rows: html
      scrollElem: document.querySelector('#palette-picker .clusterize-scroll')
      contentElem: document.querySelector('#palette-picker .clusterize-content')
      rows_in_block: 50

    document.querySelector '.editor .download .btn[data-type="png"]' .addEventListener \click, (e) ->
      canvas = document.querySelector('#canvas-container canvas')
      renderer.render!
      dataurl = canvas.toDataURL "image/png"
      smiltool.url-to-dataurl dataurl, canvas.width, canvas.height
        .then ->
          smiltool.dataurl-to-blob it
        .then (blob) ->
          url = URL.createObjectURL blob
          console.log url
          document.querySelector('#download img')
            ..setAttribute \src, url
            ..style.display = \block
          document.querySelector('#download video')
            ..style.display = \none
          document.querySelector('#download .result').style.height = "#{200}px"
          document.querySelector('#download .btn')
            ..setAttribute \href, url
            ..setAttribute \download, "#{editor.mod.name or 'output'}.#{'png'}"
          $(\#download).modal \show
    document.querySelector '.editor .download .btn[data-type="webm"]' .addEventListener \click, (e) ->
      canvas = document.querySelector('#canvas-container canvas')
      stream = canvas.captureStream!
      options = mimeType: \video/webm
      blob = []
      mr = new MediaRecorder(stream, options)
      mr.ondataavailable = (event) ->
        if event.data and event.data.size > 0 => blob.push event.data
      mr.start!
      document.querySelector '#loading' .classList.add \running
      setTimeout (->
        mr.stop!
        setTimeout (->
          b = new Blob(blob, type: \video/webm)
          url = URL.createObjectURL b
          document.querySelector '#loading' .classList.remove \running
          document.querySelector('#download video')
            ..style.display = \block
            ..innerHTML = """<source type="video/webm" src="#url"/>"""
          document.querySelector('#download img')
            ..style.display = \none
          document.querySelector('#download .btn')
            ..setAttribute \href, url
            ..setAttribute \download, "#{editor.mod.name or 'output'}.#{'webm'}"
          $(\#download).modal \show
        ), 1000
      ), 5000

    window.addEventListener \resize, ->
      editor.setSize window.innerWidth, window.innerHeight
)!

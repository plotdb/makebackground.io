(!->
  renderers = [new ModRenderer!, new ModRenderer!]
  renderers.map (d,i) -> d.setContainer "\#landing-demo div:nth-child(#{i + 1})"
  renderers.curIdx = 0
  window.loadbk = loadbk = (name, options = {}) ->
    idx = renderers.curIdx = 1 - renderers.curIdx
    renderer = renderers[idx]
    options = {delay: 1000, scale: 1} <<< options
    renderer.options.scale = options.scale
    ModManager.load name
      .then ->
        renderer.init-mod it
        ((pidx) ->
          setTimeout (->
            renderer.root.classList.add \show
            renderers[1 - pidx].root.classList.remove \show
            setTimeout (->
              if renderers.curIdx == 1 - pidx => return # prevent race condition
              renderers[1 - pidx].stop!
            ), 1000
          ), options.delay
        ) idx
      .catch -> console.log "error: ", it

  skip = false
  Array.from(document.querySelectorAll('#quick-picker .thumb')).map (d,i) ->
    name = d.getAttribute \data-name
    d.addEventListener \click, ->
      skip := true
      loadbk (name or \contour), {delay: 0, scale: 0.65}
  document.addEventListener \DOMContentLoaded, -> loadbk \contour, {delay: 0, scale: 0.65}
  idx = 1
  thumbs = document.querySelectorAll '#quick-picker .thumb'
  Visibility.every 3000, ->
    if !skip =>
      loadbk thumbs[idx].getAttribute(\data-name), {delay: 0, scale: 0.65}
      idx := ( idx + 1 ) % 5
    skip := false

  window.subscribe = ->
    node = document.querySelector(\#subscribe)
    node.classList.remove 'done', 'fail'
    node.classList.add \loading
    email = document.querySelector(\#email).value
    ret = /^[^@]+@[^.]+\.(.+)$/.exec(email or '')
    if !ret or !email => return
    $.ajax do
      url: \/d/newsletter-subscription
      method: \PUT
      data: {email}
    .then ->
      node.classList.remove \loading
      node.classList.add \done
    .fail ->
      node.classList.remove \loading
      node.classList.add \fail

)!

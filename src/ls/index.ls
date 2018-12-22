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
        renderer.render it
        setTimeout (->
          renderer.root.classList.add \show
          renderers[1 - idx].root.classList.remove \show
          setTimeout (-> renderers[1 - idx].stop!), 1000
        ), options.delay
      .catch -> console.log "error: ", it
  Array.from(document.querySelectorAll('#quick-picker .thumb')).map (d,i) ->
    name = d.getAttribute \data-name
    d.addEventListener \click, -> loadbk (name or \contour), {delay: 0, scale: 0.65}
  document.addEventListener \DOMContentLoaded, -> loadbk \contour, {delay: 0, scale: 0.65}
  idx = 1
  thumbs = document.querySelectorAll '#quick-picker .thumb'
  setInterval (->
    loadbk thumbs[idx].getAttribute(\data-name), {delay: 0, scale: 0.65}
    idx := ( idx + 1 ) % 5
  ), 3000
)!

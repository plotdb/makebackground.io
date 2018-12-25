require! <[fs bluebird]>
require! <[../engine/aux]>
(engine,io) <- (->module.exports = it)  _

# preload bk list so we don't have to read them each time a page is render
metas = {}
JSON.parse(fs.read-file-sync 'static/backgrounds/meta.json' .toString!).map -> metas[it.id] = it

engine.app.get \/bk/:id/, (req, res) ->
  mod = metas[req.params.id]
  if !mod => return aux.r404 res
  res.render 'background.pug', {mod}

engine.app.get \/bk/:id/:slug, (req, res) ->
  mod = metas[req.params.id]
  if !mod => return aux.r404 res
  res.render 'background.pug', {mod}

engine.app.get \/bk/:id/dev, (req, res) ->
  res.render 'background-dev.pug', {name: req.params.id}

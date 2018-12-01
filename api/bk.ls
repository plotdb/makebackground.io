require! <[fs bluebird]>
require! <[../engine/aux]>
(engine,io) <- (->module.exports = it)  _

engine.app.get \/bk/:name/, (req, res) ->
  res.render 'background.pug', {name: req.params.name}

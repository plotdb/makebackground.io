require! <[path]>
fs = require "fs-extra"

template = fs.read-file-sync "web/src/pug/background.pug", \utf8
ret = JSON.parse(fs.read-file-sync "web/static/backgrounds/meta.json", \utf8)

ret.map (o,i) ->
  dir = "web/src/pug/bk/#{o.id}/#{o.slug}"
  fn = path.join(dir, "index.pug")
  _tmp = template
    .replace("//- module","")
    .replace("block vars","""
    block vars
     - var mod = #{JSON.stringify(o)};
    """).trim!
  fs.ensure-dir-sync dir
  fs.write-file-sync fn, _tmp

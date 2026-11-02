## master

 - archive makebackground.io as a static site on gh-pages ( plotdb.github.io/makebackground.io )
   - path agnostic: site paths relative to a per-page relative `<base href>`, works at `/` or any sub path
   - remove auth panel / pages, GA ( UA ), facebook sdk and legacy root pages
   - remove "more formats on loading.io" modal; add archive note
 - upgrade `@zbryikt/template` to 2.5.0, drop node 10 engine pin

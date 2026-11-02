 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, asseturl, basehref, bundleurl, c, config, decache, defer, description, escape, favicon, hashfile, lib, libLoader, md5, mod, ogtype, rootclass, rootid, scriptLoader, thumb_height, thumb_width, thumbnail, thumbtype, title, url, version) {
      pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
if(!libLoader) {
  libLoader = {
    js: {url: {}},
    css: {url: {}},
    root: function(r) { libLoader._r = r; },
    _r: "/assets/lib",
    _v: "",
    version: function(v) { libLoader._v = (v ? "?v=" + v : ""); }
  }
  if(version) { libLoader.version(version); }
}

pug_mixins["script"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
var hurl = (typeof(asseturl) == "function") ? asseturl(url, locals.filename) : url;
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", hurl + (hurl == url ? libLoader._v : ""), true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var o = $$obj[pug_index0];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.js"); }
if (!libLoader.js.url[url]) {
libLoader.js.url[url] = true;
defer = (typeof(c.defer) == "undefined" ? true : !!c.defer);
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
var hurl = (typeof(asseturl) == "function") ? asseturl(url, locals.filename) : url;
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", hurl + (hurl == url ? libLoader._v : ""), true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
var min = (typeof(cfg.min) == "undefined" || cfg.min);
hashfile({type: "js", name: name, files: urls, src: locals.filename});
// content-addressed url when the bundle has been built. it needs no `_v`: the
// filename already changes with the content. before the first build there is no
// entry yet, so fall back to the plain name ( which does need `_v` ).
var fn = (typeof(bundleurl) == "function") ? bundleurl({type: "js", name: name, min: min, src: locals.filename}) : null;
if(!fn) { fn = "/assets/bundle/" + name + (min ? ".min" : "") + ".js" + libLoader._v; }
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
};
pug_mixins["css"] = pug_interp = function(os,cfg){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var str = '', urls = [];
if(!Array.isArray(os)) { os = [os]; }
// iterate os
;(function(){
  var $$obj = os;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
var hurl = (typeof(asseturl) == "function") ? asseturl(url, locals.filename) : url;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", hurl + (hurl == url ? libLoader._v : ""), true, true)) + "\u003E";
}
}
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var o = $$obj[pug_index1];
c = o;
if(typeof(o) == "string") { url = o; c = cfg || {};}
else if(o.url) { url = o.url; }
else { url = libLoader._r + "/" + o.name + "/" + (o.version || 'main') + "/" + (o.path || "index.min.css"); }
if (!libLoader.css.url[url]) {
libLoader.css.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url, true, true)) + "\u003E";
}
else
if (cfg && cfg.pack) {
str = str + ';' + url;
urls.push(url);
}
else {
var hurl = (typeof(asseturl) == "function") ? asseturl(url, locals.filename) : url;
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", hurl + (hurl == url ? libLoader._v : ""), true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
var min = (typeof(cfg.min) == "undefined" || cfg.min);
hashfile({type: "css", name: name, files: urls, src: locals.filename});
var fn = (typeof(bundleurl) == "function") ? bundleurl({type: "css", name: name, min: min, src: locals.filename}) : null;
if(!fn) { fn = "/assets/bundle/" + name + (min ? ".min" : "") + ".css" + libLoader._v; }
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn, true, true)) + "\u003E";
}
};
var navbar = true
var debug = false
var version = "0"
var thumbnail = "https://plotdb.github.io/makebackground.io/assets/img/thumbnail.jpg"
var thumbtype = "image/jpg"
var thumb_width = "1200"
var thumb_height = "630"
var favicon = "assets/img/favicon.png"
var title = "Make Live Wallpaper and Background Online Free"
var description = "create and make your own live, customized backgrounds / wallpapers in seconds for free."
var rootid = ""
var rootclass = ""
var basehref = "./"
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
var version = "0000000";
var decache = "?v=" + version
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();










pug_mixins["slider"] = pug_interp = function(size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!size) size = "sm"
pug_html = pug_html + "\u003Cdiv class=\"up irs-input\"\u003E\u003Cinput" + (pug_attr("class", pug_classes(["form-control","form-control-" + size], [false,true]), false, true)+pug_attr("config", config, true, true)+" default-switch=\"false\"") + "\u003E\u003C\u002Fdiv\u003E";
};
pug_mixins["color-input"] = pug_interp = function(name,size){
var block = (this && this.block), attributes = (this && this.attributes) || {};
if(!size) size = "sm"
pug_html = pug_html + "\u003Cdiv class=\"color\"\u003E \u003Cinput" + (pug_attr("class", pug_classes(["form-control","form-control-" + size], [false,true]), false, true)+pug_attr("name", name, true, true)+" value=\"#f0f0f0\" data-cpclass=\"no-button compact-palette flat\" data-toggle=\"colorpicker\" data-context=\"random\" data-exclusive=\"true\"") + "\u003E\u003Cdiv class=\"inner\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
















if(!scriptLoader) { scriptLoader = {url: {}, config: {}}; }
pug_mixins["script"] = pug_interp = function(url,config){
var block = (this && this.block), attributes = (this && this.attributes) || {};
scriptLoader.config = (config ? config : {});
if (!scriptLoader.url[url]) {
scriptLoader.url[url] = true;
if (/^https?:\/\/./.exec(url)) {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
else {
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + decache, true, true)+pug_attr("defer", !!scriptLoader.config.defer, true, true)+pug_attr("async", !!scriptLoader.config.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
};
pug_mixins["css"] = pug_interp = function(url){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + decache, true, true)) + "\u003E";
};
var mod = {"id":"ternary-gradient","name":"Ternary Gradient","desc":"Smooth Gradient with three colors from different directions.","slug":"purple-ternary-rainbow-gradient","tags":["gradient","red","purple","yellow","ternary"]};
{
var basehref = "../../../"
var url = "https://plotdb.github.io/makebackground.io/bk/" + mod.id + "/";
var thumbnail = "https://plotdb.github.io/makebackground.io/backgrounds/" + mod.id + "/thumbnail.jpg";
var title = mod.name + " / " + title;
var description = mod.desc + " / " + description
}
pug_html = pug_html + "\u003Chead prefix=\"og: http:\u002F\u002Fogp.me\u002Fns#\"\u003E\u003Cbase" + (pug_attr("href", basehref, true, true)) + "\u003E";
if(!lib) {
lib = {}
}
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\u003E\u003Ctitle\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", thumbnail, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", thumbtype, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", thumb_width, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", thumb_height, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", ogtype || "website", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", url, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", title, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", description, true, true)) + "\u003E\u003Cmeta property=\"fb:admins\" content=\"&lt;your-fbapp-admin&gt;\"\u003E\u003Cmeta property=\"fb:app_id\" content=\"&lt;your-fbapp-id&gt;\"\u003E\u003Cmeta name=\"twitter:card\" content=\"summary\"\u003E\u003Cmeta name=\"twitter:site\" content=\"@&lt;your-twitter-account&gt;\"\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug_attr("content", title, true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:description\""+pug_attr("content", description, true, true)) + "\u003E\u003Cmeta name=\"twitter:creator\" content=\"@&lt;your-twitter-account&gt;\"\u003E\u003Cmeta" + (" name=\"twitter:image\""+pug_attr("content", thumbnail, true, true)) + "\u003E\u003Clink" + (" rel=\"icon\" type=\"image\u002Fx-icon\""+pug_attr("href", favicon, true, true)) + "\u003E";
pug_mixins["css"]("css/pack/base.min.css");
pug_mixins["script"]("js/pack/base.js");
pug_mixins["css"]("css/index.css");
pug_mixins["script"]("js/global.js");
pug_mixins["script"]("js/pack/base.js");
pug_mixins["script"]("js/pack/three.js");
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody" + (pug_attr("class", pug_classes([rootclass], [true]), false, true)+pug_attr("id", rootid, true, true)) + "\u003E\u003Cdiv class=\"ld-over-full-inverse\" id=\"loading\"\u003E\u003Cdiv class=\"ld ld-ball ld-bounce\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"archive-note\"\u003Emakebackground.io (2018 – 2026) · archived\u003C\u002Fdiv\u003E\u003Cdiv id=\"micro-nav\"\u003E\u003Ca class=\"title\" href=\"#gallery\"\u003E\u003Ci class=\"fa fa-chevron-left\"\u003E\u003C\u002Fi\u003E MAKEBACKGROUND.IO\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"canvas-container\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal\" id=\"download\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card-body\"\u003E\u003Ch4\u003EGenerated Image\u003C\u002Fh4\u003E\u003Csmall class=\"gray\"\u003Eclick the download button to download\u003C\u002Fsmall\u003E\u003Cdiv class=\"result\"\u003E\u003Cimg\u003E\u003Cvideo" + (pug_attr("controls", true, true, true)) + "\u003E\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-footer\"\u003E\u003Ca class=\"btn btn-lg btn-outline-success mr-2\" href=\"#\" download=\"\"\u003EDownload\u003C\u002Fa\u003E\u003Cdiv class=\"btn btn-lg btn-outline-secondary\" onclick=\"$('#download').modal('hide')\"\u003EClose\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"full-picker fade fade-alt modal\" id=\"palette-picker\"\u003E\u003Cdiv class=\"modal-dialog\"\u003E\u003Cdiv class=\"modal-content\"\u003E\u003Cdiv class=\"closebtn lg\" data-toggle=\"modal\" data-target=\"#palette-picker\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"clusterize-scroll\"\u003E\u003Cdiv class=\"clusterize-content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"editor-option-sample\" style=\"display:none\"\u003E\u003Cdiv class=\"col-sm\" id=\"editor-option-sample-color\"\u003E\u003Clabel\u003EColor\u003C\u002Flabel\u003E";
pug_mixins["color-input"]('color');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm\" id=\"editor-option-sample-number\"\u003E\u003Clabel\u003ENumber\u003C\u002Flabel\u003E";
pug_mixins["slider"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"editor float\"\u003E\u003Cdiv class=\"title\"\u003E\u003Cbig\u003E\u003Cb\u003E\"No Name\"\u003C\u002Fb\u003E\u003C\u002Fbig\u003E\u003Cspan\u003E&nbsp;\u002F&nbsp;\u003C\u002Fspan\u003E\u003Cspan\u003Edefault background without name.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"inner\"\u003E\u003Cdiv class=\"row\"\u003E\u003Cdiv class=\"col-sm-3 palette-option\"\u003E\u003Clabel\u003EPalette\u003C\u002Flabel\u003E\u003Cdiv class=\"palette\" data-toggle=\"modal\" data-target=\"#palette-picker\"\u003E";
// iterate ['#fb4','#fe9','#fdc','#9de']
;(function(){
  var $$obj = ['#fb4','#fe9','#fdc','#9de'];
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var i = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"color\""+pug_attr("style", pug_style("background:" + i), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var i = $$obj[pug_index2];
pug_html = pug_html + "\u003Cdiv" + (" class=\"color\""+pug_attr("style", pug_style("background:" + i), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-2 speed-option\"\u003E\u003Clabel\u003ESpeed\u003C\u002Flabel\u003E";
pug_mixins["slider"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-2 width-option\"\u003E\u003Clabel\u003EWidth\u003C\u002Flabel\u003E";
pug_mixins["slider"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-2 height-option\"\u003E\u003Clabel\u003EHeight\u003C\u002Flabel\u003E";
pug_mixins["slider"]();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-3\"\u003E\u003Clabel\u003EDownload\u003C\u002Flabel\u003E\u003Cdiv class=\"btn-group download\"\u003E\u003Cdiv class=\"dropup\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-dark dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\u003EStatic\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu\"\u003E\u003Ca class=\"dropdown-item\" data-type=\"static\" data-format=\"png\"\u003EPNG\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\" id=\"editor-custom-options\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cscript" + (pug_attr("src", "backgrounds/" + mod.id + "/main.js", true, true)) + "\u003E\u003C\u002Fscript\u003E\u003Cscript\u003EinitEditor(\"" + (pug_escape(null == (pug_interp = mod.id) ? "" : pug_interp)) + "\");\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "asseturl" in locals_for_with ?
        locals_for_with.asseturl :
        typeof asseturl !== 'undefined' ? asseturl : undefined, "basehref" in locals_for_with ?
        locals_for_with.basehref :
        typeof basehref !== 'undefined' ? basehref : undefined, "bundleurl" in locals_for_with ?
        locals_for_with.bundleurl :
        typeof bundleurl !== 'undefined' ? bundleurl : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "config" in locals_for_with ?
        locals_for_with.config :
        typeof config !== 'undefined' ? config : undefined, "decache" in locals_for_with ?
        locals_for_with.decache :
        typeof decache !== 'undefined' ? decache : undefined, "defer" in locals_for_with ?
        locals_for_with.defer :
        typeof defer !== 'undefined' ? defer : undefined, "description" in locals_for_with ?
        locals_for_with.description :
        typeof description !== 'undefined' ? description : undefined, "escape" in locals_for_with ?
        locals_for_with.escape :
        typeof escape !== 'undefined' ? escape : undefined, "favicon" in locals_for_with ?
        locals_for_with.favicon :
        typeof favicon !== 'undefined' ? favicon : undefined, "hashfile" in locals_for_with ?
        locals_for_with.hashfile :
        typeof hashfile !== 'undefined' ? hashfile : undefined, "lib" in locals_for_with ?
        locals_for_with.lib :
        typeof lib !== 'undefined' ? lib : undefined, "libLoader" in locals_for_with ?
        locals_for_with.libLoader :
        typeof libLoader !== 'undefined' ? libLoader : undefined, "md5" in locals_for_with ?
        locals_for_with.md5 :
        typeof md5 !== 'undefined' ? md5 : undefined, "mod" in locals_for_with ?
        locals_for_with.mod :
        typeof mod !== 'undefined' ? mod : undefined, "ogtype" in locals_for_with ?
        locals_for_with.ogtype :
        typeof ogtype !== 'undefined' ? ogtype : undefined, "rootclass" in locals_for_with ?
        locals_for_with.rootclass :
        typeof rootclass !== 'undefined' ? rootclass : undefined, "rootid" in locals_for_with ?
        locals_for_with.rootid :
        typeof rootid !== 'undefined' ? rootid : undefined, "scriptLoader" in locals_for_with ?
        locals_for_with.scriptLoader :
        typeof scriptLoader !== 'undefined' ? scriptLoader : undefined, "thumb_height" in locals_for_with ?
        locals_for_with.thumb_height :
        typeof thumb_height !== 'undefined' ? thumb_height : undefined, "thumb_width" in locals_for_with ?
        locals_for_with.thumb_width :
        typeof thumb_width !== 'undefined' ? thumb_width : undefined, "thumbnail" in locals_for_with ?
        locals_for_with.thumbnail :
        typeof thumbnail !== 'undefined' ? thumbnail : undefined, "thumbtype" in locals_for_with ?
        locals_for_with.thumbtype :
        typeof thumbtype !== 'undefined' ? thumbtype : undefined, "title" in locals_for_with ?
        locals_for_with.title :
        typeof title !== 'undefined' ? title : undefined, "url" in locals_for_with ?
        locals_for_with.url :
        typeof url !== 'undefined' ? url : undefined, "version" in locals_for_with ?
        locals_for_with.version :
        typeof version !== 'undefined' ? version : undefined));
    ;;return pug_html;}; module.exports = template; })() 
 (function() { function pug_attr(t,e,n,r){if(!1===e||null==e||!e&&("class"===t||"style"===t))return"";if(!0===e)return" "+(r?t:t+'="'+t+'"');var f=typeof e;return"object"!==f&&"function"!==f||"function"!=typeof e.toJSON||(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||-1===e.indexOf('"'))?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)(s=pug_classes(r[g]))&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+""}function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (Array, JSON, authPanelDesc, authPanelTitle, c, config, debug, decache, defer, description, escape, favicon, hashfile, lib, libLoader, md5, mod, ogtype, rootclass, rootid, scriptLoader, thumb_height, thumb_width, thumbnail, thumbtype, title, url, version) {
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
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
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
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", url + libLoader._v, true, true)+pug_attr("defer", defer, true, true)+pug_attr("async", !!c.async, true, true)) + "\u003E\u003C\u002Fscript\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/js/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".js";
hashfile({type: "js", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Cscript" + (" type=\"text\u002Fjavascript\""+pug_attr("src", fn + libLoader._v, true, true)) + "\u003E\u003C\u002Fscript\u003E";
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
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
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
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", url + libLoader._v, true, true)) + "\u003E";
}
}
    }
  }
}).call(this);

if (cfg && cfg.pack) {
var name = md5(str);
//var filename = "/css/pack/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
var fn = "/assets/bundle/" + name + "." + (typeof(cfg.min) == "undefined" || cfg.min ? "min" : "") + ".css";
hashfile({type: "css", name: name, files: urls, src: locals.filename});
pug_html = pug_html + "\u003Clink" + (" rel=\"stylesheet\" type=\"text\u002Fcss\""+pug_attr("href", fn + libLoader._v, true, true)) + "\u003E";
}
};
var navbar = true
var debug = false
var version = "0"
var thumbnail = "https://makebackground.io/assets/img/thumbnail.jpg"
var thumbtype = "image/jpg"
var thumb_width = "1200"
var thumb_height = "630"
var favicon = "/assets/img/favicon.png"
var title = "Make Live Wallpaper and Background Online Free"
var description = "create and make your own live, customized backgrounds / wallpapers in seconds for free."
var rootid = ""
var rootclass = ""
pug_html = pug_html + "\u003Chtml lang=\"en\"\u003E";
var version = "0000000";
var decache = "?v=" + version
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();




pug_mixins["cover-modal"] = pug_interp = function(model,className){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["cover-modal-wrapper",className], [false,true]), false, true)+pug_attr("ng-modal", true, true, true)+pug_attr("ng-model", model, true, true)+pug_attr("config", model + ".config", true, true)+pug_attr("ng-class", "{'active':" + model + ".ctrl.toggled,'inactive':" + model + ".ctrl.toggled==false}", true, true)) + "\u003E\u003Cdiv" + (" class=\"cover-modal\""+pug_attr("ng-click", model+".ctrl.toggle(false)", true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cover-modal-inner\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
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
var mod = {"id":"flying-elves","name":"Flying Elves","desc":"Sparkling particles like elves flying in the woods","slug":"flying-elves-glowing-particles","tags":["woods","forest","elf","flying","dot","dust","light"]};
{
var url = "https://makebackground.io/bk/" + mod.id + "/";
var thumbnail = "https://makebackground.io/backgrounds/" + mod.id + "/thumbnail.jpg";
var title = mod.name + " / " + title;
var description = mod.desc + " / " + description
}
pug_html = pug_html + "\u003Chead prefix=\"og: http:\u002F\u002Fogp.me\u002Fns#\"\u003E";
if(!lib) {
lib = {}
}
pug_html = pug_html + "\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0\"\u003E\u003Ctitle\u003E" + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E\u003Cmeta property=\"og:locale\" content=\"zh_TW\"\u003E\u003Cmeta" + (" property=\"og:image\""+pug_attr("content", thumbnail, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:type\""+pug_attr("content", thumbtype, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:width\""+pug_attr("content", thumb_width, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:image:height\""+pug_attr("content", thumb_height, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:type\""+pug_attr("content", ogtype || "website", true, true)) + "\u003E\u003Cmeta" + (" property=\"og:url\""+pug_attr("content", url, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:title\""+pug_attr("content", title, true, true)) + "\u003E\u003Cmeta" + (" property=\"og:description\""+pug_attr("content", description, true, true)) + "\u003E\u003Cmeta property=\"fb:admins\" content=\"&lt;your-fbapp-admin&gt;\"\u003E\u003Cmeta property=\"fb:app_id\" content=\"&lt;your-fbapp-id&gt;\"\u003E\u003Cmeta name=\"twitter:card\" content=\"summary\"\u003E\u003Cmeta name=\"twitter:site\" content=\"@&lt;your-twitter-account&gt;\"\u003E\u003Cmeta" + (" name=\"twitter:title\""+pug_attr("content", title, true, true)) + "\u003E\u003Cmeta" + (" name=\"twitter:description\""+pug_attr("content", description, true, true)) + "\u003E\u003Cmeta name=\"twitter:creator\" content=\"@&lt;your-twitter-account&gt;\"\u003E\u003Cmeta" + (" name=\"twitter:image\""+pug_attr("content", thumbnail, true, true)) + "\u003E\u003Clink" + (" rel=\"icon\" type=\"image\u002Fx-icon\""+pug_attr("href", favicon, true, true)) + "\u003E";
pug_mixins["css"]("/css/pack/base.min.css");
pug_mixins["script"]("/js/pack/base.js");
pug_mixins["css"]("/css/index.css");
pug_mixins["script"]("/js/global.js");
pug_mixins["script"]("/js/pack/base.js");
pug_mixins["script"]("/js/pack/three.js");
pug_html = pug_html + "\u003C\u002Fhead\u003E\u003Cbody" + (pug_attr("class", pug_classes([rootclass], [true]), false, true)+pug_attr("id", rootid, true, true)) + "\u003E\u003Cdiv class=\"ld-over-full-inverse\" id=\"loading\"\u003E\u003Cdiv class=\"ld ld-ball ld-bounce\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
var version = "0000000";
var decache = "?v=" + version
var escjson = function(obj) { return 'JSON.parse(unescape("' + escape(JSON.stringify(obj)) + '"))'; };
var eschtml = (function() { var MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' }; var repl = function(c) { return MAP[c]; }; return function(s) { return s.replace(/[&<>'"]/g, repl); }; })();




pug_mixins["cover-modal"] = pug_interp = function(model,className){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["cover-modal-wrapper",className], [false,true]), false, true)+pug_attr("ng-modal", true, true, true)+pug_attr("ng-model", model, true, true)+pug_attr("config", model + ".config", true, true)+pug_attr("ng-class", "{'active':" + model + ".ctrl.toggled,'inactive':" + model + ".ctrl.toggled==false}", true, true)) + "\u003E\u003Cdiv" + (" class=\"cover-modal\""+pug_attr("ng-click", model+".ctrl.toggle(false)", true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"cover-modal-inner\"\u003E";
block && block();
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
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
pug_html = pug_html + "\u003Cdiv ng-if=\"!staticMode\"\u003E";
pug_mixins["cover-modal"].call({
block: function(){
if(!authPanelTitle) authPanelTitle = "Don't Worry, It's Free!"
if(!authPanelDesc) authPanelDesc = "sign in now"
pug_html = pug_html + "\u003Cdiv class=\"panel panel-defaut\"\u003E\u003Cdiv class=\"closebtn lg\" ng-click=\"auth.ctrl.toggle()\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"panel-header\"\u003E\u003Cdiv class=\"text-center\" style=\"font-size:1.5em;margin-top:20px\"\u003E\u003Cspan\u003E" + (pug_escape(null == (pug_interp = authPanelTitle) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003Cdiv class=\"block light tiny\"\u003E" + (pug_escape(null == (pug_interp = authPanelDesc) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"panel-body\"\u003E\u003Cdiv class=\"sep gap\"\u003E\u003C\u002Fdiv\u003E\u003Cform class=\"form\"\u003E\u003Cdiv class=\"form-group\" ng-class=\"{'has-error':auth.error.email,'has-feedback':auth.error.email}\"\u003E\u003Clabel\u003EEmail\u003C\u002Flabel\u003E\u003Cinput class=\"form-control\" type=\"text\" placeholder=\"Email\" ng-model=\"auth.email\" tabindex=\"1\"\u003E\u003Cdiv class=\"form-control-feedback with-text up-tag\" ng-show=\"auth.error.email\"\u003E{{auth.error.email}}\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-control-feedback\" ng-show=\"auth.error.email\"\u003E\u003Ci class=\"fa fa-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\" ng-show=\"!auth.isSignIn\" ng-class=\"{'has-error':auth.error.displayname,'has-feedback':auth.error.displayname}\"\u003E\u003Clabel\u003EDisplay Name\u003C\u002Flabel\u003E\u003Cinput class=\"form-control\" type=\"text\" placeholder=\"like 'J. Doe'\" ng-model=\"auth.displayname\" tabindex=\"2\"\u003E\u003Cdiv class=\"form-control-feedback with-text up-tag\" ng-show=\"auth.error.displayname\"\u003E{{auth.error.displayname}}\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-control-feedback\" ng-show=\"auth.error.displayname\"\u003E\u003Ci class=\"fa fa-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-group\" ng-class=\"{'has-error':auth.error.passwd,'has-feedback':auth.error.passwd}\"\u003E\u003Clabel\u003EPassword\u003C\u002Flabel\u003E\u003Cinput class=\"form-control\" type=\"password\" placeholder=\"Password\" ng-model=\"auth.passwd\" tabindex=\"3\"\u003E\u003Cdiv class=\"form-control-feedback with-text up-tag\" ng-show=\"auth.error.passwd\"\u003E{{auth.error.passwd}}\u003C\u002Fdiv\u003E\u003Cdiv class=\"form-control-feedback\" ng-show=\"auth.error.passwd\"\u003E\u003Ci class=\"fa fa-close\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"btn btn-block btn-success btn-lg ld ld-ext-right\""+" ng-click=\"auth.login()\""+pug_attr("ng-cloak", true, true, true)+" ng-class=\"{'running':auth.loading}\"") + "\u003E\u003Cspan ng-show=\"!auth.isSignIn\"\u003ESIGNUP\u003C\u002Fspan\u003E\u003Cspan ng-show=\"auth.isSignIn\"\u003ELOGIN\u003C\u002Fspan\u003E\u003Cdiv class=\"ld ld-ring ld-spin-fast\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\" style=\"margin:10px 0\"\u003E\u003Cdiv class=\"col-sm-6 textx-left\" style=\"padding-left:0\"\u003E\u003Cdiv class=\"checkbox\" ng-show=\"!auth.isSignIn\" style=\"margin:3px 0;font-size:12px;\"\u003E\u003Clabel\u003E\u003Cinput type=\"checkbox\" style=\"margin-top:2px\" ng-model=\"auth.subscribe\"\u003E subscribe newsletter\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-6 text-right\"\u003E\u003Ca href=\"\u002Fauth\u002Freset\u002F\" style=\"margin-top:16px;font-size:12px;\"\u003Eforgot password? &#xbb;\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fform\u003E\u003Cdiv style=\"position:relative\"\u003E\u003Cdiv class=\"text-center\"\u003E\u003Cspan style=\"background:#fff;padding:0 10px\"\u003Eor login with\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"sep gap\" style=\"margin:-10px 0 20px\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\" id=\"authpanel-social-login\"\u003E\u003Cdiv class=\"col-xs-6\"\u003E\u003Ca class=\"btn btn-default btn-block\" ng-attr-href=\"\u002Fu\u002Fauth\u002Ffacebook?nexturl={{nexturl || ''}}\" target=\"_blank\" style=\"background:#4368b3;color:#fff;font-size:16px;border-color:#4368b3\"\u003E\u003Ci class=\"fa fa-facebook-official\"\u003E\u003C\u002Fi\u003E Facebook\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-xs-6\"\u003E\u003Ca class=\"btn btn-default btn-block\" ng-attr-href=\"\u002Fu\u002Fauth\u002Fgoogle?nexturl={{nexturl || ''}}\" target=\"_blank\" style=\"font-size:16px\" href=\"#\"\u003E\u003Csvg version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"14px\" height=\"14px\" viewBox=\"0 0 48 48\" style=\"display:inline;position:relative;top:2px\"\u003E\u003Cg\u003E\u003Cpath fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"\u003E\u003C\u002Fpath\u003E\u003Cpath fill=\"none\" d=\"M0 0h48v48H0z\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fg\u003E\u003C\u002Fsvg\u003E\u003Cspan\u003E&nbsp;Google\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv" + (" class=\"text-center\""+pug_attr("ng-cloak", true, true, true)+" style=\"color:#fff\"") + "\u003E\u003Cspan ng-show=\"auth.isSignIn\"\u003ENewcomer here? \u003Ca href=\"#\" ng-click=\"auth.isSignIn=false\"\u003ESign up &#xbb;\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003Cspan ng-show=\"!auth.isSignIn\"\u003EAlready a member? \u003Ca href=\"#\" ng-click=\"auth.isSignIn=true\"\u003ESign In &#xbb;\u003C\u002Fa\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
}, "auth", 'authpanel');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv id=\"micro-nav\"\u003E\u003Ca class=\"title\" href=\"\u002F#gallery\"\u003E\u003Ci class=\"fa fa-chevron-left\"\u003E\u003C\u002Fi\u003E MAKEBACKGROUND.IO\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"canvas-container\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal\" id=\"download\"\u003E\u003Cdiv class=\"card\"\u003E\u003Cdiv class=\"card-body\"\u003E\u003Ch4\u003EGenerated Image\u003C\u002Fh4\u003E\u003Csmall class=\"gray\"\u003Eclick the download button to download\u003C\u002Fsmall\u003E\u003Cdiv class=\"result\"\u003E\u003Cimg\u003E\u003Cvideo" + (pug_attr("controls", true, true, true)) + "\u003E\u003C\u002Fvideo\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-footer\"\u003E\u003Ca class=\"btn btn-lg btn-outline-success mr-2\" href=\"#\" download=\"\"\u003EDownload\u003C\u002Fa\u003E\u003Cdiv class=\"btn btn-lg btn-outline-secondary\" onclick=\"$('#download').modal('hide')\"\u003EClose\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"modal\" id=\"loadingio\"\u003E\u003Cdiv class=\"card\" style=\"height:460px\"\u003E\u003Cdiv class=\"card-body text-left\" style=\"font-size:1.25em;display:flex;align-items:center;justify-content:center\"\u003E\u003Cdiv\u003E\u003Cdiv\u003Efor better formats support:\u003C\u002Fdiv\u003E\u003Ch3\u003EPlease head to \u003Ca href=\"https:\u002F\u002Floading.io\u002Fbackground\u002F\"\u003Eloading.io\u003C\u002Fa\u003E\u003C\u002Fh3\u003E\u003Chr\u003E\u003Cp\u003EWe used a Chrome-exclusive tech for animation generation here which had several limitations, such as limitations in quality, formats, and the results are not seamless repeatable.\u003C\u002Fp\u003E\u003Cp\u003EMeanwhile, we have upgraded loading.io's editor with advanced features and formats support. To provide better results and supports to our users, we decided to migrate effects in makebackground.io to loading.io.\u003C\u002Fp\u003E\u003Cp class=\"mb-0\"\u003EYou can still download static images here, but for more options and formats, please go directly to \u003Ca href=\"https:\u002F\u002Floading.io\u002Fbackground\u002F\"\u003Eloading.io\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"card-footer\"\u003E\u003Cdiv class=\"btn btn-lg btn-outline-secondary\" onclick=\"$('#loadingio').modal('hide')\"\u003EClose\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"full-picker fade fade-alt modal\" id=\"palette-picker\"\u003E\u003Cdiv class=\"modal-dialog\"\u003E\u003Cdiv class=\"modal-content\"\u003E\u003Cdiv class=\"closebtn lg\" data-toggle=\"modal\" data-target=\"#palette-picker\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"clusterize-scroll\"\u003E\u003Cdiv class=\"clusterize-content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv id=\"editor-option-sample\" style=\"display:none\"\u003E\u003Cdiv class=\"col-sm\" id=\"editor-option-sample-color\"\u003E\u003Clabel\u003EColor\u003C\u002Flabel\u003E";
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
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"col-sm-3\"\u003E\u003Clabel\u003EDownload\u003C\u002Flabel\u003E\u003Cdiv class=\"btn-group download\"\u003E\u003Cdiv class=\"dropup\"\u003E\u003Cdiv class=\"btn btn-sm btn-outline-dark dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\"\u003EStatic\u003C\u002Fdiv\u003E\u003Cdiv class=\"dropdown-menu\"\u003E\u003Ca class=\"dropdown-item\" data-type=\"static\" data-format=\"png\"\u003EPNG\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"btn btn-sm btn-outline-dark\" style=\"border-left:0\" onclick=\"$('#loadingio').modal('show')\"\u003EMore ...\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"row\" id=\"editor-custom-options\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cscript" + (pug_attr("src", "/backgrounds/" + mod.id + "/main.js", true, true)) + "\u003E\u003C\u002Fscript\u003E\u003Cscript\u003EinitEditor(\"" + (pug_escape(null == (pug_interp = mod.id) ? "" : pug_interp)) + "\");\u003C\u002Fscript\u003E";
if (!debug) {
pug_html = pug_html + "\u003C!-- Global site tag (gtag.js) - Google Analytics--\u003E\u003Cscript" + (pug_attr("async", true, true, true)+" src=\"https:\u002F\u002Fwww.googletagmanager.com\u002Fgtag\u002Fjs?id=UA-131345441-1\"") + "\u003E\u003C\u002Fscript\u003E\u003Cscript\u003Ewindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'UA-131345441-1');\u003C\u002Fscript\u003E\u003Cdiv id=\"fb-root\"\u003E\u003C\u002Fdiv\u003E\u003Cscript\u003E(function(d, s, id) {\n  var js, fjs = d.getElementsByTagName(s)[0];\n  if (d.getElementById(id)) return;\n  js = d.createElement(s); js.id = id;\n  js.src = \"\u002F\u002Fconnect.facebook.net\u002Fzh_TW\u002Fsdk.js#xfbml=1&version=v2.9&appId=\u003Cyour-app-id\u003E\";\n  fjs.parentNode.insertBefore(js, fjs);\n}(document, 'script', 'facebook-jssdk'));\u003C\u002Fscript\u003E";
}
pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";
    }.call(this, "Array" in locals_for_with ?
        locals_for_with.Array :
        typeof Array !== 'undefined' ? Array : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "authPanelDesc" in locals_for_with ?
        locals_for_with.authPanelDesc :
        typeof authPanelDesc !== 'undefined' ? authPanelDesc : undefined, "authPanelTitle" in locals_for_with ?
        locals_for_with.authPanelTitle :
        typeof authPanelTitle !== 'undefined' ? authPanelTitle : undefined, "c" in locals_for_with ?
        locals_for_with.c :
        typeof c !== 'undefined' ? c : undefined, "config" in locals_for_with ?
        locals_for_with.config :
        typeof config !== 'undefined' ? config : undefined, "debug" in locals_for_with ?
        locals_for_with.debug :
        typeof debug !== 'undefined' ? debug : undefined, "decache" in locals_for_with ?
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
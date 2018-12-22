/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var o,a,l,h,c,u,f,d,_,g,p,m,v,E,T,y,C,I,A,b,D,S,w,N,O,k,P=function(t){var e=!1;function n(e){var n=this,s=!1;return t(this).one(i.TRANSITION_END,function(){s=!0}),setTimeout(function(){s||i.triggerTransitionEnd(n)},e),this}var i={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(e){var n,i=e.getAttribute("data-target");i&&"#"!==i||(i=e.getAttribute("href")||""),"#"===i.charAt(0)&&(n=i,i=n="function"==typeof t.escapeSelector?t.escapeSelector(n).substr(1):n.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1"));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(n){t(n).trigger(e.end)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],o=e[s],a=o&&i.isElement(o)?"element":(l=o,{}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if(!new RegExp(r).test(a))throw new Error(t.toUpperCase()+': Option "'+s+'" provided type "'+a+'" but expected type "'+r+'".')}var l}};return e=("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"},t.fn.emulateTransitionEnd=n,i.supportsTransitionEnd()&&(t.event.special[i.TRANSITION_END]={bindType:e.end,delegateType:e.end,handle:function(e){if(t(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}}),i}(e),L=(a="alert",h="."+(l="bs.alert"),c=(o=e).fn[a],u={CLOSE:"close"+h,CLOSED:"closed"+h,CLICK_DATA_API:"click"+h+".data-api"},f="alert",d="fade",_="show",g=function(){function t(t){this._element=t}var e=t.prototype;return e.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},e.dispose=function(){o.removeData(this._element,l),this._element=null},e._getRootElement=function(t){var e=P.getSelectorFromElement(t),n=!1;return e&&(n=o(e)[0]),n||(n=o(t).closest("."+f)[0]),n},e._triggerCloseEvent=function(t){var e=o.Event(u.CLOSE);return o(t).trigger(e),e},e._removeElement=function(t){var e=this;o(t).removeClass(_),P.supportsTransitionEnd()&&o(t).hasClass(d)?o(t).one(P.TRANSITION_END,function(n){return e._destroyElement(t,n)}).emulateTransitionEnd(150):this._destroyElement(t)},e._destroyElement=function(t){o(t).detach().trigger(u.CLOSED).remove()},t._jQueryInterface=function(e){return this.each(function(){var n=o(this),i=n.data(l);i||(i=new t(this),n.data(l,i)),"close"===e&&i[e](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),o(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),o.fn[a]=g._jQueryInterface,o.fn[a].Constructor=g,o.fn[a].noConflict=function(){return o.fn[a]=c,g._jQueryInterface},g),R=(m="button",E="."+(v="bs.button"),T=".data-api",y=(p=e).fn[m],C="active",I="btn",A="focus",b='[data-toggle^="button"]',D='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+T,FOCUS_BLUR_DATA_API:"focus"+E+T+" blur"+E+T},k=function(){function t(t){this._element=t}var e=t.prototype;return e.toggle=function(){var t=!0,e=!0,n=p(this._element).closest(D)[0];if(n){var i=p(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&p(this._element).hasClass(C))t=!1;else{var s=p(n).find(w)[0];s&&p(s).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!p(this._element).hasClass(C),p(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!p(this._element).hasClass(C)),t&&p(this._element).toggleClass(C)},e.dispose=function(){p.removeData(this._element,v),this._element=null},t._jQueryInterface=function(e){return this.each(function(){var n=p(this).data(v);n||(n=new t(this),p(this).data(v,n)),"toggle"===e&&n[e]()})},s(t,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),t}(),p(document).on(O.CLICK_DATA_API,b,function(t){t.preventDefault();var e=t.target;p(e).hasClass(I)||(e=p(e).closest(N)),k._jQueryInterface.call(p(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,b,function(t){var e=p(t.target).closest(N)[0];p(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),p.fn[m]=k._jQueryInterface,p.fn[m].Constructor=k,p.fn[m].noConflict=function(){return p.fn[m]=y,k._jQueryInterface},k),j=function(t){var e="carousel",n="bs.carousel",i="."+n,o=t.fn[e],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h="next",c="prev",u="left",f="right",d={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load"+i+".data-api",CLICK_DATA_API:"click"+i+".data-api"},_="carousel",g="active",p="slide",m="carousel-item-right",v="carousel-item-left",E="carousel-item-next",T="carousel-item-prev",y={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},C=function(){function o(e,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=t(e)[0],this._indicatorsElement=t(this._element).find(y.INDICATORS)[0],this._addEventListeners()}var C=o.prototype;return C.next=function(){this._isSliding||this._slide(h)},C.nextWhenVisible=function(){!document.hidden&&t(this._element).is(":visible")&&"hidden"!==t(this._element).css("visibility")&&this.next()},C.prev=function(){this._isSliding||this._slide(c)},C.pause=function(e){e||(this._isPaused=!0),t(this._element).find(y.NEXT_PREV)[0]&&P.supportsTransitionEnd()&&(P.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},C.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},C.to=function(e){var n=this;this._activeElement=t(this._element).find(y.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(e>this._items.length-1||e<0))if(this._isSliding)t(this._element).one(d.SLID,function(){return n.to(e)});else{if(i===e)return this.pause(),void this.cycle();var s=e>i?h:c;this._slide(s,this._items[e])}},C.dispose=function(){t(this._element).off(i),t.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},C._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},C._addEventListeners=function(){var e=this;this._config.keyboard&&t(this._element).on(d.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(t(this._element).on(d.MOUSEENTER,function(t){return e.pause(t)}).on(d.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&t(this._element).on(d.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},C._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},C._getItemIndex=function(e){return this._items=t.makeArray(t(e).parent().find(y.ITEM)),this._items.indexOf(e)},C._getItemByDirection=function(t,e){var n=t===h,i=t===c,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===c?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},C._triggerSlideEvent=function(e,n){var i=this._getItemIndex(e),s=this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0]),r=t.Event(d.SLIDE,{relatedTarget:e,direction:n,from:s,to:i});return t(this._element).trigger(r),r},C._setActiveIndicatorElement=function(e){if(this._indicatorsElement){t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);var n=this._indicatorsElement.children[this._getItemIndex(e)];n&&t(n).addClass(g)}},C._slide=function(e,n){var i,s,r,o=this,a=t(this._element).find(y.ACTIVE_ITEM)[0],l=this._getItemIndex(a),c=n||a&&this._getItemByDirection(e,a),_=this._getItemIndex(c),C=Boolean(this._interval);if(e===h?(i=v,s=E,r=u):(i=m,s=T,r=f),c&&t(c).hasClass(g))this._isSliding=!1;else if(!this._triggerSlideEvent(c,r).isDefaultPrevented()&&a&&c){this._isSliding=!0,C&&this.pause(),this._setActiveIndicatorElement(c);var I=t.Event(d.SLID,{relatedTarget:c,direction:r,from:l,to:_});P.supportsTransitionEnd()&&t(this._element).hasClass(p)?(t(c).addClass(s),P.reflow(c),t(a).addClass(i),t(c).addClass(i),t(a).one(P.TRANSITION_END,function(){t(c).removeClass(i+" "+s).addClass(g),t(a).removeClass(g+" "+s+" "+i),o._isSliding=!1,setTimeout(function(){return t(o._element).trigger(I)},0)}).emulateTransitionEnd(600)):(t(a).removeClass(g),t(c).addClass(g),this._isSliding=!1,t(this._element).trigger(I)),C&&this.cycle()}},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s=r({},a,t(this).data());"object"==typeof e&&(s=r({},s,e));var l="string"==typeof e?e:s.slide;if(i||(i=new o(this,s),t(this).data(n,i)),"number"==typeof e)i.to(e);else if("string"==typeof l){if("undefined"==typeof i[l])throw new TypeError('No method named "'+l+'"');i[l]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(e){var i=P.getSelectorFromElement(this);if(i){var s=t(i)[0];if(s&&t(s).hasClass(_)){var a=r({},t(s).data(),t(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(t(s),a),l&&t(s).data(n).to(l),e.preventDefault()}}},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(d.CLICK_DATA_API,y.DATA_SLIDE,C._dataApiClickHandler),t(window).on(d.LOAD_DATA_API,function(){t(y.DATA_RIDE).each(function(){var e=t(this);C._jQueryInterface.call(e,e.data())})}),t.fn[e]=C._jQueryInterface,t.fn[e].Constructor=C,t.fn[e].noConflict=function(){return t.fn[e]=o,C._jQueryInterface},C}(e),H=function(t){var e="collapse",n="bs.collapse",i="."+n,o=t.fn[e],a={toggle:!0,parent:""},l={toggle:"boolean",parent:"(string|element)"},h={SHOW:"show"+i,SHOWN:"shown"+i,HIDE:"hide"+i,HIDDEN:"hidden"+i,CLICK_DATA_API:"click"+i+".data-api"},c="show",u="collapse",f="collapsing",d="collapsed",_="width",g="height",p={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function i(e,n){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(n),this._triggerArray=t.makeArray(t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var i=t(p.DATA_TOGGLE),s=0;s<i.length;s++){var r=i[s],o=P.getSelectorFromElement(r);null!==o&&t(o).filter(e).length>0&&(this._selector=o,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var o=i.prototype;return o.toggle=function(){t(this._element).hasClass(c)?this.hide():this.show()},o.show=function(){var e,s,r=this;if(!this._isTransitioning&&!t(this._element).hasClass(c)&&(this._parent&&0===(e=t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(e=null),!(e&&(s=t(e).not(this._selector).data(n))&&s._isTransitioning))){var o=t.Event(h.SHOW);if(t(this._element).trigger(o),!o.isDefaultPrevented()){e&&(i._jQueryInterface.call(t(e).not(this._selector),"hide"),s||t(e).data(n,null));var a=this._getDimension();t(this._element).removeClass(u).addClass(f),this._element.style[a]=0,this._triggerArray.length>0&&t(this._triggerArray).removeClass(d).attr("aria-expanded",!0),this.setTransitioning(!0);var l=function(){t(r._element).removeClass(f).addClass(u).addClass(c),r._element.style[a]="",r.setTransitioning(!1),t(r._element).trigger(h.SHOWN)};if(P.supportsTransitionEnd()){var _="scroll"+(a[0].toUpperCase()+a.slice(1));t(this._element).one(P.TRANSITION_END,l).emulateTransitionEnd(600),this._element.style[a]=this._element[_]+"px"}else l()}}},o.hide=function(){var e=this;if(!this._isTransitioning&&t(this._element).hasClass(c)){var n=t.Event(h.HIDE);if(t(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",P.reflow(this._element),t(this._element).addClass(f).removeClass(u).removeClass(c),this._triggerArray.length>0)for(var s=0;s<this._triggerArray.length;s++){var r=this._triggerArray[s],o=P.getSelectorFromElement(r);if(null!==o)t(o).hasClass(c)||t(r).addClass(d).attr("aria-expanded",!1)}this.setTransitioning(!0);var a=function(){e.setTransitioning(!1),t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)};this._element.style[i]="",P.supportsTransitionEnd()?t(this._element).one(P.TRANSITION_END,a).emulateTransitionEnd(600):a()}}},o.setTransitioning=function(t){this._isTransitioning=t},o.dispose=function(){t.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},o._getConfig=function(t){return(t=r({},a,t)).toggle=Boolean(t.toggle),P.typeCheckConfig(e,t,l),t},o._getDimension=function(){return t(this._element).hasClass(_)?_:g},o._getParent=function(){var e=this,n=null;P.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=t(this._config.parent)[0];var s='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return t(n).find(s).each(function(t,n){e._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},o._addAriaAndCollapsedClass=function(e,n){if(e){var i=t(e).hasClass(c);n.length>0&&t(n).toggleClass(d,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(e){var n=P.getSelectorFromElement(e);return n?t(n)[0]:null},i._jQueryInterface=function(e){return this.each(function(){var s=t(this),o=s.data(n),l=r({},a,s.data(),"object"==typeof e&&e);if(!o&&l.toggle&&/show|hide/.test(e)&&(l.toggle=!1),o||(o=new i(this,l),s.data(n,o)),"string"==typeof e){if("undefined"==typeof o[e])throw new TypeError('No method named "'+e+'"');o[e]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),i}();return t(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(e){"A"===e.currentTarget.tagName&&e.preventDefault();var i=t(this),s=P.getSelectorFromElement(this);t(s).each(function(){var e=t(this),s=e.data(n)?"toggle":i.data();m._jQueryInterface.call(e,s)})}),t.fn[e]=m._jQueryInterface,t.fn[e].Constructor=m,t.fn[e].noConflict=function(){return t.fn[e]=o,m._jQueryInterface},m}(e),W=function(t){var e="dropdown",i="bs.dropdown",o="."+i,a=".data-api",l=t.fn[e],h=new RegExp("38|40|27"),c={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+a,KEYDOWN_DATA_API:"keydown"+o+a,KEYUP_DATA_API:"keyup"+o+a},u="disabled",f="show",d="dropup",_="dropright",g="dropleft",p="dropdown-menu-right",m="dropdown-menu-left",v="position-static",E='[data-toggle="dropdown"]',T=".dropdown form",y=".dropdown-menu",C=".navbar-nav",I=".dropdown-menu .dropdown-item:not(.disabled)",A="top-start",b="top-end",D="bottom-start",S="bottom-end",w="right-start",N="left-start",O={offset:0,flip:!0,boundary:"scrollParent"},k={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)"},L=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var l=a.prototype;return l.toggle=function(){if(!this._element.disabled&&!t(this._element).hasClass(u)){var e=a._getParentFromElement(this._element),i=t(this._menu).hasClass(f);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=t.Event(c.SHOW,s);if(t(e).trigger(r),!r.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof n)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var o=this._element;t(e).hasClass(d)&&(t(this._menu).hasClass(m)||t(this._menu).hasClass(p))&&(o=e),"scrollParent"!==this._config.boundary&&t(e).addClass(v),this._popper=new n(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===t(e).closest(C).length&&t("body").children().on("mouseover",null,t.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),t(this._menu).toggleClass(f),t(e).toggleClass(f).trigger(t.Event(c.SHOWN,s))}}}},l.dispose=function(){t.removeData(this._element,i),t(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&(this._popper.destroy(),this._popper=null)},l.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},l._addEventListeners=function(){var e=this;t(this._element).on(c.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},l._getConfig=function(n){return n=r({},this.constructor.Default,t(this._element).data(),n),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},l._getMenuElement=function(){if(!this._menu){var e=a._getParentFromElement(this._element);this._menu=t(e).find(y)[0]}return this._menu},l._getPlacement=function(){var e=t(this._element).parent(),n=D;return e.hasClass(d)?(n=A,t(this._menu).hasClass(p)&&(n=b)):e.hasClass(_)?n=w:e.hasClass(g)?n=N:t(this._menu).hasClass(p)&&(n=S),n},l._detectNavbar=function(){return t(this._element).closest(".navbar").length>0},l._getPopperConfig=function(){var t=this,e={};return"function"==typeof this._config.offset?e.fn=function(e){return e.offsets=r({},e.offsets,t._config.offset(e.offsets)||{}),e}:e.offset=this._config.offset,{placement:this._getPlacement(),modifiers:{offset:e,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}}},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i);if(n||(n=new a(this,"object"==typeof e?e:null),t(this).data(i,n)),"string"==typeof e){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},a._clearMenus=function(e){if(!e||3!==e.which&&("keyup"!==e.type||9===e.which))for(var n=t.makeArray(t(E)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=t(n[s]).data(i),l={relatedTarget:n[s]};if(o){var h=o._menu;if(t(r).hasClass(f)&&!(e&&("click"===e.type&&/input|textarea/i.test(e.target.tagName)||"keyup"===e.type&&9===e.which)&&t.contains(r,e.target))){var u=t.Event(c.HIDE,l);t(r).trigger(u),u.isDefaultPrevented()||("ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),n[s].setAttribute("aria-expanded","false"),t(h).removeClass(f),t(r).removeClass(f).trigger(t.Event(c.HIDDEN,l)))}}}},a._getParentFromElement=function(e){var n,i=P.getSelectorFromElement(e);return i&&(n=t(i)[0]),n||e.parentNode},a._dataApiKeydownHandler=function(e){if((/input|textarea/i.test(e.target.tagName)?!(32===e.which||27!==e.which&&(40!==e.which&&38!==e.which||t(e.target).closest(y).length)):h.test(e.which))&&(e.preventDefault(),e.stopPropagation(),!this.disabled&&!t(this).hasClass(u))){var n=a._getParentFromElement(this),i=t(n).hasClass(f);if((i||27===e.which&&32===e.which)&&(!i||27!==e.which&&32!==e.which)){var s=t(n).find(I).get();if(0!==s.length){var r=s.indexOf(e.target);38===e.which&&r>0&&r--,40===e.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===e.which){var o=t(n).find(E)[0];t(o).trigger("focus")}t(this).trigger("click")}}},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return O}},{key:"DefaultType",get:function(){return k}}]),a}();return t(document).on(c.KEYDOWN_DATA_API,E,L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API,y,L._dataApiKeydownHandler).on(c.CLICK_DATA_API+" "+c.KEYUP_DATA_API,L._clearMenus).on(c.CLICK_DATA_API,E,function(e){e.preventDefault(),e.stopPropagation(),L._jQueryInterface.call(t(this),"toggle")}).on(c.CLICK_DATA_API,T,function(t){t.stopPropagation()}),t.fn[e]=L._jQueryInterface,t.fn[e].Constructor=L,t.fn[e].noConflict=function(){return t.fn[e]=l,L._jQueryInterface},L}(e),M=function(t){var e="modal",n="bs.modal",i="."+n,o=t.fn.modal,a={backdrop:!0,keyboard:!0,focus:!0,show:!0},l={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},h={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,FOCUSIN:"focusin"+i,RESIZE:"resize"+i,CLICK_DISMISS:"click.dismiss"+i,KEYDOWN_DISMISS:"keydown.dismiss"+i,MOUSEUP_DISMISS:"mouseup.dismiss"+i,MOUSEDOWN_DISMISS:"mousedown.dismiss"+i,CLICK_DATA_API:"click"+i+".data-api"},c="modal-scrollbar-measure",u="modal-backdrop",f="modal-open",d="fade",_="show",g={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},p=function(){function o(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(g.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var p=o.prototype;return p.toggle=function(t){return this._isShown?this.hide():this.show(t)},p.show=function(e){var n=this;if(!this._isTransitioning&&!this._isShown){P.supportsTransitionEnd()&&t(this._element).hasClass(d)&&(this._isTransitioning=!0);var i=t.Event(h.SHOW,{relatedTarget:e});t(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(f),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(h.CLICK_DISMISS,g.DATA_DISMISS,function(t){return n.hide(t)}),t(this._dialog).on(h.MOUSEDOWN_DISMISS,function(){t(n._element).one(h.MOUSEUP_DISMISS,function(e){t(e.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(e)}))}},p.hide=function(e){var n=this;if(e&&e.preventDefault(),!this._isTransitioning&&this._isShown){var i=t.Event(h.HIDE);if(t(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var s=P.supportsTransitionEnd()&&t(this._element).hasClass(d);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(h.FOCUSIN),t(this._element).removeClass(_),t(this._element).off(h.CLICK_DISMISS),t(this._dialog).off(h.MOUSEDOWN_DISMISS),s?t(this._element).one(P.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},p.dispose=function(){t.removeData(this._element,n),t(window,document,this._element,this._backdrop).off(i),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},p.handleUpdate=function(){this._adjustDialog()},p._getConfig=function(t){return t=r({},a,t),P.typeCheckConfig(e,t,l),t},p._showElement=function(e){var n=this,i=P.supportsTransitionEnd()&&t(this._element).hasClass(d);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&P.reflow(this._element),t(this._element).addClass(_),this._config.focus&&this._enforceFocus();var s=t.Event(h.SHOWN,{relatedTarget:e}),r=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,t(n._element).trigger(s)};i?t(this._dialog).one(P.TRANSITION_END,r).emulateTransitionEnd(300):r()},p._enforceFocus=function(){var e=this;t(document).off(h.FOCUSIN).on(h.FOCUSIN,function(n){document!==n.target&&e._element!==n.target&&0===t(e._element).has(n.target).length&&e._element.focus()})},p._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?t(this._element).on(h.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||t(this._element).off(h.KEYDOWN_DISMISS)},p._setResizeEvent=function(){var e=this;this._isShown?t(window).on(h.RESIZE,function(t){return e.handleUpdate(t)}):t(window).off(h.RESIZE)},p._hideModal=function(){var e=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(f),e._resetAdjustments(),e._resetScrollbar(),t(e._element).trigger(h.HIDDEN)})},p._removeBackdrop=function(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},p._showBackdrop=function(e){var n=this,i=t(this._element).hasClass(d)?d:"";if(this._isShown&&this._config.backdrop){var s=P.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=u,i&&t(this._backdrop).addClass(i),t(this._backdrop).appendTo(document.body),t(this._element).on(h.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),s&&P.reflow(this._backdrop),t(this._backdrop).addClass(_),!e)return;if(!s)return void e();t(this._backdrop).one(P.TRANSITION_END,e).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(_);var r=function(){n._removeBackdrop(),e&&e()};P.supportsTransitionEnd()&&t(this._element).hasClass(d)?t(this._backdrop).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r()}else e&&e()},p._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},p._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},p._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},p._setScrollbar=function(){var e=this;if(this._isBodyOverflowing){t(g.FIXED_CONTENT).each(function(n,i){var s=t(i)[0].style.paddingRight,r=t(i).css("padding-right");t(i).data("padding-right",s).css("padding-right",parseFloat(r)+e._scrollbarWidth+"px")}),t(g.STICKY_CONTENT).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)-e._scrollbarWidth+"px")}),t(g.NAVBAR_TOGGLER).each(function(n,i){var s=t(i)[0].style.marginRight,r=t(i).css("margin-right");t(i).data("margin-right",s).css("margin-right",parseFloat(r)+e._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=t("body").css("padding-right");t("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},p._resetScrollbar=function(){t(g.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");"undefined"!=typeof i&&t(n).css("padding-right",i).removeData("padding-right")}),t(g.STICKY_CONTENT+", "+g.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");"undefined"!=typeof i&&t(n).css("margin-right",i).removeData("margin-right")});var e=t("body").data("padding-right");"undefined"!=typeof e&&t("body").css("padding-right",e).removeData("padding-right")},p._getScrollbarWidth=function(){var t=document.createElement("div");t.className=c,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(e,i){return this.each(function(){var s=t(this).data(n),a=r({},o.Default,t(this).data(),"object"==typeof e&&e);if(s||(s=new o(this,a),t(this).data(n,s)),"string"==typeof e){if("undefined"==typeof s[e])throw new TypeError('No method named "'+e+'"');s[e](i)}else a.show&&s.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(document).on(h.CLICK_DATA_API,g.DATA_TOGGLE,function(e){var i,s=this,o=P.getSelectorFromElement(this);o&&(i=t(o)[0]);var a=t(i).data(n)?"toggle":r({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(h.SHOW,function(e){e.isDefaultPrevented()||l.one(h.HIDDEN,function(){t(s).is(":visible")&&s.focus()})});p._jQueryInterface.call(t(i),a,this)}),t.fn.modal=p._jQueryInterface,t.fn.modal.Constructor=p,t.fn.modal.noConflict=function(){return t.fn.modal=o,p._jQueryInterface},p}(e),U=function(t){var e="tooltip",i="bs.tooltip",o="."+i,a=t.fn[e],l=new RegExp("(^|\\s)bs-tooltip\\S+","g"),h={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},c={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},u={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},f="show",d="out",_={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,INSERTED:"inserted"+o,CLICK:"click"+o,FOCUSIN:"focusin"+o,FOCUSOUT:"focusout"+o,MOUSEENTER:"mouseenter"+o,MOUSELEAVE:"mouseleave"+o},g="fade",p="show",m=".tooltip-inner",v=".arrow",E="hover",T="focus",y="click",C="manual",I=function(){function a(t,e){if("undefined"==typeof n)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var I=a.prototype;return I.enable=function(){this._isEnabled=!0},I.disable=function(){this._isEnabled=!1},I.toggleEnabled=function(){this._isEnabled=!this._isEnabled},I.toggle=function(e){if(this._isEnabled)if(e){var n=this.constructor.DATA_KEY,i=t(e.currentTarget).data(n);i||(i=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(t(this.getTipElement()).hasClass(p))return void this._leave(null,this);this._enter(null,this)}},I.dispose=function(){clearTimeout(this._timeout),t.removeData(this.element,this.constructor.DATA_KEY),t(this.element).off(this.constructor.EVENT_KEY),t(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&t(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},I.show=function(){var e=this;if("none"===t(this.element).css("display"))throw new Error("Please use show on visible elements");var i=t.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){t(this.element).trigger(i);var s=t.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!s)return;var r=this.getTipElement(),o=P.getUID(this.constructor.NAME);r.setAttribute("id",o),this.element.setAttribute("aria-describedby",o),this.setContent(),this.config.animation&&t(r).addClass(g);var l="function"==typeof this.config.placement?this.config.placement.call(this,r,this.element):this.config.placement,h=this._getAttachment(l);this.addAttachmentClass(h);var c=!1===this.config.container?document.body:t(this.config.container);t(r).data(this.constructor.DATA_KEY,this),t.contains(this.element.ownerDocument.documentElement,this.tip)||t(r).appendTo(c),t(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,r,{placement:h,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:v},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),t(r).addClass(p),"ontouchstart"in document.documentElement&&t("body").children().on("mouseover",null,t.noop);var u=function(){e.config.animation&&e._fixTransition();var n=e._hoverState;e._hoverState=null,t(e.element).trigger(e.constructor.Event.SHOWN),n===d&&e._leave(null,e)};P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(this.tip).one(P.TRANSITION_END,u).emulateTransitionEnd(a._TRANSITION_DURATION):u()}},I.hide=function(e){var n=this,i=this.getTipElement(),s=t.Event(this.constructor.Event.HIDE),r=function(){n._hoverState!==f&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),t(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),e&&e()};t(this.element).trigger(s),s.isDefaultPrevented()||(t(i).removeClass(p),"ontouchstart"in document.documentElement&&t("body").children().off("mouseover",null,t.noop),this._activeTrigger[y]=!1,this._activeTrigger[T]=!1,this._activeTrigger[E]=!1,P.supportsTransitionEnd()&&t(this.tip).hasClass(g)?t(i).one(P.TRANSITION_END,r).emulateTransitionEnd(150):r(),this._hoverState="")},I.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},I.isWithContent=function(){return Boolean(this.getTitle())},I.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-tooltip-"+e)},I.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},I.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(m),this.getTitle()),e.removeClass(g+" "+p)},I.setElementContent=function(e,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?t(n).parent().is(e)||e.empty().append(n):e.text(t(n).text()):e[i?"html":"text"](n)},I.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},I._getAttachment=function(t){return c[t.toUpperCase()]},I._setListeners=function(){var e=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)t(e.element).on(e.constructor.Event.CLICK,e.config.selector,function(t){return e.toggle(t)});else if(n!==C){var i=n===E?e.constructor.Event.MOUSEENTER:e.constructor.Event.FOCUSIN,s=n===E?e.constructor.Event.MOUSELEAVE:e.constructor.Event.FOCUSOUT;t(e.element).on(i,e.config.selector,function(t){return e._enter(t)}).on(s,e.config.selector,function(t){return e._leave(t)})}t(e.element).closest(".modal").on("hide.bs.modal",function(){return e.hide()})}),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},I._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},I._enter=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusin"===e.type?T:E]=!0),t(n.getTipElement()).hasClass(p)||n._hoverState===f?n._hoverState=f:(clearTimeout(n._timeout),n._hoverState=f,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===f&&n.show()},n.config.delay.show):n.show())},I._leave=function(e,n){var i=this.constructor.DATA_KEY;(n=n||t(e.currentTarget).data(i))||(n=new this.constructor(e.currentTarget,this._getDelegateConfig()),t(e.currentTarget).data(i,n)),e&&(n._activeTrigger["focusout"===e.type?T:E]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=d,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===d&&n.hide()},n.config.delay.hide):n.hide())},I._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},I._getConfig=function(n){return"number"==typeof(n=r({},this.constructor.Default,t(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),P.typeCheckConfig(e,n,this.constructor.DefaultType),n},I._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},I._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(l);null!==n&&n.length>0&&e.removeClass(n.join(""))},I._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},I._fixTransition=function(){var e=this.getTipElement(),n=this.config.animation;null===e.getAttribute("x-placement")&&(t(e).removeClass(g),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},a._jQueryInterface=function(e){return this.each(function(){var n=t(this).data(i),s="object"==typeof e&&e;if((n||!/dispose|hide/.test(e))&&(n||(n=new a(this,s),t(this).data(i,n)),"string"==typeof e)){if("undefined"==typeof n[e])throw new TypeError('No method named "'+e+'"');n[e]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return u}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return i}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return o}},{key:"DefaultType",get:function(){return h}}]),a}();return t.fn[e]=I._jQueryInterface,t.fn[e].Constructor=I,t.fn[e].noConflict=function(){return t.fn[e]=a,I._jQueryInterface},I}(e),x=function(t){var e="popover",n="bs.popover",i="."+n,o=t.fn[e],a=new RegExp("(^|\\s)bs-popover\\S+","g"),l=r({},U.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),h=r({},U.DefaultType,{content:"(string|element|function)"}),c="fade",u="show",f=".popover-header",d=".popover-body",_={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},g=function(r){var o,g;function p(){return r.apply(this,arguments)||this}g=r,(o=p).prototype=Object.create(g.prototype),o.prototype.constructor=o,o.__proto__=g;var m=p.prototype;return m.isWithContent=function(){return this.getTitle()||this._getContent()},m.addAttachmentClass=function(e){t(this.getTipElement()).addClass("bs-popover-"+e)},m.getTipElement=function(){return this.tip=this.tip||t(this.config.template)[0],this.tip},m.setContent=function(){var e=t(this.getTipElement());this.setElementContent(e.find(f),this.getTitle());var n=this._getContent();"function"==typeof n&&(n=n.call(this.element)),this.setElementContent(e.find(d),n),e.removeClass(c+" "+u)},m._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},m._cleanTipClass=function(){var e=t(this.getTipElement()),n=e.attr("class").match(a);null!==n&&n.length>0&&e.removeClass(n.join(""))},p._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n),s="object"==typeof e?e:null;if((i||!/destroy|hide/.test(e))&&(i||(i=new p(this,s),t(this).data(n,i)),"string"==typeof e)){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(p,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return l}},{key:"NAME",get:function(){return e}},{key:"DATA_KEY",get:function(){return n}},{key:"Event",get:function(){return _}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return h}}]),p}(U);return t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),K=function(t){var e="scrollspy",n="bs.scrollspy",i="."+n,o=t.fn[e],a={offset:10,method:"auto",target:""},l={offset:"number",method:"string",target:"(string|element)"},h={ACTIVATE:"activate"+i,SCROLL:"scroll"+i,LOAD_DATA_API:"load"+i+".data-api"},c="dropdown-item",u="active",f={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},d="offset",_="position",g=function(){function o(e,n){var i=this;this._element=e,this._scrollElement="BODY"===e.tagName?window:e,this._config=this._getConfig(n),this._selector=this._config.target+" "+f.NAV_LINKS+","+this._config.target+" "+f.LIST_ITEMS+","+this._config.target+" "+f.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,t(this._scrollElement).on(h.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var g=o.prototype;return g.refresh=function(){var e=this,n=this._scrollElement===this._scrollElement.window?d:_,i="auto"===this._config.method?n:this._config.method,s=i===_?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.makeArray(t(this._selector)).map(function(e){var n,r=P.getSelectorFromElement(e);if(r&&(n=t(r)[0]),n){var o=n.getBoundingClientRect();if(o.width||o.height)return[t(n)[i]().top+s,r]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},g.dispose=function(){t.removeData(this._element,n),t(this._scrollElement).off(i),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},g._getConfig=function(n){if("string"!=typeof(n=r({},a,n)).target){var i=t(n.target).attr("id");i||(i=P.getUID(e),t(n.target).attr("id",i)),n.target="#"+i}return P.typeCheckConfig(e,n,l),n},g._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},g._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},g._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},g._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;){this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}}},g._activate=function(e){this._activeTarget=e,this._clear();var n=this._selector.split(",");n=n.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var i=t(n.join(","));i.hasClass(c)?(i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),i.addClass(u)):(i.addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS+", "+f.LIST_ITEMS).addClass(u),i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),t(this._scrollElement).trigger(h.ACTIVATE,{relatedTarget:e})},g._clear=function(){t(this._selector).filter(f.ACTIVE).removeClass(u)},o._jQueryInterface=function(e){return this.each(function(){var i=t(this).data(n);if(i||(i=new o(this,"object"==typeof e&&e),t(this).data(n,i)),"string"==typeof e){if("undefined"==typeof i[e])throw new TypeError('No method named "'+e+'"');i[e]()}})},s(o,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return a}}]),o}();return t(window).on(h.LOAD_DATA_API,function(){for(var e=t.makeArray(t(f.DATA_SPY)),n=e.length;n--;){var i=t(e[n]);g._jQueryInterface.call(i,i.data())}}),t.fn[e]=g._jQueryInterface,t.fn[e].Constructor=g,t.fn[e].noConflict=function(){return t.fn[e]=o,g._jQueryInterface},g}(e),V=function(t){var e="bs.tab",n="."+e,i=t.fn.tab,r={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,CLICK_DATA_API:"click.bs.tab.data-api"},o="dropdown-menu",a="active",l="disabled",h="fade",c="show",u=".dropdown",f=".nav, .list-group",d=".active",_="> li > .active",g='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',p=".dropdown-toggle",m="> .dropdown-menu .active",v=function(){function n(t){this._element=t}var i=n.prototype;return i.show=function(){var e=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&t(this._element).hasClass(a)||t(this._element).hasClass(l))){var n,i,s=t(this._element).closest(f)[0],o=P.getSelectorFromElement(this._element);if(s){var h="UL"===s.nodeName?_:d;i=(i=t.makeArray(t(s).find(h)))[i.length-1]}var c=t.Event(r.HIDE,{relatedTarget:this._element}),u=t.Event(r.SHOW,{relatedTarget:i});if(i&&t(i).trigger(c),t(this._element).trigger(u),!u.isDefaultPrevented()&&!c.isDefaultPrevented()){o&&(n=t(o)[0]),this._activate(this._element,s);var g=function(){var n=t.Event(r.HIDDEN,{relatedTarget:e._element}),s=t.Event(r.SHOWN,{relatedTarget:i});t(i).trigger(n),t(e._element).trigger(s)};n?this._activate(n,n.parentNode,g):g()}}},i.dispose=function(){t.removeData(this._element,e),this._element=null},i._activate=function(e,n,i){var s=this,r=("UL"===n.nodeName?t(n).find(_):t(n).children(d))[0],o=i&&P.supportsTransitionEnd()&&r&&t(r).hasClass(h),a=function(){return s._transitionComplete(e,r,i)};r&&o?t(r).one(P.TRANSITION_END,a).emulateTransitionEnd(150):a()},i._transitionComplete=function(e,n,i){if(n){t(n).removeClass(c+" "+a);var s=t(n.parentNode).find(m)[0];s&&t(s).removeClass(a),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(t(e).addClass(a),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),P.reflow(e),t(e).addClass(c),e.parentNode&&t(e.parentNode).hasClass(o)){var r=t(e).closest(u)[0];r&&t(r).find(p).addClass(a),e.setAttribute("aria-expanded",!0)}i&&i()},n._jQueryInterface=function(i){return this.each(function(){var s=t(this),r=s.data(e);if(r||(r=new n(this),s.data(e,r)),"string"==typeof i){if("undefined"==typeof r[i])throw new TypeError('No method named "'+i+'"');r[i]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.0.0"}}]),n}();return t(document).on(r.CLICK_DATA_API,g,function(e){e.preventDefault(),v._jQueryInterface.call(t(this),"show")}),t.fn.tab=v._jQueryInterface,t.fn.tab.Constructor=v,t.fn.tab.noConflict=function(){return t.fn.tab=i,v._jQueryInterface},v}(e);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||e[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=P,t.Alert=L,t.Button=R,t.Carousel=j,t.Collapse=H,t.Dropdown=W,t.Modal=M,t.Popover=x,t.Scrollspy=K,t.Tab=V,t.Tooltip=U,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
﻿// Ion.RangeSlider | version 2.1.7 | https://github.com/IonDen/ion.rangeSlider
(function(f){"function"===typeof define&&define.amd?define(["jquery"],function(p){return f(p,document,window,navigator)}):"object"===typeof exports?f(require("jquery"),document,window,navigator):f(jQuery,document,window,navigator)})(function(f,p,h,t,q){var u=0,m=function(){var a=t.userAgent,b=/msie\s\d+/i;return 0<a.search(b)&&(a=b.exec(a).toString(),a=a.split(" ")[1],9>a)?(f("html").addClass("lt-ie9"),!0):!1}();Function.prototype.bind||(Function.prototype.bind=function(a){var b=this,d=[].slice;if("function"!=
typeof b)throw new TypeError;var c=d.call(arguments,1),e=function(){if(this instanceof e){var g=function(){};g.prototype=b.prototype;var g=new g,l=b.apply(g,c.concat(d.call(arguments)));return Object(l)===l?l:g}return b.apply(a,c.concat(d.call(arguments)))};return e});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){var d;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),e=c.length>>>0;if(0===e)return-1;d=+b||0;Infinity===Math.abs(d)&&(d=0);if(d>=
e)return-1;for(d=Math.max(0<=d?d:e-Math.abs(d),0);d<e;){if(d in c&&c[d]===a)return d;d++}return-1});var r=function(a,b,d){this.VERSION="2.1.7";this.input=a;this.plugin_count=d;this.old_to=this.old_from=this.update_tm=this.calc_count=this.current_plugin=0;this.raf_id=this.old_min_interval=null;this.is_update=this.is_key=this.no_diapason=this.force_redraw=this.dragging=!1;this.is_start=!0;this.is_click=this.is_resize=this.is_active=this.is_finish=!1;b=b||{};this.$cache={win:f(h),body:f(p.body),input:f(a),
cont:null,rs:null,min:null,max:null,from:null,to:null,single:null,bar:null,line:null,s_single:null,s_from:null,s_to:null,shad_single:null,shad_from:null,shad_to:null,edge:null,grid:null,grid_labels:[]};this.coords={x_gap:0,x_pointer:0,w_rs:0,w_rs_old:0,w_handle:0,p_gap:0,p_gap_left:0,p_gap_right:0,p_step:0,p_pointer:0,p_handle:0,p_single_fake:0,p_single_real:0,p_from_fake:0,p_from_real:0,p_to_fake:0,p_to_real:0,p_bar_x:0,p_bar_w:0,grid_gap:0,big_num:0,big:[],big_w:[],big_p:[],big_x:[]};this.labels=
{w_min:0,w_max:0,w_from:0,w_to:0,w_single:0,p_min:0,p_max:0,p_from_fake:0,p_from_left:0,p_to_fake:0,p_to_left:0,p_single_fake:0,p_single_left:0};var c=this.$cache.input;a=c.prop("value");var e;d={type:"single",min:10,max:100,from:null,to:null,step:1,min_interval:0,max_interval:0,drag_interval:!1,values:[],p_values:[],from_fixed:!1,from_min:null,from_max:null,from_shadow:!1,to_fixed:!1,to_min:null,to_max:null,to_shadow:!1,prettify_enabled:!0,prettify_separator:" ",prettify:null,force_edges:!1,keyboard:!1,
keyboard_step:5,grid:!1,grid_margin:!0,grid_num:4,grid_snap:!1,hide_min_max:!1,hide_from_to:!1,prefix:"",postfix:"",max_postfix:"",decorate_both:!0,values_separator:" \u2014 ",input_values_separator:";",disable:!1,onStart:null,onChange:null,onFinish:null,onUpdate:null};"INPUT"!==c[0].nodeName&&console&&console.warn&&console.warn("Base element should be <input>!",c[0]);c={type:c.data("type"),min:c.data("min"),max:c.data("max"),from:c.data("from"),to:c.data("to"),step:c.data("step"),min_interval:c.data("minInterval"),
max_interval:c.data("maxInterval"),drag_interval:c.data("dragInterval"),values:c.data("values"),from_fixed:c.data("fromFixed"),from_min:c.data("fromMin"),from_max:c.data("fromMax"),from_shadow:c.data("fromShadow"),to_fixed:c.data("toFixed"),to_min:c.data("toMin"),to_max:c.data("toMax"),to_shadow:c.data("toShadow"),prettify_enabled:c.data("prettifyEnabled"),prettify_separator:c.data("prettifySeparator"),force_edges:c.data("forceEdges"),keyboard:c.data("keyboard"),keyboard_step:c.data("keyboardStep"),
grid:c.data("grid"),grid_margin:c.data("gridMargin"),grid_num:c.data("gridNum"),grid_snap:c.data("gridSnap"),hide_min_max:c.data("hideMinMax"),hide_from_to:c.data("hideFromTo"),prefix:c.data("prefix"),postfix:c.data("postfix"),max_postfix:c.data("maxPostfix"),decorate_both:c.data("decorateBoth"),values_separator:c.data("valuesSeparator"),input_values_separator:c.data("inputValuesSeparator"),disable:c.data("disable")};c.values=c.values&&c.values.split(",");for(e in c)c.hasOwnProperty(e)&&(c[e]!==q&&
""!==c[e]||delete c[e]);a!==q&&""!==a&&(a=a.split(c.input_values_separator||b.input_values_separator||";"),a[0]&&a[0]==+a[0]&&(a[0]=+a[0]),a[1]&&a[1]==+a[1]&&(a[1]=+a[1]),b&&b.values&&b.values.length?(d.from=a[0]&&b.values.indexOf(a[0]),d.to=a[1]&&b.values.indexOf(a[1])):(d.from=a[0]&&+a[0],d.to=a[1]&&+a[1]));f.extend(d,b);f.extend(d,c);this.options=d;this.update_check={};this.validate();this.result={input:this.$cache.input,slider:null,min:this.options.min,max:this.options.max,from:this.options.from,
from_percent:0,from_value:null,to:this.options.to,to_percent:0,to_value:null};this.init()};r.prototype={init:function(a){this.no_diapason=!1;this.coords.p_step=this.convertToPercent(this.options.step,!0);this.target="base";this.toggleInput();this.append();this.setMinMax();a?(this.force_redraw=!0,this.calc(!0),this.callOnUpdate()):(this.force_redraw=!0,this.calc(!0),this.callOnStart());this.updateScene()},append:function(){this.$cache.input.before('<span class="irs js-irs-'+this.plugin_count+'"></span>');
this.$cache.input.prop("readonly",!0);this.$cache.cont=this.$cache.input.prev();this.result.slider=this.$cache.cont;this.$cache.cont.html('<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>');
this.$cache.rs=this.$cache.cont.find(".irs");this.$cache.min=this.$cache.cont.find(".irs-min");this.$cache.max=this.$cache.cont.find(".irs-max");this.$cache.from=this.$cache.cont.find(".irs-from");this.$cache.to=this.$cache.cont.find(".irs-to");this.$cache.single=this.$cache.cont.find(".irs-single");this.$cache.bar=this.$cache.cont.find(".irs-bar");this.$cache.line=this.$cache.cont.find(".irs-line");this.$cache.grid=this.$cache.cont.find(".irs-grid");"single"===this.options.type?(this.$cache.cont.append('<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'),
this.$cache.edge=this.$cache.cont.find(".irs-bar-edge"),this.$cache.s_single=this.$cache.cont.find(".single"),this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.shad_single=this.$cache.cont.find(".shadow-single")):(this.$cache.cont.append('<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'),this.$cache.s_from=this.$cache.cont.find(".from"),
this.$cache.s_to=this.$cache.cont.find(".to"),this.$cache.shad_from=this.$cache.cont.find(".shadow-from"),this.$cache.shad_to=this.$cache.cont.find(".shadow-to"),this.setTopHandler());this.options.hide_from_to&&(this.$cache.from[0].style.display="none",this.$cache.to[0].style.display="none",this.$cache.single[0].style.display="none");this.appendGrid();this.options.disable?(this.appendDisableMask(),this.$cache.input[0].disabled=!0):(this.$cache.cont.removeClass("irs-disabled"),this.$cache.input[0].disabled=
!1,this.bindEvents());this.options.drag_interval&&(this.$cache.bar[0].style.cursor="ew-resize")},setTopHandler:function(){var a=this.options.max,b=this.options.to;this.options.from>this.options.min&&b===a?this.$cache.s_from.addClass("type_last"):b<a&&this.$cache.s_to.addClass("type_last")},changeLevel:function(a){switch(a){case "single":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_single_fake);break;case "from":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake);
this.$cache.s_from.addClass("state_hover");this.$cache.s_from.addClass("type_last");this.$cache.s_to.removeClass("type_last");break;case "to":this.coords.p_gap=this.toFixed(this.coords.p_pointer-this.coords.p_to_fake);this.$cache.s_to.addClass("state_hover");this.$cache.s_to.addClass("type_last");this.$cache.s_from.removeClass("type_last");break;case "both":this.coords.p_gap_left=this.toFixed(this.coords.p_pointer-this.coords.p_from_fake),this.coords.p_gap_right=this.toFixed(this.coords.p_to_fake-
this.coords.p_pointer),this.$cache.s_to.removeClass("type_last"),this.$cache.s_from.removeClass("type_last")}},appendDisableMask:function(){this.$cache.cont.append('<span class="irs-disable-mask"></span>');this.$cache.cont.addClass("irs-disabled")},remove:function(){this.$cache.cont.remove();this.$cache.cont=null;this.$cache.line.off("keydown.irs_"+this.plugin_count);this.$cache.body.off("touchmove.irs_"+this.plugin_count);this.$cache.body.off("mousemove.irs_"+this.plugin_count);this.$cache.win.off("touchend.irs_"+
this.plugin_count);this.$cache.win.off("mouseup.irs_"+this.plugin_count);m&&(this.$cache.body.off("mouseup.irs_"+this.plugin_count),this.$cache.body.off("mouseleave.irs_"+this.plugin_count));this.$cache.grid_labels=[];this.coords.big=[];this.coords.big_w=[];this.coords.big_p=[];this.coords.big_x=[];cancelAnimationFrame(this.raf_id)},bindEvents:function(){if(!this.no_diapason){this.$cache.body.on("touchmove.irs_"+this.plugin_count,this.pointerMove.bind(this));this.$cache.body.on("mousemove.irs_"+this.plugin_count,
this.pointerMove.bind(this));this.$cache.win.on("touchend.irs_"+this.plugin_count,this.pointerUp.bind(this));this.$cache.win.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this));this.$cache.line.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"));this.$cache.line.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"));this.options.drag_interval&&"double"===this.options.type?(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,
"both")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"both"))):(this.$cache.bar.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.bar.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")));"single"===this.options.type?(this.$cache.single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),
this.$cache.shad_single.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.s_single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"single")),this.$cache.edge.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_single.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click"))):(this.$cache.single.on("touchstart.irs_"+
this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.single.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,null)),this.$cache.from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("touchstart.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),
this.$cache.shad_from.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("touchstart.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.s_from.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"from")),this.$cache.to.on("mousedown.irs_"+this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.s_to.on("mousedown.irs_"+
this.plugin_count,this.pointerDown.bind(this,"to")),this.$cache.shad_from.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")),this.$cache.shad_to.on("mousedown.irs_"+this.plugin_count,this.pointerClick.bind(this,"click")));if(this.options.keyboard)this.$cache.line.on("keydown.irs_"+this.plugin_count,this.key.bind(this,"keyboard"));m&&(this.$cache.body.on("mouseup.irs_"+this.plugin_count,this.pointerUp.bind(this)),this.$cache.body.on("mouseleave.irs_"+this.plugin_count,this.pointerUp.bind(this)))}},
pointerMove:function(a){this.dragging&&(this.coords.x_pointer=(a.pageX||a.originalEvent.touches&&a.originalEvent.touches[0].pageX)-this.coords.x_gap,this.calc())},pointerUp:function(a){this.current_plugin===this.plugin_count&&this.is_active&&(this.is_active=!1,this.$cache.cont.find(".state_hover").removeClass("state_hover"),this.force_redraw=!0,m&&f("*").prop("unselectable",!1),this.updateScene(),this.restoreOriginalMinInterval(),(f.contains(this.$cache.cont[0],a.target)||this.dragging)&&this.callOnFinish(),
this.dragging=!1)},pointerDown:function(a,b){b.preventDefault();var d=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&("both"===a&&this.setTempMinInterval(),a||(a=this.target||"from"),this.current_plugin=this.plugin_count,this.target=a,this.dragging=this.is_active=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=d-this.coords.x_gap,this.calcPointerPercent(),this.changeLevel(a),m&&f("*").prop("unselectable",!0),this.$cache.line.trigger("focus"),
this.updateScene())},pointerClick:function(a,b){b.preventDefault();var d=b.pageX||b.originalEvent.touches&&b.originalEvent.touches[0].pageX;2!==b.button&&(this.current_plugin=this.plugin_count,this.target=a,this.is_click=!0,this.coords.x_gap=this.$cache.rs.offset().left,this.coords.x_pointer=+(d-this.coords.x_gap).toFixed(),this.force_redraw=!0,this.calc(),this.$cache.line.trigger("focus"))},key:function(a,b){if(!(this.current_plugin!==this.plugin_count||b.altKey||b.ctrlKey||b.shiftKey||b.metaKey)){switch(b.which){case 83:case 65:case 40:case 37:b.preventDefault();
this.moveByKey(!1);break;case 87:case 68:case 38:case 39:b.preventDefault(),this.moveByKey(!0)}return!0}},moveByKey:function(a){var b=this.coords.p_pointer,b=a?b+this.options.keyboard_step:b-this.options.keyboard_step;this.coords.x_pointer=this.toFixed(this.coords.w_rs/100*b);this.is_key=!0;this.calc()},setMinMax:function(){this.options&&(this.options.hide_min_max?(this.$cache.min[0].style.display="none",this.$cache.max[0].style.display="none"):(this.options.values.length?(this.$cache.min.html(this.decorate(this.options.p_values[this.options.min])),
this.$cache.max.html(this.decorate(this.options.p_values[this.options.max]))):(this.$cache.min.html(this.decorate(this._prettify(this.options.min),this.options.min)),this.$cache.max.html(this.decorate(this._prettify(this.options.max),this.options.max))),this.labels.w_min=this.$cache.min.outerWidth(!1),this.labels.w_max=this.$cache.max.outerWidth(!1)))},setTempMinInterval:function(){var a=this.result.to-this.result.from;null===this.old_min_interval&&(this.old_min_interval=this.options.min_interval);
this.options.min_interval=a},restoreOriginalMinInterval:function(){null!==this.old_min_interval&&(this.options.min_interval=this.old_min_interval,this.old_min_interval=null)},calc:function(a){if(this.options){this.calc_count++;if(10===this.calc_count||a)this.calc_count=0,this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.calcHandlePercent();if(this.coords.w_rs){this.calcPointerPercent();a=this.getHandleX();"both"===this.target&&(this.coords.p_gap=0,a=this.getHandleX());"click"===this.target&&(this.coords.p_gap=
this.coords.p_handle/2,a=this.getHandleX(),this.target=this.options.drag_interval?"both_one":this.chooseHandle(a));switch(this.target){case "base":var b=(this.options.max-this.options.min)/100;a=(this.result.from-this.options.min)/b;b=(this.result.to-this.options.min)/b;this.coords.p_single_real=this.toFixed(a);this.coords.p_from_real=this.toFixed(a);this.coords.p_to_real=this.toFixed(b);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);
this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);this.target=null;break;case "single":if(this.options.from_fixed)break;
this.coords.p_single_real=this.convertToRealPercent(a);this.coords.p_single_real=this.calcWithStep(this.coords.p_single_real);this.coords.p_single_real=this.checkDiapason(this.coords.p_single_real,this.options.from_min,this.options.from_max);this.coords.p_single_fake=this.convertToFakePercent(this.coords.p_single_real);break;case "from":if(this.options.from_fixed)break;this.coords.p_from_real=this.convertToRealPercent(a);this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real);this.coords.p_from_real>
this.coords.p_to_real&&(this.coords.p_from_real=this.coords.p_to_real);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from_real=this.checkMaxInterval(this.coords.p_from_real,this.coords.p_to_real,"from");this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);break;case "to":if(this.options.to_fixed)break;
this.coords.p_to_real=this.convertToRealPercent(a);this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real<this.coords.p_from_real&&(this.coords.p_to_real=this.coords.p_from_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to_real=this.checkMaxInterval(this.coords.p_to_real,this.coords.p_from_real,"to");
this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);break;case "both":if(this.options.from_fixed||this.options.to_fixed)break;a=this.toFixed(a+.001*this.coords.p_handle);this.coords.p_from_real=this.convertToRealPercent(a)-this.coords.p_gap_left;this.coords.p_from_real=this.calcWithStep(this.coords.p_from_real);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_real=this.checkMinInterval(this.coords.p_from_real,
this.coords.p_to_real,"from");this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real=this.convertToRealPercent(a)+this.coords.p_gap_right;this.coords.p_to_real=this.calcWithStep(this.coords.p_to_real);this.coords.p_to_real=this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_to_real=this.checkMinInterval(this.coords.p_to_real,this.coords.p_from_real,"to");this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real);
break;case "both_one":if(!this.options.from_fixed&&!this.options.to_fixed){var d=this.convertToRealPercent(a);a=this.result.to_percent-this.result.from_percent;var c=a/2,b=d-c,d=d+c;0>b&&(b=0,d=b+a);100<d&&(d=100,b=d-a);this.coords.p_from_real=this.calcWithStep(b);this.coords.p_from_real=this.checkDiapason(this.coords.p_from_real,this.options.from_min,this.options.from_max);this.coords.p_from_fake=this.convertToFakePercent(this.coords.p_from_real);this.coords.p_to_real=this.calcWithStep(d);this.coords.p_to_real=
this.checkDiapason(this.coords.p_to_real,this.options.to_min,this.options.to_max);this.coords.p_to_fake=this.convertToFakePercent(this.coords.p_to_real)}}"single"===this.options.type?(this.coords.p_bar_x=this.coords.p_handle/2,this.coords.p_bar_w=this.coords.p_single_fake,this.result.from_percent=this.coords.p_single_real,this.result.from=this.convertToValue(this.coords.p_single_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from])):(this.coords.p_bar_x=
this.toFixed(this.coords.p_from_fake+this.coords.p_handle/2),this.coords.p_bar_w=this.toFixed(this.coords.p_to_fake-this.coords.p_from_fake),this.result.from_percent=this.coords.p_from_real,this.result.from=this.convertToValue(this.coords.p_from_real),this.result.to_percent=this.coords.p_to_real,this.result.to=this.convertToValue(this.coords.p_to_real),this.options.values.length&&(this.result.from_value=this.options.values[this.result.from],this.result.to_value=this.options.values[this.result.to]));
this.calcMinMax();this.calcLabels()}}},calcPointerPercent:function(){this.coords.w_rs?(0>this.coords.x_pointer||isNaN(this.coords.x_pointer)?this.coords.x_pointer=0:this.coords.x_pointer>this.coords.w_rs&&(this.coords.x_pointer=this.coords.w_rs),this.coords.p_pointer=this.toFixed(this.coords.x_pointer/this.coords.w_rs*100)):this.coords.p_pointer=0},convertToRealPercent:function(a){return a/(100-this.coords.p_handle)*100},convertToFakePercent:function(a){return a/100*(100-this.coords.p_handle)},getHandleX:function(){var a=
100-this.coords.p_handle,b=this.toFixed(this.coords.p_pointer-this.coords.p_gap);0>b?b=0:b>a&&(b=a);return b},calcHandlePercent:function(){this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1);this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100)},chooseHandle:function(a){return"single"===this.options.type?"single":a>=this.coords.p_from_real+(this.coords.p_to_real-this.coords.p_from_real)/2?this.options.to_fixed?
"from":"to":this.options.from_fixed?"to":"from"},calcMinMax:function(){this.coords.w_rs&&(this.labels.p_min=this.labels.w_min/this.coords.w_rs*100,this.labels.p_max=this.labels.w_max/this.coords.w_rs*100)},calcLabels:function(){this.coords.w_rs&&!this.options.hide_from_to&&("single"===this.options.type?(this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=this.coords.p_single_fake+this.coords.p_handle/
2-this.labels.p_single_fake/2):(this.labels.w_from=this.$cache.from.outerWidth(!1),this.labels.p_from_fake=this.labels.w_from/this.coords.w_rs*100,this.labels.p_from_left=this.coords.p_from_fake+this.coords.p_handle/2-this.labels.p_from_fake/2,this.labels.p_from_left=this.toFixed(this.labels.p_from_left),this.labels.p_from_left=this.checkEdges(this.labels.p_from_left,this.labels.p_from_fake),this.labels.w_to=this.$cache.to.outerWidth(!1),this.labels.p_to_fake=this.labels.w_to/this.coords.w_rs*100,
this.labels.p_to_left=this.coords.p_to_fake+this.coords.p_handle/2-this.labels.p_to_fake/2,this.labels.p_to_left=this.toFixed(this.labels.p_to_left),this.labels.p_to_left=this.checkEdges(this.labels.p_to_left,this.labels.p_to_fake),this.labels.w_single=this.$cache.single.outerWidth(!1),this.labels.p_single_fake=this.labels.w_single/this.coords.w_rs*100,this.labels.p_single_left=(this.labels.p_from_left+this.labels.p_to_left+this.labels.p_to_fake)/2-this.labels.p_single_fake/2,this.labels.p_single_left=
this.toFixed(this.labels.p_single_left)),this.labels.p_single_left=this.checkEdges(this.labels.p_single_left,this.labels.p_single_fake))},updateScene:function(){this.raf_id&&(cancelAnimationFrame(this.raf_id),this.raf_id=null);clearTimeout(this.update_tm);this.update_tm=null;this.options&&(this.drawHandles(),this.is_active?this.raf_id=requestAnimationFrame(this.updateScene.bind(this)):this.update_tm=setTimeout(this.updateScene.bind(this),300))},drawHandles:function(){this.coords.w_rs=this.$cache.rs.outerWidth(!1);
if(this.coords.w_rs){this.coords.w_rs!==this.coords.w_rs_old&&(this.target="base",this.is_resize=!0);if(this.coords.w_rs!==this.coords.w_rs_old||this.force_redraw)this.setMinMax(),this.calc(!0),this.drawLabels(),this.options.grid&&(this.calcGridMargin(),this.calcGridLabels()),this.force_redraw=!0,this.coords.w_rs_old=this.coords.w_rs,this.drawShadow();if(this.coords.w_rs&&(this.dragging||this.force_redraw||this.is_key)){if(this.old_from!==this.result.from||this.old_to!==this.result.to||this.force_redraw||
this.is_key){this.drawLabels();this.$cache.bar[0].style.left=this.coords.p_bar_x+"%";this.$cache.bar[0].style.width=this.coords.p_bar_w+"%";if("single"===this.options.type)this.$cache.s_single[0].style.left=this.coords.p_single_fake+"%";else{this.$cache.s_from[0].style.left=this.coords.p_from_fake+"%";this.$cache.s_to[0].style.left=this.coords.p_to_fake+"%";if(this.old_from!==this.result.from||this.force_redraw)this.$cache.from[0].style.left=this.labels.p_from_left+"%";if(this.old_to!==this.result.to||
this.force_redraw)this.$cache.to[0].style.left=this.labels.p_to_left+"%"}this.$cache.single[0].style.left=this.labels.p_single_left+"%";this.writeToInput();this.old_from===this.result.from&&this.old_to===this.result.to||this.is_start||(this.$cache.input.trigger("change"),this.$cache.input.trigger("input"));this.old_from=this.result.from;this.old_to=this.result.to;this.is_resize||this.is_update||this.is_start||this.is_finish||this.callOnChange();if(this.is_key||this.is_click)this.is_click=this.is_key=
!1,this.callOnFinish();this.is_finish=this.is_resize=this.is_update=!1}this.force_redraw=this.is_click=this.is_key=this.is_start=!1}}},drawLabels:function(){if(this.options){var a=this.options.values.length,b=this.options.p_values,d;if(!this.options.hide_from_to)if("single"===this.options.type)a=a?this.decorate(b[this.result.from]):this.decorate(this._prettify(this.result.from),this.result.from),this.$cache.single.html(a),this.calcLabels(),this.$cache.min[0].style.visibility=this.labels.p_single_left<
this.labels.p_min+1?"hidden":"visible",this.$cache.max[0].style.visibility=this.labels.p_single_left+this.labels.p_single_fake>100-this.labels.p_max-1?"hidden":"visible";else{a?(this.options.decorate_both?(a=this.decorate(b[this.result.from]),a+=this.options.values_separator,a+=this.decorate(b[this.result.to])):a=this.decorate(b[this.result.from]+this.options.values_separator+b[this.result.to]),d=this.decorate(b[this.result.from]),b=this.decorate(b[this.result.to])):(this.options.decorate_both?(a=
this.decorate(this._prettify(this.result.from),this.result.from),a+=this.options.values_separator,a+=this.decorate(this._prettify(this.result.to),this.result.to)):a=this.decorate(this._prettify(this.result.from)+this.options.values_separator+this._prettify(this.result.to),this.result.to),d=this.decorate(this._prettify(this.result.from),this.result.from),b=this.decorate(this._prettify(this.result.to),this.result.to));this.$cache.single.html(a);this.$cache.from.html(d);this.$cache.to.html(b);this.calcLabels();
b=Math.min(this.labels.p_single_left,this.labels.p_from_left);a=this.labels.p_single_left+this.labels.p_single_fake;d=this.labels.p_to_left+this.labels.p_to_fake;var c=Math.max(a,d);this.labels.p_from_left+this.labels.p_from_fake>=this.labels.p_to_left?(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",this.result.from===this.result.to?("from"===this.target?this.$cache.from[0].style.visibility="visible":"to"===
this.target?this.$cache.to[0].style.visibility="visible":this.target||(this.$cache.from[0].style.visibility="visible"),this.$cache.single[0].style.visibility="hidden",c=d):(this.$cache.from[0].style.visibility="hidden",this.$cache.to[0].style.visibility="hidden",this.$cache.single[0].style.visibility="visible",c=Math.max(a,d))):(this.$cache.from[0].style.visibility="visible",this.$cache.to[0].style.visibility="visible",this.$cache.single[0].style.visibility="hidden");this.$cache.min[0].style.visibility=
b<this.labels.p_min+1?"hidden":"visible";this.$cache.max[0].style.visibility=c>100-this.labels.p_max-1?"hidden":"visible"}}},drawShadow:function(){var a=this.options,b=this.$cache,d="number"===typeof a.from_min&&!isNaN(a.from_min),c="number"===typeof a.from_max&&!isNaN(a.from_max),e="number"===typeof a.to_min&&!isNaN(a.to_min),g="number"===typeof a.to_max&&!isNaN(a.to_max);"single"===a.type?a.from_shadow&&(d||c)?(d=this.convertToPercent(d?a.from_min:a.min),c=this.convertToPercent(c?a.from_max:a.max)-
d,d=this.toFixed(d-this.coords.p_handle/100*d),c=this.toFixed(c-this.coords.p_handle/100*c),d+=this.coords.p_handle/2,b.shad_single[0].style.display="block",b.shad_single[0].style.left=d+"%",b.shad_single[0].style.width=c+"%"):b.shad_single[0].style.display="none":(a.from_shadow&&(d||c)?(d=this.convertToPercent(d?a.from_min:a.min),c=this.convertToPercent(c?a.from_max:a.max)-d,d=this.toFixed(d-this.coords.p_handle/100*d),c=this.toFixed(c-this.coords.p_handle/100*c),d+=this.coords.p_handle/2,b.shad_from[0].style.display=
"block",b.shad_from[0].style.left=d+"%",b.shad_from[0].style.width=c+"%"):b.shad_from[0].style.display="none",a.to_shadow&&(e||g)?(e=this.convertToPercent(e?a.to_min:a.min),a=this.convertToPercent(g?a.to_max:a.max)-e,e=this.toFixed(e-this.coords.p_handle/100*e),a=this.toFixed(a-this.coords.p_handle/100*a),e+=this.coords.p_handle/2,b.shad_to[0].style.display="block",b.shad_to[0].style.left=e+"%",b.shad_to[0].style.width=a+"%"):b.shad_to[0].style.display="none")},writeToInput:function(){"single"===
this.options.type?(this.options.values.length?this.$cache.input.prop("value",this.result.from_value):this.$cache.input.prop("value",this.result.from),this.$cache.input.data("from",this.result.from)):(this.options.values.length?this.$cache.input.prop("value",this.result.from_value+this.options.input_values_separator+this.result.to_value):this.$cache.input.prop("value",this.result.from+this.options.input_values_separator+this.result.to),this.$cache.input.data("from",this.result.from),this.$cache.input.data("to",
this.result.to))},callOnStart:function(){this.writeToInput();if(this.options.onStart&&"function"===typeof this.options.onStart)this.options.onStart(this.result)},callOnChange:function(){this.writeToInput();if(this.options.onChange&&"function"===typeof this.options.onChange)this.options.onChange(this.result)},callOnFinish:function(){this.writeToInput();if(this.options.onFinish&&"function"===typeof this.options.onFinish)this.options.onFinish(this.result)},callOnUpdate:function(){this.writeToInput();
if(this.options.onUpdate&&"function"===typeof this.options.onUpdate)this.options.onUpdate(this.result)},toggleInput:function(){this.$cache.input.toggleClass("irs-hidden-input")},convertToPercent:function(a,b){var d=this.options.max-this.options.min;return d?this.toFixed((b?a:a-this.options.min)/(d/100)):(this.no_diapason=!0,0)},convertToValue:function(a){var b=this.options.min,d=this.options.max,c=b.toString().split(".")[1],e=d.toString().split(".")[1],g,l,f=0,k=0;if(0===a)return this.options.min;
if(100===a)return this.options.max;c&&(f=g=c.length);e&&(f=l=e.length);g&&l&&(f=g>=l?g:l);0>b&&(k=Math.abs(b),b=+(b+k).toFixed(f),d=+(d+k).toFixed(f));a=(d-b)/100*a+b;(b=this.options.step.toString().split(".")[1])?a=+a.toFixed(b.length):(a/=this.options.step,a*=this.options.step,a=+a.toFixed(0));k&&(a-=k);k=b?+a.toFixed(b.length):this.toFixed(a);k<this.options.min?k=this.options.min:k>this.options.max&&(k=this.options.max);return k},calcWithStep:function(a){var b=Math.round(a/this.coords.p_step)*
this.coords.p_step;100<b&&(b=100);100===a&&(b=100);return this.toFixed(b)},checkMinInterval:function(a,b,d){var c=this.options;if(!c.min_interval)return a;a=this.convertToValue(a);b=this.convertToValue(b);"from"===d?b-a<c.min_interval&&(a=b-c.min_interval):a-b<c.min_interval&&(a=b+c.min_interval);return this.convertToPercent(a)},checkMaxInterval:function(a,b,d){var c=this.options;if(!c.max_interval)return a;a=this.convertToValue(a);b=this.convertToValue(b);"from"===d?b-a>c.max_interval&&(a=b-c.max_interval):
a-b>c.max_interval&&(a=b+c.max_interval);return this.convertToPercent(a)},checkDiapason:function(a,b,d){a=this.convertToValue(a);var c=this.options;"number"!==typeof b&&(b=c.min);"number"!==typeof d&&(d=c.max);a<b&&(a=b);a>d&&(a=d);return this.convertToPercent(a)},toFixed:function(a){a=a.toFixed(20);return+a},_prettify:function(a){return this.options.prettify_enabled?this.options.prettify&&"function"===typeof this.options.prettify?this.options.prettify(a):this.prettify(a):a},prettify:function(a){return a.toString().replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
"$1"+this.options.prettify_separator)},checkEdges:function(a,b){if(!this.options.force_edges)return this.toFixed(a);0>a?a=0:a>100-b&&(a=100-b);return this.toFixed(a)},validate:function(){var a=this.options,b=this.result,d=a.values,c=d.length,e,g;"string"===typeof a.min&&(a.min=+a.min);"string"===typeof a.max&&(a.max=+a.max);"string"===typeof a.from&&(a.from=+a.from);"string"===typeof a.to&&(a.to=+a.to);"string"===typeof a.step&&(a.step=+a.step);"string"===typeof a.from_min&&(a.from_min=+a.from_min);
"string"===typeof a.from_max&&(a.from_max=+a.from_max);"string"===typeof a.to_min&&(a.to_min=+a.to_min);"string"===typeof a.to_max&&(a.to_max=+a.to_max);"string"===typeof a.keyboard_step&&(a.keyboard_step=+a.keyboard_step);"string"===typeof a.grid_num&&(a.grid_num=+a.grid_num);a.max<a.min&&(a.max=a.min);if(c)for(a.p_values=[],a.min=0,a.max=c-1,a.step=1,a.grid_num=a.max,a.grid_snap=!0,g=0;g<c;g++)e=+d[g],isNaN(e)?e=d[g]:(d[g]=e,e=this._prettify(e)),a.p_values.push(e);if("number"!==typeof a.from||isNaN(a.from))a.from=
a.min;if("number"!==typeof a.to||isNaN(a.to))a.to=a.max;"single"===a.type?(a.from<a.min&&(a.from=a.min),a.from>a.max&&(a.from=a.max)):(a.from<a.min&&(a.from=a.min),a.from>a.max&&(a.from=a.max),a.to<a.min&&(a.to=a.min),a.to>a.max&&(a.to=a.max),this.update_check.from&&(this.update_check.from!==a.from&&a.from>a.to&&(a.from=a.to),this.update_check.to!==a.to&&a.to<a.from&&(a.to=a.from)),a.from>a.to&&(a.from=a.to),a.to<a.from&&(a.to=a.from));if("number"!==typeof a.step||isNaN(a.step)||!a.step||0>a.step)a.step=
1;if("number"!==typeof a.keyboard_step||isNaN(a.keyboard_step)||!a.keyboard_step||0>a.keyboard_step)a.keyboard_step=5;"number"===typeof a.from_min&&a.from<a.from_min&&(a.from=a.from_min);"number"===typeof a.from_max&&a.from>a.from_max&&(a.from=a.from_max);"number"===typeof a.to_min&&a.to<a.to_min&&(a.to=a.to_min);"number"===typeof a.to_max&&a.from>a.to_max&&(a.to=a.to_max);if(b){b.min!==a.min&&(b.min=a.min);b.max!==a.max&&(b.max=a.max);if(b.from<b.min||b.from>b.max)b.from=a.from;if(b.to<b.min||b.to>
b.max)b.to=a.to}if("number"!==typeof a.min_interval||isNaN(a.min_interval)||!a.min_interval||0>a.min_interval)a.min_interval=0;if("number"!==typeof a.max_interval||isNaN(a.max_interval)||!a.max_interval||0>a.max_interval)a.max_interval=0;a.min_interval&&a.min_interval>a.max-a.min&&(a.min_interval=a.max-a.min);a.max_interval&&a.max_interval>a.max-a.min&&(a.max_interval=a.max-a.min)},decorate:function(a,b){var d="",c=this.options;c.prefix&&(d+=c.prefix);d+=a;c.max_postfix&&(c.values.length&&a===c.p_values[c.max]?
(d+=c.max_postfix,c.postfix&&(d+=" ")):b===c.max&&(d+=c.max_postfix,c.postfix&&(d+=" ")));c.postfix&&(d+=c.postfix);return d},updateFrom:function(){this.result.from=this.options.from;this.result.from_percent=this.convertToPercent(this.result.from);this.options.values&&(this.result.from_value=this.options.values[this.result.from])},updateTo:function(){this.result.to=this.options.to;this.result.to_percent=this.convertToPercent(this.result.to);this.options.values&&(this.result.to_value=this.options.values[this.result.to])},
updateResult:function(){this.result.min=this.options.min;this.result.max=this.options.max;this.updateFrom();this.updateTo()},appendGrid:function(){if(this.options.grid){var a=this.options,b,d;b=a.max-a.min;var c=a.grid_num,e,g,f=4,h,k,m,n="";this.calcGridMargin();a.grid_snap?50<b?(c=50/a.step,e=this.toFixed(a.step/.5)):(c=b/a.step,e=this.toFixed(a.step/(b/100))):e=this.toFixed(100/c);4<c&&(f=3);7<c&&(f=2);14<c&&(f=1);28<c&&(f=0);for(b=0;b<c+1;b++){h=f;g=this.toFixed(e*b);100<g&&(g=100,h-=2,0>h&&(h=
0));this.coords.big[b]=g;k=(g-e*(b-1))/(h+1);for(d=1;d<=h&&0!==g;d++)m=this.toFixed(g-k*d),n+='<span class="irs-grid-pol small" style="left: '+m+'%"></span>';n+='<span class="irs-grid-pol" style="left: '+g+'%"></span>';d=this.convertToValue(g);d=a.values.length?a.p_values[d]:this._prettify(d);n+='<span class="irs-grid-text js-grid-text-'+b+'" style="left: '+g+'%">'+d+"</span>"}this.coords.big_num=Math.ceil(c+1);this.$cache.cont.addClass("irs-with-grid");this.$cache.grid.html(n);this.cacheGridLabels()}},
cacheGridLabels:function(){var a,b,d=this.coords.big_num;for(b=0;b<d;b++)a=this.$cache.grid.find(".js-grid-text-"+b),this.$cache.grid_labels.push(a);this.calcGridLabels()},calcGridLabels:function(){var a,b;b=[];var d=[],c=this.coords.big_num;for(a=0;a<c;a++)this.coords.big_w[a]=this.$cache.grid_labels[a].outerWidth(!1),this.coords.big_p[a]=this.toFixed(this.coords.big_w[a]/this.coords.w_rs*100),this.coords.big_x[a]=this.toFixed(this.coords.big_p[a]/2),b[a]=this.toFixed(this.coords.big[a]-this.coords.big_x[a]),
d[a]=this.toFixed(b[a]+this.coords.big_p[a]);this.options.force_edges&&(b[0]<-this.coords.grid_gap&&(b[0]=-this.coords.grid_gap,d[0]=this.toFixed(b[0]+this.coords.big_p[0]),this.coords.big_x[0]=this.coords.grid_gap),d[c-1]>100+this.coords.grid_gap&&(d[c-1]=100+this.coords.grid_gap,b[c-1]=this.toFixed(d[c-1]-this.coords.big_p[c-1]),this.coords.big_x[c-1]=this.toFixed(this.coords.big_p[c-1]-this.coords.grid_gap)));this.calcGridCollision(2,b,d);this.calcGridCollision(4,b,d);for(a=0;a<c;a++)b=this.$cache.grid_labels[a][0],
this.coords.big_x[a]!==Number.POSITIVE_INFINITY&&(b.style.marginLeft=-this.coords.big_x[a]+"%")},calcGridCollision:function(a,b,d){var c,e,g,f=this.coords.big_num;for(c=0;c<f;c+=a){e=c+a/2;if(e>=f)break;g=this.$cache.grid_labels[e][0];g.style.visibility=d[c]<=b[e]?"visible":"hidden"}},calcGridMargin:function(){this.options.grid_margin&&(this.coords.w_rs=this.$cache.rs.outerWidth(!1),this.coords.w_rs&&(this.coords.w_handle="single"===this.options.type?this.$cache.s_single.outerWidth(!1):this.$cache.s_from.outerWidth(!1),
this.coords.p_handle=this.toFixed(this.coords.w_handle/this.coords.w_rs*100),this.coords.grid_gap=this.toFixed(this.coords.p_handle/2-.1),this.$cache.grid[0].style.width=this.toFixed(100-this.coords.p_handle)+"%",this.$cache.grid[0].style.left=this.coords.grid_gap+"%"))},update:function(a){this.input&&(this.is_update=!0,this.options.from=this.result.from,this.options.to=this.result.to,this.update_check.from=this.result.from,this.update_check.to=this.result.to,this.options=f.extend(this.options,a),
this.validate(),this.updateResult(a),this.toggleInput(),this.remove(),this.init(!0))},reset:function(){this.input&&(this.updateResult(),this.update())},destroy:function(){this.input&&(this.toggleInput(),this.$cache.input.prop("readonly",!1),f.data(this.input,"ionRangeSlider",null),this.remove(),this.options=this.input=null)}};f.fn.ionRangeSlider=function(a){return this.each(function(){f.data(this,"ionRangeSlider")||f.data(this,"ionRangeSlider",new r(this,a,u++))})};(function(){for(var a=0,b=["ms",
"moz","webkit","o"],d=0;d<b.length&&!h.requestAnimationFrame;++d)h.requestAnimationFrame=h[b[d]+"RequestAnimationFrame"],h.cancelAnimationFrame=h[b[d]+"CancelAnimationFrame"]||h[b[d]+"CancelRequestAnimationFrame"];h.requestAnimationFrame||(h.requestAnimationFrame=function(b,d){var c=(new Date).getTime(),e=Math.max(0,16-(c-a)),f=h.setTimeout(function(){b(c+e)},e);a=c+e;return f});h.cancelAnimationFrame||(h.cancelAnimationFrame=function(a){clearTimeout(a)})})()});

function import$(t,e){var n={}.hasOwnProperty;for(var i in e)n.call(e,i)&&(t[i]=e[i]);return t}function in$(t,e){for(var n=-1,i=e.length>>>0;++n<i;)if(t===e[n])return!0;return!1}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}!function(){var t,e,n,i;return t=function(t){return t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1},e=import$(function(n,i,l){function r(){return e.mouse.start(T,2)}function s(t){return T.move(t,2,!0)}function o(t,n){return t.addEventListener("mousedown",function(){return e.mouse.start(T,n)}),t.addEventListener("click",function(t){return T.move(t,n,!0)})}function a(t){return T.setIdx(t.target.idx)}var c,u,h,d,p,g,v,f,A,x,b,y,L,M,m,w,k,P,Y,G,C,E,D,S,I,B,F,R,U,H,Z,O,Q,J,j,X,N,T=this;for(null==n&&(n=null),null==i&&(i={}),null==l&&(l=null),c=(u=n)?u:l,h=i["class"]||c&&c.getAttribute("data-cpclass")||"",d=i.context||c&&c.getAttribute("data-context")||"default","random"===d&&(d="random-"+Math.random().toString(16)),p=i.oncolorchange||c&&c.getAttribute("data-oncolorchange")||null,g=i.onpalettechange||c&&c.getAttribute("data-onpalettechange")||null,v=i.index||c&&parseInt(c.getAttribute("data-palette-idx"))||0,f=i.palette||c&&c.getAttribute("data-palette")||null,A=i.pinned||c&&"true"===c.getAttribute("data-pinned")||null,x=i.exclusive||c&&"true"===c.getAttribute("data-exclusive")||null,"string"==typeof f?(f=f.trim(),"["===f[0]?this.initpal={colors:function(){var t,e,n,i=[];for(t=0,n=(e=JSON.parse(f)).length;n>t;++t)b=e[t],i.push({hex:b});return i}()}:/\//.exec(f)?this.url=f:this.initpal={colors:function(){var t,e,n,i=[];for(t=0,n=(e=f.split(/[ ,]/)).length;n>t;++t)b=e[t],i.push({hex:b});return i}()}):this.initpal=Array.isArray(f)?{colors:function(){var t,e,n,i=[];for(t=0,n=(e=f).length;n>t;++t)b=e[t],i.push({hex:b});return i}()}:f,isNaN(v)&&(v=0),"string"==typeof p&&(p=new Function(["color"],p)),"string"==typeof g&&(g=new Function(["palette"],g)),l?h+=l.getAttribute("class"):(in$("bubble",h.split(" "))||(h+=" bubble"),document.body.appendChild(l=document.createElement("div")),l._ldcp=this,y=l.style,y.position="absolute",y.display="none",n&&(n._ldcpnode=l,n.getColorPicker=function(){return T},n.addEventListener("click",function(e){var n=this;return setTimeout(function(){return n._ldcpnode._ldcp.toggle()},0),this._ldcpnode._ldcp.exclusive&&"none"===this._ldcpnode.style.display?void 0:t(e)}))),in$("ldColorPickr",h.split(" "))||(h+=" ldColorPicker"),l.setAttribute("class",h+""),this.node=l,this.target=n,this.idx=v,this.context=d,this["class"]=h,this.callback=p,this.palCallback=g,this.pinned=A,this.exclusive=x,this.eventHandler={},L="<span>Paste Link of You Palette:</span><input placeholder='e.g., loading.io/palette/xddlf'/><div class='ldcp-chooser-btnset'><button>Sample</button><button>Load</button><button>Cancel</button></div>",M=["<div class='ldcp-panel'><div class='ldcp-v ldcp-g1'><div class='ldcp-h ldcp-g11 ldcp-2d'><div style='top:20px;left:20px' class='ldcp-ptr-circle'></div><img src='"+e.base64.gradient+"'><div class='ldcp-mask'></div></div><div class='ldcp-h ldcp-g12 ldcp-1d'><div class='ldcp-ptr-bar'></div><img src='"+e.base64.hue+"'><div class='ldcp-mask'></div></div><div class='ldcp-h ldcp-g13 ldcp-1d ldcp-alpha'><div class='ldcp-ptr-bar'></div><img src='"+e.base64.opacity+"'><div class='ldcp-mask'></div></div></div><div class='ldcp-v ldcp-g2'><div class='ldcp-colors ldcp-h ldcp-g21'><div class='ldcp-palette'><small class='ldcp-colorptr'></small></div><small class='ldcp-sep'></small><div class='ldcp-color-none'></div><span class='ldcp-cbtn ldcp-btn-add'>+</span><span class='ldcp-cbtn ldcp-btn-remove'>-</span><span style='font-family:wingdings' class='ldcp-cbtn ldcp-btn-edit'>&#228;</span></div></div>","<div class='ldcp-v ldcp-g3'><div class='ldcp-h ldcp-g31'>","<div class='ldcp-edit-group'><span>R</span><input class='ldcp-input-r' value='255'><span>G</span><input class='ldcp-input-g' value='255'><span>B</span><input class='ldcp-input-b' value='255'></div>","<div class='ldcp-edit-group' style='display:none'><span>H</span><input class='ldcp-input-h' value='255'><span>S</span><input class='ldcp-input-s' value='255'><span>L</span><input class='ldcp-input-l' value='255'></div>","<div class='ldcp-edit-group ldcp-edit-hex' style='display:none'><span>HEX</span><input class='ldcp-input-hex' value='#000000'></div>","<span class='ldcp-alpha'>A</span><input value='255' class='ldcp-alpha ldcp-input-a'>","<span class='ldcp-caret'>RGBA &#x25be;</span></div></div></div><div class='ldcp-chooser'><button/><button/><button/></div>"].join(""),M+="<div class='ldcp-panel ldcp-chooser'>"+L+"</div>",l.innerHTML=M,l.addEventListener("click",function(e){return t(e)}),m=0,w=(y=[".ldcp-2d .ldcp-mask",".ldcp-2d .ldcp-ptr-circle"]).length;w>m;++m)k=y[m],P=l.querySelector(k),P.addEventListener("mousedown",r),P.addEventListener("click",s);for(m=0,w=(y=[".ldcp-1d .ldcp-mask",".ldcp-1d .ldcp-ptr-bar"]).length;w>m;++m)for(k=y[m],Y=0,C=(G=l.querySelectorAll(k)).length;C>Y;++Y)E=Y,D=G[Y],(S=o)(D,E);for(l.querySelector(".ldcp-cbtn:nth-of-type(1)").addEventListener("click",function(){return T.addColor()}),l.querySelector(".ldcp-cbtn:nth-of-type(2)").addEventListener("click",function(){return T.removeColor()}),this.color={vals:e.palette.getVal(this,this.context)},this.P2D={ptr:l.querySelector(".ldcp-ptr-circle"),panel:l.querySelector(".ldcp-2d img")},this.P1D={ptr:l.querySelectorAll(".ldcp-ptr-bar"),panel:l.querySelectorAll(".ldcp-1d img")},I=this.inputCaret=l.querySelector(".ldcp-caret"),I.addEventListener("click",function(){return T.nextEditMode()}),this.editGroup=l.querySelectorAll(".ldcp-edit-group"),this.chooser={panel:l.querySelector(".ldcp-chooser"),input:l.querySelector(".ldcp-chooser input")},B=this.inputhex=l.querySelector(".ldcp-input-hex"),B.addEventListener("change",function(){var t;return t=T.convert.color(T.inputhex.value),T.setHsl(t.hue,t.sat,t.lit),t=T.color.vals[T.idx]}),F=this.inputH=l.querySelector(".ldcp-input-h"),F.addEventListener("change",function(){var t,e;return e=T.color.vals[T.idx],e.hue=parseInt(T.inputH.value),t=e,T.setHsl(t.hue,t.sat,t.lit)}),R=this.inputS=l.querySelector(".ldcp-input-s"),R.addEventListener("change",function(){var t,e;return e=T.color.vals[T.idx],e.sat=parseFloat(T.inputS.value),t=e,T.setHsl(t.hue,t.sat,t.lit)}),U=this.inputL=l.querySelector(".ldcp-input-l"),U.addEventListener("change",function(){var t,e;return e=T.color.vals[T.idx],e.lit=parseFloat(T.inputL.value),t=e,T.setHsl(t.hue,t.sat,t.lit)}),H=this.inputR=l.querySelector(".ldcp-input-r"),H.addEventListener("change",function(){var t,e,n,i,l;return t=T.toRgba(T.color.vals[T.idx]),e=t[0],n=t[1],i=t[2],e=parseInt(T.inputR.value)/255,l=T.convert.rgbHsl({r:e,g:n,b:i}),T.setHsl(l.hue,l.sat,l.lit)}),Z=this.inputG=l.querySelector(".ldcp-input-g"),Z.addEventListener("change",function(){var t,e,n,i,l;return t=T.toRgba(T.color.vals[T.idx]),e=t[0],n=t[1],i=t[2],n=parseInt(T.inputG.value)/255,l=T.convert.rgbHsl({r:e,g:n,b:i}),T.setHsl(l.hue,l.sat,l.lit)}),O=this.inputB=l.querySelector(".ldcp-input-b"),O.addEventListener("change",function(){var t,e,n,i,l;return t=T.toRgba(T.color.vals[T.idx]),e=t[0],n=t[1],i=t[2],i=parseInt(T.inputB.value)/255,l=T.convert.rgbHsl({r:e,g:n,b:i}),T.setHsl(l.hue,l.sat,l.lit)}),Q=this.inputA=l.querySelector(".ldcp-input-a"),Q.addEventListener("change",function(){return T.setAlpha(parseFloat(T.inputA.value))}),J=this.colornone=l.querySelector(".ldcp-color-none"),J.addEventListener("click",function(){return T.toggleNone()}),this.palpad=l.querySelector(".ldcp-palette"),this.P2D={ptr:l.querySelector(".ldcp-ptr-circle"),panel:l.querySelector(".ldcp-2d img")},this.P1D={ptr:l.querySelectorAll(".ldcp-ptr-bar"),panel:l.querySelectorAll(".ldcp-1d img")},this.colorptr=l.querySelector(".ldcp-colorptr"),this.updateDimension(),this.width=l.offsetWidth,this.height=l.offsetHeight,import$(this.color,{nodes:Array.from(l.querySelectorAll(".ldcp-palette .ldcp-color")),palette:l.querySelector(".ldcp-colors .ldcp-palette"),lastvals:null,vals:e.palette.getVal(this,this.context)}),m=0,j=this.color.nodes.length;j>m;++m)E=m,X=this.color.nodes[E],X.idx=E,X.addEventListener("click",a);return this.initpal&&this.setPalette(this.initpal),X=this.color.vals[this.idx],this.updatePalette(),this.setIdx(this.idx),this.setHsl(X.hue,X.sat,X.lit),this.callback&&this.on("change",function(t){return T.callback.apply(T.target,[t])}),this.palCallback&&this.on("change-palette",function(t){return T.palCallback.apply(T.target,[t])}),this.url&&(this.chooser.input.value=this.url,setTimeout(function(){return T.loadPalette(T.chooser.input.value)},0)),A&&this.toggle(!0),document.addEventListener("keydown",function(t){var e;return e=t.which||t.keyCode,27===e&&T.target?T.toggle(!1):void 0}),this.handle("inited"),N=null!=X.alpha&&X.alpha<1?this.toRgbaString(X):this.toHexString(X),this.handle("change",N),this.handle("change-palette",this.getPalette()),this},{dom:null,setPalette:function(t,n){var i,l,r,s;if(null==n&&(n="default"),t.length&&"string"==typeof t[0]&&t[0].length>3){for(i=e.prototype.convert,e.palette.val[n].splice(0),l=0,r=t.length;r>l;++l)s=t[l],e.palette.val[n].push(i.color(s));return e.palette.update()}return this.defaultPalettePath=t},palette:{members:[],set:function(t,n){var i,l,r,s,o,a;if(this.val[t]){if(Array.isArray(n)){for(l=[],r=0,s=n.length;s>r;++r)o=n[r],l.push(e.prototype.convert.color(o));i=l}else{for(l=[],r=0,s=(a=n.colors).length;s>r;++r)o=a[r],l.push(e.prototype.convert.color(o.hex));i=l}for(this.val[t].splice(0),r=0,s=i.length;s>r;++r)o=i[r],this.val[t].push(o);return this.update()}},get:function(t){var n;return{colors:function(){var i,l,r,s=[];for(i=0,r=(l=this.val[t]||[]).length;r>i;++i)n=l[i],s.push({hex:e.prototype.toHexString(n)});return s}.call(this)}},getVal:function(t,e){return null==e&&(e="default"),t&&"string"!=typeof t&&this.members.push(t),"string"==typeof t&&(e=t),this.val[e]||(this.val[e]=this.random()),this.val[e]},update:function(t,e,n){var i,l,r,s,o=[];for(i=0,r=(l=this.members).length;r>i;++i)s=l[i],o.push(s.updatePalette(t,e,n));return o},random:function(){var t,e,n=[];for(t=0;5>t;++t)e=t,n.push({hue:parseInt(30*Math.random()+90*e-15),sat:.3+.4*Math.random(),lit:.4+.4*Math.random()});return n},val:{"default":function(){var t,e=[];for(t=0;5>t;++t)n=t,e.push({hue:parseInt(30*Math.random()+90*n-15),sat:.3+.4*Math.random(),lit:.4+.4*Math.random()});return e}()}},mouse:{start:function(e,n){var i;return i=[["selectstart",function(e){return t(e)}],["mousemove",function(t){return e.move(t,n)}],["mouseup",function(){return i.map(function(t){return document.removeEventListener(t[0],t[1])}),setTimeout(function(){return e.clickToggler?document.addEventListener("click",e.clickToggler):void 0},0)}]],i.map(function(t){return document.addEventListener(t[0],t[1])}),e.clickToggler?document.removeEventListener("click",e.clickToggler):void 0}},init:function(t,n){var i,l,r,s,o,a=[];if(null==n&&(n=null),t)return t._ldcp=new e(n,{},t);for(i=document.querySelectorAll(".ldColorPicker"),l=0,r=i.length;r>l;++l)t=i[l],t._ldcp||(t._ldcp=new e(null,{},t));for(s=document.querySelectorAll("*[data-toggle='colorpicker']"),l=0,r=s.length;r>l;++l)o=s[l],a.push(new e(o,{}));return a},prototype:{loadPalette:function(t){var e,n,i=this;return e=n=new XMLHttpRequest,e.onload=function(){return i.setPalette(JSON.parse(n.responseText))},e.open("GET",t.replace(/palette/,"d/palette"),!0),e.send(),e},addColor:function(){return this.color.vals.length<12?(this.color.vals.splice(0,0,this.random()),e.palette.update(this.context,0,1)):void 0},removeColor:function(){return this.color.vals.length>1?(this.color.vals.splice(this.idx,1),e.palette.update(this.context,this.idx,-1)):void 0},edit:function(){var t,e;return t=function(){var t,n,i,l=[];for(t=0,i=(n=this.color.vals).length;i>t;++t)e=n[t],l.push(this.toHexString(e).replace(/#/,""));return l}.call(this).join(","),window.open("http://loading.io/color/?colors="+t)},nextEditMode:function(){return this.editGroup[this.editMode||0].style.display="none",this.editMode=((this.editMode||0)+1)%3,this.inputCaret.innerText=["RGBA ▾","HSLA ▾","HEX ▾"][this.editMode],this.editGroup[this.editMode].style.display="inline"},updateDimension:function(){var t,e,n;return t=[this.node.querySelector(".ldcp-2d"),this.node.querySelector(".ldcp-1d")],e=t[0],n=t[1],t=this.P2D,t.w=e.offsetWidth,t.h=e.offsetHeight,t=this.P1D,t.w=n.offsetWidth,t.h=n.offsetHeight,t},clickToggle:function(){var t=this;return this.clickToggler=function(){return document.removeEventListener("click",t.clickToggler),t.toggle()}},toggleConfig:function(){var t;return"98%"===this.chooser.panel.style.height?(t=this.chooser.panel.style,t.height=0,t):(t=this.chooser.panel.style,t.height="98%",t)},eventHandler:{},eventQueue:{},handle:function(t,e){var n,i,l,r,s=[];if(n=this.eventHandler[t]){for(i=0,l=n.length;l>i;++i)r=n[i],s.push(r(e));return s}},on:function(t,e){var n;return((n=this.eventHandler)[t]||(n[t]=[])).push(e)},toggle:function(t){var n,i,l,r,s,o,a,c,u,h=this;return null==t&&(t=null),this.pinned&&(t=!0),t===!1||null===t&&"block"===this.node.style.display?(document.removeEventListener("click",this.clickToggler),this.node.style.display="none",this.target&&(n=this.color.vals.map(function(t,e){return[e,h.toValue(t),t]}).filter(function(t){return t[1]===h.target.value.toLowerCase()})[0],n?this.idx=n[0]:this.color.vals.splice(0,0,this.convert.color(this.target.value))),i=this.color.vals[this.idx],this.setHsl(i.hue,i.sat,i.lit),this.handle("toggle",!1)):(this.node.style.display="block",this.target&&(l="fixed"===window.getComputedStyle(this.node).position?[0,0]:null!=window.scrollX?[window.scrollX,window.scrollY]:null!=window.pageXOffset?[window.pageXOffset,window.pageYOffset]:[document.body.scrollLeft,document.body.scrollTop],r=l[0],s=l[1],o=this.target.getBoundingClientRect(),a=this["class"].split(" "),c=o.left+r+"px",u=o.top+s+"px",in$("top",a)?u=o.top-this.node.offsetHeight-10+s+"px":in$("left",a)?c=o.left-this.node.offsetWidth-10+r+"px":in$("right",a)?c=o.left+this.target.offsetWidth+10+r+"px":u=o.top+this.target.offsetHeight+10+s+"px",l=this.node.style,l.top=u,l.left=c),document.removeEventListener("click",this.clickToggler),document.addEventListener("click",this.clickToggle()),this.updateDimension(),this.target&&(n=this.color.vals.map(function(t,e){return[e,h.toValue(t)]}).filter(function(t){return t[1]===h.target.value.toLowerCase()})[0],n?this.idx=n[0]:this.color.vals.splice(0,0,this.convert.color(this.target.value))),i=this.color.vals[this.idx],this.setHsl(i.hue,i.sat,i.lit),this.handle("toggle",!0)),e.palette.update()},random:function(){return{hue:360*Math.random(),sat:.5,lit:.5}},getPalette:function(){var t;return{colors:function(){var e,n,i,l=[];for(e=0,i=(n=this.color.vals).length;i>e;++e)t=n[e],l.push({hex:this.toHexString(t)});return l}.call(this)}},setPalette:function(t,n){var i,l,r,s,o,a;for(null==n&&(n=!1),l=[],r=0,o=(s=t.colors).length;o>r;++r)a=s[r],l.push(this.convert.color(a.hex));for(i=l,this.color.lastvals=this.color.vals.splice(0),n&&(this.color.vals=[]),r=0,o=i.length;o>r;++r)a=i[r],this.color.vals.push(a);return e.palette.update()},setColor:function(t,n,i){return"string"==typeof t&&(t=this.convert.color(t),null!=n&&(t.alpha=n),null!=i&&(t.isNone=i)),import$(this.color.vals[this.idx],t),e.palette.update()},updatePalette:function(t,e,n){function i(t){var e;return e=null!=t.target.idx?t.target.idx:t.target.parentNode.idx,b.setIdx(e)}var l,r,s,o,a,c,u,h,d,p,g,v,f,A,x,b=this;if(this.color.nodes){if(l=[this.color.nodes.length,this.color.vals.length],r=l[0],s=l[1],s>r)for(o=r;s>o;++o)a=o,c=u=document.createElement("div"),c.setAttribute("class","ldcp-color"),c.addEventListener("click",i),c.idx=a,u.appendChild(document.createElement("div")),this.color.palette.appendChild(u),this.color.nodes.push(u);else if(r>s){for(o=s;r>o;++o)a=o,this.color.palette.removeChild(this.color.nodes[a]);this.color.nodes.splice(s)}for(o=0;s>o;++o)h=o,this.updateColor(h);if(this.idx>=s&&(this.idx=s-1),d=this.idx,null!=t&&t===this.context&&null!=e&&null!=n&&e<=this.idx&&(this.idx+=n,this.idx=(l=(g=this.idx)>0?g:0)<(p=this.color.vals.length-1)?l:p,d!==this.idx&&this.handle("change-idx",this.idx)),v=this.color.vals[this.idx],f=null!=v.alpha&&v.alpha<1?this.toRgbaString(v):this.toHexString(v),A=this.oldValue!==f,this.oldValue=f,this.setIdx(this.idx),this.inputH.value=(l=v.hue)>0?l:0,this.inputS.value=v.sat,this.inputL.value=v.lit,x=this.toRgba(v),this.inputR.value=parseInt(255*x[0]),this.inputG.value=parseInt(255*x[1]),this.inputB.value=parseInt(255*x[2]),this.inputA.value=x[3],this.inputhex.value=this.getHexString(),this.color.lastvals=null,A&&this.handle("change",f),A||n)return this.handle("change-palette",this.getPalette());if(this.color.lastvals){if(v=this.color,v.lastvals.length!==v.vals.length)return this.handle("change-palette",this.getPalette());if(v.lastvals.map(function(t,e){return t!==v.vals[e]}).length)return this.handle("change-palette",this.getPalette())}}},updateColor:function(t){var e,n;return e=this.color.vals[t],n=this.color.nodes[t].childNodes[0],n.style.background=this.toHslaString(e),n.style.border=e.isNone?"1px dashed #ccc":"1px dashed transparent"},convert:{color:function(t){var e,n,i,l,r,s,o,a,c,u;return/^#?[a-fA-F0-9]{3}$|^#?[a-fA-F0-9]{6}$/.exec(t)?(t=t.replace(/^#/,""),3===t.length&&(t=function(){var n,i=[];for(n=0;2>=n;++n)e=n,i.push(t.charAt(e)+t.charAt(e));return i}().join("")),n=parseInt(t.substring(0,2),16)/255,i=parseInt(t.substring(2,4),16)/255,l=parseInt(t.substring(4,6),16)/255,s=this.rgbHsl({r:n,g:i,b:l}),o=s.hue,a=s.sat,c=s.lit,r=s,r):(u=/^\s*rgba?\(\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*,\s*([0-9.]+%?)\s*(?:,\s*([0-9.]+%?)\s*)?\)\s*$/.exec(t))?(s=[u[1],u[2],u[3]].map(function(t){return"%"===t[t.length-1]?+t.substring(0,t.length-1)/100:parseInt(t)/255}),n=s[0],i=s[1],l=s[2],s=this.rgbHsl({r:n,g:i,b:l}),o=s.hue,a=s.sat,c=s.lit,r=s,r.alpha=parseFloat(u[4]),isNaN(r.alpha)&&(r.alpha=1),r):{hue:0,sat:0,lit:0,satV:0,val:0}},rgbHsl:function(t){var e,n,i,l,r,s,o,a,c,u,h,d;return e=t.r,n=t.g,i=t.b,l=Math.max(e,n,i),r=Math.min(e,n,i),s=l-r,o=(l+r)/2,0===s?(a=[0,0],c=a[0],u=a[1]):(c=function(){switch(!1){case l!==e:return 60*((n-i)/s%6);case l!==n:return 60*((i-e)/s+2);case l!==i:return 60*((e-n)/s+4)}}(),u=s/(1-Math.abs(2*o-1)),h=l,d=l-r/h),c=(c+360)%360,{hue:c,sat:u,lit:o,satV:d,val:h}}},toRgba:function(t){var e,n,i,l,r,s,o,a;return isNaN(t.hue)&&(t.hue=0),isNaN(t.sat)&&(t.sat=0),e=(1-Math.abs(2*t.lit-1))*t.sat,n=e*(1-Math.abs(t.hue/60%2-1)),i=t.lit-e/2,l=function(){switch(parseInt(t.hue/60)){case 0:return[e,n,0];case 1:return[n,e,0];case 2:return[0,e,n];case 3:return[0,n,e];case 4:return[n,0,e];case 5:return[e,0,n];case 6:return[e,n,0]}}(),r=l[0],s=l[1],o=l[2],l=[r+i,s+i,o+i,null!=t.alpha?t.alpha:1],r=l[0],s=l[1],o=l[2],a=l[3],l},hex:function(t){var e,n;return t=(e=(n=Math.round(255*t))>0?n:0)<255?e:255,t=t.toString(16),t.length<2?"0"+t:t},getHslaString:function(){return this.toHslaString(this.color.vals[this.idx])},toHslaString:function(t){return t.isNone?"none":"hsla("+(t.hue||0)+","+(100*t.sat||0)+"%,"+(100*t.lit||0)+"%,"+(null!=t.alpha?t.alpha:1)+")"},getRgbaString:function(){return this.toRgbaString(this.color.vals[this.idx])},toRgbaString:function(t){var e,n,i;if(t.isNone)return"none";for(e=this.toRgba(t),n=0;3>n;++n)i=n,e[i]=100*e[i]+"%";return"rgba("+e.join(",")+")"},getHexString:function(t){var e;return null==t&&(t=!0),e=this.toHexString(this.color.vals[this.idx]),t?e:e.replace(/#/g,"")},toHexString:function(t){var e,n,i,l,r;return t.isNone?"none":(e=this.toRgba(t),n=e[0],i=e[1],l=e[2],r=e[3],"#"+this.hex(n)+this.hex(i)+this.hex(l))},getValue:function(){return this.toValue(this.color.vals[this.idx])},toValue:function(t){return null!=t.alpha&&t.alpha<1?this.toRgbaString(t):this.toHexString(t)},isPinned:function(){return this.pinned},setPin:function(t){return this.pinned!==!!t&&(this.pinned=!!t,this.handle("change-pin",this.pinned)),this.pinned?this.toggle(!0):void 0},getIdx:function(){return this.idx},setIdx:function(t){var e,n,i,l=this;return this.idx!==t&&(e=this.color.vals[t],n=this.color.vals[this.idx],this.idx=t,this.handle("change-idx",t),e!==n&&this.handle("change",null!=e.alpha&&e.alpha<1?this.toRgbaString(e):this.toHexString(e))),this.target&&this.target.setAttribute("data-palette-idx",t),e=this.color.vals[t],this.setHsl(e.hue,e.sat,e.lit),this.setAlpha(e.alpha),i=this.palpad.childNodes[t+1],i.offsetWidth?this.colorptr.style.left=i.offsetLeft+i.offsetWidth/2+"px":setTimeout(function(){return l.colorptr.style.left=i.offsetLeft+i.offsetWidth/2+"px"},0)},getAlpha:function(){return null!=this.color.vals[this.idx].alpha?this.color.vals[this.idx].alpha:1},setAlpha:function(t,n){var i,l,r;return null==n&&(n=!1),i=this.color.vals[this.idx],l=i.alpha,i.alpha=t,r=this.P1D.h*(1-t),l!==t&&(i.isNone&&(i.isNone=!1),e.palette.update()),this.setPos(1,0,r,!0)},toggleNone:function(){var t;return t=this.color.vals[this.idx],t.isNone=!0,e.palette.update()},setHsl:function(t,n,i,l){var r,s,o,a,c,u,h,d;return null==l&&(l=!1),r=this.color.vals[this.idx],s=this.toRgba(r).join(","),r.hue=t,r.sat=n,r.lit=i,this.P2D&&(this.P2D.panel.style.backgroundColor=this.toHexString({hue:t,sat:1,lit:.5}),this.P1D.panel[1].style.backgroundColor=this.toHexString({hue:t,sat:n,lit:i})),o=this.toRgba(r).join(","),this.target&&(this.target.value=this.getValue(),this.target.setAttribute("data-color",o)),s!==o&&(r.isNone&&(r.isNone=!1),e.palette.update()),l?void 0:(a=(2*i+n*(1-Math.abs(2*i-1)))/2,c=2*(a-i)/a,this.P1D.h&&this.P2D.h||this.updateDimension(),u=this.P2D.w*c,h=this.P2D.h*(1-a)/1,d=this.P1D.h*(t/360)/1,this.setPos(2,u,h,!0),this.setPos(0,u,d,!0),this.updateColor(this.idx))},setPos:function(t,e,n,i){var l,r,s,o,a,c,u,h,d,p,g,v;return null==i&&(i=!1),l=2===t?this.P2D:this.P1D,r=2===t?l.ptr:l.ptr[t],e=(s=e>0?e:0)<(o=l.w)?s:o,n=(s=n>0?n:0)<(o=l.h)?s:o,r.style.top=n+"px",this.inputhex.value=this.getHexString(),2===t&&(r.style.left=e+"px"),i||1!==t||(a=1.04*n-.02*l.h,a=(s=(o=a/l.h)>0?o:0)<1?s:1,this.setAlpha(parseInt(1e3*(1-a))/1e3),this.updateColor(this.idx)),i||1===t?void 0:(s=[1.04*e-.02*l.w,1.04*n-.02*l.h],c=s[0],a=s[1],c=(s=(o=c/l.w)>0?o:0)<1?s:1,a=(s=(o=a/l.h)>0?o:0)<1?s:1,u=this.color.vals[this.idx],h=2===t?1-a:(2*u.lit+u.sat*(1-Math.abs(2*u.lit-1)))/2,d=2===t?c:2*(h-u.lit)/h,p=0===t?360*a:u.hue,g=h*(2-d)/2,v=0!==g&&1!==g?h*d/(1-Math.abs(2*g-1)):u.sat,this.setHsl(p,v,g,!1),this.updateColor(this.idx))},move:function(t,e,n){var i,l,r,s;return null==n&&(n=!1),t.buttons||n?(i=this.node.getBoundingClientRect(),l=[t.clientY-i.top,t.clientX-i.left],r=l[0],s=l[1],this.setPos(e,s-5,r-5),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1):void 0},palette:[]}}),e.base64={hue:"data:image/png;base64,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",gradient:"data:image/png;base64,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",opacity:"data:image/png;base64,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"},"undefined"!=typeof $&&null!==$&&($.fn.ldColorPicker=function(t){return null==t&&(t={}),this[0]?this[0]._ldcpnode?this[0]._ldcpnode._ldcp:new e(this[0],t):void 0
}),"undefined"!=typeof window&&null!==window&&(window.ldColorPicker=e),"undefined"!=typeof angular&&null!==angular?(i=angular.module("ldColorPicker",[]),i.directive("ldcolorpicker",function(){return{require:[],restrict:"A",scope:{ldcp:"=ngLdcp",color:"=ngModel",idx:"=ngIdx",pinned:"=ngPinned",palette:"=ngPalette",config:"&config"},link:function(t,n,i){var l,r;return l=new e(n[0],t.config()||{},null),i.ngLdcp&&(t.ldcp=l),r=function(e){return t.$root.$$phase?e():t.$apply(e)},l.on("change",function(e){return t.color!==e&&i.ngModel?r(function(){return t.color=e}):void 0}),l.on("change-palette",function(){return r(function(){return i.ngPalette?t.palette=l.getPalette():void 0})}),l.on("change-idx",function(e){return r(function(){return i.ngIdx?t.idx=e:void 0})}),i.ngIdx&&null==t.idx&&(t.idx=l.getIdx()),l.on("change-pin",function(e){return r(function(){return i.ngPinned?t.pinned=e:void 0})}),t.$watch("color",function(t){var e,n;if(/^#[0-9a-f]{6}$/.exec((t+"").trim())||/^rgba?\([.0-9]+(,[.0-9]+){2,3}\)$/.exec((t+"").trim()))try{if(e=l.getValue(),null!=t&&e!==t)return l.setColor(t)}catch(i){return n=i}}),t.$watch("idx",function(t){return null!=t?l.setIdx(t):void 0}),t.$watch("pinned",function(t){return l.setPin(t)})}}}),i):void 0}();var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),_get=function(t,e,n){for(var i=!0;i;){var l=t,r=e,s=n;i=!1,null===l&&(l=Function.prototype);var o=Object.getOwnPropertyDescriptor(l,r);if(void 0!==o){if("value"in o)return o.value;var a=o.get;return void 0===a?void 0:a.call(s)}var c=Object.getPrototypeOf(l);if(null===c)return void 0;t=c,e=r,n=s,i=!0,o=c=void 0}};"undefined"!=typeof React&&React.DOM&&!function(){var t=function(t){function e(t){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).call(this,t)}return _inherits(e,t),_createClass(e,[{key:"render",value:function(){return React.DOM.div({className:"ldColorPicker"})}},{key:"componentDidMount",value:function(){{var t=ReactDOM.findDOMNode(this);new ldColorPicker(null,this.props||{},t)}}},{key:"componentWillUnmount",value:function(){}}]),e}(React.Component);window.LDColorPicker=t}();
(function(){var ReI,ReN,ReP,re,parse,ldColor,t0,t1,t2,t3,Xn,Yn,Zn,conv,utils,k,v;ReI="\\s*([+-]?\\d+)\\s*";ReN="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*";ReP="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*";re={hex3:/^#([0-9a-f]{3})$/,hex6:/^#([0-9a-f]{6})$/,rgbint:new RegExp("^rgb\\("+[ReI,ReI,ReI]+"\\)$"),rgbp:new RegExp("^rgb\\("+[ReP,ReP,ReP]+"\\)$"),rgbaint:new RegExp("^rgba\\("+[ReI,ReI,ReI,ReN]+"\\)$"),rgbap:new RegExp("^rgba\\("+[ReP,ReP,ReP,ReN]+"\\)$"),hslp:new RegExp("^hsl\\("+[ReN,ReP,ReP]+"\\)$"),hslap:new RegExp("^hsla\\("+[ReN,ReP,ReP,ReN]+"\\)$")};parse={hex3:function(v){v=parseInt(v[1],16);return{r:(v>>8)*17,g:(v&240)*17>>4,b:(v&15)*17,a:1}},hex6:function(v){v=parseInt(v[1],16);return{r:v>>16,g:v>>8&255,b:v&255,a:1}},rgbint:function(v){return{r:+v[1],g:+v[2],b:+v[3],a:1}},rgbp:function(v){return{r:v[1]*255/100,g:+v[2]*255/100,b:+v[3]*255/100,a:1}},rgbaint:function(v){return{r:+v[1],g:+v[2],b:+v[3],a:+v[4]}},rgbap:function(v){return{r:v[1]*255/100,g:+v[2]*255/100,b:v[3]*255/100,a:+v[4]}},hslap:function(v){return{h:+v[1],s:v[2]/100,l:v[3]/100,a:+v[4]}},hslp:function(v){return{h:+v[1],s:v[2]/100,l:v[3]/100,a:1}},all:function(o){var k,ref$,v,that;if(typeof o==="object"){if(!(o.a!=null)){o.a=1}return o["@a"]?o=conv.lab2rgb(o):o["c"]?o=conv.hcl2rgb(o):o}else if(typeof o==="number"){return conv.num2rgb(o)}o=(o+"").trim().toLowerCase();for(k in ref$=re){v=ref$[k];if(that=v.exec(o)){return parse[k](that)}else{continue}}if(typeof named!="undefined"&&named!==null&&named[o]){return conv.num2rgb(named[o])}if(o==="transparent"){return{r:NaN,g:NaN,b:NaN,a:0}}return{r:NaN,g:NaN,b:NaN,a:NaN}}};ldColor=function(v){return import$(this,parse.all(v))};t0=4/29;t1=6/29;t2=3*t1*t1;t3=t1*t1*t1;Xn=.96422;Yn=1;Zn=.82521;conv={num2rgb:function(v){return{r:v>>16,g:v>>8&255,b:v&255,a:1}},_hsl2rgb:function(h,m1,m2){return(h<60?m1+(m2-m1)*h/60:h<180?m2:h<240?m1+(m2-m1)*(240-h)/60:m1)*255},hsl2rgb:function(arg$){var h,s,l,a,m2,m1;h=arg$.h,s=arg$.s,l=arg$.l,a=arg$.a;h=h%360+(h<0)*360;s=isNaN(h)||isNaN(s)?0:s;m2=l+(l<.5?l:1-l)*s;m1=2*l-m2;return{r:this._hsl2rgb(h>=240?h-240:h+120,m1,m2),g:this._hsl2rgb(h,m1,m2),b:this._hsl2rgb(h<120?h+240:h-120,m1,m2),a:a}},rgb2hsl:function(arg$){var r,g,b,a,ref$,Cmax,Cmin,delta,l,h,s;r=arg$.r,g=arg$.g,b=arg$.b,a=arg$.a;ref$=[r/255,g/255,b/255],r=ref$[0],g=ref$[1],b=ref$[2];Cmax=Math.max(r,g,b);Cmin=Math.min(r,g,b);delta=Cmax-Cmin;l=(Cmax+Cmin)/2;if(delta===0){ref$=[0,0],h=ref$[0],s=ref$[1]}else{h=function(){switch(false){case Cmax!==r:return 60*((g-b)/delta%6);case Cmax!==g:return 60*((b-r)/delta+2);case Cmax!==b:return 60*((r-g)/delta+4)}}();s=delta/(1-Math.abs(2*l-1))}h=(h+360)%360;return{h:h,s:s,l:l,a:a}},_rgb2lrgb:function(x){if((x/=255)<=.04045){return x/12.92}else{return Math.pow((x+.055)/1.055,2.4)}},_xyz2lab:function(t){if(t>t3){return Math.pow(t,1/3)}else{return t/t2+t0}},_lab2xyz:function(t){if(t>t1){return t*t*t}else{return t2*(t-t0)}},_lrgb2rgb:function(x){var ref$,ref1$;return(ref$=(ref1$=255*(x<=.0031308?12.92*x:1.055*Math.pow(x,1/2.4)-.055))<255?ref1$:255)>0?ref$:0},lab2rgb:function(v){var ref$,l,a,b,o,y,x,z;ref$=[v["@l"],v["@a"],v["@b"],v["a"]!=null?v["a"]:1],l=ref$[0],a=ref$[1],b=ref$[2],o=ref$[3];y=(l+16)/116;x=isNaN(a)?y:y+a/500;z=isNaN(b)?y:y-b/200;x=Xn*conv._lab2xyz(x);y=Yn*conv._lab2xyz(y);z=Zn*conv._lab2xyz(z);return{r:conv._lrgb2rgb(3.1338561*x-1.6168667*y-.4906146*z),g:conv._lrgb2rgb(-.9787684*x+1.9161415*y+.033454*z),b:conv._lrgb2rgb(.0719453*x-.2289914*y+1.4052427*z),a:o}},lab2hcl:function(v){var ref$,l,a,b,o,h;ref$=[v["@l"],v["@a"],v["@b"],v["a"]!=null?v["a"]:1],l=ref$[0],a=ref$[1],b=ref$[2],o=ref$[3];if(a===0&&b===0){return{h:NaN,c:0,l:l,a:o}}h=Math.atan2(b,a)*180/Math.PI;return{h:h<0?h+360:h,c:Math.sqrt(a*a+b*b),l:l,a:o}},hcl2lab:function(v){var h;v.a=v.a!=null?v.a:1;if(isNaN(v.h)){return{"@l":v.l,"@a":0,"@b":0,a:v.a}}h=v.h*Math.PI/180;return{"@l":v.l,"@a":Math.cos(h)*v.c,"@b":Math.sin(h)*v.c,a:v.a}},hcl2rgb:function(v){return this.lab2rgb(this.hcl2lab(v))}};utils={rgb:function(v){var ret;ret=parse.all(v);if(ret.c!=null){return conv.lab2rgb(conv.hcl2lab(ret))}if(ret.h!=null){return conv.hsl2rgb(ret)}else{return ret}},rgbfv:function(v){var ret;ret=this.rgb(v);return[ret.r/255,ret.g/255,ret.b/255]},rgbaStr:function(v){var ret;ret=utils.rgb(v);return"rgba("+ret.r+", "+ret.g+", "+ret.b+", "+ret.a+")"},hsl:function(v){var ret;ret=parse.all(v);if(ret.r){return conv.rgb2hsl(ret)}else{return ret}},hex:function(v,compact){var ret;compact==null&&(compact=false);ret=utils.rgb(v);ret=["r","g","b"].map(function(it){var v;v=Math.floor(ret[it]).toString(16)+"";return v=repeatString$("0",2-v.length)+v}).join("");if(compact&&ret[0]===ret[1]&&ret[2]===ret[3]&&ret[4]===ret[5]){ret=ret[0]+ret[2]+ret[4]}return"#"+ret},lab:function(v){var ref$,r,g,b,a,y,x,z;if(v.c){return conv.hcl2lab(v)}ref$=utils.rgb(v),r=ref$.r,g=ref$.g,b=ref$.b,a=ref$.a;r=conv._rgb2lrgb(r);g=conv._rgb2lrgb(g);b=conv._rgb2lrgb(b);y=conv._xyz2lab((.2225045*r+.7168786*g+.0606169*b)/Yn);if(r===g&&g===b){x=z=y}else{x=conv._xyz2lab((.4360747*r+.3850649*g+.1430804*b)/Xn);z=conv._xyz2lab((.0139322*r+.0971045*g+.7141733*b)/Zn)}return{"@l":116*y-16,"@a":500*(x-y),"@b":200*(y-z),a:a}},hcl:function(v){return conv.lab2hcl(utils.lab(v))},int:function(v){v=utils.rgb(v);return(Math.floor(v.r)<<16)+(Math.floor(v.g)<<8)+Math.floor(v.b)},rand:function(){return{h:Math.random()*360,s:Math.random(),l:Math.random(),a:1}}};import$(ldColor,utils);ldColor.prototype=import$(Object.create(Object.prototype),utils);for(k in utils){v=utils[k];fn$(k,v)}if(typeof module!="undefined"&&module!==null){return module.exports=ldColor}else{return window.ldColor=ldColor}function fn$(k,v){return ldColor.prototype[k]=function(){return v(this)}}})();function import$(obj,src){var own={}.hasOwnProperty;for(var key in src)if(own.call(src,key))obj[key]=src[key];return obj}function repeatString$(str,n){for(var r="";n>0;(n>>=1)&&(str+=str))if(n&1)r+=str;return r}

var palettes = [["Attack on Titan",["#1d0e0b","#774023","#d88c51","#f3e7c9","#fff9f5"]],["Bleach / ブリーチ",["#28292f","#0a0a0a","#ffffff","#f9ae5c","#e4812f"]],["Disney / Big Hero 6",["#fdfdfd","#85a2b6","#bbcedd","#dce4eb","#a00d1e","#be5960","#d69293"]],["Disney / Bolt",["#6d4e3e","#9d8074","#cfb29a","#f9f9f9","#241312","#e44f24","#ed8422","#f5bb16","#801a1d","#a92024","#cd2325"]],["Disney / Color of the Wind",["#442317","#782f19","#a74422","#c86833","#0c0d0a","#e19b4e","#f2d27f","#979aaa","#47488a","#302f50","#1c1714"]],["Disney / Fantasia 2000",["#030303","#d39182","#e0e0d0","#b4b524","#14843c","#7c9ba0","#1087b0","#35578f","#2e385b","#22202c","#6a5363","#af243d"]],["Disney / Frozen - Elsa alt",["#1d3f72","#5699d2","#d8ebf9","#71c2cc","#4996a2","#785471","#e8cdc5","#eee7d8"]],["Disney / Frozen - Elsa",["#93dbe9","#689cc5","#5e6fa3","#3b4368","#191d3a","#d9dbee","#b3b7e2"]],["Disney / Frozen",["#b5ccf1","#94a9ce","#667395","#292664","#f5f4fa","#f2bed1","#87434d","#552b2f"]],["Disney / Maleficent",["#912623","#f0f5f6","#a2b4bc","#7394a4","#32495c","#0e151e"]],["Disney / Monsters University",["#64533b","#80a352","#cfd7cc","#f8f9f8","#0f878e","#30a7b0","#63bcc7","#142a34","#184471","#38619d","#0579c1"]],["Disney / Pinocchio",["#5a1714","#bc2412","#d56b34","#6b5b4b","#e6b05d","#e3c695","#eee4bc","#adb19b","#7d877d","#20778c","#1f3849","#060408"]],["Disney / Tarzan",["#813d25","#ab6841","#cf9866","#e9c495","#526243","#2d3b2a","#6c9668","#9bba9a","#297658","#cce5ea","#42b0d3"]],["Disney / The Lion King",["#491212","#831a19","#c24229","#dd8437","#eeb440","#d8cea7","#290908"]],["Disney / The Little Mermaid",["#df1317","#e4934b","#e2bb8b","#e1e7e7","#91bcc6","#07abcc","#0a69aa","#194645"]],["Disney / Winnie the Pooh",["#220b09","#d34c31","#e88432","#ff312d","#f5c037","#e89788","#fd3262","#f0c3a9","#9d9aca","#645481"]],["Disney / Wreck It Ralph",["#3c0f0f","#f91a10","#e46b43","#edb195","#2aa7c9","#06628d","#04284d"]],["Dragon Ball / ドラゴンボール",["#1c4595","#e76a24","#01080a","#e7e5e8","#fbbc42"]],["DreamWorks / Kung Fu Panda",["#a12d2b","#be4939","#dc6949","#080604","#f7f6ea","#7d8176","#f3b63f"]],["DreamWorks / Madagascar",["#695b50","#9e8978","#b5a393","#1c1612","#fefefe","#ce611e","#fdd039","#594531","#916631","#ddb867"]],["DreamWorks / Penguins of Madagascar",["#262323","#fefefe","#a24124","#e37e44","#dae4e5","#adbcbf","#77868b","#53585a"]],["DreamWorks / Prince of Egypt",["#2f2926","#603417","#74411f","#8e511c","#bc8540","#d5912e","#e3ab45"]],["DreamWorks / Shrek - alt",["#b3c430","#4c5630","#f7faf8","#80aaf3","#984f48","#539a55"]],["DreamWorks / Shrek",["#dadbb7","#e5ee2f","#b3c430","#7d8f2c","#4c5630","#23281f","#f7faf8","#80aaf3","#185ee7","#5d231e","#984f48","#e2c9b7","#539a55","#224829"]],["Emerald City",["#985d4e","#e0dcb8","#aca730","#4f563b","#9db189","#60a363","#2c8c14","#0a4308","#607c83","#466277"]],["Neon Genesis Evangelion / 新世紀エヴァンゲリオン",["#5f2a62","#a976c3","#a0de59","#466b5a","#f5c024"]],["Yuu Gi Ou / 遊☆戯☆王",["#141414","#ab3259","#dcc75b","#e8c7ae","#082267"]],["Happiness and Cyanide",["#facd9e","#389798","#459448","#f19d3b","#923f2b"]],["涼宮ハルヒ",["#3e6d8d","#4b9bbe","#eef3ef","#f9aa47","#c93228"]],["Magica Madoka / 魔法少女まどか☆マギカ",["#ffb6bb","#ffe691","#95d5ee","#585872","#9e4446"]],["Minions alt",["#eb7f19","#dfa950","#94733c","#f4edd8","#fae127","#189ad2","#a5b5bc","#53697e","#2d2a2e"]],["Minions",["#eab145","#fad96d","#959795","#4a6985","#3e444e","#221a1a","#813513","#e8e1d6","#fdfdfd"]],["Naruto / ナルト",["#fdf4af","#edb870","#f7d8b4","#1b2124","#06080a","#e86e38","#f72405"]],["One Piece / ワンピース",["#c8472c","#412a1e","#f8de3c","#fefefe","#58acf4","#105edd","#0b3075"]],["Spirited Away / 千と千尋の神隠し (alt)",["#d2d2cb","#4d695d","#83a79d","#dae8e5","#30b0e0","#a1cde5","#bfdeee","#bc252d"]],["Spirited Away / 千と千尋の神隠し",["#7d5753","#e0aa82","#1f1418","#441a21","#7e1f30","#db3548","#4a4041","#2c1d1e"]],["Your Name / 君の名は",["#8cd0e5","#376888","#826b88","#de786a","#f8b976","#fcddc9"]],["Your Name / 君の名は",["#0055a5","#45aee7","#bda0b2","#ce64a6","#d8f05b","#55ad15"]],["Chinese Water Color / 中國水墨畫",["#832f0e","#0c0a08","#594a40","#8e7967","#e3c2a0","#deaa6e","#81947a"]],["Great Wave off Kanagawa / 神奈川沖浪裏",["#7f745b","#bfa95b","#d4c787","#82C0AF","#29526E","#171F40"]],["Liberty Leading the People / La Liberté guidant le peuple",["#18161b","#9e2721","#fffed8","#1e3049","#3f4b58","#97876d","#7a6c5a","#463b32"]],["da Vinci / Mona Lisa",["#322923","#513e2e","#896038","#d7a05b","#eabe7c","#cdb590","#aa916a","#816f53"]],["Vincent van Gogh / Starry Night over the Rhone",["#151e2f","#2a3e83","#dad69f","#feeb54","#a3945d","#6d82b1","#303f63"]],["Edvard Munch / The Scream / Skrik",["#514134","#e35839","#d28d4f","#dbae1d","#477187","#323a3f"]],["500px",["#0099e5","#ff4c4c","#34bf49"]],["7-11",["#f81b24","#009553","#fe5d27"]],["7up",["#215d38","#14a651","#e9eee8","#ec1c2d"]],["Dribbble",["#ea4c89","#c32361"]],["Lego",["#d01012","#f6ec36","#ffffff","#000000"]],["Netflix",["#e50914","#221f1f","#f5f5f1"]],["Reactjs",["#222222","#00d8ff"]],["ACTI",["#ea3f34","#f2982c","#52a360","#674794","#080808"]],["Adobe After Effect",["#1b0629","#dc93f8"]],["Adobe Illustrator",["#281300","#e26c00"]],["Adobe Bridge",["#1d150a","#edb426"]],["Adobe Lightroom",["#182731","#a7d4ec"]],["Adobe Photoshop",["#0b1d27","#72cbfd"]],["Google Adsense",["#f3b72e","#3869c5","#4686f4"]],["Google Adwords",["#4f7abe","#0a7142","#13a365"]],["Algolia",["#050f2c","#003666","#00aeff","#3369e7","#8e43e7","#b84592","#ff4f81","#ff6c5f","#ffc168","#2dde98","#1cc7d0"]],["Amazon",["#000000","#fefefe","#f19a33"]],["America Express",["#002663","#4d4f53"]],["Arriva",["#004d73","#00334e","#007fdb","#dbebfa","#832561","#11862f","#bfca02","#848a8c"]],["Asana",["#3be8b0","#1aafd0","#6a67ce","#ffb900","#fc636b"]],["Bandai Namco / バンダイナムコ",["#da3732","#e4762f","#f7be33"]],["Bestbuy",["#003b64","#fff200"]],["Bitly",["#ee6123","#eeca77","#7db0dc"]],["Bootstrap",["#337ab7","#5bc0de","#5cb85c","#f0ad4e","#d9534f"]],["Bower",["#52382b","#e46547","#fecc47","#59a82c","#27abea"]],["Burger King",["#ec1c24","#fdbd10","#0066b2"]],["Carrefour",["#d63635","#00569d"]],["Domino's Pizza",["#dc3942","#0f6491"]],["ebay",["#d74946","#0069ce","#f0af31","#94b224"]],["Elastic Search",["#d7689d","#f3d337","#a0c443","#66b5ae","#5da4dc","#40769e"]],["Microsot Excel",["#b65955","#a5b75c","#59aac2","#4f83ba","#7868a2"]],["Facebook",["#456caa","#88a2ce","#c2d2ee","#fefefe"]],["Fedex",["#e87033","#fefefe","#562d94"]],["Ferrari",["#cc232a","#fef02d","#001c27","#ffffff","#459a56"]],["Github",["#82bbe4","#a3d9ef","#211f1f","#f0ccb4","#a66156"]],["Godaddy",["#60aa4f","#edd041","#e27a3b"]],["Google Analytics",["#ee5a30","#ffffff","#f7981e"]],["Google Chart",["#c44129","#ec9332","#3e8410","#0560bd"]],["Google Drive",["#ffd14f","#4ba761","#2882fb"]],["Google",["#c5523f","#f2b736","#499255","#1875e5"]],["Ikea",["#f2bc39","#033a8b"]],["Instagram",["#4658ac","#e7008a","#ff003a","#ff6d00","#ffc53f"]],["Israel Railways",["#00aeec","#262470","#e6a430"]],["KFC / Kentucky Fried Chicken",["#c41230","#f2d4b7","#ffefe0","#ffffff","#261c02"]],["Kickstarter",["#020621","#2bde73"]],["Kodak",["#ffb718","#ffffff","#e21d19"]],["Konami / コナミ",["#a22e29","#f24a3c","#f7943c"]],["Livinplay",["#e6431d"]],["LocalBitcoins",["#00599e","#e77817"]],["Master Card",["#cc0000","#ffffff","#ff9900"]],["McDonald",["#df1a21","#ffca00"]],["Microsoft",["#f05125","#fdb813","#7fbb42","#32a0da"]],["NBC",["#fcb711","#f37021","#cc004c","#6460aa","#0089d0","#0db14b"]],["Nikon / ニコン",["#ffde35","#ffffff","#140402"]],["Oktopost",["#008fd4","#001f2d"]],["Olympic",["#1386c4","#f3c232","#000000","#47993d","#d23539"]],["Pepsi",["#ec1e25","#04acec","#282e92"]],["Pinterest",["#b83128","#ce6260","#e9b6ae","#fefefe"]],["Pizza Hut",["#f13e36","#fbb238","#479705","#000000"]],["Salesforce",["#109ad7","#fdfdfe"]],["Shell",["#dd1d21","#fbce07"]],["Slack",["#bd4030","#e0b83e","#7f9626","#76be9f","#9bcfde","#599f8c","#36173b","#563e58","#cc4876","#f4f3f1"]],["sprite",["#014c86","#00a950","#6bc048","#fad000"]],["Starbucks",["#101010","#224634","#2f6144","#416753","#869b92","#fcfdfe"]],["Subway",["#1f5242","#ffee36"]],["Tableau",["#ca1e32","#eb7e24","#c0c4c9","#5c8c9c","#3a5487"]],["Trivago",["#2973b8","#e37a1f","#a3171a"]],["Trulia",["#52b548","#41455f"]],["Twitter",["#009ef7","#ffffff"]],["Yahoo",["#65106e","#ffffff"]],["Zillow",["#0074e4","#ffffff","#74c005"]],["Mi / 小米",["#f47436","#ffffff"]],["WeChat / 微信",["#346b21","#94d137","#b3e46e","#f0f1f2"]],["Alipay / 支付寶",["#003c8b","#0e9dec","#ffffff","#f47735","#393737"]],["Taobao / 淘寶",["#ff4400","#ffffff"]],["Baidu / 百度",["#e53a2f","#ffffff","#0733dc"]],["HUAWEI / 華為",["#f03d32","#ffffff","#000000"]],["Alibaba / 阿里巴巴",["#db7033","#ffffff","#1f1a18"]],["Brown",["#611f0a","#8d4b1f","#b46f39","#d6ae7c","#f0d9a7"]],["Blue",["#0051a2","#1b75be","#408ee0","#89bff8","#e3f1ff"]],["Brown",["#200800","#522506","#864411","#a36316","#ce862b"]],["Cool",["#6252c5","#2a9fde","#21e499","#7ff658"]],["Cyan",["#00fff5","#aafbfb","#4cd4cc","#049bba","#10808b"]],["Dark",["#9c0404","#5a0b0b","#290e0e","#000000","#3f3f3f"]],["Gold",["#f4e4c4","#ebdaa2","#e4c484","#d3ab58","#aa811e"]],["Golden Light",["#eca611","#fdc823","#fff36a","#fffeaf","#fffbd6"]],["Golden Rose",["#b49998","#9f715a","#eae1da","#936162","#d69484","#3f4448"]],["Golden",["#aaa8a1","#f4f2ea","#e6cb6b","#b88d17","#8d6a14"]],["Green",["#d4ecc9","#a2d895","#75b34c","#c3d582","#e5eebf"]],["Inferno",["#140b34","#84206b","#e55c30","#f6d746"]],["Orange",["#fc4309","#ff765c","#ffb646","#ff9900","#ff6600"]],["Orange",["#f08d43","#f6eddc","#f9d887","#ab2f0c","#817441"]],["Orange",["#f7f7f7","#545454","#141414","#ff7841","#d83700"]],["Pink",["#ff727d","#ffd391","#fffbd0","#90ffb5","#60e7f3"]],["Purple",["#e4d8eb","#caacd4","#b06cc5","#9e3ea7","#75017a"]],["Red",["#a80909","#d62e2e","#fc5c5c","#eeeeee","#ff0000"]],["Red",["#a52e0e","#c94d3a","#ee7749","#eca56c","#eeceb3"]],["Silver",["#f3f3f3","#d8dddf","#b8babd","#a3a3ac","#727a7e"]],["Viridis",["#482173","#2e6f8e","#29af7f","#bddf26"]],["Warm",["#923db3","#f5468e","#ff803f","#c6d63c"]],["Yellow",["#f36100","#fa902f","#ffb856","#ffd55d","#ffff34"]],["Yellow",["#089ccc","#f5b70f","#cc0505","#e7e0c9","#9bcc31"]],["Under Construction",["#111111","#d60000","#ffd914"]],["Wedding Color",["#ffffcb","#fac090","#ff7c81","#c0f6d2","#dae4bf"]],["Antique",["#a69159","#293439","#c84445","#eceded","#959ca0"]],["Desert",["#706d5d","#b4b197","#f4efcc","#e2d07e","#bfa65f"]],["LGBT",["#fe0000","#ff6300","#ffff01","#008001","#4600ff","#830189"]],["Paint Palette",["#ee393d","#eca05a","#fce754","#8ef16f","#3d8bdf"]],["Paint Palette",["#fff8a1","#f3d0bd","#d99370","#dd2f65","#449c98"]],["Pop",["#F5542E","#F2C327","#008B6E","#00AEDE","#0067AD"]],["Tender",["#F29C98","#F5B697","#F5E797","#A2E4F5","#009DD3"]],["Tropical",["#51CACC","#9DF871","#E0FF77","#DE9DD6","#FF708E"]],["Wedding Color",["#f3dcb2","#cacbc5","#a5a6a0","#d3e6ea","#89a1a3"]],["Wedding Color",["#e90c59","#fe718d","#ffe6f5","#c2dfd7","#46dff0"]],["Wedding Color",["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]],["Young",["#f5076a","#ecec4c","#f3f2f3","#84e2c0","#00a1d5"]],["Kirby's Adventure",["#dd0459","#fd99a7","#eb6896","#eeeeee","#070a0d"]],["Mario Bros",["#0058c7","#ffffff","#f0dbb6","#df281d","#602c18"]],["Minecraft",["#717171","#654832","#497537","#81acff"]],["Taiko no Tatsujin / 太鼓の達人",["#f84828","#68c0c0","#f8f0e0","#cba331","#7bbab0"]],["Taiko no Tatsujin / 太鼓の達人",["#ff0000","#7fb54f","#3f4c28","#e7006d"]],["Taiko no tatsujin / 太鼓の達人",["#fe0d02","#feb200","#043b42"]],["Yoshi's Island",["#6bd34b","#f7f7f7","#f76717","#c20909","#296516"]],["300",["#411916","#54352b","#6d4e40","#8a6b58","#a98871","#cca98f","#ecd0b9","#f9f3e8","#801620","#b81725","#1f090b"]],["A River Runs Through It",["#e6f5ce","#bce1aa","#6e8763","#475f40","#437f64","#204342","#11292c"]],["Alice In Wonderland",["#46221e","#812e23","#b7402a","#404d2c","#6fa12b","#49772e","#243720","#ddc3d1","#b8898d"]],["Alien",["#000000","#fefefe","#a7a6a3","#a0ac32","#194820","#141d16"]],["Amélie",["#200c0b","#5c1a12","#bb260d","#a58168","#71543b","#ebd8cb","#f0bc15","#076d24","#034917","#022a0f"]],["Avatar",["#000000","#d7d978","#796a31","#cfebf3","#90b6c5","#3e92c8","#2b72a6","#1d5686","#12406b","#0a3056","#052140","#021029","#020611"]],["Back To The Future",["#9d8f8a","#824121","#e06b2a","#f7f4f1","#e7d3ab","#f3c446","#7f9fbb","#2766a4","#212b41","#656a78","#3f4455","#221e23"]],["Big Fish",["#6477a2","#8c8dac","#cba7a2","#ecc3a6","#6b524c","#b0897c","#b3701b","#814c18","#392619"]],["Breakfast at Tiffany's",["#020101","#c71e10","#866154","#d78361","#331e15","#5d4134","#998a83","#e5b38f","#eee4d7","#e49614","#5086b7","#b0b5bb"]],["Marvel / Captain America",["#9b3430","#fefefe","#aeb7c2","#3b5fa4","#171b31"]],["Cobra",["#d78e8b","#190b27","#470718","#700c1d","#cc0106","#a50206"]],["Emerald City",["#985d4e","#e0dcb8","#aca730","#4f563b","#9db189","#60a363","#2c8c14","#0a4308","#607c83","#466277"]],["Friday the 13th",["#fefefe","#cec9c9","#3c302e","#bb171a"]],["Hunger Games",["#1e0404","#3d0f08","#651707","#9a270b","#ce4a16","#eb872e","#683a1c","#935a2c","#b98248","#f0b85c","#f4e09f"]],["In the Mood For Love",["#7b2323","#7a3937","#4f2220","#ab4f3e","#2a1d1a","#d16341","#f07645","#f7b556","#e23b3f","#b32c2f","#9d2b2d"]],["Inception",["#1d2830","#064d69","#7ba6b7","#dee7e6","#e23046"]],["Indiana Jones",["#97583f","#271811","#54331d","#a96d44","#de8e49","#f9f5e3","#b5a185","#ebd5a0","#efc54d"]],["Interstellar",["#f9b580","#fffdf1","#fdf3cc","#c5a8a1","#223c44","#02121e"]],["Jurassic Park",["#781d18","#e23123","#e5756c","#d9bcb4","#180806","#f0b83e","#998354","#675538","#3e1e14"]],["Kill Bill",["#0d0707","#503317","#9d3604","#ae6006","#ce9305","#e1b303","#f6da02","#fcf902","#d9dce5","#a8a6b5","#867164"]],["Lord of the Rings",["#251d18","#402f21","#5a452e","#72593d","#896f4c","#a0855e","#b79c71","#c9b18a","#e7d9bd","#f3ead8"]],["Metropolis",["#1d0e03","#4f3c1e","#7f683f","#c3a470","#b29050"]],["Midnight In Paris",["#ecf4da","#92a5a9","#a1d3e0","#ecea37","#56b6d2","#1490be","#09669d","#a1b085","#47657d","#223046","#0d101c"]],["Minions alt",["#eb7f19","#dfa950","#94733c","#f4edd8","#fae127","#189ad2","#a5b5bc","#53697e","#2d2a2e"]],["Minions",["#eab145","#fad96d","#959795","#4a6985","#3e444e","#221a1a","#813513","#e8e1d6","#fdfdfd"]],["Scarface",["#868384","#090505","#f4f3f3","#8d0706","#cf0805","#302e2f"]],["Searching for Sugar Man",["#1d0303","#56210b","#d6750b","#f7f9f0","#e7c385"]],["Sin City",["#e50707","#fbfbfb","#c9bbb4","#a39b9a","#50403f","#ba8264","#21191b"]],["Marvel / Spiderman",["#da5047","#822720","#030104","#abadbf","#0648a9","#021656"]],["Star Wars - Dagobah",["#ecf1c1","#a0a485","#525445","#34796a","#276460","#25484f","#28333c","#1f2731","#010102"]],["Star Wars - Yoda",["#d5cfb6","#9d9974","#3c3c20","#616640","#75934e"]],["The Endless Summer",["#7b344f","#c95182","#f25da0","#fbdf02","#fb9627","#8d581b","#4f2e1c","#ec826d"]],["The Hobbit",["#6c6661","#554e49","#342d27","#ad9376","#8c765d","#705a47","#ccb9a3","#9b9792"]],["The Matrix Revolutions",["#9fb943","#607e37","#b6c89f","#262d1e","#345530","#3b673f","#5a8662"]],["The Shawshank Redemption",["#261a19","#3f2924","#663d30","#90573b","#c27945","#e7af64","#f4d692","#f3e8c4","#fdfcfa","#b0a698"]],["The Wolf of Wall Street",["#b2856d","#2f241e","#e0b799","#633c18","#9b6527","#f6a824","#a1a2ae","#413f46","#6b656a","#e5e1e3"]],["Twilight - Eclipse",["#4d2e2d","#684947","#9a7f79","#c6a79c","#454648","#363739","#171517"]],["Underworld Evolution",["#31395a","#1d2031","#5c607e","#a8a4b9","#c9c5d5","#0c0b0d"]],["V for Vendetta",["#000000","#701916","#ac2c25","#ddcebe","#8f7f71","#4a4641"]],["Watchmen",["#83641d","#c5b526","#faf015","#799564","#a4d1c1","#4ca69d","#09908a","#0b3231","#0d504f","#080e0e"]],["Way of the Gun",["#cf3f2d","#dd8342","#f0efee","#999794","#504c35","#a4953d","#d0ba2b","#ecd62f","#050406"]],["Rainbow",["#e6261f","#eb7532","#f7d038","#a3e048","#49da9a","#34bbe6","#4355db","#d23be7"]],["Hello Kitty",["#f90013","#ffe700","#ffffff","#0054ae","#251815"]],["Pom Pom Purin",["#fefcac","#ffffff","#a65c18"]],["Bee",["#f8f7de","#f7ea87","#d29d30","#854d0d","#3a200c"]],["Rose",["#46300d","#a00816","#e91629","#efefe9","#188009"]]];

/* Clusterize.js - v0.18.1 - 2018-01-02
 http://NeXTs.github.com/Clusterize.js/
 Copyright (c) 2015 Denis Lukov; Licensed GPLv3 */

;(function(q,n){"undefined"!=typeof module?module.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(n):this[q]=n()})("Clusterize",function(){function q(b,a,c){return a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent("on"+b,c)}function n(b,a,c){return a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent("on"+b,c)}function r(b){return"[object Array]"===Object.prototype.toString.call(b)}function m(b,a){return window.getComputedStyle?window.getComputedStyle(a)[b]:
a.currentStyle[b]}var l=function(){for(var b=3,a=document.createElement("b"),c=a.all||[];a.innerHTML="\x3c!--[if gt IE "+ ++b+"]><i><![endif]--\x3e",c[0];);return 4<b?b:document.documentMode}(),x=navigator.platform.toLowerCase().indexOf("mac")+1,p=function(b){if(!(this instanceof p))return new p(b);var a=this,c={rows_in_block:50,blocks_in_cluster:4,tag:null,show_no_data_row:!0,no_data_class:"clusterize-no-data",no_data_text:"No data",keep_parity:!0,callbacks:{}};a.options={};for(var d="rows_in_block blocks_in_cluster show_no_data_row no_data_class no_data_text keep_parity tag callbacks".split(" "),
f=0,h;h=d[f];f++)a.options[h]="undefined"!=typeof b[h]&&null!=b[h]?b[h]:c[h];c=["scroll","content"];for(f=0;d=c[f];f++)if(a[d+"_elem"]=b[d+"Id"]?document.getElementById(b[d+"Id"]):b[d+"Elem"],!a[d+"_elem"])throw Error("Error! Could not find "+d+" element");a.content_elem.hasAttribute("tabindex")||a.content_elem.setAttribute("tabindex",0);var e=r(b.rows)?b.rows:a.fetchMarkup(),g={};b=a.scroll_elem.scrollTop;a.insertToDOM(e,g);a.scroll_elem.scrollTop=b;var k=!1,m=0,l=!1,t=function(){x&&(l||(a.content_elem.style.pointerEvents=
"none"),l=!0,clearTimeout(m),m=setTimeout(function(){a.content_elem.style.pointerEvents="auto";l=!1},50));k!=(k=a.getClusterNum())&&a.insertToDOM(e,g);a.options.callbacks.scrollingProgress&&a.options.callbacks.scrollingProgress(a.getScrollProgress())},u=0,v=function(){clearTimeout(u);u=setTimeout(a.refresh,100)};q("scroll",a.scroll_elem,t);q("resize",window,v);a.destroy=function(b){n("scroll",a.scroll_elem,t);n("resize",window,v);a.html((b?a.generateEmptyRow():e).join(""))};a.refresh=function(b){(a.getRowsHeight(e)||
b)&&a.update(e)};a.update=function(b){e=r(b)?b:[];b=a.scroll_elem.scrollTop;e.length*a.options.item_height<b&&(k=a.scroll_elem.scrollTop=0);a.insertToDOM(e,g);a.scroll_elem.scrollTop=b};a.clear=function(){a.update([])};a.getRowsAmount=function(){return e.length};a.getScrollProgress=function(){return this.options.scroll_top/(e.length*this.options.item_height)*100||0};var w=function(b,c){var d=r(c)?c:[];d.length&&(e="append"==b?e.concat(d):d.concat(e),a.insertToDOM(e,g))};a.append=function(a){w("append",
a)};a.prepend=function(a){w("prepend",a)}};p.prototype={constructor:p,fetchMarkup:function(){for(var b=[],a=this.getChildNodes(this.content_elem);a.length;)b.push(a.shift().outerHTML);return b},exploreEnvironment:function(b,a){var c=this.options;c.content_tag=this.content_elem.tagName.toLowerCase();b.length&&(l&&9>=l&&!c.tag&&(c.tag=b[0].match(/<([^>\s/]*)/)[1].toLowerCase()),1>=this.content_elem.children.length&&(a.data=this.html(b[0]+b[0]+b[0])),c.tag||(c.tag=this.content_elem.children[0].tagName.toLowerCase()),
this.getRowsHeight(b))},getRowsHeight:function(b){var a=this.options,c=a.item_height;a.cluster_height=0;if(b.length&&(b=this.content_elem.children,b.length)){var d=b[Math.floor(b.length/2)];a.item_height=d.offsetHeight;"tr"==a.tag&&"collapse"!=m("borderCollapse",this.content_elem)&&(a.item_height+=parseInt(m("borderSpacing",this.content_elem),10)||0);"tr"!=a.tag&&(b=parseInt(m("marginTop",d),10)||0,d=parseInt(m("marginBottom",d),10)||0,a.item_height+=Math.max(b,d));a.block_height=a.item_height*a.rows_in_block;
a.rows_in_cluster=a.blocks_in_cluster*a.rows_in_block;a.cluster_height=a.blocks_in_cluster*a.block_height;return c!=a.item_height}},getClusterNum:function(){this.options.scroll_top=this.scroll_elem.scrollTop;return Math.floor(this.options.scroll_top/(this.options.cluster_height-this.options.block_height))||0},generateEmptyRow:function(){var b=this.options;if(!b.tag||!b.show_no_data_row)return[];var a=document.createElement(b.tag),c=document.createTextNode(b.no_data_text);a.className=b.no_data_class;
if("tr"==b.tag){var d=document.createElement("td");d.colSpan=100;d.appendChild(c)}a.appendChild(d||c);return[a.outerHTML]},generate:function(b,a){var c=this.options,d=b.length;if(d<c.rows_in_block)return{top_offset:0,bottom_offset:0,rows_above:0,rows:d?b:this.generateEmptyRow()};var f=Math.max((c.rows_in_cluster-c.rows_in_block)*a,0),h=f+c.rows_in_cluster,e=Math.max(f*c.item_height,0);c=Math.max((d-h)*c.item_height,0);d=[];var g=f;for(1>e&&g++;f<h;f++)b[f]&&d.push(b[f]);return{top_offset:e,bottom_offset:c,
rows_above:g,rows:d}},renderExtraTag:function(b,a){var c=document.createElement(this.options.tag);c.className=["clusterize-extra-row","clusterize-"+b].join(" ");a&&(c.style.height=a+"px");return c.outerHTML},insertToDOM:function(b,a){this.options.cluster_height||this.exploreEnvironment(b,a);var c=this.generate(b,this.getClusterNum()),d=c.rows.join(""),f=this.checkChanges("data",d,a),h=this.checkChanges("top",c.top_offset,a),e=this.checkChanges("bottom",c.bottom_offset,a),g=this.options.callbacks,
k=[];f||h?(c.top_offset&&(this.options.keep_parity&&k.push(this.renderExtraTag("keep-parity")),k.push(this.renderExtraTag("top-space",c.top_offset))),k.push(d),c.bottom_offset&&k.push(this.renderExtraTag("bottom-space",c.bottom_offset)),g.clusterWillChange&&g.clusterWillChange(),this.html(k.join("")),"ol"==this.options.content_tag&&this.content_elem.setAttribute("start",c.rows_above),this.content_elem.style["counter-increment"]="clusterize-counter "+(c.rows_above-1),g.clusterChanged&&g.clusterChanged()):
e&&(this.content_elem.lastChild.style.height=c.bottom_offset+"px")},html:function(b){var a=this.content_elem;if(l&&9>=l&&"tr"==this.options.tag){var c=document.createElement("div");for(c.innerHTML="<table><tbody>"+b+"</tbody></table>";b=a.lastChild;)a.removeChild(b);for(c=this.getChildNodes(c.firstChild.firstChild);c.length;)a.appendChild(c.shift())}else a.innerHTML=b},getChildNodes:function(b){b=b.children;for(var a=[],c=0,d=b.length;c<d;c++)a.push(b[c]);return a},checkChanges:function(b,a,c){var d=
a!=c[b];c[b]=a;return d}};return p});
// Generated by LiveScript 1.3.1
var slice$ = [].slice;
(function(module){
  var pathFromList, transformFromList, animToString, fetchImage, _fetchImages, fetchImages, freezeTraverse, restoreAnimation, prepare, dummy, dummyStyle, traverse, smiltool, smilToSvg, svgToDataurl, smilToDataurl, urlToDataurl, smilToImg, smilToPng, dataurlToI8a, i8aToBlob, dataurlToBlob, svgToBlob, dataurlToArraybuffer, imgurlToArraybuffer, iBuffer, apngtool, i8asToApngI8a;
  pathFromList = function(list){
    var ret, i$, to$, i, item;
    ret = [];
    for (i$ = 0, to$ = list.numberOfItems; i$ < to$; ++i$) {
      i = i$;
      item = list.getItem(i);
      ret.push(item.pathSegTypeAsLetter + ['r1', 'r2', 'angle', 'largeArcFlag', 'sweepFlag', 'x1', 'y1', 'x2', 'y2', 'x', 'y'].filter(fn$).map(fn1$).join(" "));
    }
    return ret.join("");
    function fn$(it){
      return item[it] != null;
    }
    function fn1$(it){
      if (it === 'largeArcFlag' || it === 'sweepFlag') {
        if (item[it]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        return item[it];
      }
    }
  };
  transformFromList = function(list){
    var ret, i$, to$, i, item, mat;
    ret = [];
    for (i$ = 0, to$ = list.numberOfItems; i$ < to$; ++i$) {
      i = i$;
      item = list.getItem(i);
      mat = item.matrix;
      ret.push("matrix(" + mat.a + "," + mat.b + "," + mat.c + "," + mat.d + "," + mat.e + "," + mat.f + ")");
    }
    return ret.join(" ");
  };
  animToString = function(input){
    var ref$;
    if ((ref$ = typeof input) === 'string' || ref$ === 'number') {
      return input;
    }
    if (input.animVal) {
      if ((ref$ = typeof input.animVal) === 'string' || ref$ === 'number') {
        return input.animVal;
      }
      if ((ref$ = typeof input.animVal.value) === 'string' || ref$ === 'number') {
        return input.animVal.value;
      }
      if (!input.animVal.numberOfItems) {
        return "";
      }
      return transformFromList(input.animVal);
    } else if (input.numberOfItems && ((input.getItem && input.getItem(0)) || input[0]).pathSegType != null) {
      return pathFromList(input);
    }
    return "";
  };
  fetchImage = function(url, width, height){
    return new Promise(function(res, rej){
      var img;
      if (/^data:/.exec(url)) {
        return res(url);
      }
      img = new Image();
      if (width) {
        img.width = width + "px";
      }
      if (height) {
        img.height = height + "px";
      }
      img.onload = function(){
        var ref$, width, height, canvas, ctx;
        ref$ = [img.width, img.height], width = ref$[0], height = ref$[1];
        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        ctx.fillStyle = 'rgba(255,255,255,0)';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        return res(canvas.toDataURL());
      };
      return img.src = url;
    });
  };
  _fetchImages = function(node, hash){
    var promises, href, width, height, i$, to$, i, child;
    hash == null && (hash = {});
    promises = [];
    if (/^#/.exec(node.nodeName)) {
      return [];
    }
    href = node.getAttributeNS('http://www.w3.org/1999/xlink', 'href') || node.getAttribute('href');
    if (href && !/^#/.exec(href)) {
      width = node.getAttribute('width');
      height = node.getAttribute('height');
      promises.push(fetchImage(href, width, height).then(function(it){
        return hash[href] = it;
      }));
    }
    for (i$ = 0, to$ = node.childNodes.length; i$ < to$; ++i$) {
      i = i$;
      child = node.childNodes[i];
      promises = promises.concat(_fetchImages(child, hash));
    }
    return promises;
  };
  fetchImages = function(node, hash){
    hash == null && (hash = {});
    return Promise.all(_fetchImages(node, hash));
  };
  freezeTraverse = function(node, option, delay){
    var style, i$, to$, i, child, results$ = [];
    option == null && (option = {});
    delay == null && (delay = 0);
    if (/^#text/.exec(node.nodeName)) {
      return node.textContent;
    } else if (/^#/.exec(node.nodeName)) {
      return "";
    }
    style = window.getComputedStyle(node);
    if (!(node._delay != null)) {
      node._delay = parseFloat(style["animation-delay"] || 0);
    }
    if (!(node._dur != null)) {
      node._dur = parseFloat(style["animation-duration"] || 0);
    }
    node.style["animation-play-state"] = "paused";
    node.style["animation-delay"] = (node._delay - delay) + "s";
    for (i$ = 0, to$ = node.childNodes.length; i$ < to$; ++i$) {
      i = i$;
      child = node.childNodes[i];
      results$.push(freezeTraverse(child, option, delay));
    }
    return results$;
  };
  restoreAnimation = function(node){
    var i$, to$, i, results$ = [];
    if (/^#text/.exec(node.nodeName)) {
      return node.textContent;
    } else if (/^#/.exec(node.nodeName)) {
      return "";
    }
    node.style["animation-play-state"] = "running";
    node.style["animation-delay"] = (node._delay || 0) + "s";
    for (i$ = 0, to$ = node.childNodes.length; i$ < to$; ++i$) {
      i = i$;
      results$.push(restoreAnimation(node.childNodes[i]));
    }
    return results$;
  };
  prepare = function(node, delay, option){
    var ref$, p, n;
    option == null && (option = {});
    ref$ = [node.parentNode, node.nextSibling], p = ref$[0], n = ref$[1];
    p.removeChild(node);
    if (n) {
      p.insertBefore(node, n);
    } else {
      p.appendChild(node);
    }
    if (node.pauseAnimations != null) {
      node.pauseAnimations();
      if (delay != null) {
        node.setCurrentTime(delay);
      }
    }
    freezeTraverse(node, option, delay);
    return traverse(node, option);
  };
  dummy = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  if (document.body) {
    document.body.appendChild(dummy);
  }
  dummyStyle = window.getComputedStyle(dummy);
  traverse = function(node, delay, option){
    var ref$, attrs, styles, subtags, animatedProperties, style, k, v, attr, inlineStyle, i$, to$, i, child, dur, begin, path, length, ptr, name, value, len$, ret;
    delay == null && (delay = 1);
    option == null && (option = {});
    if (/^#text/.exec(node.nodeName)) {
      return node.textContent;
    } else if (/^#/.exec(node.nodeName)) {
      return "";
    }
    ref$ = [[], [], [], {}], attrs = ref$[0], styles = ref$[1], subtags = ref$[2], animatedProperties = ref$[3];
    style = getComputedStyle(node);
    if (option.cssAnimation || option.withCss) {
      for (k in style) {
        v = style[k];
        attr = node.getAttribute(k);
        inlineStyle = node.getAttribute('style') || '';
        if (!(/^\d+$|^cssText$/.exec(k) || (dummyStyle[k] === v && !~inlineStyle.indexOf(k))) && !(option.noAnimation && /animation/.exec(k))) {
          styles.push([k.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(), v]);
        }
      }
    }
    if (node.nodeName === 'svg') {
      animatedProperties["xmlns"] = "http://www.w3.org/2000/svg";
      animatedProperties["xmlns:xlink"] = "http://www.w3.org/1999/xlink";
    }
    for (i$ = 0, to$ = node.childNodes.length; i$ < to$; ++i$) {
      i = i$;
      child = node.childNodes[i];
      if (/^animate/.exec(child.nodeName) && option.noAnimation) {
        continue;
      }
      if (/^animateMotion/.exec(child.nodeName)) {
        dur = child.getSimpleDuration();
        begin = +child.getAttribute("begin").replace("s", "");
        path = document.querySelector(child.querySelector("mpath").getAttributeNS("http://www.w3.org/1999/xlink", "href"));
        length = path.getTotalLength();
        ptr = path.getPointAtLength(length * ((child.getCurrentTime() - begin) % dur) / dur);
        animatedProperties["transform"] = "translate(" + ptr.x + " " + ptr.y + ")";
      } else if (/^animate/.exec(child.nodeName)) {
        name = child.getAttribute('attributeName');
        value = node[name] || style.getPropertyValue(name);
        if (name === 'd') {
          value = node.animatedPathSegList || node.getAttribute('d');
        }
        animatedProperties[name] = animToString(value);
      } else {
        subtags.push(traverse(child, delay, option));
      }
    }
    for (i$ = 0, len$ = (ref$ = node.attributes).length; i$ < len$; ++i$) {
      v = ref$[i$];
      if (v.name === 'style') {
        continue;
      }
      if (animatedProperties[v.name] != null) {
        attrs.push([v.name, animatedProperties[v.name]]);
        delete animatedProperties[v.name];
      } else if ((v.name === 'xlink:href' || v.name === 'href') && option.hrefs && option.hrefs[v.value]) {
        attrs.push([v.name, option.hrefs[v.value]]);
      } else {
        attrs.push([v.name, v.value]);
      }
    }
    for (k in animatedProperties) {
      v = animatedProperties[k];
      attrs.push([k, v]);
    }
    if (option.noAnimation) {
      attrs.map(function(it){
        if (it[0] === 'class') {
          return it[1] = it[1].split(' ').filter(function(it){
            return !/^ld-/.exec(it);
          }).join(' ');
        }
      });
    }
    styles.sort(function(a, b){
      if (b[0] > a[0]) {
        return 1;
      } else if (b[0] < a[0]) {
        return -1;
      } else {
        return 0;
      }
    });
    styles.map(function(it){
      if (it[1] && typeof it[1] === 'string') {
        return it[1] = it[1].replace(/"/g, "'");
      }
    });
    attrs.map(function(it){
      if (it[1] && typeof it[1] === 'string') {
        return it[1] = it[1].replace(/"/g, "'");
      }
    });
    ret = [
      "<" + node.nodeName, attrs.length ? " " + attrs.map(function(it){
        return it[0] + "=\"" + it[1] + "\"";
      }).join(" ") : void 8, styles.length ? " style=\"" + styles.map(function(it){
        return it[0] + ":" + it[1];
      }).join(";") + "\" " : void 8, ">", subtags.join("\n").trim(), "</" + node.nodeName + ">"
    ].filter(function(it){
      return it;
    }).join("");
    return ret;
  };
  smiltool = module.smiltool = {};
  smiltool.smilToSvg = smilToSvg = function(root, delay, option){
    option == null && (option = {});
    return new Promise(function(res, rej){
      var hash, _;
      hash = {};
      root.pauseAnimations();
      if (delay != null) {
        root.setCurrentTime(delay);
      }
      _ = function(){
        return fetchImages(root, hash).then(function(){
          var ret;
          if (option.cssAnimation) {
            prepare(root, delay, option);
          }
          ret = traverse(root, delay, import$({
            hrefs: hash
          }, option));
          if (option.cssAnimation) {
            restoreAnimation(root);
          }
          root.unpauseAnimations();
          return res("<?xml version=\"1.0\" encoding=\"utf-8\"?>" + ret);
        });
      };
      if (option.forceRedraw) {
        return requestAnimationFrame(function(it){
          return _(it);
        });
      } else {
        return _();
      }
    });
  };
  smiltool.svgToDataurl = svgToDataurl = function(svg){
    return new Promise(function(res, rej){
      return res("data:image/svg+xml," + encodeURIComponent(svg));
    });
  };
  smiltool.smilToDataurl = smilToDataurl = function(root, delay, option){
    return smilToSvg(root, delay, option).then(function(svg){
      return svgToDataurl(svg);
    });
  };
  smiltool.urlToDataurl = urlToDataurl = function(url, width, height, type, quality){
    width == null && (width = 100);
    height == null && (height = 100);
    type == null && (type = "image/png");
    quality == null && (quality = 0.92);
    return new Promise(function(res, rej){
      var img;
      img = new Image();
      img.onload = function(){
        var canvas, ctx;
        canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        return res(canvas.toDataURL(type, quality));
      };
      return img.src = url;
    });
  };
  smiltool.dataurlToImg = urlToDataurl;
  smiltool.smilToImg = smilToImg = function(root, width, height, delay, type, quality, option){
    width == null && (width = 100);
    height == null && (height = 100);
    type == null && (type = "image/png");
    quality == null && (quality = 0.92);
    return smilToDataurl(root, delay, option).then(function(dataurl){
      return urlToDataurl(dataurl, width, height, type, quality);
    });
  };
  smiltool.smilToPng = smilToPng = function(root, width, height, delay, quality, option){
    width == null && (width = 100);
    height == null && (height = 100);
    quality == null && (quality = 0.92);
    return smilToImg(root, width, height, delay, "image/png", quality, option);
  };
  smiltool.pngIendFix = function(a8){
    a8[a8.length - 4] = 0xae;
    a8[a8.length - 3] = 0x42;
    a8[a8.length - 2] = 0x60;
    a8[a8.length - 1] = 0x82;
    return a8;
  };
  smiltool.dataurlToI8a = dataurlToI8a = function(url){
    return new Promise(function(res, rej){
      var content, bin, len, len32, a8, a32, ref$, i, j, i$, tailLen;
      content = url.split(',')[1];
      if (/base64/.exec(url)) {
        bin = atob(content);
      } else {
        bin = decodeURIComponent(content);
      }
      len = bin.length;
      len32 = len >> 2;
      a8 = new Uint8Array(len);
      a32 = new Uint32Array(a8.buffer, 0, len32);
      ref$ = [0, 0], i = ref$[0], j = ref$[1];
      for (i$ = 0; i$ < len32; ++i$) {
        i = i$;
        a32[i] = bin.charCodeAt(j++) | bin.charCodeAt(j++) << 8 | bin.charCodeAt(j++) << 16 | bin.charCodeAt(j++) << 24;
      }
      tailLen = len & 3;
      for (i$ = tailLen; i$ < 0; ++i$) {
        i = i$;
        a8[j] = bin.charCodeAt(j);
        j++;
      }
      return res(smiltool.pngIendFix(a8));
    });
  };
  smiltool.i8aToBlob = i8aToBlob = function(i8a, type){
    type == null && (type = 'image/png');
    return new Promise(function(res, rej){
      return res(new Blob([i8a], {
        type: type
      }));
    });
  };
  smiltool.dataurlToBlob = dataurlToBlob = function(url, type){
    type == null && (type = 'image/png');
    return dataurlToI8a(url).then(function(i8a){
      return i8aToBlob(i8a, type);
    });
  };
  smiltool.svgToBlob = svgToBlob = function(svg, type){
    type == null && (type = 'image/png');
    return svgToDataurl(svg).then(function(url){
      return dataurlToI8a(url);
    }).then(function(i8a){
      return i8aToBlob(i8a, type);
    });
  };
  smiltool.smilToBlob = svgToBlob = function(svg, delay, type, option){
    type == null && (type = 'image/png');
    return smilToSvg(root, delay, option).then(function(svg){
      svgToDataurl(svg).then(function(url){});
      dataurlToI8a(url).then(function(i8a){});
      return i8aToBlob(i8a, type);
    });
  };
  smiltool.dataurlToArraybuffer = dataurlToArraybuffer = function(dataurl){
    return new Promise(function(res, rej){
      var splitted, byteString, mimeString, ab, ia, i$, to$, i;
      splitted = dataurl.split(',');
      byteString = atob(splitted[1]);
      mimeString = splitted[0].split(':')[1].split(';')[0];
      ab = new ArrayBuffer(byteString.length);
      ia = new Uint8Array(ab);
      for (i$ = 0, to$ = byteString.length; i$ < to$; ++i$) {
        i = i$;
        ia[i] = byteString.charCodeAt(i);
      }
      return res(ab);
    });
  };
  smiltool.imgurlToArraybuffer = imgurlToArraybuffer = function(url, width, height, type, quality){
    type == null && (type = 'image/png');
    quality == null && (quality = 0.92);
    return new Promise(function(res, rej){
      var img;
      img = new Image();
      img.onload = function(){
        var w, h, canvas, ctx, dataurl;
        w = width != null
          ? width
          : img.width;
        h = height != null
          ? height
          : img.height;
        canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = '#ffffff';
        ctx.fillStyle = 'rgba(255,255,255,0)';
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, img.width, img.height, (w - img.width) / 2, (h - img.height) / 2, img.width, img.height);
        dataurl = canvas.toDataURL(type, quality);
        return dataurlToArraybuffer(dataurl).then(function(ab){
          return res(ab);
        });
      };
      return img.src = url;
    });
  };
  if (typeof GIF != 'undefined' && GIF !== null) {
    smiltool.smilToGif = function(node, paramOption, paramGifOption, smil2svgopt){
      paramOption == null && (paramOption = {});
      paramGifOption == null && (paramGifOption = {});
      smil2svgopt == null && (smil2svgopt = {});
      return smiltool.smilToImgs(node, paramOption, smil2svgopt).then(function(ret){
        return new Promise(function(res, rej){
          var option, gifOption, ref$, gif, i$, len$, item;
          option = import$({
            slow: 0,
            width: 100,
            height: 100,
            frames: 30,
            duration: 1,
            progress: function(){}
          }, paramOption);
          gifOption = (ref$ = import$({
            worker: 2,
            quality: 1
          }, paramGifOption), ref$.width = option.width, ref$.height = option.height, ref$);
          gif = new GIF(gifOption);
          gif.on('finished', function(blob){
            var img;
            img = new Image();
            img.src = URL.createObjectURL(blob);
            return res({
              gif: img,
              frames: ret.imgs,
              blob: blob
            });
          });
          for (i$ = 0, len$ = (ref$ = ret.imgs).length; i$ < len$; ++i$) {
            item = ref$[i$];
            gif.addFrame(item.img, item.option);
          }
          return gif.render();
        });
      });
    };
  }
  smiltool.smilToPngs = function(node, paramOption, smil2svgopt){
    paramOption == null && (paramOption = {});
    smil2svgopt == null && (smil2svgopt = {});
    return smiltool.smilToImgs(node, paramOption, smil2svgopt).then(function(ret){
      var option, zip, promises;
      option = import$({
        width: 100,
        height: 100
      }, paramOption);
      zip = new JSZip();
      promises = ret.imgs.map(function(d, i){
        return urlToDataurl(ret.imgs[i].src, option.width, option.height).then(function(it){
          return dataurlToBlob(it);
        }).then(function(blob){
          return zip.file("frame-" + i + ".png", blob);
        });
      });
      return Promise.all(promises).then(function(){
        return zip.generateAsync({
          type: 'blob'
        });
      }).then(function(it){
        return {
          blob: it,
          frames: ret.imgs
        };
      });
    });
  };
  smiltool.smilToImgs = function(node, paramOption, smil2svgopt){
    paramOption == null && (paramOption = {});
    smil2svgopt == null && (smil2svgopt = {});
    return new Promise(function(res, rej){
      var imgs, option, handler, render, _;
      imgs = [];
      option = import$({
        slow: 0,
        width: 100,
        height: 100,
        frames: 30,
        duration: 1,
        progress: function(){}
      }, paramOption);
      if (option.duration / option.frames < 0.034) {
        option.frames = Math.floor(option.duration / 0.034);
      }
      if (option.duration / option.frames > 0.1) {
        option.frames = Math.ceil(option.duration / 0.1);
      }
      handler = {
        imgs: [],
        option: option
      };
      render = function(){
        return res(handler);
      };
      _ = function(t){
        var p, ref$;
        p = (ref$ = 100 * t / option.duration) < 100 ? ref$ : 100;
        option.progress(p);
        if (t > option.duration) {
          return render();
        }
        if (paramOption.step) {
          paramOption.step(t);
        }
        return smilToSvg(node, t, smil2svgopt).then(function(ret){
          var img, x$, delay;
          img = new Image();
          x$ = img.style;
          x$.width = option.width + "px";
          x$.height = option.height + "px";
          img.src = "data:image/svg+xml;," + encodeURIComponent(ret);
          delay = Math.round(option.duration * 1000 / option.frames);
          handler.imgs.push({
            img: img,
            option: {
              delay: delay
            },
            src: img.src
          });
          imgs.push(img);
          return setTimeout(function(){
            return _(t + option.duration / option.frames);
          }, option.slow);
        });
      };
      return setTimeout(function(){
        return _(0);
      }, option.slow);
    });
  };
  iBuffer = function(input){
    if (typeof input === 'number') {
      this.ua = new Uint8Array(input);
      this.length = input;
    } else {
      this.ua = input;
      this.length = input.length;
    }
    return this;
  };
  iBuffer.concat = function(){
    var bufs, length, buf, offset, i$, to$, i;
    bufs = slice$.call(arguments);
    length = bufs.reduce(function(a, b){
      return a + b.length;
    }, 0);
    buf = new iBuffer(length);
    offset = 0;
    for (i$ = 0, to$ = bufs.length; i$ < to$; ++i$) {
      i = i$;
      buf.ua.set(bufs[i].ua, offset);
      offset += bufs[i].length;
    }
    return buf;
  };
  import$(iBuffer.prototype, {
    readUInt32BE: function(position){
      var ret, i$, i;
      ret = 0;
      for (i$ = 0; i$ <= 3; ++i$) {
        i = i$;
        ret *= 0x100;
        ret += +this.ua[position + i];
      }
      return ret;
    },
    readUInt8: function(position){
      return this.ua[position];
    },
    writeUIntBE: function(value, position, bytes){
      var i$, i, results$ = [];
      bytes == null && (bytes = 4);
      for (i$ = bytes - 1; i$ >= 0; --i$) {
        i = i$;
        results$.push(this.ua[position + (bytes - 1) - i] = value >> 8 * i & 0xff);
      }
      return results$;
    },
    writeUInt32BE: function(value, position){
      return this.writeUIntBE(value, position, 4);
    },
    writeUInt16BE: function(value, position){
      return this.writeUIntBE(value, position, 2);
    },
    writeUInt8: function(value, position){
      return this.writeUIntBE(value, position, 1);
    },
    write: function(value, position){
      var i$, to$, i, results$ = [];
      value == null && (value = "");
      for (i$ = 0, to$ = value.length; i$ < to$; ++i$) {
        i = i$;
        results$.push(this.ua[position + i] = value.charCodeAt(i) & 0xff);
      }
      return results$;
    },
    slice: function(a, b){
      return new iBuffer(this.ua.slice(a, b));
    },
    copy: function(des, ts, ss, se){
      var i$, to$, i, results$ = [];
      ts == null && (ts = 0);
      ss == null && (ss = 0);
      if (!se) {
        se = this.ua.length;
      }
      for (i$ = 0, to$ = se - ss; i$ < to$; ++i$) {
        i = i$;
        results$.push(des.writeUInt8(this.readUInt8(ss + i), ts + i));
      }
      return results$;
    },
    toString: function(encoding){
      var ret, i$, to$, i;
      ret = "";
      for (i$ = 0, to$ = this.length; i$ < to$; ++i$) {
        i = i$;
        ret += String.fromCharCode(this.ua[i]);
      }
      return ret;
    }
  });
  apngtool = {
    findChunk: function(buf, type){
      var offset, chunkLength, chunkType, ret;
      offset = 8;
      while (offset < buf.length) {
        chunkLength = buf.readUInt32BE(offset);
        chunkType = buf.slice(offset + 4, offset + 8).toString('ascii');
        if (chunkType === type) {
          ret = buf.slice(offset, offset + chunkLength + 12);
          return buf.slice(offset, offset + chunkLength + 12);
        }
        offset += 4 + 4 + chunkLength + 4;
      }
      throw new Error("chunk " + type + " not found");
    },
    animateFrame: function(buf, idx, delay){
      var ihdr, idat, delayNumerator, delayDenominator, fctl, length, fdat;
      ihdr = apngtool.findChunk(buf, 'IHDR');
      idat = apngtool.findChunk(buf, 'IDAT');
      delayNumerator = Math.round(delay * 1000);
      delayDenominator = 1000;
      fctl = new iBuffer(38);
      fctl.writeUInt32BE(26, 0);
      fctl.write('fcTL', 4);
      fctl.writeUInt32BE(idx ? idx * 2 - 1 : 0, 8);
      fctl.writeUInt32BE(ihdr.readUInt32BE(8), 12);
      fctl.writeUInt32BE(ihdr.readUInt32BE(12), 16);
      fctl.writeUInt32BE(0, 20);
      fctl.writeUInt32BE(0, 24);
      fctl.writeUInt16BE(delayNumerator, 28);
      fctl.writeUInt16BE(delayDenominator, 30);
      fctl.writeUInt8(0, 32);
      fctl.writeUInt8(0, 33);
      fctl.writeUInt32BE(CRC32.buf(fctl.slice(4, fctl.length - 4).ua), 34);
      if (!idx) {
        return [idx, ihdr, iBuffer.concat(fctl, idat)];
      }
      length = idat.length + 4;
      fdat = new iBuffer(length);
      fdat.writeUInt32BE(length - 12, 0);
      fdat.write('fdAT', 4);
      fdat.writeUInt32BE(idx * 2, 8);
      idat.copy(fdat, 12, 8);
      fdat.writeUInt32BE(CRC32.buf(fdat.slice(4, fdat.length - 4).ua), length - 4);
      return [idx, ihdr, iBuffer.concat(fctl, fdat)];
    }
  };
  smiltool.i8asToApngI8a = i8asToApngI8a = function(i8as, delay, loopCount){
    i8as == null && (i8as = []);
    delay == null && (delay = 0.033);
    loopCount == null && (loopCount = 0);
    return Promise.resolve().then(function(){
      var images, signature, ihdr, iend, actl;
      images = i8as.filter(function(it){
        return it.length;
      }).map(function(d, idx){
        return apngtool.animateFrame(new iBuffer(d), idx, delay);
      });
      signature = new iBuffer([137, 80, 78, 71, 13, 10, 26, 10]);
      ihdr = images[0][1];
      iend = new iBuffer([0, 0, 0, 0, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
      actl = new iBuffer(20);
      actl.writeUInt32BE(8, 0);
      actl.write('acTL', 4);
      actl.writeUInt32BE(images.length, 8);
      actl.writeUInt32BE(0, 12);
      actl.writeUInt32BE(CRC32.buf(actl.slice(4, actl.length - 4).ua), 16);
      return iBuffer.concat.apply(null, [signature, ihdr, actl].concat(images.map(function(it){
        return it[2];
      }), [iend]));
    }).then(function(it){
      return it.ua;
    });
  };
  smiltool.smilToApngI8a = function(node, paramOption, smil2svgopt){
    paramOption == null && (paramOption = {});
    smil2svgopt == null && (smil2svgopt = {});
    return smiltool.smilToImgs(node, paramOption, smil2svgopt).then(function(ret){
      return Promise.all(ret.imgs.map(function(it){
        return smiltool.urlToDataurl(it.src, it.img.width, it.img.height).then(function(it){
          return smiltool.dataurlToI8a(it);
        });
      }));
    }).then(function(i8as){
      var option, delay;
      option = import$({
        frames: 30,
        duration: 1
      }, paramOption);
      if (option.duration / option.frames < 0.034) {
        option.frames = Math.floor(option.duration / 0.034);
      }
      if (option.duration / option.frames > 0.1) {
        option.frames = Math.ceil(option.duration / 0.1);
      }
      delay = option.duration / option.frames;
      return smiltool.i8asToApngI8a(i8as, delay);
    });
  };
  return smiltool.smilToApngBlob = function(node, paramOption, smil2svgopt){
    paramOption == null && (paramOption = {});
    smil2svgopt == null && (smil2svgopt = {});
    return smiltool.smilToApngI8a(node, paramOption, smil2svgopt).then(function(i8a){
      return smiltool.i8aToBlob(i8a, "image/apng");
    });
  };
})(typeof module != 'undefined' && module !== null ? module.exports || (module.exports = {}) : window);
/*
<- $ document .ready
option = {width: 200, height: 200, duration: 2}
gifoption = do
  worker: 2,
  quality: 10,
  workerScript: \gif.worker.js,
  transparent: 0x0000ff
smiltool.smil-to-gif( document.getElementById(\svg), option, gifoption )
  .then -> document.body.appendChild it.gif
*/
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
// gif.js 0.2.0 - https://github.com/jnordberg/gif.js
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.GIF=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){function EventEmitter(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined}module.exports=EventEmitter;EventEmitter.EventEmitter=EventEmitter;EventEmitter.prototype._events=undefined;EventEmitter.prototype._maxListeners=undefined;EventEmitter.defaultMaxListeners=10;EventEmitter.prototype.setMaxListeners=function(n){if(!isNumber(n)||n<0||isNaN(n))throw TypeError("n must be a positive number");this._maxListeners=n;return this};EventEmitter.prototype.emit=function(type){var er,handler,len,args,i,listeners;if(!this._events)this._events={};if(type==="error"){if(!this._events.error||isObject(this._events.error)&&!this._events.error.length){er=arguments[1];if(er instanceof Error){throw er}else{var err=new Error('Uncaught, unspecified "error" event. ('+er+")");err.context=er;throw err}}}handler=this._events[type];if(isUndefined(handler))return false;if(isFunction(handler)){switch(arguments.length){case 1:handler.call(this);break;case 2:handler.call(this,arguments[1]);break;case 3:handler.call(this,arguments[1],arguments[2]);break;default:args=Array.prototype.slice.call(arguments,1);handler.apply(this,args)}}else if(isObject(handler)){args=Array.prototype.slice.call(arguments,1);listeners=handler.slice();len=listeners.length;for(i=0;i<len;i++)listeners[i].apply(this,args)}return true};EventEmitter.prototype.addListener=function(type,listener){var m;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events)this._events={};if(this._events.newListener)this.emit("newListener",type,isFunction(listener.listener)?listener.listener:listener);if(!this._events[type])this._events[type]=listener;else if(isObject(this._events[type]))this._events[type].push(listener);else this._events[type]=[this._events[type],listener];if(isObject(this._events[type])&&!this._events[type].warned){if(!isUndefined(this._maxListeners)){m=this._maxListeners}else{m=EventEmitter.defaultMaxListeners}if(m&&m>0&&this._events[type].length>m){this._events[type].warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[type].length);if(typeof console.trace==="function"){console.trace()}}}return this};EventEmitter.prototype.on=EventEmitter.prototype.addListener;EventEmitter.prototype.once=function(type,listener){if(!isFunction(listener))throw TypeError("listener must be a function");var fired=false;function g(){this.removeListener(type,g);if(!fired){fired=true;listener.apply(this,arguments)}}g.listener=listener;this.on(type,g);return this};EventEmitter.prototype.removeListener=function(type,listener){var list,position,length,i;if(!isFunction(listener))throw TypeError("listener must be a function");if(!this._events||!this._events[type])return this;list=this._events[type];length=list.length;position=-1;if(list===listener||isFunction(list.listener)&&list.listener===listener){delete this._events[type];if(this._events.removeListener)this.emit("removeListener",type,listener)}else if(isObject(list)){for(i=length;i-- >0;){if(list[i]===listener||list[i].listener&&list[i].listener===listener){position=i;break}}if(position<0)return this;if(list.length===1){list.length=0;delete this._events[type]}else{list.splice(position,1)}if(this._events.removeListener)this.emit("removeListener",type,listener)}return this};EventEmitter.prototype.removeAllListeners=function(type){var key,listeners;if(!this._events)return this;if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[type])delete this._events[type];return this}if(arguments.length===0){for(key in this._events){if(key==="removeListener")continue;this.removeAllListeners(key)}this.removeAllListeners("removeListener");this._events={};return this}listeners=this._events[type];if(isFunction(listeners)){this.removeListener(type,listeners)}else if(listeners){while(listeners.length)this.removeListener(type,listeners[listeners.length-1])}delete this._events[type];return this};EventEmitter.prototype.listeners=function(type){var ret;if(!this._events||!this._events[type])ret=[];else if(isFunction(this._events[type]))ret=[this._events[type]];else ret=this._events[type].slice();return ret};EventEmitter.prototype.listenerCount=function(type){if(this._events){var evlistener=this._events[type];if(isFunction(evlistener))return 1;else if(evlistener)return evlistener.length}return 0};EventEmitter.listenerCount=function(emitter,type){return emitter.listenerCount(type)};function isFunction(arg){return typeof arg==="function"}function isNumber(arg){return typeof arg==="number"}function isObject(arg){return typeof arg==="object"&&arg!==null}function isUndefined(arg){return arg===void 0}},{}],2:[function(require,module,exports){var UA,browser,mode,platform,ua;ua=navigator.userAgent.toLowerCase();platform=navigator.platform.toLowerCase();UA=ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0];mode=UA[1]==="ie"&&document.documentMode;browser={name:UA[1]==="version"?UA[3]:UA[1],version:mode||parseFloat(UA[1]==="opera"&&UA[4]?UA[4]:UA[2]),platform:{name:ua.match(/ip(?:ad|od|hone)/)?"ios":(ua.match(/(?:webos|android)/)||platform.match(/mac|win|linux/)||["other"])[0]}};browser[browser.name]=true;browser[browser.name+parseInt(browser.version,10)]=true;browser.platform[browser.platform.name]=true;module.exports=browser},{}],3:[function(require,module,exports){var EventEmitter,GIF,browser,extend=function(child,parent){for(var key in parent){if(hasProp.call(parent,key))child[key]=parent[key]}function ctor(){this.constructor=child}ctor.prototype=parent.prototype;child.prototype=new ctor;child.__super__=parent.prototype;return child},hasProp={}.hasOwnProperty,indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1},slice=[].slice;EventEmitter=require("events").EventEmitter;browser=require("./browser.coffee");GIF=function(superClass){var defaults,frameDefaults;extend(GIF,superClass);defaults={workerScript:"/assets/gifjs/0.2.0/gif.worker.js",workers:2,repeat:0,background:"#fff",quality:10,width:null,height:null,transparent:null,debug:false,dither:false};frameDefaults={delay:500,copy:false,dispose:-1};function GIF(options){var base,key,value;this.running=false;this.options={};this.frames=[];this.freeWorkers=[];this.activeWorkers=[];this.setOptions(options);for(key in defaults){value=defaults[key];if((base=this.options)[key]==null){base[key]=value}}}GIF.prototype.setOption=function(key,value){this.options[key]=value;if(this._canvas!=null&&(key==="width"||key==="height")){return this._canvas[key]=value}};GIF.prototype.setOptions=function(options){var key,results,value;results=[];for(key in options){if(!hasProp.call(options,key))continue;value=options[key];results.push(this.setOption(key,value))}return results};GIF.prototype.addFrame=function(image,options){var frame,key;if(options==null){options={}}frame={};frame.transparent=this.options.transparent;for(key in frameDefaults){frame[key]=options[key]||frameDefaults[key]}if(this.options.width==null){this.setOption("width",image.width)}if(this.options.height==null){this.setOption("height",image.height)}if(typeof ImageData!=="undefined"&&ImageData!==null&&image instanceof ImageData){frame.data=image.data}else if(typeof CanvasRenderingContext2D!=="undefined"&&CanvasRenderingContext2D!==null&&image instanceof CanvasRenderingContext2D||typeof WebGLRenderingContext!=="undefined"&&WebGLRenderingContext!==null&&image instanceof WebGLRenderingContext){if(options.copy){frame.data=this.getContextData(image)}else{frame.context=image}}else if(image.childNodes!=null){if(options.copy){frame.data=this.getImageData(image)}else{frame.image=image}}else{throw new Error("Invalid image")}return this.frames.push(frame)};GIF.prototype.render=function(){var i,j,numWorkers,ref;if(this.running){throw new Error("Already running")}if(this.options.width==null||this.options.height==null){throw new Error("Width and height must be set prior to rendering")}this.running=true;this.nextFrame=0;this.finishedFrames=0;this.imageParts=function(){var j,ref,results;results=[];for(i=j=0,ref=this.frames.length;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j){results.push(null)}return results}.call(this);numWorkers=this.spawnWorkers();if(this.options.globalPalette===true){this.renderNextFrame()}else{for(i=j=0,ref=numWorkers;0<=ref?j<ref:j>ref;i=0<=ref?++j:--j){this.renderNextFrame()}}this.emit("start");return this.emit("progress",0)};GIF.prototype.abort=function(){var worker;while(true){worker=this.activeWorkers.shift();if(worker==null){break}this.log("killing active worker");worker.terminate()}this.running=false;return this.emit("abort")};GIF.prototype.spawnWorkers=function(){var j,numWorkers,ref,results;numWorkers=Math.min(this.options.workers,this.frames.length);(function(){results=[];for(var j=ref=this.freeWorkers.length;ref<=numWorkers?j<numWorkers:j>numWorkers;ref<=numWorkers?j++:j--){results.push(j)}return results}).apply(this).forEach(function(_this){return function(i){var worker;_this.log("spawning worker "+i);worker=new Worker(_this.options.workerScript);worker.onmessage=function(event){_this.activeWorkers.splice(_this.activeWorkers.indexOf(worker),1);_this.freeWorkers.push(worker);return _this.frameFinished(event.data)};return _this.freeWorkers.push(worker)}}(this));return numWorkers};GIF.prototype.frameFinished=function(frame){var i,j,ref;this.log("frame "+frame.index+" finished - "+this.activeWorkers.length+" active");this.finishedFrames++;this.emit("progress",this.finishedFrames/this.frames.length);this.imageParts[frame.index]=frame;if(this.options.globalPalette===true){this.options.globalPalette=frame.globalPalette;this.log("global palette analyzed");if(this.frames.length>2){for(i=j=1,ref=this.freeWorkers.length;1<=ref?j<ref:j>ref;i=1<=ref?++j:--j){this.renderNextFrame()}}}if(indexOf.call(this.imageParts,null)>=0){return this.renderNextFrame()}else{return this.finishRendering()}};GIF.prototype.finishRendering=function(){var data,frame,i,image,j,k,l,len,len1,len2,len3,offset,page,ref,ref1,ref2;len=0;ref=this.imageParts;for(j=0,len1=ref.length;j<len1;j++){frame=ref[j];len+=(frame.data.length-1)*frame.pageSize+frame.cursor}len+=frame.pageSize-frame.cursor;this.log("rendering finished - filesize "+Math.round(len/1e3)+"kb");data=new Uint8Array(len);offset=0;ref1=this.imageParts;for(k=0,len2=ref1.length;k<len2;k++){frame=ref1[k];ref2=frame.data;for(i=l=0,len3=ref2.length;l<len3;i=++l){page=ref2[i];data.set(page,offset);if(i===frame.data.length-1){offset+=frame.cursor}else{offset+=frame.pageSize}}}image=new Blob([data],{type:"image/gif"});return this.emit("finished",image,data)};GIF.prototype.renderNextFrame=function(){var frame,task,worker;if(this.freeWorkers.length===0){throw new Error("No free workers")}if(this.nextFrame>=this.frames.length){return}frame=this.frames[this.nextFrame++];worker=this.freeWorkers.shift();task=this.getTask(frame);this.log("starting frame "+(task.index+1)+" of "+this.frames.length);this.activeWorkers.push(worker);return worker.postMessage(task)};GIF.prototype.getContextData=function(ctx){return ctx.getImageData(0,0,this.options.width,this.options.height).data};GIF.prototype.getImageData=function(image){var ctx;if(this._canvas==null){this._canvas=document.createElement("canvas");this._canvas.width=this.options.width;this._canvas.height=this.options.height}ctx=this._canvas.getContext("2d");ctx.setFill=this.options.background;ctx.fillRect(0,0,this.options.width,this.options.height);ctx.drawImage(image,0,0);return this.getContextData(ctx)};GIF.prototype.getTask=function(frame){var index,task;index=this.frames.indexOf(frame);task={index:index,last:index===this.frames.length-1,delay:frame.delay,dispose:frame.dispose,transparent:frame.transparent,width:this.options.width,height:this.options.height,quality:this.options.quality,dither:this.options.dither,globalPalette:this.options.globalPalette,repeat:this.options.repeat,canTransfer:browser.name==="chrome"};if(frame.data!=null){task.data=frame.data}else if(frame.context!=null){task.data=this.getContextData(frame.context)}else if(frame.image!=null){task.data=this.getImageData(frame.image)}else{throw new Error("Invalid frame")}return task};GIF.prototype.log=function(){var args;args=1<=arguments.length?slice.call(arguments,0):[];if(!this.options.debug){return}return console.log.apply(console,args)};return GIF}(EventEmitter);module.exports=GIF},{"./browser.coffee":2,events:1}]},{},[3])(3)});
//# sourceMappingURL=gif.js.map

// Generated by LiveScript 1.3.1
var slice$ = [].slice;
(function(){
  var defaultVertexShader, defaultFragmentShader, ShaderRenderer;
  defaultVertexShader = "precision highp float;\nattribute vec3 position;\nvoid main() {\n  gl_Position = vec4(position, 1.);\n}";
  defaultFragmentShader = "precision highp float;\nvoid main() {\n  gl_FragColor = vec4(0., 0., 0., 1.);\n}";
  ShaderRenderer = function(shader, options){
    var root, canvas, gl;
    options == null && (options = {});
    import$((this.width = 320, this.height = 240, this.scale = 1, this), options);
    root = this.root;
    if (root) {
      this.root = typeof root === 'string' ? document.querySelector(root) : root;
    }
    this.shader = Array.isArray(shader)
      ? shader
      : [shader];
    this.domElement = canvas = document.createElement('canvas');
    this.gl = gl = null;
    this.inputs = {};
    return this;
  };
  ShaderRenderer.prototype = import$(Object.create(Object.prototype), {
    init: function(){
      var canvas, box, gl, i$, to$, i, program;
      canvas = this.domElement;
      if (this.root) {
        this.root.appendChild(canvas);
        box = this.root.getBoundingClientRect();
        (this.width = box.width, this.height = box.height, this).inited = true;
      }
      this.inited = true;
      this.gl = gl = canvas.getContext('webgl');
      canvas.width = this.width * this.scale;
      canvas.height = this.height * this.scale;
      canvas.style.width = this.width + "px";
      canvas.style.height = this.height + "px";
      gl.viewport(0, 0, gl.drawingBufferWidth * this.scale, gl.drawingBufferHeight * this.scale);
      this.programs = [];
      for (i$ = 0, to$ = this.shader.length; i$ < to$; ++i$) {
        i = i$;
        program = this.makeProgram(this.shader[i], this.programs[i - 1]);
        this.programs.push(program);
      }
      this.buildPipeline();
      return this.resize();
    },
    texture: function(program, uName, img){
      var gl, ref$, pdata, pobj, map, texture, idx, uTexture;
      gl = this.gl;
      ref$ = [program.data, program.obj], pdata = ref$[0], pobj = ref$[1];
      map = pdata.textureMap;
      ref$ = !map[uName]
        ? (this.texture.idx = (this.texture.idx || 0) + 1, map[uName] = {
          idx: this.texture.idx - 1,
          texture: gl.createTexture()
        })
        : map[uName], texture = ref$.texture, idx = ref$.idx;
      uTexture = this.gl.getUniformLocation(pobj, uName);
      this.gl.uniform1i(uTexture, idx);
      gl.activeTexture(gl.TEXTURE0 + idx);
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      if (!img) {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.width * this.scale, this.height * this.scale, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      } else {
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
      }
      return texture;
    },
    input: function(){
      var args, i$, to$, i, results$ = [];
      args = slice$.call(arguments);
      for (i$ = 1, to$ = args.length; i$ <= to$; ++i$) {
        i = i$;
        results$.push(this.setInput(i, args[i - 1]));
      }
      return results$;
    },
    setInput: function(idx, src){
      return this.inputs["uIn" + idx] = src instanceof ShaderRenderer ? src.domElement : src;
    },
    makeShader: function(code, type){
      var gl, shader;
      gl = this.gl;
      shader = gl.createShader(type);
      gl.shaderSource(shader, code);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.log(gl.getShaderInfoLog(shader));
        console.log(code);
      }
      return shader;
    },
    buildPipeline: function(){
      var ref$, gl, ps, pp, i$, to$, link, i, results$ = [];
      ref$ = [this.gl, this.programs, this.pipeline], gl = ref$[0], ps = ref$[1], pp = ref$[2];
      if (pp) {
        for (i$ = 0, to$ = pp.link; i$ < to$; ++i$) {
          link = i$;
          link[0];
        }
        for (i$ = 0, to$ = ps.length; i$ < to$; ++i$) {
          i = i$;
          if (!in$(i, pp.src)) {
            results$.push(ps[i].data.uIn);
          }
        }
        return results$;
      } else {
        for (i$ = 0, to$ = ps.length - 1; i$ < to$; ++i$) {
          i = i$;
          ps[i].data.fbo = gl.createFramebuffer();
        }
        for (i$ = 1, to$ = ps.length; i$ < to$; ++i$) {
          i = i$;
          ps[i].data.uIn1 = this.texture(ps[i], 'uIn1', null);
          gl.bindFramebuffer(gl.FRAMEBUFFER, ps[i - 1].data.fbo);
          results$.push(gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, ps[i].data.uIn1, 0));
        }
        return results$;
      }
    },
    makeProgram: function(shader, pprogram){
      var gl, ref$, pdata, pobj, program, vs, fs, positionLocation;
      gl = this.gl;
      ref$ = [
        {
          textureMap: {}
        }, gl.createProgram()
      ], pdata = ref$[0], pobj = ref$[1];
      program = {
        data: pdata,
        obj: pobj
      };
      vs = this.makeShader(shader.vertexShader || defaultVertexShader, gl.VERTEX_SHADER);
      fs = this.makeShader(shader.fragmentShader || defaultFragmentShader, gl.FRAGMENT_SHADER);
      gl.attachShader(pobj, vs);
      gl.attachShader(pobj, fs);
      gl.linkProgram(pobj);
      if (!gl.getProgramParameter(pobj, gl.LINK_STATUS)) {
        console.log(gl.getProgramInfoLog(pobj));
      }
      gl.useProgram(pobj);
      if (shader.buffer) {
        shader.buffer(this, program);
      } else {
        pdata.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, pdata.buffer);
        pdata.array = new Float32Array([-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]);
        gl.bufferData(gl.ARRAY_BUFFER, pdata.array, gl.STATIC_DRAW);
        positionLocation = gl.getAttribLocation(pobj, "position");
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);
      }
      return program;
    },
    animate: function(cb, options){
      var _, this$ = this;
      _ = function(t){
        requestAnimationFrame(function(t){
          return _(t * 0.001);
        });
        if (cb) {
          cb(t);
        }
        return this$.render(t, options);
      };
      return _(0);
    },
    render: function(t, options){
      var gl, i$, to$, i, ref$, pdata, pobj, shader, uTime, k, v, u, that, results$ = [];
      t == null && (t = 0);
      options == null && (options = {});
      if (!this.inited) {
        this.init();
      }
      gl = this.gl;
      for (i$ = 0, to$ = this.programs.length; i$ < to$; ++i$) {
        i = i$;
        ref$ = [this.programs[i].data, this.programs[i].obj, this.shader[i]], pdata = ref$[0], pobj = ref$[1], shader = ref$[2];
        gl.useProgram(pobj);
        uTime = gl.getUniformLocation(pobj, "uTime");
        gl.uniform1f(uTime, t);
        for (k in ref$ = shader.uniforms || {}) {
          v = ref$[k];
          if (v.type === 't') {
            this.texture(pobj, k, v.value);
          } else {
            u = gl.getUniformLocation(pobj, k);
            gl["uniform" + v.type](u, v.value);
          }
        }
        if (i === 0) {
          for (k in ref$ = this.inputs) {
            v = ref$[k];
            this.texture(this.programs[i], k, v);
          }
        }
        gl.bindFramebuffer(gl.FRAMEBUFFER, pdata.fbo);
        gl.viewport(0, 0, this.width * this.scale, this.height * this.scale);
        if (that = shader.render) {
          results$.push(that(this, this.programs[i], t));
        } else {
          gl.clearColor(1, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
          results$.push(gl.drawArrays(gl.TRIANGLES, 0, 6));
        }
      }
      return results$;
    },
    setSize: function(w, h){
      var ref$;
      this.width = w;
      this.height = h;
      ref$ = this.domElement;
      ref$.width = w * this.scale;
      ref$.height = h * this.scale;
      this.domElement.width = w + "px";
      this.domElement.height = h + "px";
      return this.resize();
    },
    resize: function(){
      var i$, to$, i, pobj, uResolution, results$ = [];
      for (i$ = 0, to$ = this.programs.length; i$ < to$; ++i$) {
        i = i$;
        pobj = this.programs[i].obj;
        this.gl.useProgram(pobj);
        uResolution = this.gl.getUniformLocation(pobj, "uResolution");
        results$.push(this.gl.uniform2fv(uResolution, [this.width * this.scale, this.height * this.scale]));
      }
      return results$;
    }
  });
  if (typeof module != 'undefined' && module !== null) {
    return module.exports = ShaderRenderer;
  } else if (typeof window != 'undefined' && window !== null) {
    return window.ShaderRenderer = ShaderRenderer;
  }
})();
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
function in$(x, xs){
  var i = -1, l = xs.length >>> 0;
  while (++i < l) if (x === xs[i]) return true;
  return false;
}
// Generated by LiveScript 1.3.0
(function(){
  var ScriptManager, ModManager, ModRenderer;
  window.ScriptManager = ScriptManager = {
    hash: {},
    load: function(type, src){
      var this$ = this;
      type == null && (type = 'js');
      return new Promise(function(res, rej){
        var script;
        if (!this$.hash[src]) {
          this$.hash[src] = {
            promise: {
              res: [],
              rej: []
            },
            loaded: false
          };
        }
        this$.hash[src].promise.res.push(res);
        this$.hash[src].promise.rej.push(rej);
        if (this$.hash[src].promise.res.length > 1) {
          return;
        }
        script = document.createElement('script');
        script.src = src;
        script.onload = function(){
          this$.hash[src].loaded = true;
          return this$.hash[src].promise.res.map(function(){
            return res();
          });
        };
        return document.body.appendChild(script);
      });
    }
  };
  window.ModManager = ModManager = {
    mods: {},
    init: function(){},
    load: function(name){
      var this$ = this;
      return new Promise(function(res, rej){
        var that;
        if (that = this$.mods[name]) {
          return res(that);
        }
        console.log("first time load " + name + ". load it from web...");
        if (!this$.load.target) {
          this$.load.target = {
            clear: function(){
              return this._callback = null, this.name = null, this.node = null, this.res = null, this.rej = null, this;
            },
            callback: function(e, b){
              var promises, this$ = this;
              this.name = null;
              if (e) {
                return this.rej ? this.rej(e) : null;
              }
              promises = b.lib
                ? b.lib.map(function(it){
                  return ScriptManager.load(it[0], it[1]);
                })
                : [Promise.resolve()];
              return Promise.all(promises).then(function(){
                if (this$.res) {
                  return this$.res(b);
                }
              });
            }
          };
        }
        if (this$.load.target.timeout) {
          clearTimeout(this$.load.target.timeout);
        }
        import$(this$.load.target, {
          res: res,
          rej: rej,
          name: name,
          timeout: setTimeout(function(){
            var that;
            if (that = this$.load.target.node) {
              that.parentNode.removeChild(that);
            }
            this$.load.target.clear();
            return rej();
          }, 10000),
          node: document.createElement("script")
        });
        this$.load.target.node.src = "/backgrounds/" + name + "/main.js";
        return document.body.appendChild(this$.load.target.node);
      });
    },
    register: function(mod){
      if (!mod || !mod.name) {
        console.log("register error: ", mod);
        return this.load.target && this.load.target.callback ? this.load.target.callback(true) : void 8;
      }
      this.mods[mod.name] = mod;
      if (!this.load.target) {
        return;
      }
      clearTimeout(this.load.target.timeout);
      return this.load.target.callback(null, mod);
    }
  };
  ModManager.init();
  window.ModRenderer = ModRenderer = function(root, options){
    options == null && (options = {});
    this.options = import$({
      scale: 1
    }, options);
    this.setContainer(root);
    return this;
  };
  return import$(ModRenderer.prototype, {
    setSize: function(w, h){
      return this.w = w, this.h = h, this;
    },
    setContainer: function(root){
      var box;
      this.root = typeof root === typeof '' ? document.querySelector(root) : root;
      if (this.root) {
        box = this.root.getBoundingClientRect();
        return this.w = box.width, this.h = box.height, this;
      }
    },
    prepare: function(w, h){
      var camera, scene, renderer, controls;
      w = !(w != null && w) ? this.w || window.innerWidth : void 8;
      h = !(h != null && h) ? this.h || window.innerHeight : void 8;
      camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
      scene = new THREE.Scene();
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        preserveDrawingBuffer: true
      });
      renderer.setSize(w, h);
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enabled = false;
      return {
        camera: camera,
        scene: scene,
        renderer: renderer,
        w: w,
        h: h,
        controls: controls
      };
    },
    getDom: function(){
      return this.mod._renderer.domElement;
    },
    render: function(mod){
      var promise, this$ = this;
      promise = !mod.inited
        ? (console.log("init mod..."), Promise.resolve().then(function(){
          mod.inited = true;
          return mod.init({
            three: {
              prepare: function(){
                var ret;
                ret = this$.prepare();
                mod._renderer = ret.renderer;
                return ret;
              }
            },
            shaderlib: {
              prepare: function(shaders, option){
                var renderer;
                option == null && (option = {});
                renderer = new ShaderRenderer(shaders, (option.root = this$.root, option.scale = this$.options.scale, option));
                renderer.init();
                mod._renderer = renderer;
                return {
                  renderer: renderer
                };
              }
            }
          });
        }))
        : Promise.resolve();
      return promise.then(function(){
        this$.mod = mod;
        return this$.start();
      });
    },
    running: false,
    start: function(){
      var i$, i, _animate, this$ = this;
      for (i$ = this.root.childNodes.length - 1; i$ >= 0; --i$) {
        i = i$;
        this.root.removeChild(this.root.childNodes[i]);
      }
      this.root.appendChild(this.mod._renderer.domElement);
      if (this.running) {
        return;
      }
      this.running = true;
      _animate = function(time){
        if (this$.running) {
          requestAnimationFrame(_animate);
        }
        return this$.mod.step(time * 0.001);
      };
      return _animate(0);
    },
    stop: function(){
      return this.running = false;
    }
  });
})();
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
// Generated by LiveScript 1.3.0
var editor, initSliders, initColorpickers, initSlider, initColorpicker, initEditor, setPalette, prepare;
editor = {
  mod: null,
  config: {
    cur: {
      fontSize: 64
    },
    old: {}
  }
};
editor.setSize = function(w, h){
  return mod._renderer.setSize(w, h);
};
editor.update = function(name, value){
  var type;
  this.config.old = JSON.parse(JSON.stringify(this.config.cur));
  type = this.mod.edit[name].type;
  if (type === 'color') {
    if (value) {
      value = ldColorPicker.prototype.toHexString(ldColorPicker.prototype.convert.color(value));
    }
    this.config.cur[name] = parseInt("0x" + ("" + value).substring(1));
  } else {
    this.config.cur[name] = value;
  }
  if (this.mod.inited && this.mod && this.mod.watch) {
    return this.mod.watch(this.config.cur, this.config.old);
  }
};
initSliders = function(){
  return Array.from(document.querySelectorAll('.irs-input input')).map(function(it){
    var value, x$;
    value = {};
    x$ = $(it);
    x$.val(value['default']) || 0;
    x$.ionRangeSlider({
      min: value.min || 0,
      max: value.max || 100,
      step: value.step || 1,
      onChange: function(data){}
    });
    return x$;
  });
};
initColorpickers = function(){
  return Array.from(document.querySelectorAll('.color input')).map(function(it){
    var ldcp;
    return ldcp = new ldColorPicker(it, {
      'class': 'top flat compact-palette'
    });
  });
};
initSlider = function(node, key, value){
  var x$;
  x$ = $(node.querySelector('.irs-input input'));
  x$.val(value['default']) || 0;
  x$.ionRangeSlider({
    min: value.min || 0,
    max: value.max || 100,
    step: value.step || 1,
    onChange: function(data){
      return editor.update(key, data.from);
    }
  });
  return x$;
};
initColorpicker = function(node, key, value){
  var ldcp;
  ldcp = new ldColorPicker(node.querySelector('input'), {
    'class': 'top flat compact-palette'
  });
  return ldcp.on('change', function(it){
    editor.update(key, it);
    return node.querySelector('.inner').style.background = it;
  });
};
window.initEditor = initEditor = function(mod){
  var colors, k, v, options, ref$, yet$, node;
  prepare();
  colors = (function(){
    var ref$, results$ = [];
    for (k in ref$ = mod.edit) {
      v = ref$[k];
      results$.push(v);
    }
    return results$;
  }()).filter(function(it){
    return it.type === 'color';
  }).map(function(it){
    return it['default'];
  });
  options = document.querySelector('#editor-custom-options');
  options.innerHTML = '';
  editor.mod = mod;
  mod.edit.speed = import$({
    min: 0.1,
    max: 20,
    step: 0.1,
    'default': 1
  }, mod.edit.speed) || {};
  mod.edit.width = import$({
    min: 1,
    max: 1920,
    step: 1,
    'default': 800
  }, mod.edit.width) || {};
  mod.edit.height = import$({
    min: 1,
    max: 1280,
    step: 1,
    'default': 600
  }, mod.edit.height) || {};
  initSlider(document.querySelector('.editor .speed-option'), 'speed', mod.edit.speed);
  initSlider(document.querySelector('.editor .width-option'), 'width', mod.edit.width);
  initSlider(document.querySelector('.editor .height-option'), 'height', mod.edit.height);
  for (k in yet$ = true, ref$ = mod.edit) {
    v = ref$[k];
    yet$ = false;
    if (k === 'speed' || k === 'width' || k === 'height') {
      continue;
    }
    node = document.querySelector("#editor-option-sample-" + v.type);
    if (!node) {
      continue;
    }
    node = node.cloneNode(true);
    if (v.type === 'color') {
      node.querySelector('label').textContent = v.name;
      node.querySelector('input').setAttribute('name', k);
      initColorpicker(node, k, v);
    } else if (v.type === 'number') {
      node.querySelector('label').textContent = v.name;
      node.querySelector('input').setAttribute('name', k, v);
      initSlider(node, k, v);
    }
    options.appendChild(node);
    setPalette([].concat(colors));
  } if (yet$) {
    options.innerHTML = "<div class='col-sm'><div class='empty'></div></div>";
    setPalette([]);
  }
  for (k in ref$ = mod.edit) {
    v = ref$[k];
    editor.update(k, v['default']);
  }
  document.querySelector('.editor .title big b').innerText = "\"" + mod.name + "\"";
  document.querySelector('.editor .title span:nth-of-type(2)').innerText = mod.desc + "";
  return setTimeout(function(){
    return setPalette(colors, 'Palette');
  }, 100);
};
setPalette = function(colors, name){
  name == null && (name = 'Palette');
  document.querySelector('.editor .palette-option label').textContent = name;
  document.querySelector('.editor .palette-option .palette').innerHTML = colors.map(function(it){
    return "<div class=\"color\" style=\"background:" + it + "\"></div>";
  }).join('');
  return Array.from(document.querySelectorAll(".editor *[data-toggle='colorpicker']")).map(function(d, i){
    var ldcp;
    ldcp = d.getColorPicker();
    ldcp.setPalette({
      colors: colors.map(function(it){
        return {
          hex: it
        };
      })
    });
    return ldcp.setIdx(i % colors.length);
  });
};
prepare = function(){
  var html, i$, to$, i, code, j$, j, d, clusterize;
  document.querySelector('#palette-picker').addEventListener('click', function(e){
    var target, colors, name;
    target = e.target;
    if (!target || !target.classList || !target.classList.contains('palette')) {
      return;
    }
    colors = Array.from(target.querySelectorAll('.color')).map(function(it){
      return it.style.background;
    });
    name = target.querySelector('.name').textContent;
    $('#palette-picker').modal('hide');
    return setPalette(colors, name);
  });
  Array.from(document.querySelectorAll('.editor .color input[data-toggle="colorpicker"]')).map(function(d, i){
    var ldcp, name;
    ldcp = d.getColorPicker();
    name = d.getAttribute('name');
    return ldcp.on('change', function(it){
      editor.update(name, it);
      return d.parentNode.querySelector('.inner').style.background = it;
    });
  });
  html = [];
  for (i$ = 0, to$ = palettes.length; i$ < to$; i$ += 4) {
    i = i$;
    code = "";
    for (j$ = 0; j$ < 4; ++j$) {
      j = j$;
      d = palettes[i + j];
      if (!d) {
        break;
      }
      code += ("<div class=\"palette\"><div class=\"name\">" + d[0] + "</div>") + d[1].map(fn$).join('') + "</div>";
    }
    html.push("<div class='line'>" + code + "</div>");
  }
  clusterize = new Clusterize({
    rows: html,
    scrollElem: document.querySelector('#palette-picker .clusterize-scroll'),
    contentElem: document.querySelector('#palette-picker .clusterize-content'),
    rows_in_block: 50
  });
  document.querySelector('.editor .download .btn[data-type="png"]').addEventListener('click', function(e){
    var canvas, dataurl;
    canvas = document.querySelector('#canvas-container canvas');
    dataurl = canvas.toDataURL("image/png");
    return smiltool.urlToDataurl(dataurl, canvas.width, canvas.height).then(function(it){
      return smiltool.dataurlToBlob(it);
    }).then(function(blob){
      var url, x$, y$, z$;
      url = URL.createObjectURL(blob);
      x$ = document.querySelector('#download img');
      x$.setAttribute('src', url);
      x$.style.display = 'block';
      y$ = document.querySelector('#download video');
      y$.style.display = 'none';
      document.querySelector('#download .result').style.height = 200 + "px";
      z$ = document.querySelector('#download .btn');
      z$.setAttribute('href', url);
      z$.setAttribute('download', (editor.mod.name || 'output') + "." + 'png');
      return $('#download').modal('show');
    });
  });
  document.querySelector('.editor .download .btn[data-type="webm"]').addEventListener('click', function(e){
    var canvas, stream, options, blob, mr;
    canvas = document.querySelector('#canvas-container canvas');
    stream = canvas.captureStream();
    options = {
      mimeType: 'video/webm'
    };
    blob = [];
    mr = new MediaRecorder(stream, options);
    mr.ondataavailable = function(event){
      if (event.data && event.data.size > 0) {
        return blob.push(event.data);
      }
    };
    mr.start();
    document.querySelector('#loading').classList.add('running');
    return setTimeout(function(){
      mr.stop();
      return setTimeout(function(){
        var b, url, x$, y$, z$;
        b = new Blob(blob, {
          type: 'video/webm'
        });
        url = URL.createObjectURL(b);
        document.querySelector('#loading').classList.remove('running');
        x$ = document.querySelector('#download video');
        x$.style.display = 'block';
        x$.innerHTML = "<source type=\"video/webm\" src=\"" + url + "\"/>";
        y$ = document.querySelector('#download img');
        y$.style.display = 'none';
        z$ = document.querySelector('#download .btn');
        z$.setAttribute('href', url);
        z$.setAttribute('download', (editor.mod.name || 'output') + "." + 'webm');
        return $('#download').modal('show');
      }, 1000);
    }, 5000);
  });
  return window.addEventListener('resize', function(){
    return editor.setSize(window.innerWidth, window.innerHeight);
  });
  function fn$(it){
    return "<div class='color' style='background:" + it + "'></div>";
  }
};
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
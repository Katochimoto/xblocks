!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var n in a)("object"==typeof exports?exports:e)[n]=a[n]}}(this,function(){return webpackJsonp([1],{0:function(e,t,a){(function(e,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}a(230),a(229),a(232),a(238),a(239);var l=a(52),s=a(82),r=a(128),i=n(r),o=(0,s.createHashHistory)(),c=document.body.appendChild(document.createElement("div"));c.id="app",e.render(t.createElement(l.Router,{history:o,routes:i["default"]}),c)}).call(t,a(85),a(5))},124:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),a(231);var l=a(5),s=n(l),r=a(28),i=n(r),o=a(127),c=n(o),u=a(126),d=n(u);t["default"]=s["default"].createClass({displayName:"App",mixins:[i["default"]],render:function(){return s["default"].createElement("div",null,s["default"].createElement(c["default"],null),s["default"].createElement("div",{className:"container-fluid"},s["default"].createElement("div",{className:"row"},s["default"].createElement(d["default"],this.props),s["default"].createElement("div",{className:"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main"},this.props.children))))}})},125:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(5),s=n(l),r=a(28),i=n(r),o=a(129),c=n(o),u=a(234),d=n(u),m=a(235),p=n(m),f=a(236),h=n(f),g=a(237),b=n(g);t["default"]=s["default"].createClass({displayName:"GettingStarted",mixins:[i["default"]],render:function(){return s["default"].createElement("div",null,s["default"].createElement("h1",{className:"page-header anchor","data-hash":"getting-started"},"Getting started"),s["default"].createElement("p",{className:"lead"},"An overview of Xblocks, how to download and use, basic templates, and more."),s["default"].createElement("h2",{className:"sub-header anchor","data-hash":"getting-started/quickstart"},"Quick Start"),s["default"].createElement("ol",null,s["default"].createElement("li",null,s["default"].createElement("a",{href:"#/getting-started/download"},"Download library")),s["default"].createElement("li",null,"Include the CSS on your head page:",s["default"].createElement(c["default"],null,p["default"])),s["default"].createElement("li",null,"Include the JS on your head page:",s["default"].createElement(c["default"],null,h["default"])),s["default"].createElement("li",null,"Test connection required dependencies:",s["default"].createElement(c["default"],null,b["default"])),s["default"].createElement("li",null,"Further work requires no initialization.")),s["default"].createElement("h2",{className:"sub-header anchor","data-hash":"getting-started/download"},"Download"),s["default"].createElement("small",null,"Currently"),s["default"].createElement("h3",null,"Install with CDN"),s["default"].createElement("p",null,"You can install Xblocks using",s["default"].createElement("a",{href:"https://cdnjs.com/",target:"_blank"},"CDN"),":"),s["default"].createElement(c["default"],null,"$ bower install xblocks"),s["default"].createElement("h3",null,"Install with Bower"),s["default"].createElement("p",null,"You can also install Xblocks using",s["default"].createElement("a",{href:"http://bower.io/",target:"_blank"},"Bower"),":"),s["default"].createElement(c["default"],null,"$ bower install xblocks"),s["default"].createElement("h3",null,"Install with npm"),s["default"].createElement("p",null,"You can also install Xblocks using",s["default"].createElement("a",{href:"https://www.npmjs.com/",target:"_blank"},"npm"),":"),s["default"].createElement(c["default"],null,"$ npm install xblocks"),s["default"].createElement("h2",{className:"sub-header anchor","data-hash":"getting-started/templates"},"Templates"),s["default"].createElement("p",null,"This template does not utilize CDNs."),s["default"].createElement(c["default"],null,d["default"]))}})},126:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(38),s=n(l),r=a(5),i=n(r),o=a(28),c=n(o),u=a(52),d=a(74),m=n(d);t["default"]=i["default"].createClass({displayName:"Menu",mixins:[c["default"]],getInitialState:function(){return{items:[{hash:"/getting-started",title:"Getting Started",menu:{items:[{hash:"/getting-started/quickstart",title:"Quick Start"},{hash:"/getting-started/download",title:"Download"},{hash:"/getting-started/templates",title:"Templates"}]}},{hash:"/examples",title:"Examples",menu:{items:[{hash:"/examples/ico",title:"Ico"},{hash:"/examples/link",title:"Link"},{hash:"/examples/button",title:"Button"},{hash:"/examples/checkbox",title:"Checkbox"},{hash:"/examples/radio",title:"Radio"},{hash:"/examples/input",title:"Input"},{hash:"/examples/popup",title:"Popup"},{hash:"/examples/menu",title:"Menu"}]}},{hash:"/controls",title:"Controls",menu:{items:[{hash:"/controls/ico",title:"Ico"},{hash:"/controls/link",title:"Link"},{hash:"/controls/button",title:"Button"},{hash:"/controls/checkbox",title:"Checkbox"},{hash:"/controls/radio",title:"Radio"},{hash:"/controls/input",title:"Input"},{hash:"/controls/popup",title:"Popup"},{hash:"/controls/menu",title:"Menu"}]}},{hash:"/extensions",title:"Extensions",menu:{items:[{hash:"/extensions/writing-extensions",title:"Writing an Extension"}]}},{hash:"/core",title:"Core"},{hash:"/support",title:"Browser and device support"},{hash:"/contributing",title:"Contributing"},{hash:"/tests",title:"Running tests"}]}},renderMenu:function(e,t){var a=this;return t=t||"menu",i["default"].createElement("ul",{className:"nav nav-stacked",key:t},s["default"].map(e,function(e,n){return a.renderMenuItem(e,t+"."+n)}))},renderMenuItem:function(e,t){var a=this.props.history.createPath(e.hash),n=(s["default"].trimRight(this.props.location.pathname,"/")+"/").indexOf(s["default"].trimRight(a,"/")+"/"),l=(0,m["default"])({active:0===n});return i["default"].createElement("li",{key:t,className:l},i["default"].createElement(u.Link,{to:a},e.title),e.menu?this.renderMenu(e.menu.items,t):null)},render:function(){return i["default"].createElement("div",{className:"col-sm-3 col-md-2 sidebar bs-docs-sidebar"},this.renderMenu(this.state.items))}})},127:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(5),s=n(l),r=a(28),i=n(r);t["default"]=s["default"].createClass({displayName:"Navbar",mixins:[i["default"]],render:function(){return s["default"].createElement("nav",{className:"navbar navbar-inverse navbar-fixed-top"},s["default"].createElement("div",{className:"container-fluid"},s["default"].createElement("div",{className:"navbar-header"},s["default"].createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},s["default"].createElement("span",{className:"sr-only"},"Toggle navigation"),s["default"].createElement("span",{className:"icon-bar"}),s["default"].createElement("span",{className:"icon-bar"}),s["default"].createElement("span",{className:"icon-bar"})),s["default"].createElement("a",{className:"navbar-brand",href:"http://xblocks.ru"},"Xblocks",s["default"].createElement("em",{className:"small"},"1.0.1"))),s["default"].createElement("div",{id:"navbar",className:"navbar-collapse collapse"},s["default"].createElement("ul",{className:"nav navbar-nav navbar-right"},s["default"].createElement("li",null,s["default"].createElement("a",{href:"../jsdoc"},"JSDoc")),s["default"].createElement("li",null,s["default"].createElement("a",{href:"https://github.com/Katochimoto/xblocks"},"GitHub"))))))}})},128:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(124),s=n(l),r=a(125),i=n(r),o=a(!function(){var e=new Error('Cannot find module "components/Examples"');throw e.code="MODULE_NOT_FOUND",e}()),c=n(o),u=[{path:"/",component:s["default"],childRoutes:[{path:"getting-started",component:i["default"],childRoutes:[{path:":name",component:i["default"]}]},{path:"examples",component:c["default"],childRoutes:[{path:":name",component:c["default"]}]}]},{path:"*",component:s["default"]}];t["default"]=u},129:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(38),s=n(l),r=a(5),i=n(r),o=a(139),c=n(o);t["default"]=i["default"].createClass({displayName:"Code",getDefaultProps:function(){return{lang:"html"}},render:function(){var e=c["default"].renderToStaticMarkup(i["default"].createElement("div",null,this.props.children));return e=s["default"].unescape(e),e=e.trim().replace(/^<div>/m,"").replace(/<\/div>$/m,"").replace(/<br\/>/g,"\n"),i["default"].createElement("div",{className:this.props.className},i["default"].createElement("pre",null,i["default"].createElement("code",{className:"language-"+this.props.lang},e)))}})},139:function(e,t,a){"use strict";e.exports=a(98)},229:function(e,t){},230:229,231:229,232:229,234:function(e,t){e.exports='<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="utf-8" />\n        <meta http-equiv="X-UA-Compatible" content="IE=edge" />\n        <meta name="viewport" content="width=device-width, initial-scale=1" />\n        <title>Xblocks Basic Template</title>\n        <!-- CSS -->\n        <link href="/bower_components/xblocks/dist/xblocks.min.css" rel="stylesheet" />\n        <!-- JS -->\n        <script src="/bower_components/es5-shim/es5-shim.min.js"></script>\n        <script src="/bower_components/react/react-with-addons.min.js"></script>\n        <script src="/bower_components/react/react-dom.min.js"></script>\n        <script src="/bower_components/tether/tether.min.js"></script>\n        <script src="/bower_components/xblocks-core/dist/xblocks-core-full.min.js"></script>\n        <script src="/bower_components/xblocks/dist/xblocks.min.js"></script>\n    </head>\n    <body>\n        <xb-button>button</xb-button>\n    </body>\n</html>\n'},235:function(e,t){e.exports='<link href="bower_components/xblocks/dist/xblocks.min.css" rel="stylesheet" />\n'},236:function(e,t){e.exports='<!-- Included xblocks-core, X-Tag and polyfill custom elements -->\n<script src="bower_components/xblocks-core/dist/xblocks-core-full.min.js"></script>\n<!-- Includes a set of custom elements -->\n<script src="bower_components/xblocks/dist/xblocks.min.js"></script>\n'},237:function(e,t){e.exports='<!-- es5-shim 4.3.1 -->\n<script src="//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.3.1/es5-shim.min.js"></script>\n<!-- React 0.14.3 -->\n<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-with-addons.min.js"></script>\n<script src="//cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.min.js"></script>\n<!-- Tether 1.1.1 -->\n<script src="/bower_components/tether/tether.min.js"></script>\n'},238:229,239:function(e,t){(function(t){var a="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=a.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var a=t.util.type(e);switch(a){case"Object":var n={};for(var l in e)e.hasOwnProperty(l)&&(n[l]=t.util.clone(e[l]));return n;case"Array":return e.map&&e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,a){var n=t.util.clone(t.languages[e]);for(var l in a)n[l]=a[l];return n},insertBefore:function(e,a,n,l){l=l||t.languages;var s=l[e];if(2==arguments.length){n=arguments[1];for(var r in n)n.hasOwnProperty(r)&&(s[r]=n[r]);return s}var i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==a)for(var r in n)n.hasOwnProperty(r)&&(i[r]=n[r]);i[o]=s[o]}return t.languages.DFS(t.languages,function(t,a){a===l[e]&&t!=e&&(this[t]=i)}),l[e]=i},DFS:function(e,a,n){for(var l in e)e.hasOwnProperty(l)&&(a.call(e,l,e[l],n||l),"Object"===t.util.type(e[l])?t.languages.DFS(e[l],a):"Array"===t.util.type(e[l])&&t.languages.DFS(e[l],a,l))}},plugins:{},highlightAll:function(e,a){for(var n,l=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),s=0;n=l[s++];)t.highlightElement(n,e===!0,a)},highlightElement:function(n,l,s){for(var r,i,o=n;o&&!e.test(o.className);)o=o.parentNode;o&&(r=(o.className.match(e)||[,""])[1],i=t.languages[r]),n.className=n.className.replace(e,"").replace(/\s+/g," ")+" language-"+r,o=n.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+r);var c=n.textContent,u={element:n,language:r,grammar:i,code:c};if(!c||!i)return void t.hooks.run("complete",u);if(t.hooks.run("before-highlight",u),l&&a.Worker){var d=new Worker(t.filename);d.onmessage=function(e){u.highlightedCode=e.data,t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s&&s.call(u.element),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},d.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s&&s.call(n),t.hooks.run("after-highlight",u),t.hooks.run("complete",u)},highlight:function(e,a,l){var s=t.tokenize(e,a);return n.stringify(t.util.encode(s),l)},tokenize:function(e,a,n){var l=t.Token,s=[e],r=a.rest;if(r){for(var i in r)a[i]=r[i];delete a.rest}e:for(var i in a)if(a.hasOwnProperty(i)&&a[i]){var o=a[i];o="Array"===t.util.type(o)?o:[o];for(var c=0;c<o.length;++c){var u=o[c],d=u.inside,m=!!u.lookbehind,p=0,f=u.alias;u=u.pattern||u;for(var h=0;h<s.length;h++){var g=s[h];if(s.length>e.length)break e;if(!(g instanceof l)){u.lastIndex=0;var b=u.exec(g);if(b){m&&(p=b[1].length);var v=b.index-1+p,b=b[0].slice(p),y=b.length,k=v+y,w=g.slice(0,v+1),E=g.slice(k+1),x=[h,1];w&&x.push(w);var N=new l(i,d?t.tokenize(b,d):b,f);x.push(N),E&&x.push(E),Array.prototype.splice.apply(s,x)}}}}}return s},hooks:{all:{},add:function(e,a){var n=t.hooks.all;n[e]=n[e]||[],n[e].push(a)},run:function(e,a){var n=t.hooks.all[e];if(n&&n.length)for(var l,s=0;l=n[s++];)l(a)}}},n=t.Token=function(e,t,a){this.type=e,this.content=t,this.alias=a};if(n.stringify=function(e,a,l){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var s={type:e.type,content:n.stringify(e.content,a,l),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:l};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var r="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,r)}t.hooks.run("wrap",s);var i="";for(var o in s.attributes)i+=(i?" ":"")+o+'="'+(s.attributes[o]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+i+">"+s.content+"</"+s.tag+">"},!a.document)return a.addEventListener?(a.addEventListener("message",function(e){var n=JSON.parse(e.data),l=n.language,s=n.code,r=n.immediateClose;a.postMessage(t.highlight(s,t.languages[l],l)),r&&a.close()},!1),a.Prism):a.Prism;var l=document.getElementsByTagName("script");return l=l[l.length-1],l&&(t.filename=l.src,document.addEventListener&&!l.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),a.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=n),"undefined"!=typeof t&&(t.Prism=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.xml=n.languages.markup,n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},n.languages.css.atrule.inside.rest=n.util.clone(n.languages.css),n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:n.languages.css,alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:n.languages.javascript,alias:"language-javascript"}}),n.languages.js=n.languages.javascript,function(){"undefined"!=typeof self&&self.Prism&&self.document&&n.hooks.add("complete",function(e){if(e.code){var t=e.element.parentNode,a=/\s*\bline-numbers\b\s*/;if(t&&/pre/i.test(t.nodeName)&&(a.test(t.className)||a.test(e.element.className))&&!e.element.querySelector(".line-numbers-rows")){a.test(e.element.className)&&(e.element.className=e.element.className.replace(a,"")),a.test(t.className)||(t.className+=" line-numbers");var n,l=e.code.match(/\n(?!$)/g),s=l?l.length+1:1,r=new Array(s+1);r=r.join("<span></span>"),n=document.createElement("span"),n.className="line-numbers-rows",n.innerHTML=r,t.hasAttribute("data-start")&&(t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)),e.element.appendChild(n)}}})}()}).call(t,function(){return this}())}})});
//# sourceMappingURL=index.js.map
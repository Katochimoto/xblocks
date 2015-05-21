var yr = yr || require('yate/lib/runtime.js');

(function() {

    var cmpNN = yr.cmpNN;
    var cmpSN = yr.cmpSN;
    var nodeset2xml = yr.nodeset2xml;
    var nodeset2boolean = yr.nodeset2boolean;
    var nodeset2attrvalue = yr.nodeset2attrvalue;
    var nodeset2scalar = yr.nodeset2scalar;
    var scalar2attrvalue = yr.scalar2attrvalue;
    var xml2attrvalue = yr.xml2attrvalue;
    var scalar2xml = yr.scalar2xml;
    var xml2scalar = yr.xml2scalar;
    var simpleScalar = yr.simpleScalar;
    var simpleBoolean = yr.simpleBoolean;
    var selectNametest = yr.selectNametest;
    var closeAttrs = yr.closeAttrs;

    var M = new yr.Module();

    var j0 = [ ];

    var j1 = [ 0, 'navbar' ];

    var j2 = [ 0, 'menu' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, selectNametest('navbar', c0, []), '_navbar', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "container-fluid" + "\">";
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("row")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, selectNametest('menu', c0, []), '_menu', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main" + "\">";
        r0 += "<h1 class=\"" + "page-header" + "\">";
        r0 += "Getting started";
        r0 += "</h1>";
        r0 += "<p class=\"" + "lead" + "\">";
        r0 += "An overview of Xblocks, how to download and use, basic templates, and more.";
        r0 += "</p>";
        r0 += "<h2 class=\"" + "sub-header" + "\">";
        r0 += "<a name=\"" + "/getting-started/quickstart" + "\"></a>";
        r0 += "Quick Start";
        r0 += "</h2>";
        r0 += "<p>";
        r0 += "<ol>";
        r0 += "<li>";
        r0 += "<a href=\"" + "#/getting-started/download" + "\">" + "Download library" + "</a>";
        r0 += "</li>";
        r0 += "<li>";
        r0 += "Include the CSS on your head page:";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;link href=\"bower_components/xblocks/build/xblocks.min.css\" rel=\"stylesheet\" /&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "</li>";
        r0 += "<li>";
        r0 += "Include the JS on your head page:";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;!-- Included xblocks-core, X-Tag and polyfill custom elements --&gt;";
        r0 += "<br/>";
        r0 += "&lt;script src=\"bower_components/xblocks-core/dist/xblocks-core-full.min.js\"&gt;&lt;/script&gt;";
        r0 += "<br/>";
        r0 += "&lt;!-- Includes a set of custom elements --&gt;";
        r0 += "<br/>";
        r0 += "&lt;script src=\"bower_components/xblocks/build/xblocks.min.js\"&gt;&lt;/script&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "</li>";
        r0 += "<li>";
        r0 += "Test connection required dependencies:";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;!-- es5-shim --&gt;";
        r0 += "<br/>";
        r0 += "&lt;script src=\"//cdnjs.cloudflare.com/ajax/libs/es5-shim/4.1.1/es5-shim.min.js\"&gt;&lt;/script&gt;";
        r0 += "<br/>";
        r0 += "&lt;!-- React --&gt;";
        r0 += "<br/>";
        r0 += "&lt;script src=\"//cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js\"&gt;&lt;/script&gt;";
        r0 += "<br/>";
        r0 += "&lt;!-- Tether --&gt;";
        r0 += "<br/>";
        r0 += "&lt;script src=\"//cdnjs.cloudflare.com/ajax/libs/tether/0.7.0/tether.min.js\"&gt;&lt;/script&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "</li>";
        r0 += "<li>";
        r0 += "Further work requires no initialization.";
        r0 += "</li>";
        r0 += "</ol>";
        r0 += "</p>";
        r0 += "<h2 class=\"" + "sub-header" + "\">";
        r0 += "<a name=\"" + "/getting-started/download" + "\"></a>";
        r0 += "Download";
        r0 += "</h2>";
        r0 += "<p>";
        r0 += "<small>";
        r0 += "Currently v0.6.0";
        r0 += "</small>";
        r0 += "</p>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        }
    };
    M.imports = ["docs"];

    yr.register('getting-started', M);

})();

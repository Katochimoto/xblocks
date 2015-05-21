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

    var j0 = [ 0, '*' ];

    var j1 = [ 0, 'version' ];

    var j2 = [ 0, 'menu' ];

    var j3 = [ 1, 0 ];

    var j4 = [ 0, 'items' ];

    var j5 = [ 0, 'hash' ];

    var j6 = [ 0, 'title' ];

    // match .* : _navbar
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<nav class=\"" + "navbar navbar-inverse navbar-fixed-top" + "\">";
        r0 += "<div class=\"" + "container-fluid" + "\">";
        r0 += "<div class=\"" + "navbar-header" + "\">";
        r0 += "<button type=\"" + "button" + "\" class=\"" + "navbar-toggle collapsed" + "\" data-toggle=\"" + "collapse" + "\" data-target=\"" + "#navbar" + "\" aria-expanded=\"" + "false" + "\" aria-controls=\"" + "navbar" + "\">";
        r0 += "<span class=\"" + "sr-only" + "\">" + "Toggle navigation" + "</span>";
        r0 += "<span class=\"" + "icon-bar" + "\"></span>";
        r0 += "<span class=\"" + "icon-bar" + "\"></span>";
        r0 += "<span class=\"" + "icon-bar" + "\"></span>";
        r0 += "</button>";
        r0 += "<a class=\"" + "navbar-brand" + "\" href=\"" + "/" + "\">";
        r0 += "Xblocks ";
        r0 += "<em class=\"" + "small" + "\">" + nodeset2xml( ( selectNametest('version', c0, []) ) ) + "</em>";
        r0 += "</a>";
        r0 += "</div>";
        r0 += "<div id=\"" + "navbar" + "\" class=\"" + "navbar-collapse collapse" + "\">";
        r0 += "<ul class=\"" + "nav navbar-nav navbar-right" + "\">";
        r0 += "<li><a href=\"" + "/jsdoc" + "\">" + "JSDoc" + "</a></li>";
        r0 += "<li><a href=\"" + "https://github.com/Katochimoto/xblocks" + "\">" + "GitHub" + "</a></li>";
        r0 += "</ul>";
        r0 += "<form class=\"" + "navbar-form navbar-right" + "\">";
        r0 += "<input type=\"" + "text" + "\" class=\"" + "form-control" + "\" placeholder=\"" + "Search..." + "\"/>";
        r0 += "</form>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "</nav>";

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .menu : _menu
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("col-sm-3 col-md-2 sidebar bs-docs-sidebar")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j3, c0), '_menu-nav', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";

        return r0;
    };
    M.t1.j = j2;
    M.t1.a = 0;

    // match .menu : _menu-nav
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<ul";
        a0.a = {
            'class': new yr.scalarAttr("nav nav-stacked")
        };
        a0.s = 'ul';
        r0 += m.a(m, 0, selectNametest('items', c0, []), '_menu-nav-items', a0)
        r0 += closeAttrs(a0);
        r0 += "</ul>";

        return r0;
    };
    M.t2.j = j2;
    M.t2.a = 0;

    // match .items : _menu-nav-items
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<li data-hash=\"" + nodeset2attrvalue( ( selectNametest('hash', c0, []) ) ) + "\">";
        r0 += "<a href=\"" + "#/" + nodeset2attrvalue( ( selectNametest('hash', c0, []) ) ) + "\">";
        r0 += nodeset2xml( selectNametest('title', c0, []) );
        r0 += "</a>";
        r0 += m.a(m, 0, selectNametest('menu', c0, []), '_menu-nav', a0)
        r0 += "</li>";

        return r0;
    };
    M.t3.j = j4;
    M.t3.a = 0;

    M.matcher = {
        "_navbar": {
            "*": [
                "t0"
            ]
        },
        "_menu": {
            "menu": [
                "t1"
            ]
        },
        "_menu-nav": {
            "menu": [
                "t2"
            ]
        },
        "_menu-nav-items": {
            "items": [
                "t3"
            ]
        }
    };
    M.imports = [];

    yr.register('docs', M);

})();

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

    var j1 = [ 1, 0 ];

    var j2 = [ 0, 'menu' ];

    var j3 = [ 0, '*' ];

    var j4 = [ 0, 'version' ];

    var j5 = [ 0, 'items' ];

    var j6 = [ 0, 'hash' ];

    var j7 = [ 0, 'title' ];

    // match /
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += m.a(m, 0, m.s(j1, c0), '_navbar', a0)
        r0 += closeAttrs(a0);
        r0 += "<div class=\"" + "container-fluid" + "\">";
        r0 += "<div class=\"" + "row" + "\">";
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("col-sm-3 col-md-2 sidebar bs-docs-sidebar")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, selectNametest('menu', c0, []), '_menu', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "<div";
        a0.a = {
            'class': new yr.scalarAttr("col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main")
        };
        a0.s = 'div';
        r0 += m.a(m, 0, m.s(j1, c0), '_content', a0)
        r0 += closeAttrs(a0);
        r0 += "</div>";
        r0 += "</div>";
        r0 += "</div>";

        return r0;
    };
    M.t0.j = 1;
    M.t0.a = 1;

    // match .* : _navbar
    M.t1 = function t1(m, c0, i0, l0, a0) {
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
        r0 += "</div>";
        r0 += "</div>";
        r0 += "</nav>";

        return r0;
    };
    M.t1.j = j3;
    M.t1.a = 0;

    // match .menu : _menu
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<ul";
        a0.a = {
            'class': new yr.scalarAttr("nav nav-stacked")
        };
        a0.s = 'ul';
        r0 += m.a(m, 0, selectNametest('items', c0, []), '_menu-items', a0)
        r0 += closeAttrs(a0);
        r0 += "</ul>";

        return r0;
    };
    M.t2.j = j2;
    M.t2.a = 0;

    // match .items : _menu-items
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<li data-hash=\"" + nodeset2attrvalue( ( selectNametest('hash', c0, []) ) ) + "\">";
        r0 += "<a href=\"" + "#/" + nodeset2attrvalue( ( selectNametest('hash', c0, []) ) ) + "\">";
        r0 += nodeset2xml( selectNametest('title', c0, []) );
        r0 += "</a>";
        r0 += m.a(m, 0, selectNametest('menu', c0, []), '_menu', a0)
        r0 += "</li>";

        return r0;
    };
    M.t3.j = j5;
    M.t3.a = 0;

    M.matcher = {
        "": {
            "": [
                "t0"
            ]
        },
        "_navbar": {
            "*": [
                "t1"
            ]
        },
        "_menu": {
            "menu": [
                "t2"
            ]
        },
        "_menu-items": {
            "items": [
                "t3"
            ]
        }
    };
    M.imports = [];

    yr.register('docs', M);

})();

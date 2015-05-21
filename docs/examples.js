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

    // match .* : _content
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';
        var current = [ c0 ];

        r0 += closeAttrs(a0);
        r0 += "<h1 class=\"" + "page-header" + "\">" + "Examples" + "</h1>";
        r0 += "<div class=\"" + "row placeholders" + "\">";
        r0 += "<div class=\"" + "col-xs-6 col-sm-3 placeholder" + "\">";
        r0 += "<h4>" + "Label" + "</h4>";
        r0 += "<span class=\"" + "text-muted" + "\">" + "Something else" + "</span>";
        r0 += "</div>";
        r0 += "<div class=\"" + "col-xs-6 col-sm-3 placeholder" + "\">";
        r0 += "<h4>" + "Label" + "</h4>";
        r0 += "<span class=\"" + "text-muted" + "\">" + "Something else" + "</span>";
        r0 += "</div>";
        r0 += "<div class=\"" + "col-xs-6 col-sm-3 placeholder" + "\">";
        r0 += "<h4>" + "Label" + "</h4>";
        r0 += "<span class=\"" + "text-muted" + "\">" + "Something else" + "</span>";
        r0 += "</div>";
        r0 += "<div class=\"" + "col-xs-6 col-sm-3 placeholder" + "\">";
        r0 += "<h4>" + "Label" + "</h4>";
        r0 += "<span class=\"" + "text-muted" + "\">" + "Something else" + "</span>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<h2 class=\"" + "sub-header" + "\">" + "Section title" + "</h2>";

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    M.matcher = {
        "_content": {
            "*": [
                "t0"
            ]
        }
    };
    M.imports = ["docs"];

    yr.register('examples', M);

})();

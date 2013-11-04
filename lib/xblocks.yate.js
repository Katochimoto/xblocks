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

    var j1 = [ 1, 0 ];

    var j2 = [ 0, 'content' ];

    var j3 = [ ];

    var j4 = [ 0, 'attrs', 0, '*' ];

    var j5 = [ 0, 'disabled' ];

    var j6 = [ 0, 'attrs', 0, 'type' ];

    function p0(m, c0, i0, l0) {
        return !nodeset2boolean( m.s(j6, c0) ) || cmpSN("button", m.s(j6, c0)) || cmpSN("submit", m.s(j6, c0));
    }

    var j7 = [ 2, p0 ];

    var j8 = [ 0, 'attrs', 0, 'xb-size' ];

    var j9 = [ 0, 'attrs', 0, 'xb-theme' ];

    var j10 = [ 0, 'attrs', 0, 'href' ];

    function p1(m, c0, i0, l0) {
        return nodeset2boolean( m.s(j10, c0) );
    }

    var j11 = [ 2, p1 ];

    function p2(m, c0, i0, l0) {
        return cmpSN("file", m.s(j6, c0));
    }

    var j12 = [ 2, p2 ];

    var j13 = [ 0, 'attrs', 0, 'name' ];

    var j14 = [ 0, 'attrs', 0, 'multiple' ];

    // match .* : xb-core-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var value : scalar
        var v0 = nodeset2scalar( m.s(j1, c0) );

        if ((v0 == true)) {
            a0.a[ ( c0.name ) ] = new yr.scalarAttr(c0.name);
        } else if ((c0.name == "class")) {
            var r1 = '';
            var a1 = { a: {} };
            r1 += " ";
            r1 += v0;
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(r1);
            }
        } else {
            a0.a[ ( c0.name ) ] = new yr.scalarAttr(v0);
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : xb-core-content
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        if (((yr.externals['xb-modernizr'])("createshadowroot"))) {
            r0 += "<content></content>";
        } else {
            r0 += nodeset2xml( selectNametest('content', c0, []) );
        }

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match / : xb-button
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-button";
        a0.a = {
        };
        a0.s = 'xb-button';
        r0 += m.a(m, m.s(j4, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-button>";

        return r0;
    };
    M.t2.j = 1;
    M.t2.a = 1;

    // match .* : attrs
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j1, c0), 'xb-core-attrs', a0)
        if ((simpleBoolean('disabled', c0))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" nb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" nb-button_disabled");
            }
        }

        return r0;
    };
    M.t3.j = j0;
    M.t3.a = 0;

    // match /[ !.attrs.type || .attrs.type == "button" || .attrs.type == "submit" ] : template
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("nb-button nb-button_size_" + nodeset2scalar( ( m.s(j8, c0) ) ) + " nb-button_theme_" + nodeset2scalar( ( m.s(j9, c0) ) ))
        };
        a0.s = 'button';
        r0 += m.a(m, m.s(j4, c0), 'attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j1, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t4.j = j7;
    M.t4.a = 1;

    // match /[ .attrs.href ] : template
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("nb-button nb-button_size_" + nodeset2scalar( ( m.s(j8, c0) ) ) + " nb-button_theme_" + nodeset2scalar( ( m.s(j9, c0) ) ))
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j4, c0), 'attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j1, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t5.j = j11;
    M.t5.a = 1;

    // match /[ .attrs.type == "file" ] : template
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("nb-button nb-button_size_" + nodeset2scalar( ( m.s(j8, c0) ) ) + " nb-button_type_attach nb-button_theme_" + nodeset2scalar( ( m.s(j9, c0) ) ))
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j4, c0), 'attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "nb-file-intruder__inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-file-intruder__input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        if (nodeset2boolean( (m.s(j13, c0)) )) {
            a0.a[ "name" ] = new yr.scalarAttr(nodeset2scalar( ( m.s(j13, c0) ) ));
        }
        if (nodeset2boolean( (m.s(j14, c0)) )) {
            a0.a[ "multiple" ] = new yr.scalarAttr("multiple");
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-file-intruder__focus" + "\"></span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("nb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j1, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t6.j = j12;
    M.t6.a = 1;

    M.matcher = {
        "xb-core-attrs": {
            "*": [
                "t0"
            ]
        },
        "xb-core-content": {
            "*": [
                "t1"
            ]
        },
        "xb-button": {
            "": [
                "t2"
            ]
        },
        "attrs": {
            "*": [
                "t3"
            ]
        },
        "template": {
            "": [
                "t6",
                "t5",
                "t4"
            ]
        }
    };
    M.imports = [];

    yr.register('main', M);

})();

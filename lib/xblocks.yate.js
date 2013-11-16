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

    var j3 = [ 1, 0 ];

    var j4 = [ 0, 'content' ];

    // match .* : xb-core-attrs
    M.t0 = function t0(m, c0, i0, l0, a0, v0, v1) {
        var r0 = '';

        if (((yr.externals['xb-empty-array'])(v0))) {
            r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs__common', a0)
        } else if ((v1)) {
            function p0(m, c0, i0, l0) {
                return !(yr.externals['xb-inarray'])(c0.name, v0);
            }

            var j1 = [ 1, 0, 2, p0 ];

            r0 += m.a(m, m.s(j1, c0), 'xb-core-attrs__common', a0)
        } else {
            function p1(m, c0, i0, l0) {
                return (yr.externals['xb-inarray'])(c0.name, v0);
            }

            var j2 = [ 1, 0, 2, p1 ];

            r0 += m.a(m, m.s(j2, c0), 'xb-core-attrs__common', a0)
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : xb-core-attrs__common
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var value : scalar
        var v2 = nodeset2scalar( m.s(j3, c0) );

        //  var boolAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("disabled");
        r1.push("multiple");
        r1.push("checked");
        var v3 = r1;

        if (((yr.externals['xb-inarray'])(c0.name, v3))) {
            if ((v2 == true)) {
                a0.a[ ( c0.name ) ] = new yr.scalarAttr(c0.name);
            }
        } else if ((c0.name == "class")) {
            var r1 = '';
            var a1 = { a: {} };
            r1 += " ";
            r1 += v2;
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(r1);
            }
        } else {
            a0.a[ ( c0.name ) ] = new yr.scalarAttr(v2);
        }

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .* : xb-core-content
    M.t2 = function t2(m, c0, i0, l0, a0, v4) {
        v4 = (v4 === undefined) ? "" : v4;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<content>";
        if ((!(yr.externals['xb-modernizr'])("createshadowroot"))) {
            if ((v4)) {
                r0 += nodeset2xml( selectNametest('content', c0, []) );
            } else {
                r0 += simpleScalar('content', c0);
            }
        }
        r0 += "</content>";

        return r0;
    };
    M.t2.j = j0;
    M.t2.a = 0;

    M.matcher = {
        "xb-core-attrs": {
            "*": [
                "t0"
            ]
        },
        "xb-core-attrs__common": {
            "*": [
                "t1"
            ]
        },
        "xb-core-content": {
            "*": [
                "t2"
            ]
        }
    };
    M.imports = [];

    yr.register('xblocks', M);

})();var yr = yr || require('yate/lib/runtime.js');

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

    var j2 = [ ];

    var j3 = [ 0, 'attrs', 0, '*' ];

    var j4 = [ 0, 'content' ];

    var j5 = [ 0, 'attrs', 0, 'postfix' ];

    var j6 = [ 0, 'attrs', 0, 'prefix' ];

    var j7 = [ 0, 'attrs', 0, 'reset' ];

    function p0(m, c0, i0, l0) {
        return nodeset2boolean( m.s(j5, c0) ) || nodeset2boolean( m.s(j6, c0) ) || nodeset2boolean( m.s(j7, c0) );
    }

    var j8 = [ 2, p0 ];

    function p1(m, c0, i0, l0) {
        return !(nodeset2boolean( m.s(j5, c0) ) || nodeset2boolean( m.s(j6, c0) ) || nodeset2boolean( m.s(j7, c0) ));
    }

    var j9 = [ 2, p1 ];

    var j10 = [ 0, 'attrs', 0, 'rows' ];

    var j11 = [ 0, 'attrs', 0, 'cols' ];

    // match .* : block-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        if ((c0.name == "disabled" && nodeset2boolean( m.s(j1, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        if ((c0.name == "size")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-field_size_" + nodeset2scalar( ( m.s(j1, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-field_size_" + nodeset2scalar( ( m.s(j1, c0) ) ));
            }
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match / : xb-field
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-field";
        a0.a = {
        };
        a0.s = 'xb-field';
        r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-field>";

        return r0;
    };
    M.t1.j = 1;
    M.t1.a = 1;

    // match /[ .attrs.postfix || .attrs.prefix || .attrs.reset ] : template
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("disabled");
        r1.push("type");
        var v0 = r1;

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("xb-field_complex")
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j3, c0), 'block-attrs', a0)
        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j6, c0)) )) {
            r0 += "<span class=\"" + "xb-field_complex__left" + "\">";
            r0 += nodeset2xml( m.s(j6, c0) );
            r0 += "</span>";
        }
        if (nodeset2boolean( (m.s(j5, c0)) )) {
            r0 += "<span class=\"" + "xb-field_complex__right" + "\">";
            r0 += nodeset2xml( m.s(j5, c0) );
            r0 += "</span>";
        }
        if (nodeset2boolean( (m.s(j7, c0)) )) {
            r0 += "<span class=\"" + "xb-field_complex__reset js-reset" + "\"></span>";
        }
        r0 += "<span class=\"" + "xb-field_complex__content" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("xb-field_complex__controller"),
            'type': new yr.scalarAttr("text")
        };
        a0.s = 'input';
        r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0, v0)
        if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
            a0.a[ "value" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) ));
        }
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "xb-field_complex__view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t2.j = j8;
    M.t2.a = 1;

    // match /[ !( .attrs.postfix || .attrs.prefix || .attrs.reset ) ] : template
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("disabled");
        r1.push("type");
        var v1 = r1;

        r0 += closeAttrs(a0);
        if ((nodeset2boolean( m.s(j10, c0) ) || nodeset2boolean( m.s(j11, c0) ))) {
            r0 += "<textarea";
            a0.a = {
                'class': new yr.scalarAttr("xb-field_simple")
            };
            a0.s = 'textarea';
            r0 += m.a(m, m.s(j3, c0), 'block-attrs', a0)
            r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0, v1)
            r0 += closeAttrs(a0);
            r0 += nodeset2xml( selectNametest('content', c0, []) );
            r0 += "</textarea>";
        } else {
            r0 += "<input";
            a0.a = {
                'class': new yr.scalarAttr("xb-field_simple"),
                'type': new yr.scalarAttr("text")
            };
            a0.s = 'input';
            r0 += m.a(m, m.s(j3, c0), 'block-attrs', a0)
            r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0, v1)
            if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
                a0.a[ "value" ] = new yr.scalarAttr(nodeset2scalar( ( selectNametest('content', c0, []) ) ));
            }
            r0 += closeAttrs(a0);
            r0 += '';
        }

        return r0;
    };
    M.t3.j = j9;
    M.t3.a = 1;

    M.matcher = {
        "block-attrs": {
            "*": [
                "t0"
            ]
        },
        "xb-field": {
            "": [
                "t1"
            ]
        },
        "template": {
            "": [
                "t3",
                "t2"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-field', M);

})();var yr = yr || require('yate/lib/runtime.js');

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

    var j2 = [ ];

    var j3 = [ 0, 'attrs', 0, '*' ];

    var j4 = [ 0, 'content' ];

    var j5 = [ 0, 'attrs', 0, 'type' ];

    function p0(m, c0, i0, l0) {
        return !nodeset2boolean( m.s(j5, c0) ) || cmpSN("button", m.s(j5, c0)) || cmpSN("submit", m.s(j5, c0));
    }

    var j6 = [ 2, p0 ];

    var j7 = [ 0, 'attrs', 0, 'href' ];

    function p1(m, c0, i0, l0) {
        return nodeset2boolean( m.s(j7, c0) );
    }

    var j8 = [ 2, p1 ];

    function p2(m, c0, i0, l0) {
        return cmpSN("file", m.s(j5, c0));
    }

    var j9 = [ 2, p2 ];

    // match .* : block-attrs
    M.t0 = function t0(m, c0, i0, l0, a0) {
        var r0 = '';

        if ((c0.name == "disabled" && nodeset2boolean( m.s(j1, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_disabled");
            }
        }
        if ((c0.name == "flying" && nodeset2boolean( m.s(j1, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_flying");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_flying");
            }
        }
        if ((c0.name == "checked" && nodeset2boolean( m.s(j1, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_checked");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_checked");
            }
        }
        if ((c0.name == "size")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_size_" + nodeset2scalar( ( m.s(j1, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_size_" + nodeset2scalar( ( m.s(j1, c0) ) ));
            }
        }
        if ((c0.name == "theme")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_theme_" + nodeset2scalar( ( m.s(j1, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_theme_" + nodeset2scalar( ( m.s(j1, c0) ) ));
            }
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match / : xb-button
    M.t1 = function t1(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-button";
        a0.a = {
        };
        a0.s = 'xb-button';
        r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-button>";

        return r0;
    };
    M.t1.j = 1;
    M.t1.a = 1;

    // match /[ !.attrs.type || .attrs.type == "button" || .attrs.type == "submit" ] : template
    M.t2 = function t2(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("disabled");
        var v0 = r1;

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("xb-button")
        };
        a0.s = 'button';
        r0 += m.a(m, m.s(j3, c0), 'block-attrs', a0)
        r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0, v0)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j1, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t2.j = j6;
    M.t2.a = 1;

    // match /[ .attrs.href ] : template
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        var v1 = r1;

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("xb-button")
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j3, c0), 'block-attrs', a0)
        r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0, v1)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j1, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t3.j = j8;
    M.t3.a = 1;

    // match /[ .attrs.type == "file" ] : template
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("multiple");
        r1.push("disabled");
        var v2 = r1;

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("xb-button xb-button_type_attach")
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j3, c0), 'block-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "nb-file-intruder__inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-file-intruder__input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs', a0, v2)
        r0 += closeAttrs(a0);
        r0 += '';
        r0 += "<span class=\"" + "nb-file-intruder__focus" + "\"></span>";
        r0 += "</span>";
        r0 += "</span>";
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j1, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t4.j = j9;
    M.t4.a = 1;

    M.matcher = {
        "block-attrs": {
            "*": [
                "t0"
            ]
        },
        "xb-button": {
            "": [
                "t1"
            ]
        },
        "template": {
            "": [
                "t4",
                "t3",
                "t2"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-button', M);

})();
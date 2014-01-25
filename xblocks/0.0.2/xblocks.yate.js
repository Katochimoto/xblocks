
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
    M.t0 = function t0(m, c0, i0, l0, a0, v0, v1, v2) {
        var r0 = '';

        if (((yr.externals['xb-empty-array'])(v0))) {
            r0 += m.a(m, m.s(j3, c0), 'xb-core-attrs__common', a0, v2)
        } else if ((v1)) {
            function p0(m, c0, i0, l0) {
                return !(yr.externals['xb-inarray'])(c0.name, v0);
            }

            var j1 = [ 1, 0, 2, p0 ];

            r0 += m.a(m, m.s(j1, c0), 'xb-core-attrs__common', a0, v2)
        } else {
            function p1(m, c0, i0, l0) {
                return (yr.externals['xb-inarray'])(c0.name, v0);
            }

            var j2 = [ 1, 0, 2, p1 ];

            r0 += m.a(m, m.s(j2, c0), 'xb-core-attrs__common', a0, v2)
        }

        return r0;
    };
    M.t0.j = j0;
    M.t0.a = 0;

    // match .* : xb-core-attrs__common
    M.t1 = function t1(m, c0, i0, l0, a0, v3) {
        var r0 = '';

        //  var value : scalar
        var v4 = nodeset2scalar( m.s(j3, c0) );

        //  var name : scalar
        var v5 = (yr.externals['xb-prefix-rm'])(c0.name, v3);

        //  var boolAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("disabled");
        r1.push("multiple");
        r1.push("checked");
        r1.push("required");
        r1.push("readonly");
        r1.push("selected");
        var v6 = r1;

        if (((yr.externals['xb-inarray'])(v5, v6))) {
            if ((v4 == true)) {
                a0.a[ ( v5 ) ] = new yr.scalarAttr(( v5 ));
            }
        } else if ((v5 == "class")) {
            var r1 = '';
            var a1 = { a: {} };
            r1 += " ";
            r1 += v4;
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(r1);
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(r1);
            }
        } else {
            a0.a[ ( v5 ) ] = new yr.scalarAttr(v4);
        }

        return r0;
    };
    M.t1.j = j0;
    M.t1.a = 0;

    // match .* : xb-core-content
    M.t2 = function t2(m, c0, i0, l0, a0, v7) {
        v7 = (v7 === undefined) ? "" : v7;
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<content>";
        if ((!(yr.externals['xb-modernizr'])("createshadowroot"))) {
            if ((v7)) {
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

})();
;

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

    var j5 = [ 0, '*' ];

    var j6 = [ 1, 0 ];

    var j7 = [ ];

    var j8 = [ 0, 'attrs', 0, '*' ];

    var j9 = [ 0, 'content' ];

    var j10 = [ 0, 'attrs', 0, 'type' ];

    function p2(m, c0, i0, l0) {
        return !nodeset2boolean( m.s(j10, c0) ) || cmpSN("button", m.s(j10, c0)) || cmpSN("submit", m.s(j10, c0));
    }

    var j11 = [ 2, p2 ];

    var j12 = [ 0, 'attrs', 0, 'href' ];

    function p3(m, c0, i0, l0) {
        return nodeset2boolean( m.s(j12, c0) );
    }

    var j13 = [ 2, p3 ];

    function p4(m, c0, i0, l0) {
        return cmpSN("file", m.s(j10, c0));
    }

    var j14 = [ 2, p4 ];

    var j15 = [ 0, 'attrs', 0, 'ico' ];

    var j16 = [ 0, 'attrs', 0, 'float' ];

    // match .* : block-class
    M.t3 = function t3(m, c0, i0, l0, a0) {
        var r0 = '';

        if ((c0.name == "disabled" && nodeset2boolean( m.s(j6, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_disabled");
            }
        }
        if ((c0.name == "flying" && nodeset2boolean( m.s(j6, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_flying");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_flying");
            }
        }
        if ((c0.name == "checked" && nodeset2boolean( m.s(j6, c0) ))) {
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
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_size_" + nodeset2scalar( ( m.s(j6, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_size_" + nodeset2scalar( ( m.s(j6, c0) ) ));
            }
        }
        if ((c0.name == "theme")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-button_theme_" + nodeset2scalar( ( m.s(j6, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-button_theme_" + nodeset2scalar( ( m.s(j6, c0) ) ));
            }
        }

        return r0;
    };
    M.t3.j = j5;
    M.t3.a = 0;

    // match / : xb-button
    M.t4 = function t4(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-button";
        a0.a = {
        };
        a0.s = 'xb-button';
        r0 += m.a(m, m.s(j8, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-button>";

        return r0;
    };
    M.t4.j = 1;
    M.t4.a = 1;

    // match /[ !.attrs.type || .attrs.type == "button" || .attrs.type == "submit" ] : template
    M.t5 = function t5(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("disabled");
        var v8 = r1;

        r0 += closeAttrs(a0);
        r0 += "<button";
        a0.a = {
            'class': new yr.scalarAttr("xb-button")
        };
        a0.s = 'button';
        r0 += m.a(m, m.s(j8, c0), 'block-class', a0)
        r0 += m.a(m, m.s(j8, c0), 'xb-core-attrs', a0, v8)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j6, c0), 'template-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</button>";

        return r0;
    };
    M.t5.j = j11;
    M.t5.a = 1;

    // match /[ .attrs.href ] : template
    M.t6 = function t6(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        var v9 = r1;

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("xb-button")
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j8, c0), 'block-class', a0)
        r0 += m.a(m, m.s(j8, c0), 'xb-core-attrs', a0, v9)
        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-button__text")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j6, c0), 'template-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</a>";

        return r0;
    };
    M.t6.j = j13;
    M.t6.a = 1;

    // match /[ .attrs.type == "file" ] : template
    M.t7 = function t7(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("multiple");
        r1.push("disabled");
        var v10 = r1;

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("xb-button xb-button_type_attach")
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j8, c0), 'block-class', a0)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "nb-file-intruder" + "\">";
        r0 += "<span class=\"" + "nb-file-intruder__inner" + "\">";
        r0 += "<input";
        a0.a = {
            'class': new yr.scalarAttr("nb-file-intruder__input"),
            'type': new yr.scalarAttr("file")
        };
        a0.s = 'input';
        r0 += m.a(m, m.s(j8, c0), 'xb-core-attrs', a0, v10)
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
        r0 += m.a(m, m.s(j6, c0), 'template-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t7.j = j14;
    M.t7.a = 1;

    // match .* : template-content
    M.t8 = function t8(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j15, c0), 'template-ico', a0)
        r0 += m.a(m, m.s(j6, c0), 'xb-core-content', a0)

        return r0;
    };
    M.t8.j = j5;
    M.t8.a = 0;

    // match .attrs.ico : template-ico
    M.t9 = function t9(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-ico";
        a0.a = {
            'class': new yr.scalarAttr("xb-ico_float_" + nodeset2scalar( ( m.s(j16, c0) ) ))
        };
        a0.s = 'xb-ico';
        r0 += m.a(m, m.s(j8, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-ico>";

        return r0;
    };
    M.t9.j = j15;
    M.t9.a = 0;

    M.matcher = {
        "block-class": {
            "*": [
                "t3"
            ]
        },
        "xb-button": {
            "": [
                "t4"
            ]
        },
        "template": {
            "": [
                "t7",
                "t6",
                "t5"
            ]
        },
        "template-content": {
            "*": [
                "t8"
            ]
        },
        "template-ico": {
            "ico": [
                "t9"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-button', M);

})();
;

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

    var j17 = [ 0, '*' ];

    var j18 = [ 1, 0 ];

    var j19 = [ ];

    var j20 = [ 0, 'attrs', 0, '*' ];

    var j21 = [ 0, 'attrs', 0, 'postfix' ];

    var j22 = [ 0, 'attrs', 0, 'prefix' ];

    var j23 = [ 0, 'attrs', 0, 'reset' ];

    var j24 = [ 0, 'attrs', 0, 'label' ];

    var j25 = [ 0, 'attrs', 0, 'autosize' ];

    function p5(m, c0, i0, l0) {
        return nodeset2boolean( m.s(j21, c0) ) || nodeset2boolean( m.s(j22, c0) ) || nodeset2boolean( m.s(j23, c0) ) || nodeset2boolean( m.s(j24, c0) ) || nodeset2boolean( m.s(j25, c0) );
    }

    var j26 = [ 2, p5 ];

    var j27 = [ 0, 'attrs', 0, 'label', 0, 'attrs', 0, '*' ];

    var j28 = [ 0, 'attrs', 0, 'label', 0, 'content' ];

    function p6(m, c0, i0, l0) {
        return !(nodeset2boolean( m.s(j21, c0) ) || nodeset2boolean( m.s(j22, c0) ) || nodeset2boolean( m.s(j23, c0) ) || nodeset2boolean( m.s(j24, c0) ) || nodeset2boolean( m.s(j25, c0) ));
    }

    var j29 = [ 2, p6 ];

    var j30 = [ 0, 'attrs', 0, 'multiline' ];

    var j31 = [ 0, 'attrs', 0, 'value' ];

    // match .* : block-class
    M.t10 = function t10(m, c0, i0, l0, a0) {
        var r0 = '';

        if ((c0.name == "disabled" && nodeset2boolean( m.s(j18, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        if ((c0.name == "autosize" && nodeset2boolean( m.s(j18, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-field_autosize");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-field_autosize");
            }
        }
        if ((c0.name == "size")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-field_size_" + nodeset2scalar( ( m.s(j18, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-field_size_" + nodeset2scalar( ( m.s(j18, c0) ) ));
            }
        }

        return r0;
    };
    M.t10.j = j17;
    M.t10.a = 0;

    // match / : xb-field
    M.t11 = function t11(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-field";
        a0.a = {
        };
        a0.s = 'xb-field';
        r0 += m.a(m, m.s(j20, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += "</xb-field>";

        return r0;
    };
    M.t11.j = 1;
    M.t11.a = 1;

    // match /[ .attrs.postfix || .attrs.prefix || .attrs.reset || .attrs.label || .attrs.autosize ] : template
    M.t12 = function t12(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<label";
        a0.a = {
            'class': new yr.scalarAttr("xb-field_complex")
        };
        a0.s = 'label';
        r0 += m.a(m, m.s(j20, c0), 'block-class', a0)
        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j24, c0)) )) {
            r0 += "<xb-link";
            a0.a = {
                'href': new yr.scalarAttr("#"),
                'type': new yr.scalarAttr("input")
            };
            a0.s = 'xb-link';
            r0 += m.a(m, m.s(j27, c0), 'xb-core-attrs', a0)
            r0 += closeAttrs(a0);
            r0 += nodeset2xml( m.s(j28, c0) );
            r0 += "</xb-link>";
        }
        if (nodeset2boolean( (m.s(j22, c0)) )) {
            r0 += "<span class=\"" + "xb-field_complex__left" + "\">";
            r0 += nodeset2xml( m.s(j22, c0) );
            r0 += "</span>";
        }
        if (nodeset2boolean( (m.s(j21, c0)) )) {
            r0 += "<span class=\"" + "xb-field_complex__right" + "\">";
            r0 += nodeset2xml( m.s(j21, c0) );
            r0 += "</span>";
        }
        if (nodeset2boolean( (m.s(j23, c0)) )) {
            r0 += "<xb-ico class=\"" + "xb-field_complex__reset js-reset" + "\" type=\"" + "remove" + "\" active=\"" + "true" + "\"></xb-ico>";
        }
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-field_complex__content")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j18, c0), 'template-controller', a0, "xb-field_complex__controller", false)
        r0 += closeAttrs(a0);
        r0 += "<span class=\"" + "xb-field_complex__view" + "\">" + " " + "</span>";
        r0 += "</span>";
        r0 += "</label>";

        return r0;
    };
    M.t12.j = j26;
    M.t12.a = 1;

    // match /[ !( .attrs.postfix || .attrs.prefix || .attrs.reset || .attrs.label || .attrs.autosize ) ] : template
    M.t13 = function t13(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += m.a(m, m.s(j18, c0), 'template-controller', a0, "xb-field_simple", true)

        return r0;
    };
    M.t13.j = j29;
    M.t13.a = 1;

    // match . : template-controller
    M.t14 = function t14(m, c0, i0, l0, a0, v11, v12) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("disabled");
        r1.push("placeholder");
        r1.push("readonly");
        var v13 = r1;

        r0 += closeAttrs(a0);
        if (nodeset2boolean( (m.s(j30, c0)) )) {
            r0 += "<textarea";
            a0.a = {
            };
            a0.s = 'textarea';
            var r1 = '';
            var a1 = { a: {} };
            r1 += v11;
            a0.a[ "class" ] = new yr.scalarAttr(r1);
            if ((v12)) {
                r0 += m.a(m, m.s(j20, c0), 'block-class', a0)
            }
            r0 += m.a(m, m.s(j20, c0), 'xb-core-attrs', a0, (yr.externals['xb-concat-array'])(v13, (function() {
                var r0 = [];
                var a0 = { a: {} };
                r0.push("rows");
                r0.push("cols");

                return r0;
            })()))
            r0 += closeAttrs(a0);
            r0 += nodeset2xml( m.s(j31, c0) );
            r0 += "</textarea>";
        } else {
            r0 += "<input";
            a0.a = {
                'type': new yr.scalarAttr("text")
            };
            a0.s = 'input';
            var r1 = '';
            var a1 = { a: {} };
            r1 += v11;
            a0.a[ "class" ] = new yr.scalarAttr(r1);
            if ((v12)) {
                r0 += m.a(m, m.s(j20, c0), 'block-class', a0)
            }
            r0 += m.a(m, m.s(j20, c0), 'xb-core-attrs', a0, (yr.externals['xb-concat-array'])(v13, (function() {
                var r0 = [];
                var a0 = { a: {} };
                r0.push("value");

                return r0;
            })()))
            r0 += closeAttrs(a0);
            r0 += '';
        }

        return r0;
    };
    M.t14.j = j18;
    M.t14.a = 0;

    M.matcher = {
        "block-class": {
            "*": [
                "t10"
            ]
        },
        "xb-field": {
            "": [
                "t11"
            ]
        },
        "template": {
            "": [
                "t13",
                "t12"
            ]
        },
        "template-controller": {
            "": [
                "t14"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-field', M);

})();
;

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

    var j32 = [ ];

    var j33 = [ 0, 'attrs', 0, '*' ];

    var j34 = [ 0, 'content' ];

    var j35 = [ 0, '*' ];

    var j36 = [ 1, 0 ];

    // match / : xb-ico
    M.t15 = function t15(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-ico";
        a0.a = {
        };
        a0.s = 'xb-ico';
        r0 += m.a(m, m.s(j33, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        if (nodeset2boolean( (selectNametest('content', c0, [])) )) {
            r0 += nodeset2xml( selectNametest('content', c0, []) );
        } else {
            r0 += " ";
        }
        r0 += "</xb-ico>";

        return r0;
    };
    M.t15.j = 1;
    M.t15.a = 1;

    // match .* : block-class
    M.t16 = function t16(m, c0, i0, l0, a0) {
        var r0 = '';

        if ((c0.name == "type")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-ico_type_" + nodeset2scalar( ( m.s(j36, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-ico_type_" + nodeset2scalar( ( m.s(j36, c0) ) ));
            }
        }
        if ((c0.name == "active" && nodeset2boolean( m.s(j36, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-ico_active");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-ico_active");
            }
        }
        if ((c0.name == "disabled" && nodeset2boolean( m.s(j36, c0) ))) {
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
                a0.a[ "class" ] = tmp0.addscalar(" xb-ico_size_" + nodeset2scalar( ( m.s(j36, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-ico_size_" + nodeset2scalar( ( m.s(j36, c0) ) ));
            }
        }

        return r0;
    };
    M.t16.j = j35;
    M.t16.a = 0;

    // match / : template
    M.t17 = function t17(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("id");
        var v14 = r1;

        r0 += closeAttrs(a0);
        r0 += "<span";
        a0.a = {
            'class': new yr.scalarAttr("xb-ico")
        };
        a0.s = 'span';
        r0 += m.a(m, m.s(j33, c0), 'block-class', a0)
        r0 += m.a(m, m.s(j33, c0), 'xb-core-attrs', a0, v14)
        r0 += m.a(m, m.s(j36, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</span>";

        return r0;
    };
    M.t17.j = 1;
    M.t17.a = 1;

    M.matcher = {
        "xb-ico": {
            "": [
                "t15"
            ]
        },
        "block-class": {
            "*": [
                "t16"
            ]
        },
        "template": {
            "": [
                "t17"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-ico', M);

})();
;

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

    var j37 = [ ];

    var j38 = [ 0, 'attrs', 0, '*' ];

    var j39 = [ 0, 'content' ];

    var j40 = [ 0, '*' ];

    var j41 = [ 1, 0 ];

    // match / : xb-link
    M.t18 = function t18(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-link";
        a0.a = {
        };
        a0.s = 'xb-link';
        r0 += m.a(m, m.s(j38, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-link>";

        return r0;
    };
    M.t18.j = 1;
    M.t18.a = 1;

    // match .* : block-class
    M.t19 = function t19(m, c0, i0, l0, a0) {
        var r0 = '';

        if ((c0.name == "disabled" && nodeset2boolean( m.s(j41, c0) ))) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" is-disabled");
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" is-disabled");
            }
        }
        if ((c0.name == "type")) {
            var tmp0 = a0.a[ "class" ];
            if (tmp0) {
                a0.a[ "class" ] = tmp0.addscalar(" xb-link_" + nodeset2scalar( ( m.s(j41, c0) ) ));
            } else {
                a0.a[ "class" ] = new yr.scalarAttr(" xb-link_" + nodeset2scalar( ( m.s(j41, c0) ) ));
            }
        }

        return r0;
    };
    M.t19.j = j40;
    M.t19.a = 0;

    // match / : template
    M.t20 = function t20(m, c0, i0, l0, a0) {
        var r0 = '';

        //  var controllerAttrs : array
        var r1 = [];
        var a1 = { a: {} };
        r1.push("name");
        r1.push("href");
        r1.push("id");
        r1.push("target");
        var v15 = r1;

        r0 += closeAttrs(a0);
        r0 += "<a";
        a0.a = {
            'class': new yr.scalarAttr("xb-link")
        };
        a0.s = 'a';
        r0 += m.a(m, m.s(j38, c0), 'block-class', a0)
        r0 += m.a(m, m.s(j38, c0), 'xb-core-attrs', a0, v15)
        r0 += m.a(m, m.s(j41, c0), 'xb-core-content', a0)
        r0 += closeAttrs(a0);
        r0 += "</a>";

        return r0;
    };
    M.t20.j = 1;
    M.t20.a = 1;

    M.matcher = {
        "xb-link": {
            "": [
                "t18"
            ]
        },
        "block-class": {
            "*": [
                "t19"
            ]
        },
        "template": {
            "": [
                "t20"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-link', M);

})();
;

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

    var j42 = [ ];

    var j43 = [ 0, 'attrs', 0, '*' ];

    var j44 = [ 0, 'content' ];

    // match / : xb-select
    M.t21 = function t21(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-select";
        a0.a = {
        };
        a0.s = 'xb-select';
        r0 += m.a(m, m.s(j43, c0), 'xb-core-attrs', a0)
        r0 += closeAttrs(a0);
        r0 += nodeset2xml( selectNametest('content', c0, []) );
        r0 += "</xb-select>";

        return r0;
    };
    M.t21.j = 1;
    M.t21.a = 1;

    // match / : template
    M.t22 = function t22(m, c0, i0, l0, a0) {
        var r0 = '';

        r0 += closeAttrs(a0);
        r0 += "<xb-button>";
        r0 += "</xb-button>";

        return r0;
    };
    M.t22.j = 1;
    M.t22.a = 1;

    M.matcher = {
        "xb-select": {
            "": [
                "t21"
            ]
        },
        "template": {
            "": [
                "t22"
            ]
        }
    };
    M.imports = ["xblocks"];

    yr.register('xb-select', M);

})();
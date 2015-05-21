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
        r0 += "<h1 class=\"" + "page-header anchor" + "\" data-hash=\"" + "examples" + "\">";
        r0 += "Examples";
        r0 += "</h1>";
        r0 += "<h2 class=\"" + "sub-header anchor" + "\" data-hash=\"" + "examples/icons" + "\">";
        r0 += "Icons";
        r0 += "</h2>";
        r0 += "To display icons, use the tag ";
        r0 += "<code>";
        r0 += "&lt;xb-ico&gt;";
        r0 += "</code>";
        r0 += ".";
        r0 += "<p></p>";
        r0 += "<div class=\"" + "row" + "\">";
        r0 += "<div class=\"" + "col-md-3" + "\">";
        r0 += "<ul class=\"" + "list-unstyled" + "\">";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "help" + "\"></xb-ico>" + " help" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "attention" + "\"></xb-ico>" + " attention" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "close" + "\"></xb-ico>" + " close" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "check" + "\"></xb-ico>" + " check" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "download" + "\"></xb-ico>" + " download" + "</li>";
        r0 += "<li><span style=\"" + "background-color:#000;" + "\"><xb-ico size=\"" + "s" + "\" type=\"" + "download-white" + "\"></xb-ico></span>" + " download-white" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "twitter" + "\"></xb-ico>" + " twitter" + "</li>";
        r0 += "</ul>";
        r0 += "</div>";
        r0 += "<div class=\"" + "col-md-3" + "\">";
        r0 += "<ul class=\"" + "list-unstyled" + "\">";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "three-dots" + "\"></xb-ico>" + " three-dots" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "dropdown" + "\"></xb-ico>" + " dropdown" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "eye" + "\"></xb-ico>" + " eye" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "link" + "\"></xb-ico>" + " link" + "</li>";
        r0 += "<li><span style=\"" + "background-color:#000;" + "\"><xb-ico size=\"" + "s" + "\" type=\"" + "link-white" + "\"></xb-ico></span>" + " link-white" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "vk" + "\"></xb-ico>" + " vk" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "play" + "\"></xb-ico>" + " play" + "</li>";
        r0 += "</ul>";
        r0 += "</div>";
        r0 += "<div class=\"" + "col-md-3" + "\">";
        r0 += "<ul class=\"" + "list-unstyled" + "\">";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "mail" + "\"></xb-ico>" + " mail" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "notification" + "\">" + "test" + "</xb-ico>" + " notification" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "odnoklassniki" + "\"></xb-ico>" + " odnoklassniki" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "pause" + "\"></xb-ico>" + " pause" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "people" + "\"></xb-ico>" + " people" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "trash" + "\"></xb-ico>" + " trash" + "</li>";
        r0 += "<li><span style=\"" + "background-color:#000;" + "\"><xb-ico size=\"" + "s" + "\" type=\"" + "trash-white" + "\"></xb-ico></span>" + " trash-white" + "</li>";
        r0 += "</ul>";
        r0 += "</div>";
        r0 += "<div class=\"" + "col-md-3" + "\">";
        r0 += "<ul class=\"" + "list-unstyled" + "\">";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "print" + "\"></xb-ico>" + " print" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "remove" + "\"></xb-ico>" + " remove" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "services" + "\"></xb-ico>" + " services" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "settings" + "\"></xb-ico>" + " settings" + "</li>";
        r0 += "<li><xb-ico size=\"" + "s" + "\" type=\"" + "upload" + "\"></xb-ico>" + " upload" + "</li>";
        r0 += "<li><span style=\"" + "background-color:#000;" + "\"><xb-ico size=\"" + "s" + "\" type=\"" + "upload-white" + "\"></xb-ico></span>" + " upload-white" + "</li>";
        r0 += "</ul>";
        r0 += "</div>";
        r0 += "</div>";
        r0 += "<p></p>";
        r0 += "Specify ";
        r0 += "<code>";
        r0 += "size=\"s\"";
        r0 += "</code>";
        r0 += " to display a small icon.";
        r0 += "<div class=\"" + "bs-docs-example is-code" + "\">";
        r0 += "<xb-ico size=\"" + "s" + "\" type=\"" + "help" + "\"></xb-ico>";
        r0 += "</div>";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;xb-ico size=\"s\" type=\"help\"&gt;&lt;/xb-ico&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "Specify ";
        r0 += "<code>";
        r0 += "size=\"m\"";
        r0 += "</code>";
        r0 += " to display a big icon.";
        r0 += "<div class=\"" + "bs-docs-example is-code" + "\">";
        r0 += "<xb-ico size=\"" + "m" + "\" type=\"" + "print" + "\"></xb-ico>";
        r0 += "</div>";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;xb-ico size=\"m\" type=\"print\"&gt;&lt;/xb-ico&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "Icon \"notification\" may contain the value.";
        r0 += "<div class=\"" + "bs-docs-example is-code" + "\">";
        r0 += "<xb-ico type=\"" + "notification" + "\" value=\"" + "test" + "\"></xb-ico>";
        r0 += "</div>";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;xb-ico type=\"notification\" value=\"test\"&gt;&lt;/xb-ico&gt;";
        r0 += "<br/>";
        r0 += "&lt;xb-ico type=\"notification\"&gt;test&lt;/xb-ico&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "The icon can be active.";
        r0 += "<div class=\"" + "bs-docs-example is-code" + "\">";
        r0 += "<xb-ico type=\"" + "remove" + "\" active=\"" + "active" + "\"></xb-ico>";
        r0 += "</div>";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;xb-ico type=\"remove\" active&gt;&lt;/xb-ico&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "The icon may not be available.";
        r0 += "<div class=\"" + "bs-docs-example is-code" + "\">";
        r0 += "<xb-ico type=\"" + "twitter" + "\" disabled=\"" + "disabled" + "\"></xb-ico>";
        r0 += "</div>";
        r0 += "<div class=\"" + "highlight" + "\">";
        r0 += "<pre>";
        r0 += "<code class=\"" + "html" + "\">";
        r0 += "&lt;xb-ico type=\"twitter\" disabled&gt;&lt;/xb-ico&gt;";
        r0 += "</code>";
        r0 += "</pre>";
        r0 += "</div>";
        r0 += "<a href=\"" + "#/controls/icons" + "\">";
        r0 += "See more info about icons.";
        r0 += "</a>";
        r0 += "<h2 class=\"" + "sub-header anchor" + "\" data-hash=\"" + "examples/buttons" + "\">";
        r0 += "Buttons";
        r0 += "</h2>";
        r0 += "To display buttons, use the tag ";
        r0 += "<code>";
        r0 += "&lt;xb-button&gt;";
        r0 += "</code>";
        r0 += ".";

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

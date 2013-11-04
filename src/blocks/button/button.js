(function(xtag) {
    'use strict';

    xtag.register('xb-button', {
        lifecycle: {
            created: function() {
                var data = {
                    attrs: {},
                    content: null
                };

                for (var i = 0, attrs = this.attributes, l = attrs.length; i < l; i++) {
                    var attr = attrs.item(i);
                    if (attr.nodeValue === 'true' || attr.nodeValue === 'false' || attr.nodeName === attr.nodeValue) {
                        if (attr.nodeName === attr.nodeValue || attr.nodeValue === 'true') {
                            data.attrs[attr.nodeName] = true;
                        } else {
                            data.attrs[attr.nodeName] = false;
                        }
                    } else {
                        data.attrs[attr.nodeName] = attr.nodeValue;
                    }
                }

                if (!data.attrs['xb-theme']) {
                    data.attrs['xb-theme'] = 'normal';
                }

                if (!data.attrs['xb-size']) {
                    data.attrs['xb-size'] = 'm';
                }


                if (!Modernizr.createshadowroot) {
                    data.content = this.innerHTML;
                }

                var html = yr.run('main', data, 'template');
                var css = '@import url(../src/blocks/button/button.css);';


                if (Modernizr.createshadowroot) {
                    var style = document.createElement('style');
                    style.setAttribute('type', 'text/css');
                    style.setAttribute('scoped', 'scoped');

                    if (style.styleSheet){
                        style.styleSheet.cssText = css;

                    } else {
                        style.appendChild(document.createTextNode(css));
                    }

                    var template = xtag.createFragment(html);
                    var root = this.createShadowRoot();

                    template.insertBefore(style, template.firstChild);

                    root.resetStyleInheritance = false;
                    root.applyAuthorStyles = false;
                    root.appendChild(template.cloneNode(true));

                } else {
                    html = '<style type="text/css" scoped="scoped">' + css + '</style>' + html;
                    this.innerHTML = html;
                }
            }
        },

        events: {
            click: function(event) {
                if (this.hasAttribute('disabled')) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }
    });

})(xtag);
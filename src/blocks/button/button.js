(function(xtag, xblocks) {
    'use strict';

    (function(schema) {
        tv4.addSchema('http://xblocks.ru/button', schema);
    })(
        /* borschik:include:schema.json */
    );



    xtag.register('xb-button', {
        lifecycle: {
            created: function() {
                var data = {
                    attrs: xblocks.attrs2obj(this, {
                        'xb-theme': 'normal',
                        'xb-size': 'm'
                    }),
                    content: Modernizr.createshadowroot ? null : this.innerHTML
                };


                var schema = tv4.getSchema('http://xblocks.ru/button');
                var check = tv4.validateResult(data, schema);

                if (!check.valid) {
                    throw check.error;
                }




                var html = yr.run('button', data, 'template');
                var css = '@import url(' + borschik.link('styl/_button.css') + ');';


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

})(xtag, xblocks);


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

                data.content = this.innerHTML;


                var html = yr.run('main', data, 'template');
                //var template = xtag.createFragment(html);
                //var root = this.createShadowRoot();

                //root.resetStyleInheritance = false;
                //root.applyAuthorStyles = false;
                //root.appendChild(template.cloneNode(true));
                this.innerHTML = html;
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
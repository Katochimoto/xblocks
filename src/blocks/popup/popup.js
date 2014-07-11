/* global xblocks */
/* jshint strict: false */

/*! borschik:include:popup.jsx.js */

xblocks.create('xb-popup', [
    xblocks.mixin.eFocus,
    xblocks.mixin.eHidden,

    {
        prototype: Object.create(HTMLElement.prototype),

        accessors: {
            options: {
                get: function() {
                    return this._options || (this._options = {
                        'enabled': true,
                        'element': null,
                        'target': document.body,
                        'attachment': 'middle center',
                        'targetAttachment': 'middle center',
                        'targetModifier': 'visible',
                        'classPrefix': 'xb-popup',
                        'optimizations': {
                            'gpu': false
                        },
                        'classes': {
                            'element': 'xb-popup'
                        }
                    });
                }
            }
        },

        events: {
            'xb-created': function() {
                this.setOptions({ element: this });
                this._tether = new Tether(this.options);
            }
        },

        methods: {
            setOptions: function(nextOptions) {
                this._options = xblocks.utils.merge(true, this.options, nextOptions);
            }
        }
    }
]);

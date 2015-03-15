/* global xblocks, __forEach */
/* jshint strict: false */

var _blockStatic = {
    'init': function(element) {
        if (!element.xtagName) {
            element.xtagName = element.tagName.toLowerCase();
            element.xtmpl = {};
            element.xuid = xblocks.utils.seq();
            element.xprops = xblocks.utils.propTypes(element.xtagName);
            element.xinserted = false;
            return true;
        }

        return false;
    },

    'tmplCompile': function(tmplElement) {
        this.xtmpl[ tmplElement.getAttribute('ref') ] = tmplElement.innerHTML;
    },

    'create': function(element) {
        if (element.hasChildNodes()) {
            __forEach.call(
                element.querySelectorAll(xblocks.utils.SELECTOR_TMPL),
                _blockStatic.tmplCompile,
                element
            );
        }

        element.xblock = xblocks.element.create(element);
    },

    'createLazy': function(elements) {
        elements.forEach(_blockStatic.create);
    }
};

var _blockCommon = {
    'lifecycle': {
        'created': function() {
            xblocks.utils.log.time(this, 'xb_init');
            xblocks.utils.log.time(this, 'dom_inserted');

            _blockStatic.init(this);
        },

        'inserted': function() {
            if (this.xinserted) {
                return;
            }

            _blockStatic.init(this);

            this.xinserted = true;

            var isScriptContent = Boolean(this.querySelector('script'));

            // asynchronous read content
            // <xb-test><script>...</script><div>not found</div></xb-test>
            if (isScriptContent) {
                xblocks.utils.lazy(_blockStatic.createLazy, this);

            } else {
                _blockStatic.create(this);
            }

            xblocks.utils.log.time(this, 'dom_inserted');
        },

        'removed': function() {
            this.xinserted = false;

            // replace initial content after destroy react component
            // fix:
            // element.parentNode.removeChild(element);
            // document.body.appendChild(element);
            if (this.xblock) {
                var content = this.content;
                this.xblock.destroy();
                this.xblock = undefined;
                this.content = content;
            }
        },

        'attributeChanged': function(attrName, oldValue, newValue) {
            // removeAttribute('xb-static')
            if (attrName === xblocks.dom.attrs.XB_ATTRS.STATIC &&
                newValue === null &&
                this.xblock &&
                !this.mounted) {

                this.xblock.repaint();
            }
        }
    },

    'accessors': {
        // check mounted react
        'mounted': {
            'get': function() {
                return Boolean(this.xblock && this.xblock.isMounted());
            }
        },

        'content': {
            'get': function() {
                if (this.mounted) {
                    return this.xblock.getMountedContent();
                }

                return xblocks.dom.contentNode(this).innerHTML;
            },

            'set': function(content) {
                if (this.mounted) {
                    this.xblock.setMountedContent(content);

                } else {
                    xblocks.dom.contentNode(this).innerHTML = content;
                    this.upgrade();
                }
            }
        },

        // getting object attributes
        'attrs': {
            'get': function() {
                return xblocks.dom.attrs.toObject(this);
            }
        },

        'state': {
            'get': function() {
                var prop;
                var props = xblocks.dom.attrs.toObject(this);
                var xprops = this.xprops;
                var eprops = xblocks.tag.tags[ this.xtagName ].accessors;
                var common = _blockCommon.accessors;

                for (prop in eprops) {
                    if (xprops.hasOwnProperty(prop) &&
                        eprops.hasOwnProperty(prop) &&
                        !common.hasOwnProperty(prop)) {

                        props[ prop ] = this[ prop ];
                    }
                }

                xblocks.dom.attrs.typeConversion(props, xprops);
                return props;
            }
        },

        'outerHTML': xblocks.dom.outerHTML
    },

    'methods': {
        'upgrade': function() {
            xblocks.dom.upgradeAll(this);
        },

        'cloneNode': function(deep) {
            // not to clone the contents
            var node = xblocks.dom.cloneNode(this, false);
            xblocks.dom.upgrade(node);

            node.xtmpl = this.xtmpl;
            node.xinserted = false;

            if (deep) {
                node.content = this.content;
            }

            //???
            //if ('checked' in this) clone.checked = this.checked;

            return node;
        }
    }
};

/**
 * Creating a new tag
 *
 * @see http://x-tags.org/docs
 * @param {string} blockName the name of the new node
 * @param {?object|array} options settings tag creation
 * @returns {HTMLElement}
 */
xblocks.create = function(blockName, options) {
    options = Array.isArray(options) ? options : [ options ];
    options.unshift(true, {});
    options.push(_blockCommon);

    // error when merging prototype in FireFox <=19
    var proto;
    var o;
    var i = 2;
    var l = options.length;

    for (; i < l; i++) {
        o = options[ i ];

        if (xblocks.utils.isPlainObject(o)) {
            if (!proto && o.prototype) {
                proto = o.prototype;
            }

            delete o.prototype;
        }
    }

    options = xblocks.utils.merge.apply({}, options);

    if (proto) {
        options.prototype = proto;
    }

    return xblocks.tag.register(blockName, options);
};

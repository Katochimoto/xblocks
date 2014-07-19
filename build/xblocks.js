(function(global, undefined) {
    'use strict';

    var React = global.React;

    /**
     * HTML custom elements
     * @namespace xblocks
     * @version 0.2.4
     */
    var xblocks = global.xblocks;


    xblocks.utils.REG_PROPS_PREFIX_LINK = /^xb-link-/;
    xblocks.utils.REG_PROPS_PREFIX_ICO = /^xb-ico-/;

    xblocks.utils.exportPropTypes = function(tagName) {
        var props = xblocks.utils.propTypes(tagName);
        var exportProps = {};
        var prefix = tagName + '-';

        for (var p in props) {
            if (props.hasOwnProperty(p) && p[0] !== '_') {
                exportProps[prefix + p] = props[p];
            }
        }

        return {
            'propTypes': exportProps
        };
    };

    xblocks.utils.filterPropsPrefixLink = function(name) {
        return xblocks.utils.REG_PROPS_PREFIX_LINK.test(name);
    };

    xblocks.utils.mapPropsPrefixLink = function(name, descr) {
        return {
            'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_LINK, ''),
            'descr': descr
        };
    };

    xblocks.utils.filterPropsPrefixIco = function(name) {
        return xblocks.utils.REG_PROPS_PREFIX_ICO.test(name);
    };

    xblocks.utils.mapPropsPrefixIco = function(name, descr) {
        return {
            'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_ICO, ''),
            'descr': descr
        };
    };

    xblocks.utils.compact = function(data) {
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                if (!data[prop]) {
                    delete data[prop];
                }
            }
        }

        return data;
    };

    xblocks.utils.toAttrsName = function(name) {
        switch (name) {
            case 'class':
                return 'className';
            case 'tabindex':
                return 'tabIndex';
            case 'autofocus':
                return 'autoFocus';
            case 'checked':
                return 'defaultChecked';
            case 'readonly':
                return 'readOnly';
            case 'for':
                return 'htmlFor';
            default:
                return name;
        }
    };

    xblocks.utils.normalizeAttrsName = function(data) {
        var attrs = {};
        Object.keys(data).forEach(function(key) {
            attrs[xblocks.utils.toAttrsName(key)] = data[key];
        });
        return attrs;
    };

    /**
     * @memberOf xblocks
     * @namespace xblocks.mixin
     */
    xblocks.mixin = {};

    /* mixin/eDisabled.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * Disabled element interface
 *
 * <xb-button disabled>button</xb-button>
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eDisabled,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-button');
 * // read
 * console.log(e.disabled)
 * // false
 *
 * // write
 * e.disabled = true;
 * // true
 *
 * // jquery write
 * $(e).prop('disabled', false)
 * // false
 *
 * @memberOf xblocks.mixin
 * @name eDisabled
 * @type {{accessors: {disabled: {get: get, set: set}}}}
 */
xblocks.mixin.eDisabled = {
    accessors: {
        disabled: {
            get: function() {
                return xblocks.dom.attrs.valueConversion(
                    'disabled',
                    this.getAttribute('disabled'),
                    React.PropTypes.bool
                );
            },

            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    }
};

/* mixin/eDisabled.js end */

    /* mixin/eChecked.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * Checked element interface
 *
 * <xb-checkbox name="a" checked>checkbox</xb-checkbox>
 * <xb-radio name="b" checked>radio 1</xb-radio> <xb-radio name="b">radio 2</xb-radio>
 * <xb-button name="c" type="checkbox" checked>button checkbox</xb-button>
 * <xb-button name="d" type="radio" checked>button radio 1</xb-button> <xb-button name="d" type="radio">button radio 2</xb-button>
 *
 * @example
 * xblocks.create('xb-checkbox', [
 *     xblocks.mixin.eChecked,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-checkbox');
 * // read
 * console.log(e.checked)
 * // false
 *
 * // write
 * e.checked = true;
 * // true
 *
 * // jquery write
 * $(e).prop('checked', false)
 * // false
 *
 * @memberOf xblocks.mixin
 * @name eChecked
 * @type {{accessors: {checked: {get: get, set: set}}}}
 */
xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            /**
             * Getter checked value
             * @returns {boolean|undefined}
             */
            get: function() {
                if (this.xblock._isMountedComponent()) {
                    return this.xblock._component.isChecked();

                } else {
                    var controlNode = this.getElementsByClassName('_xb-check_controller');
                    if (controlNode.length) {
                        return controlNode[0].checked;
                    }
                }
            },

            /**
             * Setter checked value
             * @param {boolean} isChecked
             */
            set: function(isChecked) {
                if (this.xblock._isMountedComponent()) {
                    this.xblock._component.setChecked(isChecked);

                } else {
                    var controlNode = this.getElementsByClassName('_xb-check_controller');
                    if (controlNode.length) {
                        controlNode[0].checked = Boolean(isChecked);
                    }
                }
            }
        }
    }
};

/* mixin/eChecked.js end */

    /* mixin/eInputValueState.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueState = {
    accessors: {
        value: {
            get: function() {
                if (this.xblock._isMountedComponent()) {
                    return this.xblock._component.state.value;

                } else {
                    var controlNode = this.querySelector('input,textarea');
                    return (controlNode ? controlNode.value : '');
                }
            },

            set: function(value) {
                if (this.xblock._isMountedComponent()) {
                    this.xblock._component.setState({
                        'value': String(value)
                    });

                } else {
                    var controlNode = this.querySelector('input,textarea');
                    if (controlNode) {
                        controlNode.value = String(value);
                    }
                }
            }
        }
    }
};

/* mixin/eInputValueState.js end */

    /* mixin/eInputValueProps.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueProps = {
    accessors: {
        value: {
            get: function() {
                if (this.xblock._isMountedComponent()) {
                    return this.xblock._component.props.value;

                } else {
                    var controlNode = this.querySelector('input,textarea');
                    return (controlNode ? controlNode.value : '');
                }
            },

            set: function(value) {
                if (this.xblock._isMountedComponent()) {
                    this.xblock._component.setProps({
                        'value': String(value)
                    });

                } else {
                    var controlNode = this.querySelector('input,textarea');
                    if (controlNode) {
                        controlNode.value = String(value);
                    }
                }
            }
        }
    }
};

/* mixin/eInputValueProps.js end */

    /* mixin/eFocus.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * Focus element interface
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eFocus,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-button');
 * // set focus
 * e.focus();
 *
 * // set blur
 * e.blur();
 *
 * @memberOf xblocks.mixin
 * @name eFocus
 * @type {{methods: {focus: focus, blur: blur}}}
 */
xblocks.mixin.eFocus = {
    methods: {
        focus: function() {
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
};

/* mixin/eFocus.js end */


    /* mixin/vChecked.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.mixin.vChecked = {

    /**
     * @returns {boolean}
     */
    isChecked: function() {
        if (this.refs.checkControl) {
            return this.refs.checkControl.getDOMNode().checked;
        }
    },

    /**
     * @param {boolean} isChecked
     */
    setChecked: function(isChecked) {
        if (this.refs.checkControl) {
            this.refs.checkControl.getDOMNode().checked = Boolean(isChecked);
        }
    }
};

/* mixin/vChecked.js end */

    /* mixin/vCommonAttrs.js begin */
/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.vCommonAttrs = {
    'propTypes': {
        'accesskey': React.PropTypes.string,
        'contextmenu': React.PropTypes.string,
        'dir': React.PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'hidden': React.PropTypes.bool,
        'spellcheck': React.PropTypes.bool,
        'tabindex': React.PropTypes.string,
        'title': React.PropTypes.string
    }
};

/* mixin/vCommonAttrs.js end */


    /* blocks/ico/ico.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/ico/ico.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

xblocks.view.register('xb-ico', {
    displayName: 'xb-ico',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'title': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf([ 's', 'm' ]),
        'type': React.PropTypes.oneOf([
            'attention',
            'close',
            'check',
            'download',
            'download-white',
            'dropdown',
            'eye',
            'link',
            'link-white',
            'mail',
            'notification',
            'odnoklassniki',
            'pause',
            'people',
            'play',
            'print',
            'remove',
            'services',
            'settings',
            'three-dots',
            'trash',
            'trash-white',
            'twitter',
            'help',
            'upload',
            'upload-white',
            'vk'
        ]),
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 's',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-ico': true,
            '_active': this.props.active,
            '_disabled': this.props.disabled
        };

        if (this.props.type) {
            classes['_type-' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        var content = this.props.value || this.props.children;

        return (
            React.DOM.span( {className:classes,
                title:this.props.title,
                tabIndex:tabIndex,
                'data-xb-content':this.props._uid}, content)
        );
    }
});

/* blocks/ico/ico.jsx.js end */


xblocks.create('xb-ico', [
    xblocks.mixin.eDisabled,

    {
        accessors: {
            active: {
                get: function() {
                    return xblocks.dom.attrs.valueConversion(
                        'active',
                        this.getAttribute('active'),
                        React.PropTypes.bool
                    );
                },

                set: function(isActive) {
                    if (isActive) {
                        this.setAttribute('active', '');
                    } else {
                        this.removeAttribute('active');
                    }
                }
            }
        }
    }
]);

/* blocks/ico/ico.js end */

    /* blocks/link/link.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/link/link.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

xblocks.view.register('xb-link', {
    displayName: 'xb-link',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'href': React.PropTypes.string,
        'name': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'target': React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
        'theme': React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'input' ])
    },

    getDefaultProps: function() {
        return {
            'theme': 'normal',
            'tabindex': '1'
        };
    },

    render: function() {
        var classes = {
            'xb-link': true,
            '_disabled': this.props.disabled
        };

        if (this.props.theme) {
            classes['_theme-' + this.props.theme] = true;
        }

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        classes = React.addons.classSet(classes);

        var content = this.props.value || this.props.children;

        return (
            React.DOM.a( {id:this.props.id,
                name:this.props.name,
                href:this.props.href,
                target:this.props.target,
                tabIndex:tabIndex,
                className:classes,
                'data-xb-content':this.props._uid}, content)
        );
    }
});

/* blocks/link/link.jsx.js end */


xblocks.create('xb-link', [
    xblocks.mixin.eDisabled
]);

/* blocks/link/link.js end */

    /* blocks/button/button.js begin */
/* global xblocks, React */
/* jshint strict: false */

/* blocks/button/button.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/button/button-content.jsx.js begin */
/** @jsx React.DOM */
/* jshint strict: false */

var XBButtonContent = xblocks.view.create({
    displayName: 'XBButtonContent',

    propTypes: {
        'ico': React.PropTypes.object
    },

    getDefaultProps: function() {
        return {
            'ico': {}
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    render: function() {
        var icoProps = xblocks.utils.merge({}, this.props.ico);
        var children = [
            React.DOM.span( {className:"_content-content",
                key:"content",
                'data-xb-content':this.props._uid}, this.props.children)
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';
            var icoView = xblocks.view.get('xb-ico')(icoProps);

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(icoView);

            } else if (icoProps.float === 'right') {
                children.push(icoView);
            }
        }

        return (
            React.DOM.span( {className:"_content"}, children)
        );
    }
});

/* blocks/button/button-content.jsx.js end */


var XBButton = xblocks.view.register('xb-button', [
    xblocks.mixin.vChecked,
    xblocks.utils.exportPropTypes('xb-ico'),

    {
        displayName: 'xb-button',

        propTypes: {
            'id': React.PropTypes.string,
            'class': React.PropTypes.string,
            'children': React.PropTypes.renderable,
            'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'theme': React.PropTypes.oneOf([
                'normal',
                'action',
                'dark',
                'flying',
                'pseudo-inverted',
                'pseudo',
                'promo'
            ]),
            'type': React.PropTypes.oneOf([
                'label',
                'inline',
                'link',
                'file',

                'button',
                'submit',

                'checkbox',
                'radio'
            ]),
            'target': React.PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'value': React.PropTypes.string,
            'href': React.PropTypes.string,
            'name': React.PropTypes.string,
            'title': React.PropTypes.string,
            'form': React.PropTypes.string,
            'for': React.PropTypes.string,
            'tabindex': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'disabled': React.PropTypes.bool,

            'checked': React.PropTypes.bool,
            'readonly': React.PropTypes.bool,   // native not work
            'required': React.PropTypes.bool
        },

        statics: {
            filterIcoProps: function(props) {
                return xblocks.utils.mapObject(
                    xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixIco),
                    xblocks.utils.mapPropsPrefixIco
                );
            }
        },

        getDefaultProps: function() {
            return {
                'size': 'm',
                'theme': 'normal',
                'type': 'button',
                'checked': false,
                'tabindex': '1',
                'children': String.fromCharCode(160)
            };
        },

        render: function() {
            var classes = {
                'xb-button': true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes['_theme-' + this.props.theme] = true;
            }

            if (this.props.size) {
                classes['_size-' + this.props.size] = true;
            }

            classes = React.addons.classSet(classes);

            var icoProps = XBButton.filterIcoProps(this.props);
            var tabIndex = this.props.tabindex;
            var type = this.props.type;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            if (type === 'link') {
                return (
                    React.DOM.a( {className:classes,
                        href:this.props.href,
                        name:this.props.name,
                        target:this.props.target,
                        title:this.props.title,
                        tabIndex:tabIndex}, 

                        XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                    )
                );

            } else if (type === 'file') {
                return (
                    React.DOM.label( {className:classes}, 
                        React.DOM.span( {className:"_xb-file-intruder"}, 
                            React.DOM.span( {className:"_xb-file-intruder-inner"}, 
                                React.DOM.input( {className:"_xb-file-intruder-input",
                                    type:"file",
                                    name:this.props.name,
                                    title:this.props.title,
                                    disabled:this.props.disabled,
                                    multiple:this.props.multiple,
                                    autoFocus:this.props.autofocus,
                                    tabIndex:tabIndex}),

                                React.DOM.span( {className:"_xb-file-intruder-focus"} )
                            )
                        ),
                        XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                    )
                );

            } else if (type === 'label' || type === 'checkbox' || type === 'radio') {
                var children = [];

                if (type === 'checkbox' || type === 'radio') {
                    var value = this.props.value || 'on';

                    children.push(
                        React.DOM.input( {key:"checkControl",
                            ref:"checkControl",
                            type:type,
                            className:"_xb-check_controller",
                            name:this.props.name,
                            value:this.props.value,
                            disabled:this.props.disabled,
                            defaultChecked:this.props.checked,
                            autoFocus:this.props.autofocus,
                            readOnly:this.props.readonly,
                            required:this.props.required,
                            tabIndex:tabIndex})
                    );

                    children.push(XBButton(xblocks.utils.merge({}, this.props, {
                        'key': 'content',
                        'type': 'inline',
                        'tabindex': null
                    })));

                    classes = React.addons.classSet({
                        'xb-button': true,
                        '_theme-check': true,
                        '_disabled': this.props.disabled
                    });

                } else {
                    children.push(
                        React.DOM.span( {key:"file-intruder", className:"_xb-file-intruder"}, 
                            React.DOM.span( {className:"_xb-file-intruder-inner"}, 
                                React.DOM.input( {className:"_xb-file-intruder-input",
                                    type:"button",
                                    disabled:this.props.disabled,
                                    autoFocus:this.props.autofocus,
                                    tabIndex:tabIndex}),

                                React.DOM.span( {className:"_xb-file-intruder-focus"} )
                            )
                        )
                    );

                    children.push(
                        XBButtonContent( {key:"content",
                            _uid:this.props._uid,
                            ico:icoProps}, this.props.children)
                    );
                }

                return (
                    React.DOM.label( {className:classes,
                        form:this.props.form,
                        htmlFor:this.props['for'],
                        title:this.props.title}, children)
                );

            } else if (type === 'inline') {
                return (
                    React.DOM.span( {className:classes, tabIndex:tabIndex}, 
                        XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                    )
                );

            } else {
                return (
                    React.DOM.button( {className:classes,
                        type:type,
                        form:this.props.form,
                        title:this.props.title,
                        name:this.props.name,
                        value:this.props.value,
                        tabIndex:tabIndex,
                        disabled:this.props.disabled,
                        autoFocus:this.props.autofocus}, 

                        XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                    )
                );
            }
        }
    }
]);

/* blocks/button/button.jsx.js end */


xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLButtonElement.prototype)
    }
]);

/* blocks/button/button.js end */

    /* blocks/input/input.js begin */
/* global xblocks, React */
/* jshint strict: false */

/* blocks/input/input.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, XBInputController */
/* jshint strict: false */

/* blocks/input/input-controller.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    propTypes: {
        'className': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readOnly': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'autoFocus': React.PropTypes.bool,
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabIndex': React.PropTypes.string,
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),

        'onChange': React.PropTypes.func,
        'onHintToggle': React.PropTypes.func,
        'isPlaceholderHint': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'value': ''
        };
    },

    componentDidUpdate: function(prevProps) {
        this._recalculateSize();
        this._dispatchEventToggleHint(prevProps.value, this.props.value);
    },

    componentDidMount: function() {
        this._recalculateSize();
    },

    _dispatchEventToggleHint: function(prevValue, nextValue) {
        if (this.props.isPlaceholderHint) {
            var hasPrevValue = Boolean(prevValue);
            var hasNestValue = Boolean(nextValue);

            /* jshint -W016 */
            if (hasPrevValue ^ hasNestValue) {
                this.props.onHintToggle(hasPrevValue && !hasNestValue);
            }
        }
    },

    _recalculateSize: function() {
        if (this.props.autosize) {
            var node = this.getDOMNode();

            if (this.props.multiline) {
                node.style.height = '0px';
                node.style.height = node.scrollHeight + 'px';

            } else {
                node.style.width = '20px';
                node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
            }
        }
    },

    render: function() {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        if (this.props.multiline) {
            return (
                React.DOM.textarea( {value:this.props.value,
                    className:this.props.className,
                    name:this.props.name,
                    disabled:this.props.disabled,
                    required:this.props.required,
                    readOnly:this.props.readOnly,
                    autoFocus:this.props.autoFocus,
                    rows:this.props.rows,
                    cols:this.props.cols,
                    placeholder:this.props.placeholder,
                    tabIndex:tabIndex,
                    autocomplete:this.props.autocomplete,
                    onChange:this.props.onChange})
            );

        } else {
            return (
                React.DOM.input( {value:this.props.value,
                    type:"text",
                    className:this.props.className,
                    name:this.props.name,
                    disabled:this.props.disabled,
                    required:this.props.required,
                    readOnly:this.props.readOnly,
                    autoFocus:this.props.autoFocus,
                    placeholder:this.props.placeholder,
                    tabIndex:tabIndex,
                    autocomplete:this.props.autocomplete,
                    onChange:this.props.onChange})
            );
        }
    }
});

/* blocks/input/input-controller.jsx.js end */


// TODO "list" attribute
// TODO "pattern" attribute
// TODO "title" attribute

var XBInput = xblocks.view.register('xb-input', [
    xblocks.utils.exportPropTypes('xb-link'),

    {
        displayName: 'xb-input',

        propTypes: {
            'id': React.PropTypes.string,
            'class': React.PropTypes.string,
            'name': React.PropTypes.string,
            'disabled': React.PropTypes.bool,
            'autosize': React.PropTypes.bool,
            'multiline': React.PropTypes.bool,
            'required': React.PropTypes.bool,
            'readonly': React.PropTypes.bool,
            'reset': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'ghost': React.PropTypes.bool,
            'type': React.PropTypes.oneOf([
                'text', 'number', 'date', 'datetime', 'email', 'month',
                'range', 'search', 'tel', 'time', 'url', 'week', 'color'
            ]),
            'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'rows': React.PropTypes.string,
            'cols': React.PropTypes.string,
            'placeholder': React.PropTypes.string,
            'value': React.PropTypes.string,
            'prefix': React.PropTypes.string,
            'postfix': React.PropTypes.string,
            'tabindex': React.PropTypes.string,
            'xb-link': React.PropTypes.string
        },

        statics: {
            filterLinkProps: function(props) {
                return xblocks.utils.mapObject(
                    xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixLink),
                    xblocks.utils.mapPropsPrefixLink
                );
            }
        },

        shouldComponentUpdate: function(nextProps, nextState) {
            return (
                !xblocks.utils.equals(nextProps, this.props) ||
                !xblocks.utils.equals(nextState, this.state)
            );
        },

        getDefaultProps: function() {
            return {
                'value': '',
                'type': 'text',
                'size': 'm',
                'rows': '4'
            };
        },

        getInitialState: function() {
            return {
                'value': this.props.value
            };
        },

        componentDidMount: function() {
            // check show or hide placeholder after mount element
            this.refs.controller._dispatchEventToggleHint('', this.props.value);
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        _onChange: function(event) {
            this.setState({
                'value': event.target.value
            });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        _onHintToggle: function(toggle) {
            this.refs.placeholder.getDOMNode().style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        _isComplex: function() {
            return (
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props['xb-link']
            );
        },

        /**
         * Click reset button
         * @private
         */
        _onClickReset: function() {
            this.setState({
                'value': ''
            });
        },

        render: function() {
            var isComplex = this._isComplex();
            var classes = {
                'xb-input': true,
                '_disabled': Boolean(this.props.disabled),
                '_autosize': Boolean(this.props.autosize),
                '_ghost': Boolean(this.props.ghost)
            };

            if (this.props.size) {
                classes['_size-' + this.props.size] = true;
            }

            if (isComplex) {
                classes._complex = true;
            } else {
                classes._simple = true;
            }

            classes = React.addons.classSet(classes);

            var isPlaceholderHint = false;

            if (isComplex) {
                var children = [];

                if (this.props.placeholder) {
                    isPlaceholderHint = true;

                    children.push(
                        React.DOM.span( {ref:"placeholder", key:"placeholder", className:"_hint"}, 
                            React.DOM.span( {className:"_hint-inner"}, this.props.placeholder)
                        )
                    );
                }

                if (this.props['xb-link']) {
                    var linkProps = XBInput.filterLinkProps(this.props);
                    linkProps['theme'] = 'input';
                    linkProps['key'] = 'label';

                    children.push(xblocks.view.get('xb-link')(linkProps, this.props['xb-link']));
                }

                if (this.props.prefix) {
                    children.push(
                        React.DOM.span( {key:"prefix", className:"_left"}, this.props.prefix)
                    );
                }

                if (this.props.postfix) {
                    children.push(
                        React.DOM.span( {key:"postfix", className:"_right"}, this.props.postfix)
                    );
                }

                if (this.props.reset) {
                    children.push(
                        React.DOM.span( {key:"reset", className:"_reset", onClick:this._onClickReset})
                    );
                }

                children.push(
                    React.DOM.span( {key:"content", className:"_content"}, 
                        XBInputController( {key:"controller",
                            ref:"controller",
                            className:"_controller",
                            value:this.state.value,
                            name:this.props.name,
                            disabled:this.props.disabled,
                            required:this.props.required,
                            readOnly:this.props.readonly,
                            multiline:this.props.multiline,
                            autoFocus:this.props.autofocus,
                            rows:this.props.rows,
                            cols:this.props.cols,
                            tabIndex:this.props.tabindex,
                            autocomplete:this.props.autocomplete,
                            autosize:this.props.autosize,
                            onChange:this._onChange,
                            onHintToggle:this._onHintToggle,
                            isPlaceholderHint:isPlaceholderHint}),
                        React.DOM.span( {key:"view", className:"_view"})
                    )
                );

                return (
                    React.DOM.label( {className:classes}, children)
                );

            } else {

               return (
                    XBInputController( {key:"controller",
                        ref:"controller",
                        className:classes,
                        value:this.state.value,
                        name:this.props.name,
                        disabled:this.props.disabled,
                        required:this.props.required,
                        readOnly:this.props.readonly,
                        multiline:this.props.multiline,
                        autoFocus:this.props.autofocus,
                        rows:this.props.rows,
                        cols:this.props.cols,
                        placeholder:this.props.placeholder,
                        tabIndex:this.props.tabindex,
                        autocomplete:this.props.autocomplete,
                        autosize:this.props.autosize,
                        onChange:this._onChange,
                        onHintToggle:this._onHintToggle,
                        isPlaceholderHint:isPlaceholderHint})
                );
            }
        }
    }
]);

/* blocks/input/input.jsx.js end */


xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

/* blocks/input/input.js end */

    /* blocks/checkbox/checkbox.js begin */
/* global xblocks, React */
/* jshint strict: false */

/* blocks/checkbox/checkbox.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBCheckbox = xblocks.view.register('xb-checkbox', [ xblocks.mixin.vChecked, {
    displayName: 'xb-checkbox',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf([ 's', 'm' ]),
        'value': React.PropTypes.string,
        'name': React.PropTypes.string,
        'title': React.PropTypes.string,
        'form': React.PropTypes.string,
        'for': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autofocus': React.PropTypes.bool,
        'checked': React.PropTypes.bool,
        'disabled': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,   // native not work
        'required': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': '',
            'value': 'on',
            'checked': false,
            'tabindex': '1'
        };
    },

    render: function() {
        var classes = {
            'xb-checkbox': true,
            '_disabled': this.props.disabled
        };

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        return (
            React.DOM.label( {className:classes,
                title:this.props.title,
                form:this.props.form,
                htmlFor:this.props['for']}, 

                React.DOM.input( {type:"checkbox",
                    ref:"checkControl",
                    className:"_xb-check_controller",
                    name:this.props.name,
                    value:this.props.value,
                    disabled:this.props.disabled,
                    defaultChecked:this.props.checked,
                    autoFocus:this.props.autofocus,
                    readOnly:this.props.readonly,
                    required:this.props.required,
                    tabIndex:tabIndex}),

                React.DOM.span( {className:"_xb-checkbox_flag _xb-check_flag"}, 
                    React.DOM.span( {className:"_xb-checkbox_flag-icon"})
                ),
                React.DOM.span( {'data-xb-content':this.props._uid}, this.props.children)
            )
        );
    }
} ]);

/* blocks/checkbox/checkbox.jsx.js end */


xblocks.create('xb-checkbox', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype)
    }
]);

/* blocks/checkbox/checkbox.js end */

    /* blocks/radio/radio.js begin */
/* global xblocks, React */
/* jshint strict: false */

/* blocks/radio/radio.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBradio = xblocks.view.register('xb-radio', [ xblocks.mixin.vChecked, {
    displayName: 'xb-radio',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf([ 's', 'm' ]),
        'value': React.PropTypes.string,
        'name': React.PropTypes.string,
        'title': React.PropTypes.string,
        'form': React.PropTypes.string,
        'for': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autofocus': React.PropTypes.bool,
        'checked': React.PropTypes.bool,
        'disabled': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,   // native not work
        'required': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': '',
            'value': 'on',
            'checked': false,
            'tabindex': '1'
        };
    },

    render: function() {
        var classes = {
            'xb-radio': true,
            '_disabled': this.props.disabled
        };

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        return (
            React.DOM.label( {className:classes,
                title:this.props.title,
                form:this.props.form,
                htmlFor:this.props['for']}, 

                React.DOM.input( {type:"radio",
                    ref:"checkControl",
                    className:"_xb-check_controller",
                    name:this.props.name,
                    value:this.props.value,
                    disabled:this.props.disabled,
                    defaultChecked:this.props.checked,
                    autoFocus:this.props.autofocus,
                    readOnly:this.props.readonly,
                    required:this.props.required,
                    tabIndex:tabIndex}),

                React.DOM.span( {className:"_xb-radio_flag _xb-check_flag"}, 
                    React.DOM.span( {className:"_xb-radio_flag-icon"})
                ),
                React.DOM.span( {'data-xb-content':this.props._uid}, this.props.children)
            )
        );
    }
} ]);

/* blocks/radio/radio.jsx.js end */


xblocks.create('xb-radio', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype)
    }
]);

/* blocks/radio/radio.js end */

    /* blocks/popup/popup.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/popup/popup.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBPopup = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-popup',

        propTypes: {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        mixins: [ React.addons.PureRenderMixin ],

        getDefaultProps: function() {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        render: function() {
            var children = [
                React.DOM.div( {className:"_content",
                    key:"content",
                    'data-xb-content':this.props._uid,
                    dangerouslySetInnerHTML:{__html: this.props.children}} )
            ];

            children.unshift(this.template('xb-popup-title', {
                'key': 'title',
                'className': '_title'
            }));

            if (this.props.close) {
                children.unshift(
                    React.DOM.a( {key:"close", className:"_close"})
                );
            }

            children.push(this.template('xb-popup-buttons', {
                'key': 'buttons',
                'className': '_buttons'
            }));

            var classes = {
                '_popup': true
            };

            if (this.props.theme) {
                classes['_theme-' + this.props.theme] = true;
            }

            classes = React.addons.classSet(classes);

            return (
                React.DOM.div( {className:classes}, children)
            );
        }
    }
]);

/* blocks/popup/popup.jsx.js end */


xblocks.create('xb-popup', [
    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'click:delegate(._close)': function() {
                this.parentNode.parentNode.close();
            }
        },

        accessors: {
            options: {
                get: function() {
                    if (this._options) {
                        return this._options;
                    }

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': document.body,
                        'attachment': 'middle center',
                        'targetAttachment': 'middle center',
                        'targetModifier': 'visible',
                        'classPrefix': 'xb-popup',
                        'optimizations': {
                            'gpu': false
                        },
                        'classes': {
                            'element': 'xb-popup',
                            'enabled': '_enabled'
                        }
                    };

                    return this._options;
                }
            },

            tether: {
                get: function() {
                    if (this._tether) {
                        return this._tether;
                    }

                    this._tether = new Tether(this.options);
                    return this._tether;
                }
            }
        },

        methods: {
            setOptions: function(nextOptions) {
                var tether = this.tether;
                this._options = xblocks.utils.merge(true, this.options, nextOptions);
                tether.setOptions(this._options, false);
                if (tether.enabled) {
                    tether.position();
                }
            },

            open: function(options) {
                var tether = this.tether;

                if (tether.enabled) {
                    return false;
                }

                if (typeof(options) === 'object') {
                    this.setOptions(options);
                }

                tether.enable(true);
                return true;
            },

            close: function() {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

                tether.disable();
                tether.clearCache();
                return true;
            },

            position: function() {
                this.tether.position();
                return true;
            }
        }
    }
]);

/* blocks/popup/popup.js end */

    /* blocks/select/select.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/select/select.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBSelect = xblocks.view.register('xb-select', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-select',

        propTypes: {
            'id': React.PropTypes.string,
            'children': React.PropTypes.renderable,
            'disabled': React.PropTypes.bool,

            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocorrect':  React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocapitalize':  React.PropTypes.oneOf([ 'on', 'off' ]),

            'size': React.PropTypes.string,
            'autofocus': React.PropTypes.bool,
            'form': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'name': React.PropTypes.string,
            'required': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'tabindex': '1'
            };
        },

        componentDidMount: function() {
            new Tether({
                element: this.refs.dropdown.getDOMNode(),
                target: this.refs.control.getDOMNode(),
                attachment: 'top left',
                targetAttachment: 'bottom left',
                classPrefix: 'xb-dialog',
                constraints: [
                    {
                        to: 'window',
                        attachment: 'together none'
                    }
                ],
                optimizations: {
                    gpu: false
                },
                classes: {
                    element: 'xb-dialog'
                }
            });
        },

        render: function() {
            var classes = {
                'xb-select': true,
                '_disabled': this.props.disabled
            };

            classes = React.addons.classSet(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                React.DOM.div( {className:classes}, 
                    React.DOM.input( {className:"_controller"} ),
                    XBButton( {ref:"control",
                        type:"inline"}),
                    React.DOM.div( {ref:"dropdown", className:"_xb-select-dropdown"}, 
                        React.DOM.ul( {className:"_group"}, 
                            React.DOM.li( {className:"_item"}, React.DOM.a( {className:"_item-control"}, "1")),
                            React.DOM.li( {className:"_item"}, React.DOM.a( {className:"_item-control"}, "2")),
                            React.DOM.li( {className:"_item"}, React.DOM.a( {className:"_item-control"}, "3"))
                        )
                    )
                )
            );
        }
    }
]);

/* blocks/select/select.jsx.js end */


xblocks.create('xb-select', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLSelectElement.prototype)
    }
]);

/* blocks/select/select.js end */


}(function() {
    return this || (1, eval)('this');
}()));

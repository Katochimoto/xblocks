(function(global) {
    'use strict';

    var React = global.React;
    var xblocks = global.xblocks;

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
        'value': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
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
        ]).isRequired,
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

        var content = this.props.value || this.props.children;

        return (
            React.DOM.span( {className:classes, 'data-xb-content':this.props._uid}, content)
        );
    }
});

/* blocks/ico/ico.jsx.js end */


xblocks.create('xb-ico');

/* blocks/ico/ico.js end */

    /* blocks/button/button.js begin */
/* global xblocks, global, React */
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

    statics: {
        mapIcoProps: function(props) {
            var regIcoProp = /^xb-ico-/;
            return xblocks.utils.mapObject(props, function(name, descr) {
                return {
                    'name': name.replace(regIcoProp, ''),
                    'descr': descr
                };
            });
        }
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
        var icoProps = XBButtonContent.mapIcoProps(this.props.ico);
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


var XBButton = xblocks.view.register('xb-button', {
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
        'checked': React.PropTypes.bool,

        'type': React.PropTypes.oneOf([ 'button', 'file', 'submit', 'label', 'inline', 'link' ]),
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
        'disabled': React.PropTypes.bool
    },

    statics: {
        filterIcoProps: function(props) {
            var regIcoProp = /^xb-ico-/;
            return xblocks.utils.filterObject(props, function(name) {
                return regIcoProp.test(name);
            });
        }
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'theme': 'normal',
            'type': 'button',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-button': true,
            '_disabled': this.props.disabled,
            '_checked': this.props.checked
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

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        if (this.props.type === 'link') {
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

        } else if (this.props.type === 'file') {
            return (
                React.DOM.label( {className:classes,
                    tabIndex:tabIndex}, 

                    React.DOM.span( {className:"_file-intruder"}, 
                        React.DOM.span( {className:"_file-intruder-inner"}, 
                            React.DOM.input( {className:"_file-intruder-input",
                                type:"file",
                                name:this.props.name,
                                title:this.props.title,
                                disabled:this.props.disabled ? 'disabled' : undefined,
                                multiple:this.props.multiple ? 'multiple' : undefined,
                                autoFocus:this.props.autofocus} ),

                            React.DOM.span( {className:"_file-intruder-focus"} )
                        )
                    ),
                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else if (this.props.type === 'label') {
            return (
                React.DOM.label( {className:classes,
                    form:this.props.form,
                    htmlFor:this.props['for'],
                    title:this.props.title,
                    tabIndex:tabIndex}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else if (this.props.type === 'inline') {
            return (
                React.DOM.span( {className:classes,
                    tabIndex:tabIndex}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );

        } else {
            return (
                React.DOM.button( {className:classes,
                    type:this.props.type,
                    form:this.props.form,
                    title:this.props.title,
                    name:this.props.name,
                    value:this.props.value,
                    tabIndex:tabIndex,
                    disabled:this.props.disabled ? 'disabled' : undefined,
                    autoFocus:this.props.autofocus}, 

                    XBButtonContent( {_uid:this.props._uid, ico:icoProps}, this.props.children)
                )
            );
        }
    }
});

/* blocks/button/button.jsx.js end */


xblocks.create('xb-button', {
    prototype: Object.create(HTMLButtonElement.prototype),

    accessors: {
        disabled: {
            get: function() {
                return Boolean(xblocks.dom.attrs.getRealValue('disabled', this.getAttribute('disabled')));
            },
            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    },

    methods: {
        focus: function() {
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
});

/* blocks/button/button.js end */


}(function() {
    return this || (1, eval)('this');
}()));

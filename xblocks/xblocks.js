(function() {

    /* blocks/ico/ico.js begin */
(function(xblocks) {

    /* blocks/ico/ico.jsx.js begin */
/** @jsx React.DOM */
(function(xblocks, React) {

xblocks.view.register('xb-ico', {
    displayName: 'xb-ico',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'value': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
        'type': React.PropTypes.oneOf(['remove', 'notification', 'check', 'dropdown']).isRequired,
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': ' '
        };
    },

    render: function() {
        var cx = React.addons.classSet;
        var classes = {
            'xb-ico': true,
            'xb-ico_active': this.props.active,
            'is-disabled': this.props.disabled,
            '_content': true
        };

        if (this.props.type) {
            classes['xb-ico_type_' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['xb-ico_size_' + this.props.size] = true;
        }

        classes = cx(classes);

        var content = this.props.value || this.props.children;

        return (
            React.DOM.span( {className:classes}, content)
        );
    }
});

}(xblocks, React));

/* blocks/ico/ico.jsx.js end */


    xblocks.create('xb-ico');

}(xblocks));


/* blocks/ico/ico.js end */

    /* blocks/button/button.js begin */
(function(xblocks) {
    /* blocks/button/button.jsx.js begin */
/** @jsx React.DOM */
(function(xblocks, React) {

    var XBButtonContent = React.createClass({displayName: 'XBButtonContent',
        propTypes: {
            'content': React.PropTypes.renderable,
            'ico': React.PropTypes.object
        },

        statics: {
            mapIcoProps: function(props) {
                var regIcoProp = /^xb-ico-/;
                return xblocks.mapObject(props, function(name, descr) {
                    return {
                        'name': name.replace(regIcoProp, ''),
                        'descr': descr
                    };
                });
            }
        },

        getDefaultProps: function() {
            return {
                'content': ' ',
                'ico': {}
            };
        },

        shouldComponentUpdate: function(nextProps) {
            return !xblocks.equals(nextProps, this.props);
        },

        render: function() {
            var icoProps = XBButtonContent.mapIcoProps(this.props.ico);

            var children = [
                React.DOM.span( {key:"content", className:"_content"}, this.props.content)
            ];

            if (!xblocks.isEmptyObject(icoProps) && icoProps.type) {
                icoProps.key = 'ico';
                var icoView = xblocks.view.get('xb-ico')(icoProps);

                if (!icoProps.float || icoProps.float === 'left') {
                    children.unshift(React.DOM.span( {key:"sep"}, " "));
                    children.unshift(icoView);

                } else if (icoProps.float === 'right') {
                    children.push(React.DOM.span( {key:"sep"}, " "));
                    children.push(icoView);
                }
            }

            return (
                React.DOM.span( {className:"xb-button__text"}, 
                    children
                )
            );
        }
    });

    var XBButton = xblocks.view.register('xb-button', {
        displayName: 'xb-button',

        propTypes: {
            'id': React.PropTypes.string,
            'class': React.PropTypes.string,
            'children': React.PropTypes.renderable,
            'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
            'theme': React.PropTypes.oneOf(['normal', 'action', 'dark', 'pseudo', 'promo']),
            'checked': React.PropTypes.bool,
            'flying': React.PropTypes.bool,

            'type': React.PropTypes.oneOf(['button', 'file', 'submit']),
            'target': React.PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
            'value': React.PropTypes.string,
            'href': React.PropTypes.string,
            'name': React.PropTypes.string,
            'form': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'disabled': React.PropTypes.bool
        },

        statics: {
            filterIcoProps: function(props) {
                var regIcoProp = /^xb-ico-/;
                return xblocks.filterObject(props, function(name) {
                    return regIcoProp.test(name);
                });
            }
        },

        getDefaultProps: function() {
            return {
                'size': 'm',
                'theme': 'normal',
                'type': 'button',
                'children': ' '
            };
        },

        render: function() {
            var cx = React.addons.classSet;
            var classes = {
                'xb-button': true,
                'is-disabled': this.props.disabled,
                'xb-button_flying': this.props.flying,
                'xb-button_checked': this.props.checked,
                'xb-button_type_attach': (this.props.type === 'file')
            };

            if (this.props.theme) {
                classes['xb-button_theme_' + this.props.theme] = true;
            }

            if (this.props.size) {
                classes['xb-button_size_' + this.props.size] = true;
            }

            classes = cx(classes);

            var icoProps = XBButton.filterIcoProps(this.props);

            if (this.props.href) {
                return (
                    React.DOM.a( {className:classes,
                        href:this.props.href,
                        name:this.props.name,
                        target:this.props.target,
                        autoFocus:this.props.autofocus}, 

                        XBButtonContent( {ico:icoProps, content:this.props.children} )
                    )
                );

            } else if (this.props.type === 'file') {
                return (
                    React.DOM.label( {className:classes,
                        autoFocus:this.props.autofocus}, 

                        React.DOM.span( {className:"nb-file-intruder"}, 
                            React.DOM.span( {className:"nb-file-intruder__inner"}, 
                                React.DOM.input( {className:"nb-file-intruder__input",
                                    type:"file",
                                    name:this.props.name,
                                    disabled:this.props.disabled ? 'disabled' : '',
                                    multiple:this.props.multiple ? 'multiple' : ''} ),

                                React.DOM.span( {className:"nb-file-intruder__focus"} )
                            )
                        ),
                        XBButtonContent( {ico:icoProps, content:this.props.children} )
                    )
                );

            } else {
                return (
                    React.DOM.button( {className:classes,
                        type:this.props.type,
                        form:this.props.form,
                        name:this.props.name,
                        value:this.props.value,
                        disabled:this.props.disabled ? 'disabled' : '',
                        autoFocus:this.props.autofocus}, 

                        XBButtonContent( {ico:icoProps, content:this.props.children} )
                    )
                );
            }
        }
    });

}(xblocks, React));

/* blocks/button/button.jsx.js end */


    xblocks.create('xb-button', {
        prototype: Object.create(HTMLButtonElement.prototype)
    });

}(xblocks));

/* blocks/button/button.js end */


}.call(this));

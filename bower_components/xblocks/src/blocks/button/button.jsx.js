/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

/*! borschik:include:button-content.jsx.js */

var XBButton = xblocks.view.register('xb-button', [
    xblocks.utils.exportPropTypes('xb-ico'),

    {
        displayName: 'xb-button',

        propTypes: {
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
                'tabindex': '0',
                'children': String.fromCharCode(160),
                'checked': false,
                'multiple': false,
                'autofocus': false,
                'disabled': false,
                'required': false
            };
        },

        getInitialState: function() {
            return {
                'checked': this.props.checked
            };
        },

        componentWillReceiveProps: function(nextProps) {
            this.setState({
                'checked': nextProps.checked
            });
        },

        componentWillUpdate: function(nextProps, nextState) {
            if (nextProps.type === 'radio' && nextState.checked) {
                xblocks.utils.resetLastRadioChecked(this, nextProps.name);
            }
        },

        componentWillMount: function() {
            if (this.props.type === 'radio' && this.state.checked) {
                xblocks.utils.resetLastRadioChecked(this, this.props.name);
            }
        },

        _onChange: function(event) {
            this.setState({
                'checked': event.target.checked
            });
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
                    children.push(
                        React.DOM.input( {key:"checkControl",
                            type:type,
                            className:"_xb-check_controller",
                            name:this.props.name,
                            value:this.props.value,
                            disabled:this.props.disabled,
                            defaultChecked:this.props.checked,
                            checked:this.state.checked,
                            autoFocus:this.props.autofocus,
                            readOnly:true,
                            onChange:this._onChange,
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

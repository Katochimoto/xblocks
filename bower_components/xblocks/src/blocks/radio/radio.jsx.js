/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBradio = xblocks.view.register('xb-radio', [ {
    displayName: 'xb-radio',

    propTypes: {
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
        'required': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': '',
            'value': 'on',
            'tabindex': '0',
            'checked': false,
            'disabled': false,
            'autofocus': false,
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
        if (nextState.checked) {
            xblocks.utils.resetLastRadioChecked(this, nextProps.name);
        }
    },

    componentWillMount: function() {
        if (this.state.checked) {
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
                    tabIndex:tabIndex}),

                React.DOM.span( {className:"_xb-radio_flag _xb-check_flag"}, 
                    React.DOM.span( {className:"_xb-radio_flag-icon"})
                ),
                React.DOM.span( {'data-xb-content':this.props._uid}, this.props.children)
            )
        );
    }
} ]);

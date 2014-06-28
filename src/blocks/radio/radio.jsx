/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBRadio = xblocks.view.register('xb-radio', {
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
        'tabindex': React.PropTypes.number,
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
            'value': 'on'
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
            <label className={classes} title={this.props.title}>
                <input type="radio"
                    className="_xb-radio_controller"
                    name={this.props.name}
                    value={this.props.value}
                    form={this.props.form}
                    tabIndex={tabIndex}
                    disabled={this.props.disabled}
                    defaultChecked={this.props.checked}
                    autoFocus={this.props.autofocus}
                    readOnly={this.props.readonly}
                    required={this.props.required}/>
                <span className="_xb-radio_flag">
                    <span className="_xb-radio_flag-icon"></span>
                </span>
                <span className="_xb-radio_label">{this.props.children}</span>
            </label>
        );
    }
});

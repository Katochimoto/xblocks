/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBCheckbox = xblocks.view.register('xb-checkbox', {
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
            <label className={classes}
                title={this.props.title}
                form={this.props.form}
                htmlFor={this.props['for']}
                tabIndex={tabIndex}>

                <input type="checkbox"
                    className="_xb-checkbox_controller"
                    name={this.props.name}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    defaultChecked={this.props.checked}
                    autoFocus={this.props.autofocus}
                    readOnly={this.props.readonly}
                    required={this.props.required}/>

                <span className="_xb-checkbox_flag">
                    <span className="_xb-checkbox_flag-icon"></span>
                </span>
                <span data-xb-content={this.props._uid}>{this.props.children}</span>
            </label>
        );
    }
});

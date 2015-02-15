/** @jsx React.DOM */
/* global xblocks, global, React, xv */
/* jshint strict: false */

/**
 * @class xv.Checkbox
 * @memberof xv
 */
xv.Checkbox = xblocks.view.register('xb-checkbox', [ {
    'displayName': 'xb-checkbox',

    'propTypes': {
        'children':     React.PropTypes.node,
        'size':         React.PropTypes.oneOf([ 's', 'm' ]),
        'value':        React.PropTypes.string,
        'name':         React.PropTypes.string,
        'title':        React.PropTypes.string,
        'form':         React.PropTypes.string,
        'for':          React.PropTypes.string,
        'tabindex':     React.PropTypes.string,
        'autofocus':    React.PropTypes.bool,
        'checked':      React.PropTypes.bool,
        'disabled':     React.PropTypes.bool,
        'required':     React.PropTypes.bool
    },

    'getDefaultProps': function() {
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

    'getInitialState': function() {
        return {
            'checked': this.props.checked
        };
    },

    'componentWillReceiveProps': function(nextProps) {
        this.setState({
            'checked': nextProps.checked
        });
    },

    '_onChange': function(event) {
        this.setState({
            'checked': event.target.checked
        });
    },

    'render': function() {
        var classes = {
            'xb-checkbox': true,
            '_disabled': this.props.disabled
        };

        if (this.props.size) {
            classes[ '_size-' + this.props.size ] = true;
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
                htmlFor={this.props['for']}>

                <input type="checkbox"
                    className="_xb-check_controller"
                    name={this.props.name}
                    value={this.props.value}
                    disabled={this.props.disabled}
                    defaultChecked={this.props.checked}
                    checked={this.state.checked}
                    autoFocus={this.props.autofocus}
                    readOnly={true}
                    onChange={this._onChange}
                    required={this.props.required}
                    tabIndex={tabIndex}/>

                <span className="_xb-checkbox_flag _xb-check_flag">
                    <span className="_xb-checkbox_flag-icon"></span>
                </span>
                <span data-xb-content={this.props._uid}>{this.props.children}</span>
            </label>
        );
    }
} ]);

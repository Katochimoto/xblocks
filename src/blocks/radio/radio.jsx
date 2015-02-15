/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Radio
 * @memberof xv
 */
xv.Radio = xblocks.view.register('xb-radio', [ {
    'displayName': 'xb-radio',

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
            'checked': Boolean(nextProps.checked)
        });
    },

    'componentWillUpdate': function(nextProps, nextState) {
        if (nextState.checked) {
            xblocks.utils.resetLastRadioChecked(this.container(), nextProps.name);
        }
    },

    'componentWillMount': function() {
        if (this.state.checked) {
            xblocks.utils.resetLastRadioChecked(this.container(), this.props.name);
        }
    },

    '_onChange': function(event) {
        this.container().checked = event.target.checked;
    },

    /* jshint ignore:start */
    'render': function() {
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
            <label className={classes}
                title={this.props.title}
                form={this.props.form}
                htmlFor={this.props['for']}>

                <input type="radio"
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

                <span className="_xb-radio_flag _xb-check_flag">
                    <span className="_xb-radio_flag-icon"></span>
                </span>
                <span data-xb-content={this.props._uid}>{this.props.children}</span>
            </label>
        );
    }
    /* jshint ignore:end */
} ]);

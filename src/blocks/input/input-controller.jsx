/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

xv.InputController = xblocks.view.create({
    'displayName': 'xb-input_controller',

    'propTypes': {
        'className':        React.PropTypes.string,
        'name':             React.PropTypes.string,
        'disabled':         React.PropTypes.bool,
        'multiline':        React.PropTypes.bool,
        'required':         React.PropTypes.bool,
        'readOnly':         React.PropTypes.bool,
        'autosize':         React.PropTypes.bool,
        'autoFocus':        React.PropTypes.bool,
        'rows':             React.PropTypes.string,
        'cols':             React.PropTypes.string,
        'placeholder':      React.PropTypes.string,
        'value':            React.PropTypes.string,
        'tabIndex':         React.PropTypes.string,
        'autocomplete':     React.PropTypes.oneOf([ 'on', 'off' ]),

        'onChange':         React.PropTypes.func,
        'onHintToggle':     React.PropTypes.func,
        'isPlaceholderHint': React.PropTypes.bool
    },

    'getDefaultProps': function() {
        return {
            'value': undefined,
            'disabled': false,
            'multiline': false,
            'required': false,
            'readOnly': false,
            'autosize': false,
            'autoFocus': false,
            'isPlaceholderHint': false
        };
    },

    'componentDidUpdate': function(prevProps) {
        this._recalculateSize();
        this._dispatchEventToggleHint(prevProps.value, this.props.value);
    },

    'componentDidMount': function() {
        this._recalculateSize();
    },

    '_dispatchEventToggleHint': function(prevValue, nextValue) {
        if (this.props.isPlaceholderHint) {
            var hasPrevValue = Boolean(prevValue);
            var hasNestValue = Boolean(nextValue);

            /* jshint -W016 */
            if (hasPrevValue ^ hasNestValue) {
                this.props.onHintToggle(hasPrevValue && !hasNestValue);
            }
        }
    },

    '_recalculateSize': function() {
        if (!this.props.autosize) {
            return;
        }

        var node = this.getDOMNode();

        if (this.props.multiline) {
            node.style.height = '0px';
            node.style.height = node.scrollHeight + 'px';

        } else {
            node.style.width = '20px';
            node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
        }
    },

    /* jshint ignore:start */
    'render': function() {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        var props = {
            'value': this.props.value,
            'className': this.props.className,
            'name': this.props.name,
            'disabled': this.props.disabled,
            'required': this.props.required,
            'readOnly': this.props.readOnly,
            'autoFocus': this.props.autoFocus,
            // macos inserts placeholder default
            'placeholder': this.props.placeholder || '',
            'tabIndex': tabIndex,
            'autocomplete': this.props.autocomplete,
            'onChange': this.props.onChange
        };

        if (this.props.multiline) {
            return (
                <textarea {...props} rows={this.props.rows} cols={this.props.cols} />
            );

        } else {
            return (
                <input {...props} type="text" />
            );
        }
    }
    /* jshint ignore:end */
});

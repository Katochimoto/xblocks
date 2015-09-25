var xblocks = require('xblocks');
var React = require('react');

/**
 * @class xv.InputController
 * @memberof xv
 */
module.exports = xblocks.view.create({
    displayName: 'xb-input_controller',

    mixins: [ React.addons.PureRenderMixin ],

    propTypes: {
        'autoFocus':        React.PropTypes.bool,
        'autocomplete':     React.PropTypes.oneOf([ 'on', 'off' ]),
        'autosize':         React.PropTypes.bool,
        'className':        React.PropTypes.string,
        'cols':             React.PropTypes.string,
        'disabled':         React.PropTypes.bool,
        'isPlaceholderHint': React.PropTypes.bool,
        'multiline':        React.PropTypes.bool,
        'name':             React.PropTypes.string,
        'onChange':         React.PropTypes.func,
        'onHintToggle':     React.PropTypes.func,
        'placeholder':      React.PropTypes.string,
        'readOnly':         React.PropTypes.bool,
        'required':         React.PropTypes.bool,
        'rows':             React.PropTypes.string,
        'tabIndex':         React.PropTypes.string,
        'value':            React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            'autoFocus':            false,
            'autosize':             false,
            'disabled':             false,
            'isPlaceholderHint':    false,
            'multiline':            false,
            'readOnly':             false,
            'required':             false,
            'value':                undefined
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
        if (!this.props.autosize) {
            return;
        }

        var node = React.findDOMNode(this);

        if (this.props.multiline) {
            node.style.height = '0px';
            node.style.height = node.scrollHeight + 'px';

        } else {
            node.style.width = '20px';
            node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
        }
    },

    render: function() {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        var props = {
            'autoFocus':    this.props.autoFocus,
            'autocomplete': this.props.autocomplete,
            'className':    this.props.className,
            'disabled':     this.props.disabled,
            'name':         this.props.name,
            'onChange':     this.props.onChange,
            'placeholder':  this.props.placeholder || '', // macos inserts placeholder default
            'readOnly':     this.props.readOnly,
            'required':     this.props.required,
            'tabIndex':     tabIndex,
            'value':        this.props.value
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
});

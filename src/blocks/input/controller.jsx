import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactDOM from 'react-dom';

export default view.create({
    displayName: 'xb-input_controller',

    mixins: [ PureRenderMixin ],

    propTypes: {
        'autoFocus':        PropTypes.bool,
        'autoComplete':     PropTypes.oneOf([ 'on', 'off' ]),
        'autosize':         PropTypes.bool,
        'className':        PropTypes.string,
        'cols':             PropTypes.string,
        'disabled':         PropTypes.bool,
        'isPlaceholderHint': PropTypes.bool,
        'multiline':        PropTypes.bool,
        'name':             PropTypes.string,
        'onChange':         PropTypes.func,
        'onHintToggle':     PropTypes.func,
        'placeholder':      PropTypes.string,
        'readOnly':         PropTypes.bool,
        'required':         PropTypes.bool,
        'rows':             PropTypes.string,
        'tabIndex':         PropTypes.string,
        'value':            PropTypes.string
    },

    getDefaultProps: function () {
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

    componentDidUpdate: function (prevProps) {
        this.recalculateSize();
        this.dispatchEventToggleHint(prevProps.value, this.props.value);
    },

    componentDidMount: function () {
        this.recalculateSize();
    },

    dispatchEventToggleHint: function (prevValue, nextValue) {
        if (this.props.isPlaceholderHint) {
            var hasPrevValue = Boolean(prevValue);
            var hasNestValue = Boolean(nextValue);

            if (hasPrevValue ^ hasNestValue) {
                this.props.onHintToggle(hasPrevValue && !hasNestValue);
            }
        }
    },

    recalculateSize: function () {
        if (!this.props.autosize) {
            return;
        }

        var node = ReactDOM.findDOMNode(this);

        if (this.props.multiline) {
            node.style.height = '0px';
            node.style.height = node.scrollHeight + 'px';

        } else {
            node.style.width = '20px';
            node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
        }
    },

    render: function () {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        var props = {
            'autoFocus':    this.props.autoFocus,
            'autoComplete': this.props.autoComplete,
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

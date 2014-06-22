/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    propTypes: {
        'className': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readOnly': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'autoFocus': React.PropTypes.bool,
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabIndex': React.PropTypes.string,
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),

        'onChange': React.PropTypes.func,
        'onHintToggle': React.PropTypes.func,
        'isPlaceholderHint': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'value': ''
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
        var node = this.getDOMNode();

        if (this.props.autosize) {
            if (this.props.multiline) {
                node.style.height = '0px';
                node.style.height = node.scrollHeight + 'px';

            } else {
                node.style.width = '20px';
                node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
            }
        }
    },

    render: function() {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        if (this.props.multiline) {
            return (
                <textarea value={this.props.value}
                    className={this.props.className}
                    name={this.props.name}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    readOnly={this.props.readOnly}
                    autoFocus={this.props.autoFocus}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    placeholder={this.props.placeholder}
                    tabIndex={tabIndex}
                    autocomplete={this.props.autocomplete}
                    onChange={this.props.onChange}></textarea>
            );

        } else {
            return (
                <input value={this.props.value}
                    type="text"
                    className={this.props.className}
                    name={this.props.name}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    readOnly={this.props.readOnly}
                    autoFocus={this.props.autoFocus}
                    placeholder={this.props.placeholder}
                    tabIndex={tabIndex}
                    autocomplete={this.props.autocomplete}
                    onChange={this.props.onChange}/>
            );
        }
    }
});

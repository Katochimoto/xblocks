/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    propTypes: {
        'class': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ])
    },

    shouldComponentUpdate: function(nextProps, nextState) {
        return (
            !xblocks.utils.equals(nextProps, this.props) ||
            !xblocks.utils.equals(nextState, this.state)
        );
    },

    getInitialState: function() {
        return {
            'value': this.props.value
        };
    },

    getDefaultProps: function() {
        return {
            'value': ''
        };
    },

    componentDidUpdate: function(prevProps, prevState) {
        this._recalculateSize();
        this._dispatchEventToggleHint(prevState.value, this.state.value);
    },

    componentDidMount: function() {
        this._recalculateSize();
    },

    _dispatchEventToggleHint: function(prevValue, nextValue) {
        var hasPrevValue = Boolean(prevValue);
        var hasNestValue = Boolean(nextValue);

        /* jshint -W016 */
        if (hasPrevValue ^ hasNestValue) {
            xblocks.utils.dispatchEvent(this.getDOMNode(), '_hint-toggle', {
                detail: {
                    toggle: (hasPrevValue && !hasNestValue)
                }
            });
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

    _onchange: function(event) {
        this.setState({ 'value': event.target.value });
    },

    render: function() {
        var tabIndex = this.props.tabindex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        if (this.props.multiline) {
            return (
                <textarea value={this.state.value}
                    className={this.props['class']}
                    name={this.props.name}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    readOnly={this.props.readonly}
                    autoFocus={this.props.autofocus}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    placeholder={this.props.placeholder}
                    tabIndex={tabIndex}
                    autocomplete={this.props.autocomplete}
                    onChange={this._onchange}></textarea>
            );

        } else {
            return (
                <input value={this.state.value}
                    type="text"
                    className={this.props['class']}
                    name={this.props.name}
                    disabled={this.props.disabled}
                    required={this.props.required}
                    readOnly={this.props.readonly}
                    autoFocus={this.props.autofocus}
                    placeholder={this.props.placeholder}
                    tabIndex={tabIndex}
                    autocomplete={this.props.autocomplete}
                    onChange={this._onchange}/>
            );
        }
    }
});

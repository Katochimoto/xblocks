var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');

/**
 * The template node xb-checkbox
 *
 * @class xv.Checkbox
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
module.exports = xblocks.view.register('xb-checkbox', [
    require('mixin/view/commonAttrs'),

    {
        displayName: 'xb-checkbox',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'autofocus':    React.PropTypes.bool,
            'checked':      React.PropTypes.bool,
            'for':          React.PropTypes.string,
            'form':         React.PropTypes.string,
            'name':         React.PropTypes.string,
            'required':     React.PropTypes.bool,
            'size':         React.PropTypes.oneOf([ 's', 'm' ]),
            'value':        React.PropTypes.string
        },

        getDefaultProps: function() {
            return {
                'autofocus':    false,
                'checked':      false,
                'children':     '',
                'disabled':     false,
                'required':     false,
                'size':         'm',
                'tabindex':     '0',
                'value':        'on'
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

        _onChange: function(event) {
            this.setState({
                'checked': event.target.checked
            });
        },

        render: function() {
            var classes = {
                'xb-checkbox': true,
                '_disabled':   this.props.disabled
            };

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classnames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                <label className={classes}
                    title={this.props.title}
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
                        tabIndex={tabIndex}
                        form={this.props.form} />

                    <span className="_xb-checkbox_flag _xb-check_flag">
                        <span className="_xb-checkbox_flag-icon"></span>
                    </span>
                    <span data-xb-content={this.props._uid}>{this.props.children}</span>
                </label>
            );
        }
    }
]);

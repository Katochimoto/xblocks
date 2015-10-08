var xv = require('context').xv;
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
xv.Checkbox = xblocks.view.register('xb-checkbox', [
    require('mixin/view/commonAttrs'),

    {
        displayName: 'xb-checkbox',

        mixins: [ React.addons.PureRenderMixin ],

        // @ifdef DEBUG
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
        // @endif

        getDefaultProps: function () {
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

        getInitialState: function () {
            return {
                'checked': this.props.checked
            };
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                'checked': nextProps.checked
            });
        },

        _onChange: function (event) {
            this.setState({
                'checked': event.target.checked
            });
        },

        render: function () {
            var classes = {
                'xb-checkbox': true,
                '_disabled': this.props.disabled
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

                    <input autoFocus={this.props.autofocus}
                        checked={this.state.checked}
                        className="_xb-check_controller"
                        defaultChecked={this.props.checked}
                        disabled={this.props.disabled}
                        form={this.props.form}
                        name={this.props.name}
                        onChange={this._onChange}
                        readOnly={true}
                        required={this.props.required}
                        tabIndex={tabIndex}
                        type="checkbox"
                        value={this.props.value} />

                    <span className="_xb-checkbox_flag _xb-check_flag">
                        <span className="_xb-checkbox_flag-icon"></span>
                    </span>
                    <span data-xb-content={this.props._uid}>
                        {this.props.children}
                    </span>
                </label>
            );
        }
    }
]);

module.exports = xv.Checkbox;

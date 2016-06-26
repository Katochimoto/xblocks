import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import resetLastRadioChecked from 'utils/resetLastRadioChecked';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-radio
 *
 * @class xv.Radio
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Radio = view.register('xb-radio', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-radio',

        mixins: [ PureRenderMixin ],

        propTypes: {
            autofocus:    PropTypes.bool,
            checked:      PropTypes.bool,
            for:          PropTypes.string,
            form:         PropTypes.string,
            name:         PropTypes.string,
            required:     PropTypes.bool,
            size:         PropTypes.oneOf([ 'm', 'l' ]),
            value:        PropTypes.string
        },

        getDefaultProps: function () {
            return {
                autofocus:    false,
                checked:      false,
                disabled:     false,
                required:     false,
                size:         'm',
                tabindex:     '0',
                value:        'on'
            };
        },

        getInitialState: function () {
            return {
                checked: this.props.checked
            };
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                checked: Boolean(nextProps.checked)
            });
        },

        componentWillUpdate: function (nextProps, nextState) {
            if (nextState.checked) {
                resetLastRadioChecked(this.context.container, nextProps.name);
            }
        },

        componentWillMount: function () {
            if (this.state.checked) {
                resetLastRadioChecked(this.context.container, this.props.name);
            }
        },

        _onChange: function (event) {
            this.context.container.checked = event.target.checked;
        },

        render: function () {
            const classes = classnames({
                'xb-radio':  true,
                '_disabled': this.props.disabled,
                [ `_size-${this.props.size}` ]: true
            });

            const tabIndex = this.props.disabled ? '-1' : this.props.tabindex;

            return (
                <label className={classes}
                    title={this.props.title}
                    htmlFor={this.props['for']}>

                    <input
                        autoFocus={this.props.autofocus}
                        checked={this.state.checked}
                        className="_controller"
                        disabled={this.props.disabled}
                        form={this.props.form}
                        name={this.props.name}
                        onChange={this._onChange}
                        readOnly={true}
                        required={this.props.required}
                        tabIndex={tabIndex}
                        type="radio"
                        value={this.props.value} />

                    <span className="_view">
                        <span className="_icon">{String.fromCharCode(160)}</span>
                    </span>
                    <span className="_label">
                        {this.context.content()}
                    </span>
                </label>
            );
        }
    }
]);

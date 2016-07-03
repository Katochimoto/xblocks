import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-checkbox
 *
 * @class xv.Checkbox
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Checkbox = view.register('xb-checkbox', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-checkbox',

        mixins: [ PureRenderMixin ],

        /**
         * @prop {string} [size=m] size, possible values: s|m
         * @prop {string} [value=on]
         * @prop {string} [name]
         * @prop {string} [form]
         * @prop {string} [for]
         * @prop {boolean} [autofocus=false]
         * @prop {boolean} [disabled=false]
         * @prop {boolean} [checked=false]
         * @prop {boolean} [required=false]
         */
        propTypes: {
            'autofocus': PropTypes.bool,
            'checked': PropTypes.bool,
            'for': PropTypes.string,
            'form': PropTypes.string,
            'name': PropTypes.string,
            'required': PropTypes.bool,
            'size': PropTypes.oneOf([ 'm', 'l' ]).isRequired,
            'value': PropTypes.string
        },

        getDefaultProps: function () {
            return {
                'autofocus': false,
                'checked': false,
                'disabled': false,
                'required': false,
                'size': 'm',
                'data-xb-tabindex': '0',
                'value': 'on'
            };
        },

        getInitialState: function () {
            return {
                checked: this.props.checked
            };
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                checked: nextProps.checked
            });
        },

        _onChange: function (event) {
            this.setState({
                checked: event.target.checked
            });
        },

        render: function () {
            const classes = classnames({
                'xb-checkbox': true,
                '_disabled': this.props.disabled,
                [ `_size-${this.props.size}` ]: true
            });

            return (
                <label className={classes}
                    title={this.props.title}
                    htmlFor={this.props[ 'for' ]}>

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
                        tabIndex={this.getTabIndex()}
                        type="checkbox"
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

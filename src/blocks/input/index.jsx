import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import classnames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';
import filterProps from 'utils/filterProps';
import exportPropTypes from 'utils/exportPropTypes';
import ConstantInput from 'constants/input';

import Controller from './controller.jsx';

/**
 * The template node xb-input
 *
 * @class xv.Input
 * @memberof xv
 * @mixes React.addons.PureRenderMixin
 * @mixes xblocks.mixin.vCommonAttrs
 */
export default xv.Input = view.register('xb-input', [
    mixinViewCommonAttrs,
    exportPropTypes('xb-link'),

    {
        displayName: 'xb-input',

        mixins: [ PureRenderMixin ],

        /**
         * @prop {string} [name]
         * @prop {string} [type=text] text|number|date|datetime|email|month|range|search|tel|time|url|week|color
         * @prop {string} [size=m] s|m|l|xl
         * @prop {string} [autoComplete] on|off
         * @prop {string} [rows=4]
         * @prop {string} [cols]
         * @prop {string} [placeholder]
         * @prop {string} [value]
         * @prop {string} [prefix]
         * @prop {string} [postfix]
         * @prop {string} [tabindex]
         * @prop {boolean} [disabled=false]
         * @prop {boolean} [autosize=false]
         * @prop {boolean} [multiline=false]
         * @prop {boolean} [required=false]
         * @prop {boolean} [readonly=false]
         * @prop {boolean} [reset=false]
         * @prop {boolean} [autofocus=false]
         * @prop {boolean} [ghost=false]
         */
        propTypes: {
            'autocomplete': PropTypes.oneOf([ 'on', 'off' ]),
            'autofocus': PropTypes.bool,
            'autosize': PropTypes.bool,
            'cols': PropTypes.string,
            'ghost': PropTypes.bool,
            'multiline': PropTypes.bool,
            'name': PropTypes.string,
            'placeholder': PropTypes.string,
            'postfix': PropTypes.string,
            'prefix': PropTypes.string,
            'readonly': PropTypes.bool,
            'required': PropTypes.bool,
            'reset': PropTypes.bool,
            'rows': PropTypes.string,
            'size': PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]).isRequired,
            'type': PropTypes.oneOf([ 'text', 'number', 'date', 'datetime', 'email', 'month', 'range', 'search', 'tel', 'time', 'url', 'week', 'color', 'wysiwyg' ]).isRequired,
            'value': PropTypes.string,
            'xb-link': PropTypes.string
        },

        getDefaultProps: function () {
            return {
                'autofocus': false,
                'autosize': false,
                'data-xb-tabindex': '0',
                'disabled': false,
                'ghost': false,
                'multiline': false,
                'readonly': false,
                'required': false,
                'reset': false,
                'rows': '4',
                'size': 'm',
                'type': 'text',
                'value': undefined
            };
        },

        getInitialState: function () {
            return {
                value: this.props.value
            };
        },

        componentDidMount: function () {
            // check show or hide placeholder after mount element
            this._controller.dispatchEventToggleHint('', this.props.value);
        },

        componentDidUpdate: function () {
            this.context.container[ ConstantInput.VALUE ] = this.state.value;
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        onChange: function (event) {
            this.setState({ value: event.target.value });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        onHintToggle: function (toggle) {
            this._placeholder.style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Click reset button
         * @private
         */
        onClickReset: function () {
            this.setState({ value: '' });
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        isComplex: function () {
            return Boolean(
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props[ 'xb-link' ] ||
                this.props.placeholder
            );
        },

        render: function () {
            const isComplex = this.isComplex();
            const classes = classnames({
                'xb-input': true,
                '_disabled': this.props.disabled,
                '_autosize': this.props.autosize,
                '_ghost': this.props.ghost,
                [ `_${isComplex ? 'complex' : 'simple'}_size-${this.props.size}` ]: true
            });

            const controllerProps = {
                'autoFocus': this.props.autofocus,
                'autoComplete': this.props.autocomplete,
                'autosize': this.props.autosize,
                'className': '_controller',
                'cols': this.props.cols,
                'disabled': this.props.disabled,
                'key': 'controller',
                'multiline': this.props.multiline,
                'name': this.props.name,
                'onChange': this.onChange,
                'onHintToggle': this.onHintToggle,
                'readOnly': this.props.readonly,
                'ref': (ref) => this._controller = ref,
                'required': this.props.required,
                'rows': this.props.rows,
                'tabIndex': this.getTabIndex(),
                'value': this.state.value
            };

            if (isComplex) {
                const children = [];

                if (this.props[ 'xb-link' ]) {
                    const linkProps = filterProps(/^xb-link-/, this.props);

                    children.push(
                        <xb-link {...linkProps} theme="empty" key="label">{this.props[ 'xb-link' ]}</xb-link>
                    );
                }

                if (this.props.prefix) {
                    children.push(
                        <span key="prefix" className="_left">{this.props.prefix}</span>
                    );
                }

                if (this.props.reset) {
                    children.push(
                        <span key="reset" className="_reset" onClick={this.onClickReset}></span>
                    );
                }

                if (this.props.postfix) {
                    children.push(
                        <span key="postfix" className="_right">{this.props.postfix}</span>
                    );
                }

                const placeholder = do {
                    if (this.props.placeholder) {
                        (
                            <span ref={ref => this._placeholder = ref} key="placeholder" className="_hint">
                                <span className="_hint-inner">{this.props.placeholder}</span>
                            </span>
                        );
                    } else {
                        null;
                    }
                };

                children.push(
                    <span key="content" className="_content">
                        {placeholder}
                        <Controller {...controllerProps} isPlaceholderHint={Boolean(placeholder)} />
                        <span key="view" className="_view">
                            {String.fromCharCode(160)}
                        </span>
                    </span>
                );

                return (
                    <label className={classes}>{children}</label>
                );

            } else {

                return (
                    <Controller {...controllerProps} className={classes} isPlaceholderHint={false} />
                );
            }
        }
    }
]);

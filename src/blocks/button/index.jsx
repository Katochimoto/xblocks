import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import resetLastRadioChecked from 'utils/resetLastRadioChecked';
import filterProps from 'utils/filterProps';
import exportPropTypes from 'utils/exportPropTypes';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';
import Content from './content.jsx';

/**
 * The template node xb-button
 *
 * @mixes React.addons.PureRenderMixin
 * @mixes xblocks.mixin.vCommonAttrs
 */
export default xv.Button = view.register('xb-button', [
    mixinViewCommonAttrs,
    exportPropTypes('xb-ico'),

    {
        displayName: 'xb-button',

        mixins: [ PureRenderMixin ],

        /**
         * @prop {string} [size=m] size, possible values: s|m|l|xl
         * @prop {string} [theme=normal] normal|action|dark|flying|pseudo-inverted|pseudo|promo
         * @prop {string} [type=button] label|inline|link|file|button|submit|checkbox|radio
         * @prop {string} [target] _blank|_self|_parent|_top
         * @prop {string} [value]
         * @prop {string} [href]
         * @prop {string} [name]
         * @prop {string} [form]
         * @prop {string} [for]
         * @prop {boolean} [multiple=false]
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
            'href': PropTypes.string,
            'multiple': PropTypes.bool,
            'name': PropTypes.string,
            'required': PropTypes.bool,
            'size': PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]).isRequired,
            'target': PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'theme': PropTypes.oneOf([ 'action', 'dark', 'normal', 'clear', 'dark-pseudo', 'pseudo' ]).isRequired,
            'type': PropTypes.oneOf([ 'label', 'inline', 'link', 'file', 'button', 'submit', 'checkbox', 'radio' ]).isRequired,
            'value': PropTypes.string
        },

        getDefaultProps: function () {
            return {
                'autofocus': false,
                'checked': false,
                'data-xb-tabindex': '0',
                'disabled': false,
                'multiple': false,
                'required': false,
                'size': 'm',
                'theme': 'normal',
                'type': 'button'
            };
        },

        getInitialState: function () {
            return {
                checked: this.props.checked,
                focused: false
            };
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                checked: Boolean(nextProps.checked)
            });
        },

        componentWillUpdate: function (nextProps, nextState) {
            if (nextProps.type === 'radio' && nextState.checked) {
                resetLastRadioChecked(this.context.container, nextProps.name);
            }
        },

        componentWillMount: function () {
            if (this.props.type === 'radio' && this.state.checked) {
                resetLastRadioChecked(this.context.container, this.props.name);
            }
        },

        handleChange: function (event) {
            this.context.container.checked = event.target.checked;
        },

        handleFocus: function () {
            this.setState({ focused: true });
        },

        handleBlur: function () {
            this.setState({ focused: false });
        },

        render: function () {
            const classes = classnames({
                'xb-button': true,
                '_disabled': this.props.disabled,
                '_focused': this.state.focused,
                [ `_theme-${this.props.theme}_size-${this.props.size}` ]: true
            });

            const tabIndex = this.getTabIndex();
            const icoProps = filterProps(/^xb-ico-/, this.props);
            const type = this.props.type;
            const content = (
                <Content key="content" ico={icoProps} />
            );

            if (type === 'link') {
                return (
                    <a className={classes}
                        href={this.props.href}
                        name={this.props.name}
                        tabIndex={tabIndex}
                        target={this.props.target}
                        title={this.props.title}>

                        {content}
                    </a>
                );

            } else if (type === 'file') {
                return (
                    <label className={classes}>
                        <span className="_xb-file-intruder">
                            <span className="_xb-file-intruder-inner">
                                <input className="_xb-file-intruder-input"
                                    type="file"
                                    name={this.props.name}
                                    title={this.props.title}
                                    disabled={this.props.disabled}
                                    multiple={this.props.multiple}
                                    autoFocus={this.props.autofocus}
                                    onBlur={this.handleBlur}
                                    onFocus={this.handleFocus}
                                    form={this.props.form}
                                    tabIndex={tabIndex}/>
                            </span>
                        </span>
                        {content}
                    </label>
                );

            } else if (type === 'label' || type === 'checkbox' || type === 'radio') {
                var children = [];

                if (type === 'checkbox' || type === 'radio') {
                    children.push(
                        <input key="checkControl"
                            autoFocus={this.props.autofocus}
                            checked={this.state.checked}
                            className="_controller"
                            disabled={this.props.disabled}
                            form={this.props.form}
                            name={this.props.name}
                            readOnly={true}
                            required={this.props.required}
                            onBlur={this.handleBlur}
                            onFocus={this.handleFocus}
                            onChange={this.handleChange}
                            type={type}
                            value={this.props.value}
                            tabIndex={tabIndex}/>
                    );

                } else {
                    children.push(
                        <span key="file-intruder" className="_xb-file-intruder">
                            <span className="_xb-file-intruder-inner">
                                <input className="_xb-file-intruder-input"
                                    type="button"
                                    form={this.props.form}
                                    disabled={this.props.disabled}
                                    autoFocus={this.props.autofocus}
                                    onBlur={this.handleBlur}
                                    onFocus={this.handleFocus}
                                    tabIndex={tabIndex}/>
                            </span>
                        </span>
                    );
                }

                children.push(content);

                return (
                    <label className={classes}
                        htmlFor={this.props[ 'for' ]}
                        title={this.props.title}>

                        {children}
                    </label>
                );

            } else if (type === 'inline') {
                return (
                    <span className={classes}
                        tabIndex={tabIndex}
                        title={this.props.title}>

                        {content}
                    </span>
                );

            } else {
                return (
                    <button className={classes}
                        type={type}
                        form={this.props.form}
                        title={this.props.title}
                        name={this.props.name}
                        value={this.props.value}
                        tabIndex={tabIndex}
                        disabled={this.props.disabled}
                        autoFocus={this.props.autofocus}>

                        {content}
                    </button>
                );
            }
        }
    }
]);

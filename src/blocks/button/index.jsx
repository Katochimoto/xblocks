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

        propTypes: {
            'autofocus':    PropTypes.bool,
            'checked':      PropTypes.bool,
            'for':          PropTypes.string,
            'form':         PropTypes.string,
            'href':         PropTypes.string,
            'multiple':     PropTypes.bool,
            'name':         PropTypes.string,
            'required':     PropTypes.bool,
            'size':         PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'target':       PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'theme':        PropTypes.oneOf([ 'action', 'dark', 'normal', 'clear', 'dark-pseudo', 'pseudo' ]),
            'type':         PropTypes.oneOf([ 'label', 'inline', 'link', 'file', 'button', 'submit', 'checkbox', 'radio' ]),
            'value':        PropTypes.string
        },

        getDefaultProps: function () {
            return {
                'autofocus':    false,
                'checked':      false,
                'children':     String.fromCharCode(160),
                'disabled':     false,
                'multiple':     false,
                'required':     false,
                'size':         'm',
                'tabindex':     '0',
                'theme':        'normal',
                'type':         'button'
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
                resetLastRadioChecked(this.container(), nextProps.name);
            }
        },

        componentWillMount: function () {
            if (this.props.type === 'radio' && this.state.checked) {
                resetLastRadioChecked(this.container(), this.props.name);
            }
        },

        _onChange: function (event) {
            this.container().checked = event.target.checked;
        },

        _onFocus: function () {
            this.setState({ focused: true });
        },

        _onBlur: function () {
            this.setState({ focused: false });
        },

        render: function () {
            const classes = classnames({
                'xb-button': true,
                '_disabled': this.props.disabled,
                '_focused': this.state.focused,
                [ `_theme-${this.props.theme}_size-${this.props.size}` ]: true
            });

            const icoProps = filterProps(/^xb-ico-/, this.props);
            const tabIndex = this.props.disabled ? '-1' : this.props.tabindex;
            const type = this.props.type;
            const content = (
                <Content key="content" _uid={this.props._uid} ico={icoProps}>
                    {this.props.children}
                </Content>
            );

            if (type === 'link') {
                return (
                    <a className={classes}
                        href={this.props.href}
                        name={this.props.name}
                        target={this.props.target}
                        title={this.props.title}
                        tabIndex={tabIndex}>

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
                                    form={this.props.form}
                                    tabIndex={tabIndex}/>

                                <span className="_xb-file-intruder-focus" />
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
                            onBlur={this._onBlur}
                            onChange={this._onChange}
                            onFocus={this._onFocus}
                            readOnly={true}
                            required={this.props.required}
                            tabIndex={tabIndex}
                            type={type}
                            value={this.props.value} />
                    );

                    children.push(content);

                } else {
                    children.push(
                        <span key="file-intruder" className="_xb-file-intruder">
                            <span className="_xb-file-intruder-inner">
                                <input className="_xb-file-intruder-input"
                                    type="button"
                                    form={this.props.form}
                                    disabled={this.props.disabled}
                                    autoFocus={this.props.autofocus}
                                    tabIndex={tabIndex}/>

                                <span className="_xb-file-intruder-focus" />
                            </span>
                        </span>
                    );

                    children.push(content);
                }

                return (
                    <label className={classes} htmlFor={this.props['for']} title={this.props.title}>
                        {children}
                    </label>
                );

            } else if (type === 'inline') {
                return (
                    <span className={classes} tabIndex={tabIndex}>
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

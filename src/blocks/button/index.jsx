import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
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
xv.Button = xblocks.view.register('xb-button', [
    mixinViewCommonAttrs,
    exportPropTypes('xb-ico'),

    {
        displayName: 'xb-button',

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
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
        // @endif

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
                'checked': this.props.checked
            };
        },

        componentWillReceiveProps: function (nextProps) {
            this.setState({
                'checked': Boolean(nextProps.checked)
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

        render: function () {
            var classes = {
                'xb-button': true,
                '_disabled': this.props.disabled
            };

            /*
            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }
            */

            classes[ `_theme-${this.props.theme}_size-${this.props.size}` ] = true;

            classes = classnames(classes);

            var icoProps = filterProps(/^xb-ico-/, this.props);
            var tabIndex = this.props.tabindex;
            var type = this.props.type;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            var content = (
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
                            type={type}
                            className="_controller"
                            name={this.props.name}
                            value={this.props.value}
                            form={this.props.form}
                            disabled={this.props.disabled}
                            defaultChecked={this.props.checked}
                            checked={this.state.checked}
                            autoFocus={this.props.autofocus}
                            readOnly={true}
                            onChange={this._onChange}
                            required={this.props.required}
                            tabIndex={tabIndex}/>
                    );

                    children.push(
                        <xv.Button {...this.props} key="content" type="inline" tabindex="null" />
                    );

                    classes = classnames({
                        'xb-button': true,
                        '_theme-check': true,
                        '_disabled': this.props.disabled
                    });

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

export default xv.Button;

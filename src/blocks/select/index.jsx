import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import classnames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-select
 *
 * @class xv.Select
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
export default xv.Select = view.register('xb-select', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-select',

        mixins: [ PureRenderMixin ],

        propTypes: {
            autocapitalize:   PropTypes.oneOf([ 'on', 'off' ]),
            autocomplete:     PropTypes.oneOf([ 'on', 'off' ]),
            autocorrect:      PropTypes.oneOf([ 'on', 'off' ]),
            autofocus:        PropTypes.bool,
            form:             PropTypes.string,
            name:             PropTypes.string,
            required:         PropTypes.bool,
            size:             PropTypes.string,
            theme:            PropTypes.string
        },

        getDefaultProps: function () {
            return {
                autofocus: false,
                disabled:  false,
                required:  false,
                tabindex:  '0'
            };
        },

        render: function () {
            const classes = classnames({
                'xb-select': true,
                '_disabled': this.props.disabled
            });

            const tabIndex = this.props.disabled ? '-1' : this.props.tabindex;

            return (
                <div className={classes} title={this.props.title}>
                    <xb-button ref={(ref) => this._contentNode = ref}
                        autofocus={this.props.autofocus || undefined}
                        disabled={this.props.disabled || undefined}
                        form={this.props.form}
                        name={this.props.name}
                        required={this.props.required || undefined}
                        tabindex={tabIndex}
                        theme={this.props.theme}
                        value={this.props.value}
                        xb-ico-float="right"
                        xb-ico-type="dropdown">
                        Выбранное значение
                    </xb-button>
                </div>
            );
        }
    }
]);

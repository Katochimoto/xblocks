/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBSelect = xblocks.view.register('xb-select', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-select',

        propTypes: {
            'disabled': React.PropTypes.bool,

            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocorrect':  React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocapitalize':  React.PropTypes.oneOf([ 'on', 'off' ]),

            'size': React.PropTypes.string,
            'autofocus': React.PropTypes.bool,
            'form': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'name': React.PropTypes.string,
            'required': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'tabindex': '1'
            };
        },

        componentDidMount: function() {
            new Tether({
                element: this.refs.dropdown.getDOMNode(),
                target: this.refs.control.getDOMNode(),
                attachment: 'top left',
                targetAttachment: 'bottom left',
                classPrefix: 'xb-dialog',
                constraints: [
                    {
                        to: 'window',
                        attachment: 'together none'
                    }
                ],
                optimizations: {
                    gpu: false
                },
                classes: {
                    element: 'xb-dialog'
                }
            });
        },

        render: function() {
            var classes = {
                'xb-select': true,
                '_disabled': this.props.disabled
            };

            classes = React.addons.classSet(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                <div className={classes}>
                    <input className="_controller" />
                    <XBButton ref="control"
                        type="inline"></XBButton>
                    <div ref="dropdown" className="_xb-select-dropdown">
                        <ul className="_group">
                            <li className="_item"><a className="_item-control">1</a></li>
                            <li className="_item"><a className="_item-control">2</a></li>
                            <li className="_item"><a className="_item-control">3</a></li>
                        </ul>
                    </div>
                </div>
            );
        }
    }
]);

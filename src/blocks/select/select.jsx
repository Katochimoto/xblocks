/** @jsx React.DOM */
/* global xblocks, React, Tether, xv */
/* jshint strict: false */

/**
 * The template node xb-select
 *
 * @class xv.Select
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.Select = xblocks.view.register('xb-select', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-select',

        'propTypes': {
            'autocapitalize':   React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocomplete':     React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocorrect':      React.PropTypes.oneOf([ 'on', 'off' ]),
            'autofocus':        React.PropTypes.bool,
            'form':             React.PropTypes.string,
            'multiple':         React.PropTypes.bool,
            'name':             React.PropTypes.string,
            'required':         React.PropTypes.bool,
            'size':             React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'autofocus': false,
                'disabled':  false,
                'multiple':  false,
                'required':  false,
                'tabindex':  '1'
            };
        },

        'componentDidMount': function() {
            new Tether({
                element: React.findDOMNode(this.refs.dropdown),
                target: React.findDOMNode(this.refs.control),
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

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-select': true,
                '_disabled': this.props.disabled
            };

            classes = classNames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                <div className={classes}>
                    <input className="_controller" />
                    <xv.Button ref="control" type="inline" />
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
        /* jshint ignore:end */
    }
]);

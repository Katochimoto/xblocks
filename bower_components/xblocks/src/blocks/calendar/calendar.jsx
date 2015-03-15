/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * The template node xb-calendar
 *
 * @class xv.Calendar
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Calendar = xblocks.view.register('xb-calendar', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-calendar',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'startWeekDay': React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'startWeekDay': '1'
            };
        },

        /* jshint ignore:start */
        'render': function() {
            this.datetime = moment();

            var startWeekDay = Number(this.props.startWeekDay);
            var daysInMonth = this.datetime.daysInMonth();

            var firstDay = this.datetime.date(1).day();
            var prefixDays = firstDay - startWeekDay;
            if (prefixDays < 0) {
                prefixDays = 7 + prefixDays;
            }

            var lastDay = this.datetime.date(daysInMonth).day();
            var postfixDays = 6 - lastDay + startWeekDay;
            if (postfixDays > 6) {
                postfixDays = 0;
            }

            var days = daysInMonth + prefixDays + postfixDays;

            return (
                <div>

                </div>
            );
        }
        /* jshint ignore:end */
    }
]);

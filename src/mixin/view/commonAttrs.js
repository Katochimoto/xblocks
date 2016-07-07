import { PropTypes } from 'react';

export default {
    /**
     * Common attributes
     *
     * @type {Object}
     * @prop {Object} propTypes
     * @prop {string} propTypes.accesskey
     * @prop {string} propTypes.contextmenu
     * @prop {enum} propTypes.dir
     * @prop {boolean} propTypes.hidden
     * @prop {boolean} propTypes.spellcheck
     * @prop {string} propTypes.data-xb-tabindex
     * @prop {string} propTypes.title
     */
    propTypes: {
        'accesskey': PropTypes.string,
        'contextmenu': PropTypes.string,
        'data-xb-tabindex': numberString,
        'dir': PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'disabled': PropTypes.bool,
        'hidden': PropTypes.bool,
        'spellcheck': PropTypes.bool,
        'title': PropTypes.string
    },

    getDefaultProps: function () {
        return {
            'data-xb-tabindex': '0',
            'disabled': false,
            'hidden': false
        };
    },

    /**
     * @returns {string}
     */
    getTabIndex: function () {
        return this.props.disabled ? '-1' : this.props[ 'data-xb-tabindex' ];
    }
};

function numberString(props, propName, componentName) {
    if (props.hasOwnProperty(propName) && !/^(\-?[0-9])?[0-9]*$/.test(props[ propName ])) {
        return new Error(`Invalid prop "${propName}" supplied to "${componentName}". Validation failed.`);
    }
}

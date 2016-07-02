import { PropTypes } from 'react';

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
export default {
    propTypes: {
        'accesskey': PropTypes.string,
        'contextmenu': PropTypes.string,
        'data-xb-tabindex': numberString,
        'dir': PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'disabled': PropTypes.bool,
        'hidden': PropTypes.bool,
        'spellcheck': PropTypes.bool,
        'title': PropTypes.string
    }
};

function numberString(props, propName, componentName) {
    if (props.hasOwnProperty(propName) && !/^(\-?[0-9])?[0-9]*$/.test(props[ propName ])) {
        return new Error(`Invalid prop "${propName}" supplied to "${componentName}". Validation failed.`);
    }
}

// @ifdef DEBUG
var PropTypes = require('react').PropTypes;
// @endif

/**
 * Common attributes
 *
 * @memberOf xblocks.mixin
 * @type {object}
 * @prop {object} propTypes
 * @prop {string} propTypes.accesskey
 * @prop {string} propTypes.contextmenu
 * @prop {enum} propTypes.dir
 * @prop {boolean} propTypes.hidden
 * @prop {boolean} propTypes.spellcheck
 * @prop {string} propTypes.tabindex
 * @prop {string} propTypes.title
 */
module.exports = {
    // @ifdef DEBUG
    propTypes: {
        'accesskey':    PropTypes.string,
        'contextmenu':  PropTypes.string,
        'dir':          PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'disabled':     PropTypes.bool,
        'hidden':       PropTypes.bool,
        'spellcheck':   PropTypes.bool,
        'tabindex':     PropTypes.string,
        'title':        PropTypes.string
    }
    // @endif
};

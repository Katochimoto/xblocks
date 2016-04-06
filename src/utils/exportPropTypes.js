import { utils } from 'xblocks-core';

/**
 * @param {string} tagName
 * @returns {Object}
 */
export default function (tagName) {
    var props = utils.propTypes(tagName);
    var propTypes = {};
    var prefix = tagName + '-';
    var p;

    for (p in props) {
        if (props.hasOwnProperty(p) && p[ 0 ] !== '_') {
            propTypes[ prefix + p ] = props[ p ];
        }
    }

    return { propTypes };
}

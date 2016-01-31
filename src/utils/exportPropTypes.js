import { utils } from 'xblocks-core';

/**
 * @param {string} tagName
 * @returns {Object}
 */
export default function (tagName) {
    var props = utils.propTypes(tagName);
    var exportProps = {};
    var prefix = tagName + '-';
    var p;

    for (p in props) {
        if (props.hasOwnProperty(p) && p[ 0 ] !== '_') {
            exportProps[ prefix + p ] = props[ p ];
        }
    }

    return {
        propTypes: exportProps
    };
}

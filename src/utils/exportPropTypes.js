import { utils } from 'xblocks-core';

/**
 * @param {string} tagName
 * @returns {Object}
 */
export default function (tagName) {
    const props = utils.propTypes(tagName);
    const propTypes = {};
    const prefix = tagName + '-';

    for (const p in props) {
        if (props.hasOwnProperty(p) && p[ 0 ] !== '_') {
            propTypes[ prefix + p ] = props[ p ];
        }
    }

    return { propTypes };
}

import pickBy from 'lodash/pickBy';
import transform from 'lodash/transform';

/**
 * @param {RegExp} reg
 * @param {Object} props
 * @returns {Object}
 */
export default function (reg, props) {
    props = pickBy(props, (name, key) => reg.test(key));
    return transform(props, (result, value, key) => {
        result[ key.replace(reg, '') ] = value;
    }, {});
}

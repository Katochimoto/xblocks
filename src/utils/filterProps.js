import pick from 'lodash/pick';
import transform from 'lodash/transform';

const pickIterator = function (value, key) {
    return this.test(key);
};

const transformIterator = function (result, value, key) {
    result[ key.replace(this, '') ] = value;
};

/**
 * @param {RegExp} reg
 * @param {Object} props
 * @returns {Object}
 */
export default function (reg, props) {
    return transform(pick(props, pickIterator, reg), transformIterator, {}, reg);
}

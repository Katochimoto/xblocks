import _ from 'lodash';

/**
 * @param {RegExp} reg
 * @param {Object} props
 * @returns {Object}
 */
export default function (reg, props) {
    props = _.pickBy(props, (name, key) => reg.test(key));
    return _.transform(props, (result, value, key) => {
        result[ key.replace(reg, '') ] = value;
    }, {});
}

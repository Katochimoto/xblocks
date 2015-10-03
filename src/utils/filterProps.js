import { pick, transform } from '_/object';

var pickIterator = function (value, key) {
    return this.test(key);
};

var transformIterator = function (result, value, key) {
    result[ key.replace(this, '') ] = value;
};

export default function (reg, props) {
    return transform(pick(props, pickIterator, reg), transformIterator, {}, reg);
};

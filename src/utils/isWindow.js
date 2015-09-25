/**
 * @function xblocks.utils.isWindow
 * @param {*} data
 * @returns {boolean}
 */
module.exports = function (data) {
    return (data !== null && data === data.window);
};

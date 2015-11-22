/**
 * Generate unique string
 * @function xblocks.utils.uid
 * @returns {string}
 */
export default function () {
    return Math.floor((1 + Math.random()) * 0x10000000).toString(36);
}

/**
 * The default setting for the popup
 * @see http://tether.io/#options
 * @returns {Object}
 * @this xb.Popup
 */
export default function () {
    return {
        'attachment': 'middle center',
        'classPrefix': this.xtagName,
        'element': this,
        'enabled': false,
        'optimizations': {
            'gpu': true
        },
        'target': this.ownerDocument.body,
        'targetAttachment': 'middle center',
        'targetModifier': 'visible'
    };
}

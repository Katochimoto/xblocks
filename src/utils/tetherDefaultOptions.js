/**
 * The default setting for the popup
 * @returns {Object}
 * @this xb.Popup
 */
export default function () {
    return {
        attachment: 'middle center',
        classes: {
            element: this.xtagName
        },
        classPrefix: this.xtagName,
        element: this,
        enabled: false,
        optimizations: {
            gpu: true
        },
        target: this.ownerDocument.body,
        targetAttachment: 'middle center',
        targetModifier: 'visible'
    };
}

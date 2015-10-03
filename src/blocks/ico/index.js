// require('./index.styl');
require('./index.jsx');

var xblocks = require('xblocks');

/**
 * xb-ico html element
 *
 * @prop {string} [value=&160;] the text inside the tag
 * @prop {boolean} [active=false]
 * @prop {boolean} [disabled=false]
 * @prop {string} [size=s] icon size, possible values: s|m
 * @prop {string} type icon type, possible values: attention|close|check|download|download-white|dropdown|
 * eye|link|link-white|mail|notification|odnoklassniki|pause|people|play|print|remove|services|
 * settings|three-dots|trash|trash-white|twitter|help|upload|upload-white|vk
 *
 * @example
 * &#60;xb-ico type="notification" value="attribute value">&#60;/xb-ico>
 * <xb-ico value="attribute value" type="notification"></xb-ico>
 *
 * @example
 * &#60;xb-ico disabled type="attention">&#60;/xb-ico>
 * <xb-ico disabled type="attention"></xb-ico>
 *
 * @example
 * &#60;xb-ico active type="attention">&#60;/xb-ico>
 * <xb-ico active type="attention"></xb-ico>
 *
 * @example
 * &#60;xb-ico size="m" type="attention">&#60;/xb-ico>
 * <xb-ico size="m" type="attention"></xb-ico>
 *
 * @class xb.Ico
 * @memberof xb
 * @augments HTMLElement
 * @mixes xblocks.mixin.eDisabled
 */
module.exports = xblocks.create('xb-ico', [
    require('mixin/element/disabled'),

    {
        'accessors': {
            'active': {
                'attribute': {
                    'boolean': true
                }
            }
        }
    }
]);

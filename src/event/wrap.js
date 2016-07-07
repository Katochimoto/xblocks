import context from 'context';
import ConstantEvent from 'constants/event';

const doc = context.document;
const html = doc.documentElement;
const hop = Object.prototype.hasOwnProperty;
const clickWhich = {
    1: 'left',
    2: 'center',
    3: 'right'
};

/**
 * @param {Event} event
 * @returns {Event}
 */
export default function (event) {
    if (event.hasOwnProperty(ConstantEvent.WRAP)) {
        return event;
    }

    event[ ConstantEvent.WRAP ] = true;

    if (event.srcElement && !event.target) {
        event.target = event.srcElement;
    }

    if (!event.relatedTarget && event.fromElement) {
        event.relatedTarget = (event.fromElement === event.target) ? event.toElement : event.fromElement;
    }

    if (!hop.call(event, 'pageX') && hop.call(event, 'clientX')) {
        event.pageX = event.clientX;
        event.pageY = event.clientY;

        if (html) {
            event.pageX += html.scrollLeft - (html.clientLeft || 0);
            event.pageY += html.scrollTop - (html.clientTop || 0);

        } else if (doc.body) {
            event.pageX += doc.body.scrollLeft;
            event.pageY += doc.body.scrollTop;
        }
    }

    if (!event.which && event.button) {
        /* jshint -W016 */
        if (event.button & 1) {
            event.which = 1;

        } else if (event.button & 4) {
            event.which = 2;

        } else if (event.button & 2) {
            event.which = 3;
        }
    }

    if (event.which) {
        event.whichStr = clickWhich[ event.which ];
    }

    return event;
}

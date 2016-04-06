import { event as xevent } from 'xblocks-core';
import delegate from 'event/delegate';
import filterClick from 'event/filterClick';
import filterMouse from 'event/filterMouse';
import matchesSelector from 'dom/matchesSelector';
import eachAfter from 'dom/eachAfter';
import eachBefore from 'dom/eachBefore';
import index from 'dom/index';
import merge from 'lodash/merge';
import throttle from 'lodash/throttle';

const pop = Array.prototype.pop;
const slice = Array.prototype.slice;
const EVENT_BLUR = 'xb-blur';
const EVENT_FOCUS = 'xb-focus';

export default class TableNavigator {
    constructor(node, options) {
        this._options = merge({
            col: 'xb-menu:not([disabled])',
            row: 'xb-menuitem:not([disabled])',
            colLoop: false,
            rowLoop: false
        }, options);

        this._node = node;
        this._item = undefined;
        this._originalEvent = undefined;

        this._onKeydown = this._onKeydown.bind(this);
        this._onMouseover = delegate(this._options.row, this._onMouseover.bind(this));
        this._onMouseout = delegate(this._options.row, this._onMouseout.bind(this));
        this._onMousemove = throttle(delegate(this._options.row, this._onMouseAction.bind(this)));
        this._onClick = filterClick('left', delegate(this._options.row, this._onMouseAction.bind(this)));

        this._bind();
    }

    destroy() {
        this._unbind();
        this._node = undefined;
        this._originalEvent = undefined;
        this.blurItem();
    }

    getItem() {
        return this._item;
    }

    blurItem() {
        if (this._item) {
            let item = this._item;
            this._item = undefined;
            xevent.dispatch(item, EVENT_BLUR);
        }
    }

    _bind() {
        this._node.addEventListener('keydown', this._onKeydown, false);
        this._node.addEventListener('click', this._onClick, false);
        this._node.addEventListener('mouseover', this._onMouseover, false);
        this._node.addEventListener('mouseout', this._onMouseout, false);
        this._node.addEventListener('mousemove', this._onMousemove, false);
    }

    _unbind() {
        this._node.removeEventListener('keydown', this._onKeydown, false);
        this._node.removeEventListener('click', this._onClick, false);
        this._node.removeEventListener('mouseover', this._onMouseover, false);
        this._node.removeEventListener('mouseout', this._onMouseout, false);
        this._node.removeEventListener('mousemove', this._onMousemove, false);
    }

    _col(item) {
        if (!item) {
            return;
        }

        var col = item;
        while ((col = col.parentNode)) {
            if (matchesSelector(col, this._options.col)) {
                return col;
            }

            if (col === this._node) {
                break;
            }
        }
    }

    _colFirst() {
        return this._node.querySelector(this._options.col) || this._node;
    }

    _colLast() {
        return pop.call(slice.call(this._node.querySelectorAll(this._options.col))) || this._node;
    }

    _colMatchIterate(data, element) {
        if (matchesSelector(element, this._options.col)) {
            data.col = element;
            return false;
        }
    }

    _colNext(col) {
        var data = {};
        eachAfter(col, this._colMatchIterate.bind(this, data), this._node, false);
        return data.col;
    }

    _colPrev(col) {
        var data = {};
        eachBefore(col, this._colMatchIterate.bind(this, data), this._node, false);
        return data.col;
    }

    _rowFirst(col) {
        return col.querySelector(this._options.row);
    }

    _rowLast(col) {
        return pop.call(slice.call(col.querySelectorAll(this._options.row)));
    }

    _rowMatchIterate(data, element) {
        if (matchesSelector(element, this._options.row)) {
            data.row = element;
            return false;
        }
    }

    _rowNext(row) {
        var data = {};
        eachAfter(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
        return data.row;
    }

    _rowPrev(row) {
        var data = {};
        eachBefore(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
        return data.row;
    }

    _rowIndex(row) {
        return index(this._options.row, row, this._col(row));
    }

    _rowByIndex(col, idx) {
        return col.querySelectorAll(this._options.row)[ idx ];
    }

    _focus(element) {
        if (element === this._item) {
            return;
        }

        if (this._item) {
            xevent.dispatch(this._item, EVENT_BLUR, {
                detail: { originalEvent: this._originalEvent }
            });
        }

        this._item = element;
        xevent.dispatch(this._item, EVENT_FOCUS, {
            detail: { originalEvent: this._originalEvent }
        });
    }

    _onKeydown(event) {
        if (event.altKey || event.metaKey || event.shiftKey) {
            return;
        }

        var action;

        switch (event.keyCode) {
        case 37: // ArrowLeft
            action = '_onArrowLeft';
            break;
        case 38: // ArrowUp
            action = '_onArrowUp';
            break;
        case 39: // ArrowRight
            action = '_onArrowRight';
            break;
        case 40: // ArrowDown
            action = '_onArrowDown';
            break;
        }

        if (!action) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this._originalEvent = event;

        this[ action ]();
    }

    _onMouseAction(event) {
        if (!this._item || this._item !== event.delegateElement) {
            this._originalEvent = event;
            this._focus(event.delegateElement);
        }
    }

    _onMouseover(event) {
        filterMouse(event.delegateElement, event, this._onMouseAction.bind(this));
    }

    _onMouseout(event) {
        filterMouse(event.delegateElement, event, this._onMouseAction.bind(this));
    }

    _onArrowLeft() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            let idx = this._rowIndex(this._item);
            let col = this._colPrev(this._col(this._item));

            if (!col) {
                col = this._colLast();
                if (!this._options.colLoop) {
                    idx--;
                }
            }

            let row = this._rowByIndex(col, idx);

            if (!row) {
                row = this._rowLast(col);
            }

            this._focus(row);
        }
    }

    _onArrowRight() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            let idx = this._rowIndex(this._item);
            let col = this._colNext(this._col(this._item));

            if (!col) {
                col = this._colFirst();
                if (!this._options.colLoop) {
                    idx++;
                }
            }

            let row = this._rowByIndex(col, idx);

            if (!row) {
                row = this._rowFirst(col);
            }

            this._focus(row);
        }
    }

    _onArrowUp() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            let row = this._rowPrev(this._item);

            if (!row) {
                let col;

                if (this._options.rowLoop) {
                    col = this._col(this._item);

                } else {
                    col = this._colPrev(this._col(this._item)) || this._colLast();
                }

                row = this._rowLast(col);
            }

            this._focus(row);
        }
    }

    _onArrowDown() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            let row = this._rowNext(this._item);

            if (!row) {
                let col;

                if (this._options.rowLoop) {
                    col = this._col(this._item);

                } else {
                    col = this._colNext(this._col(this._item)) || this._colFirst();
                }

                row = this._rowFirst(col);
            }

            this._focus(row);
        }
    }
}

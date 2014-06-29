/* global xblocks */
/* jshint strict: false */

xblocks.mixin.vChecked = {
    isChecked: function() {
        return this.refs.checkControl.getDOMNode().checked;
    },

    _onChangeCheckedApply: function(checkedList) {
        this.setState({
            'checked': checkedList[checkedList.length - 1]
        });
    },

    /**
     * Remember current checked in state
     * @param {Event} event
     * @private
     */
    _onChangeChecked: function(event) {
        xblocks.utils.lazy(this._onChangeCheckedApply, event.target.checked);
    }
};

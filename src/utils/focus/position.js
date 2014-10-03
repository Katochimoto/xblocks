xblocks.utils.focusPosition = function() {
    return (function() {
        var position = {};
        var row = -1;
        var col = -1;

        Object.defineProperties(position, {
            'row': {
                get: function() {
                    return (row < 0 ? 0 : row);
                },

                set: function(value) {
                    row = Math.max(value, 0);
                }
            },

            'col': {
                get: function() {
                    return (col < 0 ? 0 : col);
                },

                set: function(value) {
                    col = Math.max(value, 0);
                }
            },

            'nextRow': {
                get: function() {
                    return (row < 0 ? 0 : row + 1);
                }
            },

            'prevRow': {
                get: function() {
                    return (row < 0 ? 0 : row - 1);
                }
            }
        });

        return position;

    }());
};

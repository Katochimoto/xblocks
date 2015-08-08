yr.externals.uid = (function() {
    var uid = 0;
    return function() {
        return uid++;
    };
}());

yr.externals.loc = function(key) {
    return loc(key);
};

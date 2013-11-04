var fs_ = require('fs');
var path_ = require('path');
var nopt = require('nopt');
var stylus = require('stylus');
var autoprefixer = require('autoprefixer');

var CURDIR = path_.dirname(__dirname);

var opts = {
    styl: [String],
    css: [String],
    ie: [Boolean]
};

var args = nopt(opts, {}, process.argv, 2);
var filename = path_.basename(args.css);

if (filename[0] === '_') {
    return;
}


var content = [
    'ie = false;',
    '@import "' + CURDIR + '/node_modules/stylobate";',
    'rem = rem_px;',
    '@import "' + CURDIR + '/node_modules/stylobate-islands";',
    'set-skin-namespace(\'islands\');',
    '@import "' + CURDIR + '/src/_colors.styl";',
    '@import "' + CURDIR + '/src/_layout.styl";',
    '@import "' + args.styl + '";'
].join('\n');


var style = stylus(content)
    .set('filename', filename)
    .set('resolve url', true)
    .define('url', stylus.resolver());


style.render(function(err, css) {
    if (err) {
        throw err;
    }

    if (!args.ie) {
        css = autoprefixer.compile(css);
    }

    fs_.writeFileSync(args.css, css);
    console.log('WRITE FILE: ', args.css);
});

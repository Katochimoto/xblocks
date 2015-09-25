var path = require('path');
var webpack = require('webpack');
var merge = require('./lodash/object/merge');

var src = path.join(__dirname, 'src');
var dist = path.join(__dirname, 'dist');

var dedupe = new webpack.optimize.DedupePlugin();

var define = new webpack.DefinePlugin({
    'NODE_ENV': 'production'
});

var uglify = new webpack.optimize.UglifyJsPlugin({
    'output': {
        'comments': false
    },
    'compress': {
        'warnings': false
    }
});

var params = {
    'entry': './index.js',
    'context': src,
    'output': {
        'path': dist,
        'filename': 'xblocks.js',
        'library': 'xblocks',
        'libraryTarget': 'umd'
    },
    'resolve': {
        'alias': {
            '_': path.join(__dirname, 'lodash'),
            'context': path.join(src, 'context'),
            'mixin': path.join(src, 'mixin'),
            'utils': path.join(src, 'utils')
        }
    },
    'externals': {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'xtag': 'xtag',
        'xblocks': 'xblocks'
    },
    'plugins': [ define, dedupe ],
    'module': {
        'loaders': [
            {
                'test': /\.jsx?$/,
                'loader': 'babel',
                'include': [ src ]
            },
            {
                'test': /\.styl$/,
                'loader': 'style-loader!css-loader!stylus-loader'
            }
        ]
    }
};

module.exports = [
    merge({}, params),
    merge({}, params, {
        'output': {
            'filename': 'xblocks.min.js'
        },
        'plugins': [ define, dedupe, uglify ]
    })
];

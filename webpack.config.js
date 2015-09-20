var path = require('path');
var webpack = require('webpack');
var src = path.join(__dirname, 'src');

module.exports = {
    'context': path.join(__dirname, 'src'),
    'output': {
        'path': path.join(__dirname, 'dist'),
        'library': 'xblocks',
        'libraryTarget': 'umd'
    },
    'resolve': {
        'modulesDirectories': [
            'node_modules'
        ],
        'alias': {
            'xblocks': 'xblocks-core/src/xblocks',
            'xblocks-utils': 'xblocks-utils/src/xblocks',
            'context': path.join(src, 'context'),
            'utils': path.join(src, 'utils'),
            'mixin': path.join(src, 'mixin')
        }
    },
    'externals': {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'xtag': 'xtag',
        'xblocks': 'xblocks'
    },
    'plugins': [
        new webpack.DefinePlugin({
            'DEBUG': false,
            'DEBUG_TIME': false,
            'NODE_ENV': 'production'
        })
    ],
    'module': {
        'loaders': [
            {
                'test': /\.jsx$/,
                'exclude': /(node_modules|bower_components)/,
                'loader': 'babel'
            },
            {
                'test': /\.styl$/,
                'loader': 'style-loader!css-loader!stylus-loader'
            }
        ]
    }
};

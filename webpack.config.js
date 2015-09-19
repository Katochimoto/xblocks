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
            'web_modules',
            'node_modules'
        ],
        'alias': {
            'xblocks': 'xblocks-core/src/xblocks', // || xblocks-utils/src/xblocks
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
    ]
};

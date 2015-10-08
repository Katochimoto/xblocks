var path = require('path');
var webpack = require('webpack');
var merge = require('./lodash/object/merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var src = path.join(__dirname, 'src');
var dist = path.join(__dirname, 'dist');
var isDev = (process.env.NODE_ENV === 'development');
var nodeEnv = isDev ? 'development' : 'production';
var preprocessParams = '?NODE_ENV=' + nodeEnv;
var envParams = {};

if (isDev) {
    dist = path.join(__dirname, 'samples', 'dist');
    preprocessParams = '?+DEBUG&NODE_ENV=' + nodeEnv;
    envParams = {
        'debug': true,
        'devtool': 'eval'
    };
}

var dedupe = new webpack.optimize.DedupePlugin();

var define = new webpack.DefinePlugin({
    'NODE_ENV': nodeEnv
});

var uglify = new webpack.optimize.UglifyJsPlugin({
    'output': {
        'comments': false
    },
    'compress': {
        'warnings': false
    }
});

var extractText = new ExtractTextPlugin('[name].css');

var params = {
    'entry': {
        'xblocks': './index.js'
    },
    'context': src,
    'output': {
        'path': dist,
        'filename': '[name].js',
        'library': '[name]',
        'libraryTarget': 'umd'
    },
    'resolve': {
        'alias': {
            '_': path.join(__dirname, 'lodash'),
            'context': path.join(src, 'context'),
            'mixin': path.join(src, 'mixin'),
            'utils': path.join(src, 'utils'),
            'dom': path.join(src, 'dom'),
            'event': path.join(src, 'event'),
            'polyfills': path.join(src, 'polyfills')
        }
    },
    'externals': {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'xtag': 'xtag',
        'xblocks': 'xblocks',
        'tether': 'Tether'
    },
    'plugins': [ define, dedupe, extractText ],
    'module': {
        'preLoaders': [
            {
                'test': /\.jsx?$/,
                'loader': 'eslint',
                'include': [ src ]
            }
        ],
        'loaders': [
            {
                'test': /\.jsx?$/,
                'loader': 'babel!preprocess' + preprocessParams,
                'include': [ src ]
            },
            {
                'test': /\.css$/,
                'loader': ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                'test': /\.styl$/,
                'loader': ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
            },
            {
                'test': /\.(gif|png|jpe?g|svg)$/i,
                'loader': 'url'
            }
        ]
    }
};

var runs = [
    merge({}, params, envParams)
];

if (!isDev) {
    runs.push(merge({}, params, {
        'output': {
            'filename': 'xblocks.min.js'
        },
        'plugins': [ define, dedupe, uglify, extractText ]
    }));
}

module.exports = runs;

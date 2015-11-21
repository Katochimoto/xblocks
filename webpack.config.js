var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
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
                'loader': ExtractTextPlugin.extract('style', 'css!postcss')
            },
            {
                'test': /\.styl$/,
                'loader': ExtractTextPlugin.extract('style', 'css!postcss!stylus')
            },
            {
                'test': /\.(gif|png|jpe?g|svg)$/i,
                'loader': 'url'
            }
        ]
    },
    'postcss': function () {
        return [
            autoprefixer({
                'browsers': [
                    '> 1%',
                    'Firefox >= 14',
                    'Opera >= 12',
                    'Chrome >= 4'
                ]
            })
        ];
    }
};

var runs = [
    merge({}, params, envParams)
];

if (!isDev) {
    runs.push(merge({}, params, {
        'devtool': '#source-map',
        'output': {
            'filename': 'xblocks.min.js'
        },
        'plugins': [ define, dedupe, uglify, extractText ]
    }));
}

module.exports = runs;

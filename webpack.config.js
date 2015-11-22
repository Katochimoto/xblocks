var path = require('path');
var webpack = require('webpack');
var stylus = require('stylus');
var autoprefixer = require('autoprefixer');
var merge = require('./lodash/object/merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var srcPath = path.join(__dirname, 'src');
var distPath = path.join(__dirname, 'dist');
var isDev = (process.env.NODE_ENV === 'development');
var nodeEnv = isDev ? 'development' : 'production';

var extractText = new ExtractTextPlugin('[name].css', { 'allChunks': true });
var dedupe = new webpack.optimize.DedupePlugin();
var define = new webpack.DefinePlugin({ NODE_ENV: nodeEnv });
var uglify = new webpack.optimize.UglifyJsPlugin({
    output: { comments: false },
    compress: { warnings: false }
});

var params = {
    'debug': isDev,
    'devtool': isDev ? 'eval' : undefined,
    'target': 'web',
    'entry': {
        'xblocks': './index.js'
    },
    'context': srcPath,
    'output': {
        'filename': '[name].js',
        'library': '[name]',
        'libraryTarget': 'umd',
        'path': distPath
    },
    'resolve': {
        'extensions': [ '', '.js', '.jsx', '.styl' ],
        'alias': {
            '_': path.join(__dirname, 'lodash'),
            'blocks': path.join(srcPath, 'blocks'),
            'context': path.join(srcPath, 'context'),
            'dom': path.join(srcPath, 'dom'),
            'event': path.join(srcPath, 'event'),
            'mixin': path.join(srcPath, 'mixin'),
            'polyfills': path.join(srcPath, 'polyfills'),
            'utils': path.join(srcPath, 'utils')
        }
    },
    'externals': {
        'react-dom': 'ReactDOM',
        'react': 'React',
        'tether': 'Tether',
        'xblocks': 'xblocks',
        'xtag': 'xtag'
    },
    'plugins': [ define, dedupe, extractText ],
    'module': {
        'preLoaders': [
            {
                'test': /\.jsx?$/,
                'loader': 'eslint',
                'include': [ srcPath ]
            }
        ],
        'loaders': [
            {
                'test': /\.jsx?$/,
                'loader': 'babel!preprocess?NODE_ENV=' + nodeEnv,
                'include': [ srcPath ]
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
    },
    'stylus': {
        'stylusRequire': stylus
    }
};

var runs = [ params ];

runs.push(merge({}, params, {
    'devtool': '#source-map',
    'output': {
        'filename': 'xblocks.min.js'
    },
    'plugins': [ define, dedupe, uglify, extractText ]
}));

module.exports = runs;

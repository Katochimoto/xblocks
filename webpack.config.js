var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var clientPath = path.join(__dirname, 'client');
var componentsPath = path.join(__dirname, 'node_modules');
var docsPath = path.join(__dirname, 'docs');
var resourcesPath = path.join(__dirname, 'resources');

var isDev = true; // process.env.NODE_ENV === 'development';

module.exports = {
    'debug': isDev,
    'devtool': '#source-map',
    'target': 'web',
    'context': clientPath,
    'entry': {
        'vendor': [
            'es5-shim',
            'react',
            'react-dom',
            'react-addons-pure-render-mixin',
            'react-router',
            'history',
            'lodash',
            'classnames',
            'tether',
            'resources/prism',
            'xtag',
            'xblocks-core',
            'xblocks'
        ],
        'index': './index.js'
    },
    'output': {
        'chunkFilename': '[name].js',
        'crossOriginLoading': 'use-credentials',
        'filename': '[name].js',
        'libraryTarget': 'umd',
        'path': docsPath
    },
    'resolve': {
        'modulesDirectories': [ 'node_modules', 'lib/xblocks-core/dist', 'lib/xblocks/dist' ],
        'extensions': [ '', '.js', '.styl' ],
        'alias': {
            'components': path.join(clientPath, 'components'),
            'resources': resourcesPath,
            'ui': path.join(clientPath, 'ui')
        }
    },
    'plugins': [
        new webpack.ProvidePlugin({
            '_': 'lodash',
            'React': 'react',
            'ReactDOM': 'react-dom',
            'ReactDOMServer': 'react-dom/server'
        }),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            'name': 'vendor',
            'filename': '[name].js',
            'minChunks': Infinity
        }),
        new ExtractTextPlugin('[name].css', {
            'allChunks': true
        }),
        new webpack.optimize.UglifyJsPlugin({
            'output': {
                'comments': false
            },
            'compress': {
                'warnings': false
            }
        }),
        new HtmlWebpackPlugin({
            'title': 'Xblocks',
            'inject': 'body',
            'hash': true,
            'minify': {
                'removeComments': true,
                'collapseWhitespace': true,
                'preserveLineBreaks': true
            }
        })
    ],
    'module': {
        'preLoaders': [
            {
                'test': /\.jsx?$/,
                'loader': 'eslint',
                'include': [ clientPath ]
            }
        ],
        'loaders': [
            {
                'test': /\.js?$/,
                'loader': 'babel',
                'include': [
                    clientPath,
                    componentsPath
                ]
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
                'loader': 'url?limit=30000&name=[name].[ext]'
            },
            {
                'test': /\.(ttf|eot|woff2|woff)$/i,
                'loader': 'file?name=[name].[ext]'
            },
            {
                'test': /\.txt$/i,
                'loader': 'text'
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

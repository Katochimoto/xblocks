var path = require('path');
var webpack = require('webpack');
var src = path.join(__dirname, 'src');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],


        // list of files / patterns to load in the browser
        files: [
            'test/helpers/setup.js',

            'bower_components/vow/vow.min.js',
            'bower_components/es5-shim/es5-shim.js',
            'bower_components/react/react-with-addons.js',
            'bower_components/react/react-dom.js',
            'bower_components/xblocks-core/dist/xblocks-core-full.js',

            'src/xblocks.js',
            'test/spec/**/*.js'
        ],


        // list of files to exclude
        exclude: [

        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.js': [ 'webpack' ],
            'src/**/*.js': [ 'webpack' ],
            '**/*.jsx': [ 'babel' ]
        },

        webpack: {
            'externals': {
                'react': 'React',
                'react-dom': 'ReactDOM',
                'xtag': 'xtag',
                'vow': 'vow',
                'xblocks': 'xblocks',
                'tether': 'Tether'
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
            'plugins': [
                new webpack.DefinePlugin({
                    'NODE_ENV': 'development'
                })
            ],
            'module': {
                'loaders': [
                    {
                        'test': /\.jsx?$/,
                        'loader': 'babel!preprocess?NODE_ENV=development',
                        'include': [
                            path.join(__dirname, 'src'),
                            path.join(__dirname, 'test')
                        ]
                    }
                ]
            }
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'PhantomJS',
            'ChromeCanary',
            'Firefox',
            'FirefoxDeveloperEdition',
            'Safari',
            'Opera',

            //'Firefox5',
            //'Firefox6',
            //'Firefox10',
            //'Firefox11',
            //'Firefox12',
            //'Firefox13',

            'Firefox14',
            'Firefox15',
            'Firefox19',
            'Firefox30',
            'Firefox32'
        ],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};

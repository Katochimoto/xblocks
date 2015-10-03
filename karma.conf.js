// Karma configuration
// Generated on Tue Jun 03 2014 00:28:29 GMT+0400 (MSK)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-expect'],


        // list of files / patterns to load in the browser
        files: [
            'test/helpers/setup.js',

            'node_modules/vow/lib/vow.js',
            'bower_components/es5-shim/es5-shim.js',
            'bower_components/react/react-with-addons.js',
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
            '**/*.js': [ 'borschik' ],
            '**/*.jsx': [ 'babel' ]
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

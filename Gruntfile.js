module.exports = function(grunt) {

    //build/freeze.json: $(CSS) node_modules
    //$(NPM_BIN)/borschik --tech=json --input=freeze.json --output=$@

    //./node_modules/.bin/jshint .
    //./node_modules/.bin/jscs .
 	//./node_modules/.bin/mocha --reporter dot $(TESTS

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src',
            dest: 'build/<%= pkg.name %>'
        },

        // @see https://github.com/karma-runner/grunt-karma
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                autoWatch: true
                //background: true
            }
        },

        watch: {
            //karma: {
            //    files: ['test/**/*.js'],
            //    tasks: ['karma:unit:run']
            //},

            'src-js': {
                files: [
                    '<%= dirs.src %>/**/*.js'
                ],
                tasks: ['src-js']
            },
            'src-styl': {
                files: [
                    '<%= dirs.src %>/**/*.styl',
                    '../node_modules/stylobate/**/*.styl',
                    '../node_modules/stylobate-islands/**/*.styl'
                ],
                tasks: ['src-styl']
            },
            'src-react': {
                files: [
                    '<%= dirs.src %>/**/*.jsx'
                ],
                tasks: ['src-js']
            }
        },



        borschik: {
            'js': {
                options: {
                    freeze: true,
                    minimize: false
                },
                src: 'src/xblocks.js',
                dest: 'src/_xblocks.js'
            },

            'js-minimize': {
                options: {
                    minimize: true
                },
                src: 'src/_xblocks.js',
                dest: 'src/_xblocks.min.js'
            },

            'css-minimize': {
                options: {
                    minimize: true
                },
                src: 'src/xblocks.css',
                dest: 'src/xblocks.min.css'
            },

            'css-freeze': {
                options: {
                    freeze: true,
                    minimize: false
                },
                src: 'src/xblocks.css',
                dest: 'src/_xblocks.css'
            }
        },

        stylus: {
            main: {
                options: {
                    compress: false,
                    linenos: false,
                    urlfunc: 'embedurl',
                    'resolve url': true,
                    use: [
                        require('autoprefixer-stylus')
                    ],
                    define: {
                        ie: false,
                        ns: 'xb'
                    }
                },
                files: {
                    'src/xblocks.css': 'src/xblocks.styl'
                }
            }
        },

        modernizr: {
            dist: {
                devFile: 'remote',
                outputFile: 'bower_components/modernizr.js',
                extra: {
                    shiv: false,
                    printshiv: false,
                    load: false,
                    mq: false,
                    cssclasses: false
                },
                extensibility: {
                    addtest: true
                },
                uglify: false,
                parseFiles: false,
                tests: [
                    'postmessage', 'style_scoped'
                ],
                customTests: [
                    'src/external/modernizr.tests.js'
                ]
            }
        },

        react: {
            dynamic_mappings: {
                files: [
                    {
                        expand: true,
                        cwd: 'src',
                        src: ['**/*.jsx'],
                        dest: 'src',
                        ext: '.jsx.js'
                    }
                ]
            }
        },


        rename: {
            'css-freeze': {
                files: [
                    {
                        src: 'src/_xblocks.css',
                        dest: 'src/xblocks.css'
                    }
                ]
            }
        },

        copy: {
            css: {
                files: [
                    {
                        expand: true,
                        cwd: 'src/',
                        src: 'pic/*',
                        dest: 'build/'
                    },
                    {
                        src: 'src/xblocks.css',
                        dest: 'build/xblocks.css'
                    },
                    {
                        src: 'src/xblocks.min.css',
                        dest: 'build/xblocks.min.css'
                    }
                ]
            },
            js: {
                files: [
                    {
                        src: 'src/_xblocks.js',
                        dest: 'build/xblocks.js'
                    },
                    {
                        src: 'src/_xblocks.min.js',
                        dest: 'build/xblocks.min.js'
                    }
                ]
            }
        },

        clean: {
            'dest': '<%= dirs.dest %>',
            'css-src': [
                'src/pic/',
                'src/xblocks.css',
                'src/xblocks.min.css'
            ],
            'js-src': [
                'src/_xblocks.js',
                'src/_xblocks.min.js'
            ]
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-borschik');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-rename');
    grunt.loadNpmTasks('grunt-contrib-copy');


    grunt.registerTask('src-styl', [
        'stylus',
        'borschik:css-freeze',
        'rename:css-freeze',
        'borschik:css-minimize',
        'copy:css',
        'clean:css-src'
    ]);

    grunt.registerTask('src-js', [
        'react',
        'borschik:js',
        'borschik:js-minimize',
        'copy:js',
        'clean:js-src'
    ]);

    grunt.registerTask('default', [
        //'modernizr',
        'clean:dest',
        'src-styl',
        'src-js'
    ]);
};

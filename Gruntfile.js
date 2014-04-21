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

        clean: {
            'dest': '<%= dirs.dest %>'
        },

        borschik: {
            'js': {
                options: {
                    minimize: 'no'
                },
                src: '<%= dirs.src %>/xblocks.js',
                dest: '<%= dirs.dest %>/<%= pkg.name %>.js'
            },

            'js-minimize': {
                options: {
                    minimize: 'yes'
                },
                src: '<%= dirs.dest %>/<%= pkg.name %>.js',
                dest: '<%= dirs.dest %>/<%= pkg.name %>.min.js'
            },

            'css-minimize': {
                options: {
                    minimize: 'yes'
                },
                src: '<%= dirs.dest %>/<%= pkg.name %>.css',
                dest: '<%= dirs.dest %>/<%= pkg.name %>.min.css'
            }
        },

        stylus: {
            main: {
                options: {
                    compress: false,
                    linenos: true,
                    urlfunc: 'embedurl',
                    use: [
                        require('autoprefixer-stylus')
                    ],
                    define: {
                        ie: false
                    }
                },
                files: {
                    '<%= dirs.dest %>/<%= pkg.name %>.css': '<%= dirs.src %>/xblocks.styl'
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
        }

    });

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-borschik');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-react');


    grunt.registerTask('src-styl', [
        'stylus',
        'borschik:css-minimize'
    ]);

    grunt.registerTask('src-js', [
        'react',
        'borschik:js',
        'borschik:js-minimize'
    ]);

    grunt.registerTask('default', [
        'modernizr',
        'clean:dest',
        'src-styl',
        'src-js'
    ]);
};

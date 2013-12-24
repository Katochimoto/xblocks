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
            dest: 'build/<%= pkg.name %>/<%= pkg.version %>'
        },

        watch: {
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
            'src-yate': {
                files: [
                    '<%= dirs.src %>/**/*.yate'
                ],
                tasks: ['src-yate']
            }
        },

        clean: {
            'dest': '<%= dirs.dest %>',
            'yate-tmp': '<%= dirs.dest %>/blocks'
        },

        borschik: {
            'js': {
                options: {
                    minimize: 'no'
                },
                src: '<%= dirs.src %>/main.js',
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
            },

            'yate-minimize': {
                options: {
                    minimize: 'yes'
                },
                src: '<%= dirs.dest %>/<%= pkg.name %>.yate.js',
                dest: '<%= dirs.dest %>/<%= pkg.name %>.min.yate.js'
            }
        },

        concat: {
            yate: {
                options: {
                    separator: '\n;\n'
                },
                files: {
                    '<%= dirs.dest %>/<%= pkg.name %>.yate.js': [
                        '<%= dirs.src %>/lib/**/*.yate.js',
                        '<%= dirs.dest %>/blocks/*.yate.js'
                    ]
                }
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
                    '<%= dirs.dest %>/<%= pkg.name %>.css': '<%= dirs.src %>/main.styl'
                }
            }
        },

        yate: {
            // формирование общих модулей
            modules: {
                options: {},
                src: '<%= dirs.src %>/lib/yate/<%= pkg.name %>.yate',
                dest: '<%= dirs.src %>/lib/yate/<%= pkg.name %>.yate.js'
            },

            blocks: {
                options: {
                    import: [
                        '<%= dirs.src %>/lib/**/*.yate.obj'
                    ]
                },
                files: [
                    {
                        dest: '<%= dirs.dest %>/blocks/',
                        src: '<%= dirs.src %>/blocks/**/*.yate',
                        ext: '.yate.js',
                        expand: true,
                        flatten: true
                    }
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-borschik');
    grunt.loadNpmTasks('grunt-yate');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('src-yate', [
        'yate',
        'concat:yate',
        'borschik:yate-minimize',
        'clean:yate-tmp'
    ]);

    grunt.registerTask('src-styl', [
        'stylus',
        'borschik:css-minimize'
    ]);

    grunt.registerTask('src-js', [
        'borschik:js',
        'borschik:js-minimize'
    ]);

    grunt.registerTask('default', [
        'clean:dest',
        'src-yate',
        'src-styl',
        'src-js'
    ]);
};

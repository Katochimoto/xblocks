module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src',
            dest: 'build/<%= pkg.name %>/<%= pkg.version %>'
        },

        borschik: {
            main: {
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
                src: '<%= dirs.dest %>/blocks/*.yate.js',
                dest: '<%= dirs.dest %>/<%= pkg.name %>.yate.js'
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
            main: {
                options: {},
                src: '<%= dirs.src %>/lib/yate/<%= pkg.name %>.yate',
                dest: '<%= dirs.src %>/lib/yate/<%= pkg.name %>.yate.js'
            },

            blocks: {
                options: {
                    modules: [
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

    grunt.loadNpmTasks('grunt-borschik');
    grunt.loadNpmTasks('grunt-yate');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['stylus', 'yate', 'concat', 'borschik']);
};

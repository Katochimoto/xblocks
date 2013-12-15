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
                dest: '<%= dirs.dest %>/main.js'
            },

            uglify: {
                options: {
                    minimize: 'yes'
                },
                src: '<%= dirs.dest %>/main.js',
                dest: '<%= dirs.dest %>/main.min.js'
            }
        },

        yate: {
            options: {},
            dist: {
                files: {
                    '<%= dirs.dest %>/main.yate.js': [
                        '<%= dirs.src %>/lib/yate/*.yate',
                        '<%= dirs.src %>/blocks/**/*.yate'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-borschik');
    grunt.loadNpmTasks('grunt-yate');

    grunt.registerTask('default', ['borschik']);
};

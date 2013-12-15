module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        dirs: {
            src: 'src',
            dest: 'build/<%= pkg.name %>/<%= pkg.version %>/src'
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
        }


    });

    grunt.loadNpmTasks('grunt-borschik');

    grunt.registerTask('default', ['borschik']);
};

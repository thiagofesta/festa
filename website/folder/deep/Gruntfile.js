/*global module:false*/
module.exports = function(grunt) {
    
    // Project configuration.
    grunt.initConfig({
        jshint: {
            options: {
                strict: true,
                forin: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                indent: 4,
                globals: {
                    jQuery: true,
                    $: true
                }
            },
            grunt: {
                options: {
                    strict: false
                },
                src: [
                    'Gruntfile.js'
                ]
            },
            allcode: {
                src: [
                    'js/**/*.js',
                    '!js/**/*.min.js',
                    '!js/**/*-min.js',
                    '!js/vendor/**/*.js'
                ]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    
    grunt.registerTask('default', ['jshint']);
    grunt.registerTask('travis', ['jshint']);

};
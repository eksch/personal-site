module.exports = function (grunt) {
    
    "use strict";
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
                     
        sass: {
            build: {
                files: { 'css/styles.css': 'css/styles.scss' }
            }
        },
                     
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie >= 9']
            },
            no_dest: {
                src: 'css/styles.css'
            }
        },
                             
        watch: {
            build: {
                files: ['css/*.scss'],
                tasks: ['sass', 'autoprefixer']
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('build-sass', ['sass', 'autoprefixer']);
    grunt.registerTask('watch-sass', ['watch']);

};
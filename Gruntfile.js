
'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
            cucumberjs: {
                options: {
                    format: 'html',
                    output: 'test/report/report.html',
                    theme: 'bootstrap',
                    tags: grunt.option('tags'),
                    strict: '',
                    saveJson: true,
                    debug: true
                },
                my_features: ['test/features/']
            }
        });

    grunt.loadNpmTasks('grunt-cucumberjs');

    grunt.loadNpmTasks('grunt-debug-task');

    grunt.registerTask('default', ['jshint', 'nodemon']);

};


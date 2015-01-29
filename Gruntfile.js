
'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
            cucumberjs: {
                options: {
                    format: 'html',
                    output: 'test/report/report.html',
                    theme: 'bootstrap'
                },
                my_features: ['test/features/']
            }
        });

    grunt.loadNpmTasks('grunt-cucumberjs');

    grunt.registerTask('default', ['jshint', 'nodemon']);

};


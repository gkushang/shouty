'use strict';

module.exports = function cucumberjs(grunt) {

    grunt.loadNpmTasks('grunt-cucumberjs');

    return {
        'all': {
            options: {
                format: 'html',
                output: 'test/report/cucumber_report.html',
                theme: 'bootstrap',
                tags: grunt.option('tags'),
                saveJson: true,
                debug: true,
                strict: true
            },
            src: ['test/features/']
        },
        'smoke': {
            options: {
                format: 'html',
                output: 'test/report/smoke_cucumber_report.html',
                theme: 'bootstrap',
                tags: grunt.option('tags') || '@smoke',
                saveJson: true,
                debug: true
            },
            src: ['test/features/']
        }
    };
};

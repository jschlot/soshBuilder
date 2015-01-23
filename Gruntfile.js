module.exports = function (grunt) {

    grunt.initConfig({

        'pkg': grunt.file.readJSON('package.json'),

        'meta': {
            'jsFilesForTesting': [
                'test/**/*Spec.js'
            ]
        },

        'karma': {
            'development': {
                'configFile': 'karma.conf.js',
                'options': {
                    'files': [
                        '<%= meta.jsFilesForTesting %>',
                        'source/**/*.js'
                    ]
                }
            }
        },

        protractor: {
            options: {
                keepAlive: true,
                configFile: "protractor.conf.js"
            },
            singlerun: {},
            auto: {
                keepAlive: true,
                options: {
                    args: {
                        seleniumPort: 4444
                    }
                }
            }
        },

        'jshint': {
            'myFiles': ['source/*.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');

    grunt.registerTask('default', ['jshint:myFiles']);
    grunt.registerTask('unit', ['karma:development']);
    grunt.registerTask('e2e', ['protractor:singlerun']);
    grunt.registerTask('test', ['karma:development','protractor:singlerun']);
    grunt.registerTask('lint', ['jshint:myFiles']);

};

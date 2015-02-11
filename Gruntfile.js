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

        'protractor': {
            'options': {
                'keepAlive': true,
                'configFile': "protractor.conf.js"
            },
            'singlerun': {},
            'auto': {
                'keepAlive': true,
                'options': {
                    'args': {
                        'seleniumPort': 4444
                    }
                }
            }
        },

        'jshint': {
            'myFiles': ['source/*.js']
        },

    	'watch': {
    	    'compass': {
        		'files': ['pipeline/src/**/*.{scss,sass}'],
        		'tasks': ['compass:dev']
    	    },
     	    'js': {
        		'files': ['pipeline/src/**/*.js'],
        		'tasks': ['uglify']
    	    }
    	},
    	'compass': {
    	    'dev': {
         		'options': {
        		    'sassDir': ['pipeline/src'],
        		    'cssDir': ['pipeline/src/stylesheets'],
         	        'imagesDir': ['pipeline/src/images'],
        		    'environment': 'development'
        		}
    	    },
    	    'prod': {
         		'options': {
                 	'sassDir': ['pipeline/src'],
                   	'cssDir': ['pipeline/src/stylesheets'],
             		'imagesDir': ['pipeline/src/images'],
        		    'environment': 'production'
        		}
    	    }
    	},
    	'uglify': {
    	    'all': {
            	'files': {
                    'pipeline/public/dst/javascripts/angular.min.js': [
                        'pipeline/src/bower_components/angular/angular.min.js',
                        'pipeline/src/bower_components/angular-loader/angular-loader.min.js',
                        'pipeline/src/bower_components/angular-route/angular-route.min.js',
                        'pipeline/src/bower_components/angular-sanitize/angular-sanitize.min.js',
                    ],
                    'pipeline/public/dst/javascripts/foundation.min.js': [
                        'pipeline/src/bower_components/jquery/dist/jquery.min.js',
                        'pipeline/src/bower_components/foundation/js/foundation.min.js',
                        'pipeline/src/bower_components/foundation/js/foundation.topbar.min.js',
                    ]
    	    	}
    	    },
    	},
        'cssmin': {
            'target': {
                'files': {
                    'pipeline/public/dst/stylesheets/foundation.min.css': [
                        'pipeline/src/stylesheets/bower_components/foundation/scss/foundation.css'
                    ],
                    'pipeline/public/dst/stylesheets/app.min.css': [
                        'pipeline/src/stylesheets/site_components/sosh/scss/app.css',                        
                        'pipeline/src/stylesheets/web_fonts/fonts.css'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['jshint:myFiles','compass:dev','uglify:all']);
    grunt.registerTask('unit', ['karma:development']);
    grunt.registerTask('e2e', ['protractor:singlerun']);
    grunt.registerTask('test', ['karma:development','protractor:singlerun']);
    grunt.registerTask('lint', ['jshint:myFiles']);

    grunt.registerTask('default', ['compass:prod','uglify:all','cssmin']);

};

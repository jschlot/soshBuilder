module.exports = function (grunt) {

    grunt.initConfig({

        'pkg': grunt.file.readJSON('package.json'),

        'meta': {
            'jsFilesForTesting': [
                'test/**/*Spec.js'
            ]
        },

    	'express': {
    	    'options': {
    	      // Override defaults here
    	    },
    	    'dev': {
    	      'options': {
    	        'script': 'pipeline/app.js'
    	      }
    	    }
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
        		'tasks': ['compass:dev','cssmin']
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
                        'pipeline/src/bower_components/angular-sanitize/angular-sanitize.min.js'
                    ],
                    'pipeline/public/dst/javascripts/foundation.min.js': [
                        'pipeline/src/bower_components/jquery/dist/jquery.min.js',
                        'pipeline/src/bower_components/foundation/js/foundation.min.js',
                        'pipeline/src/bower_components/foundation/js/foundation.topbar.min.js'
                    ],
                    'pipeline/public/dst/javascripts/devtools.min.js': [
                        'pipeline/src/site_components/sosh/scripts/directives/navigation/controller.js'
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
        },
    	'browserSync': {
    	    'dev': {
    	        'bsFiles': {
    	           'src': [
        			'pipeline/public/dst/stylesheets/*.css',
        			'pipeline/public/dst/javascripts/*.js',
        			'pipeline/public/*.html',
    		      ]
    	        },
    	        'options': {
    		        'watchTask': true,
    	            'proxy': "localhost:3000"
    	        }
    	    }
	   },
       'htmlmin': {
            'dist': {
              'options': {
                'removeComments': true,
                'collapseWhitespace': true
              },
              'files': [
                { 
                    'src': './pipeline/src/site_components/sosh/scripts/directives/navigation/template.html',
                    'dest': './pipeline/public/dst/javascripts/templates/navigation/template.html'
                }
              ]
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
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('unit', ['karma:development']);
    grunt.registerTask('e2e', ['protractor:singlerun']);
    grunt.registerTask('test', ['karma:development','protractor:singlerun']);
    grunt.registerTask('lint', ['jshint:myFiles']);

    grunt.registerTask('default', ['compass:prod','uglify:all','cssmin', 'htmlmin:dist', 'browserSync', 'watch']);

};

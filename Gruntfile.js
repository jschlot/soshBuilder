module.exports = function (grunt) {

    grunt.initConfig({

        'pkg': grunt.file.readJSON('package.json'),
        'asciify': {
            'myBanner': {
                'text': 'soshBuilder'
            },
            'options': {
                'font': 'graffiti',
                'log': true
            }
        },
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
        'browserSync': {
            'dev': {
                'bsFiles': {
                   'src': [
                        'pipeline/public/dst/stylesheets/*.css',
                        'pipeline/public/dst/javascripts/*.js',
                        'pipeline/public/dst/javascripts/templates/*/*.html',
                        'pipeline/public/*.html'
                   ]
                },
                'options': {
                    'watchTask': true,
                    'proxy': "localhost:3000"
                }
            }
        },
    	'watch': {
    	    'compass': {
        		'files': ['pipeline/src/**/*.{scss,sass}'],
        		'tasks': ['compass:dev','cssmin']
    	    },
            'js': {
                'files': ['pipeline/src/**/*.js'],
                'tasks': ['uglify']
            },
            'html': {
                'files': ['pipeline/src/**/*.html'],
                'tasks': ['htmlmin:dist']
            },
            'webroot': {
                'files': ['pipeline/src/webroot/*.*'],
                'tasks': ['copy']
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
                    'pipeline/public/dst/javascripts/navigation.min.js': [
                        'pipeline/src/site_components/sosh/scripts/directives/navigation/controller.js'
                    ],
                    'pipeline/public/dst/javascripts/cards.min.js': [
                        'pipeline/src/site_components/sosh/scripts/directives/cards/controller.js'
                    ]
    	    	}
    	    }
    	},
        'cssmin': {
            'target': {
                'files': {
                    'pipeline/public/dst/stylesheets/app.min.css': [
                        'pipeline/src/stylesheets/site_components/sosh/scss/app.css',                        
                        'pipeline/src/stylesheets/web_fonts/fonts.css'
                    ]
                }
            }
        },
       'htmlmin': {
            'dist': {
              'options': {
                'removeComments': true,
                'collapseWhitespace': true
              },
              'expand': true,
              'cwd': 'pipeline/src/site_components/sosh/scripts/',
              'src': ['**/**/*.html'],
              'dest': 'pipeline/public/dst/javascripts/templates/'
            }
        },
        'copy': {
            'images': {
                'files': [
                    {
                        'expand': true,
                        'flatten': true,
                        'src': ['pipeline/src/images/**'],
                        'dest': 'pipeline/public/dst/images/',
                        'filter': 'isFile'
                    }
                ]
            },
            'webroot': {
                'files': [
                    {
                        'expand': true,
                        'flatten': true,
                        'src': ['pipeline/src/webroot/**'],
                        'dest': 'pipeline/public/',
                        'filter': 'isFile'
                    }
                ]
            }
        },
        'concurrent': {
            'options': {
                'logConcurrentOutput': true
            },
            'target1': ['deploy','serve']
        },
        'nodemon': {
            'dev': {
                'script': 'pipeline/bin/www'
            }

        }
    });

    grunt.loadNpmTasks('grunt-asciify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-nodemon');


    grunt.registerTask('unit', ['karma:development']);
    grunt.registerTask('e2e', ['protractor:singlerun']);
    grunt.registerTask('lint', ['jshint:myFiles']);

    grunt.registerTask('boilerplate', 'outputs help info', function(){
        console.log('\nWelcome to the soshBuilder\n'['yellow'].bold);
        console.log('* To run the localhost server, open a new tab, and use `grunt serve`'['yellow']);
        console.log('* To run the test workflow, open a new tab, and use `grunt test`'['yellow']);
        console.log('* To run the developer workflow, open a new tab, and use `grunt develop`'['yellow']);
        console.log('* To run the deploy workflow, open a new tab, and use `grunt`'['yellow']);
    });
    grunt.registerTask('help', ['asciify', 'boilerplate']);


    // hybrid tasks
    grunt.registerTask('test', ['asciify', 'karma:development','protractor:singlerun']);
    grunt.registerTask('deploy', ['asciify', 'compass:prod','uglify:all','cssmin', 'htmlmin:dist', 'copy']);
    grunt.registerTask('serve', ['nodemon']);
    grunt.registerTask('develop', ['deploy','browserSync','watch']);
    grunt.registerTask('default', ['deploy']);

};

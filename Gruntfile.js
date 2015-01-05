module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');

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
          ],
        }
      }
    },

    'jshint': {
      'myFiles': ['source/*.js']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('unit', ['karma:development']);
  grunt.registerTask('lint', ['jshint:myFiles']);

};

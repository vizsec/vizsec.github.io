/*global module:false*/
module.exports = function (grunt) {

  // lint - uses [jshint](https://github.com/jshint/jshint/)
  // jade - uses [jade](https://github.com/visionmedia/jade)
  // min - uses [uglify-js](https://github.com/mishoo/UglifyJS)
  // mincss - uses [csslint](https://github.com/stubbornella/csslint/wiki/Rules)

  // load jade and other contributed tasks
  grunt.loadNpmTasks('grunt-contrib');

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    lint: {
      files: ['source/assets/*.js']
    },
    jade: {
      'deploy': [ 'source/web/*jade' ],
      'deploy/vizsec2010': [ 'source/web/vizsec2010/*jade' ],
      'deploy/vizsec2011': [ 'source/web/vizsec2011/*jade' ]
    },
    min: {
      app: {
        src: ['source/assets/js/bootstrap.js'],
        dest: 'deploy/js/bootstrap.min.js'
      }
    },
    mincss : {
      'deploy/css/style.min.css': [
        'source/assets/css/bootstrap.css',
        'source/assets/css/bootstrap-responsive.css',
        'source/assets/css/app.css'
      ]
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {
      
    },
    options: {
      jade: {
        path: 'source/web/includes'
      }
    }
    
  });

  // Default task.
  grunt.registerTask('default', 'lint jade min mincss');


};
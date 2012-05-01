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
    copy: {
      staticFiles: {
        src: [ 'source/static/*'],
        dest: 'deploy/'
      },
      img: {
        src: [ 'source/assets/img/*'],
        dest: 'deploy/img'
      },
      jquery: {
        src : [ 'source/assets/js/jquery-1.7.2.min.js' ],
        dest: 'deploy/js/'
      },
      files: {
        src : [ 'source/files/vizsec2010/*', 'source/files/vizsec2011/*' ],
        dest: 'deploy/files/'
      }
    },
    jade: {
      'deploy': [ 'source/templates/*jade' ],
      'deploy/vizsec2010': [ 'source/templates/vizsec2010/*jade' ],
      'deploy/vizsec2011': [ 'source/templates/vizsec2011/*jade' ]
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
        filename: 'source/includes/'
      }
    }
    
  });

  // Default task.
  grunt.registerTask('default', 'copy lint jade min mincss');

  grunt.registerMultiTask('copy', 'Copy files to deployment directory', function() {
    var path = require("path"),
        files = grunt.file.expand(this.file.src),
        dest = this.file.dest;

    grunt.log.writeln('Copying files for ' + this.target + '.');
        
    files.forEach(function (file) {      
      grunt.file.copy(file, path.join(dest, path.basename(file)), {noProcess: true});
      grunt.log.writeln('File "' + file + '" copied to "' + dest + '".');
    });
  });

};
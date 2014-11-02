module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'public/assets/stylesheets/style.css': 'src/assets/stylesheets/style.sass'       // 'destination': 'source'
        }
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [
          { 
            cwd: 'src',
            src: ['**/*.jade'],
            dest: 'public',
            expand: true,
            ext: '.html'
          },
        ]
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      angularApp: {
        src: ['src/app/*.js'],
        dest: 'public/assets/javascripts/app.js',
      },
      javascripts: {
        src: ['src/assets/javascripts/**/*.js'],
        dest: 'public/assets/javascripts/main.js'
      },
    },

    watch: {
      stylesheets: {
        files: ['public/assets/stylesheets/sass/**/*.sass', 'public/assets/stylesheets/sass/**/*.scss'],
        tasks: ['sass'],
      },
      layouts: {
        files: ['public/layouts/*.jade'],
        tasks: ['jade'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'jade', 'watch']);
  grunt.registerTask('c', ['concat']);
  grunt.registerTask('s', ['sass']);
  grunt.registerTask('j', ['jade']);

};
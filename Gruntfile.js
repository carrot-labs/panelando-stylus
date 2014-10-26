module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'public/assets/stylesheets/style.css': 'public/assets/stylesheets/sass/style.sass'       // 'destination': 'source'
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
            cwd: 'public/layouts/',
            src: '**/*.jade',
            dest: 'public/views',
            expand: true,
            ext: '.html'
          },
          {"public/index.html": "public/layouts/index.jade"}
        ]
      }
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
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'jade', 'watch']);
  grunt.registerTask('j', ['jade']);

};
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

    watch: {
      stylesheets: {
        files: ['public/assets/stylesheets/sass/**/*.sass', 'public/assets/stylesheets/sass/**/*.scss'],
        tasks: ['sass'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['sass', 'watch']);

};
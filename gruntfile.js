// 
// Develop by GD Team SFO CA. 
// 

module.exports = function(grunt) {
  grunt.initConfig({

      watch:{ // Use watch to check any change in any file down list

          jade: { // check all changes made on Jade Files
            files: ['./jade/*.jade'],
            tasks: ['jade']
          },

          jshint: { // check all changes made on JScript Files
            files: ['./js/*.js'],
            tasks: ['jshint']
          }

      },

      jade:{ // Use this Contrib "Jade" to work HTML Pages
        all:{
          options : {
            pretty : true,
          },

          files: [
            {
              expand : true,
              cwd : './jade/',
              src : '*.jade',
              dest : './html/',
              ext : '.html'
            }
          ]
        } 
      },

      jshint: { // Use this Contrib "JHint" to check all syntax .js files
          all: {
              src: './js/*.js',
          }
      },

      // fontAwesomeVars: {
      //   main: {
      //     variablesLessPath: '/lib/font-awesome-4.4.0/less/variables.less',
      //     // variablesScssPath: 'test/_variables.scss',
      //     // fontPath: '../bower_components/font-awesome/fonts'    //NOTE: this must be relative to FINAL, compiled .css file - NOT the variables.less file! For example, this would be the correct path if the compiled css file is main.css which is in 'src/build' and the font awesome font is in 'src/bower_components/font-awesome/fonts' - since to get from main.css to the fonts directory, you first go back a directory then go into bower_components > font-awesome > fonts.
      //     fontPath: '/lib/font-awesome-4.4.0/css/font-awesome.min.css'    //NOTE: this must be relative to FINAL, compiled .css file - NOT the variables.less file! For example, this would be the correct path if the compiled css file is main.css which is in 'src/build' and the font awesome font is in 'src/bower_components/font-awesome/fonts' - since to get from main.css to the fonts directory, you first go back a directory then go into bower_components > font-awesome > fonts.
      //   }
      // }
  });


  // Load all Task
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-font-awesome-vars');


  // Registry Main Default Tasks
  // grunt.registerTask('default',['jade','watch','fontAwesomeVars']);
  grunt.registerTask('default',['jade','watch']);

  return;

};
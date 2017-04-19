module.exports = function(grunt){

  //Configure main project settings
  grunt.initConfig({

    // Basic settings and info about our plugins
    pkg: grunt.file.readJSON('package.json'),

    // Name of polugin (plugin name without the "grunt-contrib-")
    cssmin: {
      combine: {
        files: {
          'p5.js/'
        }
      }
    }


  });

};

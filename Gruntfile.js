module.exports = function(grunt) {
    grunt.initConfig({
      'jsmin-sourcemap': {
          all: {
            // Source files to concatenate and minify (also accepts a string and minimatch items) 
            src: ['js/slider.js'],
       
            // Destination for concatenated/minified JavaScript 
            dest: 'js/slider.min.js',
       
            // Destination for sourcemap of minified JavaScript 
            destMap: 'js/slider.js.map'
       
            // Optional root for all relative URLs 
            srcRoot: 'Home/Downloads/UI-work/'
       
          }
        }
      });
    grunt.loadNpmTasks('grunt-jsmin-sourcemap');
    grunt.registerTask('new', ['jsmin-sourcemap']); // optimization images
};



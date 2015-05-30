module.exports = function(grunt) {

  // project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
	  dynamic_mappings: {
		  // Grunt will search for "**/*.js" under "project/" when the "uglify" task
		  // runs and build the appropriate src-dest file mappings then, so you
		  // don't need to update the Gruntfile when files are added or removed.
		  files: [
			{
			  expand: true,     // Enable dynamic expansion.
			  cwd: 'project/',  // Src matches are relative to this path.
			  src: ['**/*.js'], // Actual pattern(s) to match.
			  dest: 'build/',   // Destination path prefix.
			  ext: '.min.js',   // Dest filepaths will have this extension.
			  extDot: 'first'   // Extensions in filenames begin after the first dot
			},
		  ]
		}
	},
	sass: {                                             // Task
		dist: {                                         // Target
			options: {                                  // Target options
				style: 'expanded'
			},
			files: {                                    // Dictionary of files
				'build/style.css': 'project/style.scss' // 'destination': 'source'
			}
		}
	},
	watch: {
		uglify: {
		  files: ['project/*.js'],
		  tasks: ['uglify'],
		},
		sass: {
			files: ['project/*.scss'],
			tasks: ['sass'],
		}
	}
  });

  // load installed plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // default tasks
  grunt.registerTask('default', ['watch']);

};
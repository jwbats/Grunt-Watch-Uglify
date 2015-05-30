Example Grunt Watch/Uglify

0. npm install -g grunt-cli (set up grunt command in path)
1. Check contents of package.json, make sure grunt and all required plugins are included).
2. npm install (installs all package dependencies)
3. Declare Grunt watcher and uglifier in gruntfile.
4. Run grunt (grunt OR grunt watch OR grunt watch:uglify).
5. Edit project/hello.js and it will automatically uglify it.
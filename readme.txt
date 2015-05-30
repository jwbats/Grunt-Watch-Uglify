Example Grunt project for tasks: Watch/Uglify/Sass.

0. Install NodeJS.
1. Install Ruby (Windows installer, and add bin file to sysenv).
2. gem install sass (installs Sass for Ruby)
3. npm install -g grunt-cli (set up grunt command in path)
4. Check contents of package.json, make sure grunt and all required plugins are included).
5. npm install (installs all package dependencies)
6. Declare Grunt watcher, uglifier and sass in gruntfile.
7. Run grunt (grunt, grunt watch, grunt watch:uglify, grunt watch:sass, grunt:uglify, grunt:sass).
8. Edit project/hello.js and it will automatically uglify it.
9. Edit project/style.scss and it will automatically compile it.
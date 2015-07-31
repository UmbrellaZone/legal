getTask = (task) ->
  require('./tasks/' + task + '.coffee') umbrella, gulp, plugins

getPlugin = (plugin) ->
  return require('./plugins/' + plugin + '.coffee')
  
# import gulp
gulp = require('gulp')

# import the gulp plugins
gulpLoadPlugins = require('gulp-load-plugins')
plugins = gulpLoadPlugins(rename: 'gulp-add-src': 'addsrc')

#import the umbrella config
umbrella = require('./umbrella.gulp.config.js')

gulp.task 'markdown', getTask('markdown')

gulp.task 'default', (cb) ->
  plugins.sequence('markdown') cb
  return
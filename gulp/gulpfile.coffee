getTask = (task) ->
  require('./tasks/' + task + '.coffee') mojo, gulp, plugins

getPlugin = (plugin) ->
  return require('./plugins/' + plugin + '.coffee')
  
# import gulp
gulp = require('gulp')

# import the gulp plugins
gulpLoadPlugins = require('gulp-load-plugins')
plugins = gulpLoadPlugins(rename: 'gulp-add-src': 'addsrc')
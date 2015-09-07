// import gulp
var gulp = require("gulp"),
	gulpTypescript = require("gulp-typescript");

gulp.task('tsGulpFile', function() {            //compile Main gulpfile.ts
	var stream = gulp.src('../gulpfile.ts')
	  .pipe(gulpTypescript({
	  	out: "gulpfile.js"
	  }))
	  .pipe(gulp.dest("../../js/"));
	return stream;
});

gulp.task('tsGulpPlugins', function() {         //compile ts plugins
	var stream = gulp.src('../plugins/*.ts')
	  .pipe(gulpTypescript({
	  }))
	  .pipe(gulp.dest("../../js/plugins/"));
	return stream;
});

gulp.task('tsGulpTasks', function() {           //compile ts Tasks
	var stream = gulp.src('../tasks/*.ts')
	  .pipe(gulpTypescript({
	  }))
	  .pipe(gulp.dest("../../js/tasks/"));
	return stream;
});

gulp.task('tsToJsOnly',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
	console.log('Typescript for Gulp compiled');
});

gulp.task('default',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
	console.log('Typescript for Gulp compiled');
	console.log('Now running main gulpfile');
	var jsGulpFile = require('../../js/gulpfile.js'); //run the created JS File.
});
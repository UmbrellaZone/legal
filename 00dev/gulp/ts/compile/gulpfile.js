// import gulp
<<<<<<< HEAD
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
=======
var gulp = require("gulp");
var gulpTypescript = require("gulp-typescript");
var pr = require("pushrocks");

gulp.task('tsGulpFile', function() {
	var stream = gulp.src('../gulpfile.ts')
			.pipe(gulpTypescript({
				out: "gulpfile.js"
			}))
			.pipe(gulp.dest("../../js/"));
	return stream;
});

gulp.task('tsGulpTasks', function() {
	var stream = gulp.src('../gulp.plugins/*.ts')
			.pipe(gulpTypescript({
			}))
			.pipe(gulp.dest("../../js/gulp.plugins/"));
	return stream;
});

gulp.task('tsGulpPlugins', function() {
	var stream = gulp.src('../gulp.tasks/*.ts')
			.pipe(gulpTypescript({
			}))
			.pipe(gulp.dest("../../js/gulp.tasks/"));
>>>>>>> 1d2b69c6359bb6ee855074c15b4a45475fdc5566
	return stream;
});

gulp.task('tsToJsOnly',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
<<<<<<< HEAD
	console.log('Typescript for Gulp compiled');
});

gulp.task('default',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
	console.log('Typescript for Gulp compiled');
	console.log('Now running main gulpfile');
	var jsGulpFile = require('../../js/gulpfile.js'); //run the created JS File.
=======
	pr.beautylog.success('Typescript for Gulp compiled');
});

gulp.task('default',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
	pr.beautylog.success('Typescript for Gulp compiled');
	pr.beautylog.log('Now running main gulpfile');
	var jsGulpFile = require('../../js/gulpfile.js');
>>>>>>> 1d2b69c6359bb6ee855074c15b4a45475fdc5566
});
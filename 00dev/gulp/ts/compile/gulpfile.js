// import gulp
var gulp = require("gulp"),
		gulpTypescript = require("gulp-typescript");

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
	return stream;
});

gulp.task('tsToJsOnly',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
	console.log('Typescript for Gulp compiled');
});

gulp.task('default',['tsGulpFile','tsGulpPlugins','tsGulpTasks'], function() {
	console.log('Typescript for Gulp compiled');
	console.log('Now running main gulpfile');
	var jsGulpFile = require('../../js/gulpfile.js');
});
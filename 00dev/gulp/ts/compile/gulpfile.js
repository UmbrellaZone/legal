// import gulp
var gulp = require("gulp"),
	gulpTypescript = require("gulp-typescript");

gulp.task('compileTS', function() {
	var stream = gulp.src('../gulpfile.ts')
	    .pipe(gulpTypescript({
	  	    out: "gulpfile.js"
	    }))
	    .pipe(gulp.dest("../../js/"));
	return stream;
});

gulp.task('default',['compileTS'], function() {
	console.log('Typescript compiled');
	require('../../js/gulpfile.js');
});
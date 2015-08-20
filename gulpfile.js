var less	= require('gulp-less');
var gulp	= require('gulp');
var path	= require('path');

gulp.task('less', function () {
	return gulp.src('./theme/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('./theme/css'));
});
var gulp = require('gulp'),
		sync = require('browser-sync');

gulp.task('js:watch', function() {
	return gulp.watch('./src/*.js', function() {
		console.log('Javascript file updated!');
	});
});

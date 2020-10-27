module.exports = function(){
	$.gulp.task('img:dev', function(){
		return $.gulp.src('src/static/img/**/*.{png,jpg,gif,ico,webp,svg}')
		.pipe($.gulp.dest('build/static/img/'))
	});

	$.gulp.task('img:build', function(){
		return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
		.pipe($.gp.tinypng('TN_2JLz29UD3OyeC-iT5_b99kqZI3gj0'))
		.pipe($.gulp.dest('build/static/img/'))
	});
}
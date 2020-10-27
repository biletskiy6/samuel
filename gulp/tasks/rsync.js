module.exports = function(){
	$.gulp.task('rsync', function(){
		$.gulp.task('rsync', function() {
			return $.gulp.src('build/**')
			.pipe($.gp.rsync({
				root: 'build/',
				hostname: 'victorbiletskiy.ru',
				destination: 'www/victorbiletskiy.ru/',
				// include: ['*.htaccess'], // Includes files to deploy
				exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
				recursive: true,
				archive: true,
				silent: false,
				compress: true
			}))
		});
	});
}
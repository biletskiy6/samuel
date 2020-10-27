'use strict';

module.exports = function() {
		$.gulp.task('svg', function() {
		return $.gulp.src('./src/static/img/svg/*.svg')
		.pipe($.gp.svgSprite({
                mode: {
                    stack: {
                        sprite: "../sprite.svg"  //sprite file name
                    }
                },
            }
        ))
		.pipe($.gulp.dest('./build/static/img/svg/'))
	});
	
	
}
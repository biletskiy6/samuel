$(function(){
	svg4everybody();

	var rellax = new Rellax('.rellax', {
		speed: -2,
		center: false,
		wrapper: null,
		round: true,
		vertical: true,
		horizontal: false
	});
});
let lastScrollTop = 0;
$(window).scroll(function () {
	let st = $(this).scrollTop();
	let $topLine = $('.top-line');
	st > 0 ? $topLine.addClass('hidden') : $topLine.removeClass('hidden');
	st > 150 ? $topLine.removeClass('hidden') : null;

});

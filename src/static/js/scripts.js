function animatePreloader() {
  var tl = gsap.timeline();
  tl.fromTo(
    '#overlay-1 h1',
    { y: 0, autoAlpha: 1 },
    { y: -40, autoAlpha: 0, delay: 0.5 },
  )
    .fromTo(
      '#overlay-1',
      { left: 0, ease: Power2.easeInOut },
      { left: '110%', ease: Expo.easeInOut, duration: 2 },
    )
    .fromTo(
      '#overlay-2',
      { left: 0, ease: Power2.easeInOut },
      { left: '110%', ease: Expo.easeInOut, duration: 2, delay: -1.9 },
    );
}

function animateMenuIn(tl, done) {
  $('.mobile-menu').addClass('opened');
  tl.to('.menuRow', {
    top: 0,
    left: 0,
    ease: Expo.easeInOut,
    duration: 1,
  }).to('.menuItem', {
    y: 0,
    opacity: 1,
    scale: 1,
    ease: 'back.easeOut.config(1.2)',
    stagger: {
      each: 0.09,
    },
    onComplete: done,
  });
}

function animateMenuOut(tl, done) {
  $('.mobile-menu').removeClass('opened');
  tl.to('.menuRow', {
    top: '9999px',
    ease: Expo.easeInOut,
    duration: 2,
  }).to('.menuItem', {
    y: 20,
    opacity: 0,
    scale: 0,
    ease: 'back.easeOut.config(1.2)',
    delay: -2,
    stagger: {
      each: 0.1,
    },
    onComplete: done,
  });
}

function animateCursors() {
  var $cursor = $('.cursor');
  var $cursor2 = $('.cursor2');

  $(document).on('mousemove', function (e) {
    $cursor.css({
      left: e.clientX,
      top: e.clientY,
    });
    $cursor2.css({
      left: e.clientX,
      top: e.clientY,
    });
  });
}

$(function () {
  svg4everybody();

  // animatePreloader();
  var rellax = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false,
  });

  let isAnimationCompleted = false;
  let isTriggered = false;
  $('.mobile-menu').on('click', function () {
    var tl = gsap.timeline();
    if (!isAnimationCompleted) {
      $(this).attr('disabled', true);
      animateMenuIn(tl, function () {
        isAnimationCompleted = true;
        $('.mobile-menu').attr('disabled', false);
      });
    } else {
      $(this).attr('disabled', true);
      animateMenuOut(tl, function () {
        isAnimationCompleted = false;
        $('.mobile-menu').attr('disabled', false);
      });
    }
  });
});
// let lastScrollTop = 0;
// $(window).scroll(function () {
// 	let st = $(this).scrollTop();
// 	let $topLine = $('.top-line');
// 	st > 0 ? $topLine.addClass('hidden') : $topLine.removeClass('hidden');
// 	st > 150 ? $topLine.removeClass('hidden') : null;

// });
